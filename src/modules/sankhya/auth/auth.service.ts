import jwt from 'jsonwebtoken';
import { getMysqlPool } from '../../../config/mysql';
import { getSqlServer } from '../../../config/sqlserver';
import { createNotification } from '../../../services/notification.service';
import logger from '../../../utils/logger';
import { hashString } from '../../../utils/sankhya/pass';
import { trimObjectStrings } from '../../../utils/string.utils';
import { getAllUserPermissions } from '../tddper/tddper.service';
import { getEmployeeDetails } from '../tfpfun/tfpfun.service';
import { getPartnerDetails } from '../tgfpar/tgfpar.service';
import { getCompanyDetails } from '../tsiemp/tsiemp.service';
import { getUserGroups } from '../tsigpu/tsigpu.service';
import { SankhyaUserGroup } from '../tsigpu/tsigpu.types';
import { getGroupDetails } from '../tsigru/tsigru.service';
import { SankhyaGroupDetails } from '../tsigru/tsigru.types';
import { getUserDetails } from '../tsiusu/tsiusu.service';
import { SankhyaUserDetails } from '../tsiusu/tsiusu.types';
import { AuthCompanyResponse, AuthEmployeeResponse, AuthResponse, AuthSessionResponse, AuthTokenResponse, AuthUserDetailsResponse } from './auth.response.types';

export interface SankhyaUser {
  CODUSU: number;
  NOMEUSU: string;
  EMAIL: string;
  INTERNO: string;
  CPF?: string;
}

function logAttempt(username: string) {
  logger.info(`${username} TENTANDO ACESSAR ${new Date().toISOString()}`);
}

function logSuccess(username: string) {
  logger.info(`${username} SUCESSO ACESSAR ${new Date().toISOString()}`);
}

function logError(username: string) {
  logger.info(`${username} ERRO AO ACESSAR ${new Date().toISOString()}`);
}

export async function verifyToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!process.env.JWT_SECRET) {
      return reject(new Error('JWT_SECRET is not defined'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded);
    });
  });
}

export async function login(username: string, password: string): Promise<AuthResponse> {
  logAttempt(username);

  try {
    const mysqlPool = await getMysqlPool();
    const sql = await getSqlServer();
    if (!sql) throw new Error('Erro ao conectar ao servidor SQL.');

    const normalizedUsername = username.toLowerCase();
    const userFoundByUsername = await findUserByUsername(username);
    if (!userFoundByUsername) throw new Error('Usuário não encontrado');

    const passwordHash = hashString((username + password).trim());
    const result = await sql.query`
      SELECT CODUSU, NOMEUSU, EMAIL
      FROM TSIUSU
      WHERE NOMEUSU = ${normalizedUsername} AND INTERNO = ${passwordHash}
    `;
    if (result.recordset.length === 0) throw new Error('Senha inválida');

    const basicUser: SankhyaUser = result.recordset[0];

    const token = jwt.sign({ id: basicUser.CODUSU, username: basicUser.NOMEUSU }, process.env.JWT_SECRET!, { expiresIn: '8h' });
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 8);

    const [sessionResult]: any = await mysqlPool.query(
      'INSERT INTO user_sessions (user_id, token, expires_at) VALUES (?, ?, ?)',
      [basicUser.CODUSU, token, expiresAt]
    );

    try {
      await createNotification({
        user_id: basicUser.CODUSU,
        type: 'LOGIN',
        category: 'SECURITY',
        title: 'Novo login detectado',
        message: `O usuário ${basicUser.NOMEUSU} acabou de fazer login.`,
      });
    } catch {}

    logSuccess(username);

    // --- Fetch user details, groups, permissions, company, employee ---
    let userDetails: SankhyaUserDetails | undefined;
    let userGroups: SankhyaUserGroup[] = [];
    let userPermissions: string[] = [];
    let detailedGroups: SankhyaGroupDetails[] = [];

    try {
      userDetails = trimObjectStrings(await getUserDetails(basicUser.CODUSU));
      if (!userDetails) throw new Error('Detalhes do usuário Sankhya não encontrados.');

      userGroups = await getUserGroups(basicUser.CODUSU);

      for (const group of userGroups) {
        const groupDetails = await getGroupDetails(group.CODGRUPO);
        if (groupDetails) detailedGroups.push(groupDetails);
      }

      if (userDetails.CODPARC) {
        const partnerDetails = trimObjectStrings(await getPartnerDetails(userDetails.CODPARC));
        if (partnerDetails) userDetails.partnerDetails = partnerDetails;
      }

      if (userDetails.CODFUNC && userDetails.CODEMP) {
        const employeeDetails = trimObjectStrings(await getEmployeeDetails(userDetails.CODEMP, userDetails.CODFUNC));
        if (employeeDetails) userDetails.employeeDetails = employeeDetails;
      }

      if (userDetails.CODEMP) {
        const companyDetails = trimObjectStrings(await getCompanyDetails(userDetails.CODEMP));
        if (companyDetails) userDetails.companyDetails = companyDetails;
      }

      const groupCods = userGroups.map(group => group.CODGRUPO);
      userPermissions = await getAllUserPermissions(basicUser.CODUSU, groupCods);

    } catch (detailsError: any) {
      logError(username);
      throw detailsError;
    }

    // --- Build AuthResponse ---
    const authTokenResponse: AuthTokenResponse = {
      accessToken: token,
      expiresIn: 8 * 3600,
      refreshToken: 'placeholder_refresh_token',
    };

    const authSessionResponse: AuthSessionResponse = {
      sessionId: sessionResult.insertId.toString(),
      createdAt: new Date().toISOString(),
      lastAccess: new Date().toISOString(),
      ipAddress: 'unknown',
      userAgent: 'unknown',
    };

    const authUserDetailsResponse: AuthUserDetailsResponse = {
      id: userDetails.CODUSU,
      username: userDetails.NOMEUSU || basicUser.NOMEUSU,
      email: userDetails.ACCOUNTEMAIL || basicUser.EMAIL,
      fullName: userDetails.employeeDetails?.NOMEFUNC || userDetails.NOMEUSU || basicUser.NOMEUSU,
      cpf: userDetails.CPF,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    let authEmployeeResponse: AuthEmployeeResponse | undefined;
    if (userDetails.employeeDetails) {
      const cargoMatch = userDetails.AD_CARGO?.match(/^(\d+) - (.*)$/);
      const cargoCodigo = cargoMatch ? parseInt(cargoMatch[1], 10) : 0;
      const cargoDescricao = cargoMatch ? cargoMatch[2] : userDetails.AD_CARGO || '';

      authEmployeeResponse = {
        employeeId: userDetails.employeeDetails.CODFUNC,
        matricula: userDetails.employeeDetails.CODFUNC.toString(),
        cargoCodigo,
        cargoDescricao,
        setorCodigo: 0,
        setorDescricao: 'unknown',
        vinculo: 'unknown',
        dataAdmissao: new Date().toISOString(),
        dataNascimento: new Date().toISOString(),
        sexo: 'unknown',
        telefone: userDetails.employeeDetails.TELEFONE || '',
        endereco: {
          CEP: userDetails.employeeDetails.address?.CEP || '',
          NUMERO: userDetails.employeeDetails.address?.NUMERO || '',
          COMPLEMENTO: userDetails.employeeDetails.address?.COMPLEMENTO || null,
          BAIRRO: userDetails.employeeDetails.address?.BAIRRO || '',
          CODCID: userDetails.employeeDetails.address?.CODCID || 0,
          NOMECID: userDetails.employeeDetails.address?.NOMECID || '',
          UF: userDetails.employeeDetails.address?.UF || '',
        },
        empresaId: userDetails.CODEMP || 0,
        escala: { tipo: 'unknown', horarioEntrada: 'unknown', horarioSaida: 'unknown', intervalo: 'unknown' },
      };
    }

    let authCompanyResponse: AuthCompanyResponse | undefined;
    if (userDetails.companyDetails) {
      authCompanyResponse = {
        id: userDetails.companyDetails.CODEMP,
        name: userDetails.companyDetails.NOMEFANTASIA || '',
        cnpj: userDetails.companyDetails.CGC || '',
        address: {
          CEP: userDetails.companyDetails.address?.CEP || '',
          NUMERO: userDetails.companyDetails.address?.NUMERO || '',
          BAIRRO: userDetails.companyDetails.address?.BAIRRO || '',
          NOMECID: userDetails.companyDetails.address?.NOMECID || '',
          UF: userDetails.companyDetails.address?.UF || '',
        },
      };
    }

    return {
      token: authTokenResponse,
      session: authSessionResponse,
      userDetails: authUserDetailsResponse,
      employee: authEmployeeResponse,
      company: authCompanyResponse,
      permissionsDetails: userPermissions,
      groupsDetails: detailedGroups,
    };

  } catch (err) {
    logError(username);
    throw err;
  }
}

export async function findUserByUsername(username: string): Promise<SankhyaUser | null> {
  const sql = await getSqlServer();
  const normalizedUsername = username.toLowerCase();
  const result = await sql.query`
    SELECT CODUSU, NOMEUSU, EMAIL, INTERNO, CPF
    FROM TSIUSU
    WHERE NOMEUSU = ${normalizedUsername}
  `;
  if (result.recordset.length === 0) return null;
  return result.recordset[0] as SankhyaUser;
}
