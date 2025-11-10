import jwt from 'jsonwebtoken';
import { getMysqlPool } from '../../../config/mysql';
import { getSqlServer } from '../../../config/sqlserver';
import { createNotification } from '../../../services/notification.service';
import logger from '../../../utils/logger'; // Import the logger
import { hashString } from '../../../utils/sankhya/pass';
import { trimObjectStrings } from '../../../utils/string.utils';
import { getEmployeeDetails } from '../tfpfun/tfpfun.service'; // Import getEmployeeDetails
import { getPartnerDetails } from '../tgfpar/tgfpar.service'; // Import getPartnerDetails
import { getAllUserPermissions } from '../tddper/tddper.service'; // Import getAllUserPermissions
import { getUserGroups } from '../tsigpu/tsigpu.service'; // Import getUserGroups
import { SankhyaUserGroup } from '../tsigpu/tsigpu.types'; // Import SankhyaUserGroup from its types file
import { getUserDetails } from '../tsiusu/tsiusu.service'; // Import getUserDetails
import { SankhyaUserDetails } from '../tsiusu/tsiusu.types'; // Import SankhyaUserDetails from its types file

import { getCompanyDetails } from '../tsiemp/tsiemp.service'; // Import getCompanyDetails
import { getGroupDetails } from '../tsigru/tsigru.service'; // Import getGroupDetails
import { SankhyaGroupDetails } from '../tsigru/tsigru.types'; // Import SankhyaGroupDetails
import { CompactSankhyaUser } from './auth.types'; // Import CompactSankhyaUser
import { AuthResponse, AuthTokenResponse, AuthSessionResponse, AuthUserDetailsResponse, AuthEmployeeResponse, AuthCompanyResponse, AuthEmployeeAddressResponse, AuthEmployeeScaleResponse, AuthCompanyAddressResponse } from './auth.response.types';

// Tipagem para usuário Sankhya (basic, will be replaced by CompactSankhyaUser in return)
export interface SankhyaUser {
  CODUSU: number
  NOMEUSU: string
  EMAIL: string
  INTERNO: string
  CPF?: string
}

export async function login(username: string, password: string): Promise<AuthResponse> {
  const mysqlPool = await getMysqlPool() // garante que o pool esteja inicializado
  logger.info('Login attempt for username:', { username })

  const sql = await getSqlServer()
  if (!sql) {
    logger.error('Error connecting to SQL Server during login', new Error('SQL Server connection failed'), { username });
    throw new Error('Erro ao conectar ao servidor SQL.')
  }
  logger.debug('Successfully obtained SQL Server connection for login.', { username })

  const normalizedUsername = username.toLowerCase()
  logger.debug('Normalized username:', { normalizedUsername })

  // Buscar usuário
  const userFoundByUsername = await findUserByUsername(username)
  if (!userFoundByUsername) {
    logger.warn('Login failed: User not found', { username });
    throw new Error('Usuário não encontrado')
  }
  logger.debug('User found by username. Proceeding with password verification.', { username: userFoundByUsername.NOMEUSU })

  // Gerar hash da senha
  const passwordHash = hashString((username + password).trim())
  logger.debug('Password hash generated:', { passwordHash }) // Added logging for passwordHash

  // Verificar senha no SQL Server
  logger.debug('Executing SQL query to verify password.', { normalizedUsername, passwordHash }); // Added logging before SQL query
  const result = await sql.query`
    SELECT CODUSU, NOMEUSU, EMAIL
    FROM TSIUSU
    WHERE NOMEUSU = ${normalizedUsername} AND INTERNO = ${passwordHash}
  `
  logger.debug('SQL query result for password verification:', { recordsetLength: result.recordset.length, recordset: result.recordset }); // Added logging for SQL query result
  if (result.recordset.length === 0) {
    logger.warn('Login failed: Invalid password', { username });
    throw new Error('Senha inválida')
  }
  const basicUser: SankhyaUser = result.recordset[0]
  logger.info('User authenticated successfully.', { codUsu: basicUser.CODUSU, nomeUsu: basicUser.NOMEUSU })

  // Gerar JWT
  const expiresIn = '8h'
  const token = jwt.sign({ id: basicUser.CODUSU, username: basicUser.NOMEUSU }, process.env.JWT_SECRET!, { expiresIn })
  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + 8)

  // Inserir sessão no MySQL
  const [sessionResult]: any = await mysqlPool.query(
    'INSERT INTO user_sessions (user_id, token, expires_at) VALUES (?, ?, ?)',
    [basicUser.CODUSU, token, expiresAt]
  )
  logger.debug('Session inserted into MySQL.', { sessionId: sessionResult.insertId, codUsu: basicUser.CODUSU })

  // Criar notificação
  try {
    await createNotification({
      user_id: basicUser.CODUSU,
      type: 'LOGIN',
      category: 'SECURITY',
      title: 'Novo login detectado',
      message: `O usuário ${basicUser.NOMEUSU} acabou de fazer login.`,
    })
    logger.info('Notification created successfully for login.', { codUsu: basicUser.CODUSU })
  } catch (notificationError: any) {
    logger.error('Error creating notification for login', notificationError, { codUsu: basicUser.CODUSU })
  }

  // --- Fetch and log additional user details after successful login ---
  let userDetails: SankhyaUserDetails | undefined;
  let userGroups: SankhyaUserGroup[] = [];
  let userPermissions: string[] = [];
  let detailedGroups: SankhyaGroupDetails[] = [];

  try {
    userDetails = trimObjectStrings(await getUserDetails(basicUser.CODUSU));
    if (!userDetails) {
      logger.error('Sankhya User Details not found after login for CODUSU', undefined, { codUsu: basicUser.CODUSU }); // Changed null to undefined
      throw new Error('Detalhes do usuário Sankhya não encontrados.');
    }
    logger.info('Sankhya User Details after login:', { codUsu: basicUser.CODUSU, details: userDetails });

    userGroups = await getUserGroups(basicUser.CODUSU);
    logger.info('Sankhya User Groups after login:', { codUsu: basicUser.CODUSU, groups: userGroups });

    // Fetch detailed group information
    for (const group of userGroups) {
      const groupDetails = await getGroupDetails(group.CODGRUPO);
      if (groupDetails) {
        detailedGroups.push(groupDetails);
      } else {
        logger.warn('Sankhya Group Details not found for CODGRUPO', { codUsu: basicUser.CODUSU, codGrupo: group.CODGRUPO });
      }
    }
    logger.info('Sankhya Detailed Groups fetched:', { codUsu: basicUser.CODUSU, detailedGroupsCount: detailedGroups.length });


    // Fetch Partner Details if CODPARC exists
    if (userDetails.CODPARC) {
      const partnerDetails = trimObjectStrings(await getPartnerDetails(userDetails.CODPARC));
      if (partnerDetails) {
        userDetails.partnerDetails = partnerDetails;
        logger.info('Sankhya Partner Details fetched.', { codUsu: basicUser.CODUSU, codParc: userDetails.CODPARC, partnerDetails });
      } else {
        logger.warn('Sankhya Partner Details not found for CODPARC', { codUsu: basicUser.CODUSU, codParc: userDetails.CODPARC });
      }
    }

    // Fetch Employee Details if CODFUNC exists
    if (userDetails.CODFUNC && userDetails.CODEMP) { // Ensure CODEMP also exists
      const employeeDetails = trimObjectStrings(await getEmployeeDetails(userDetails.CODEMP, userDetails.CODFUNC)); // Pass both CODEMP and CODFUNC
      if (employeeDetails) {
        userDetails.employeeDetails = employeeDetails;
        logger.info('Sankhya Employee Details fetched.', { codUsu: basicUser.CODUSU, codEmp: userDetails.CODEMP, codFunc: userDetails.CODFUNC, employeeDetails });
      } else {
        logger.warn('Sankhya Employee Details not found for CODEMP/CODFUNC', { codUsu: basicUser.CODUSU, codEmp: userDetails.CODEMP, codFunc: userDetails.CODFUNC });
      }
    }

    // Fetch Company Details if CODEMP exists
    if (userDetails.CODEMP) {
      const companyDetails = trimObjectStrings(await getCompanyDetails(userDetails.CODEMP));
      if (companyDetails) {
        userDetails.companyDetails = companyDetails;
        logger.info('Sankhya Company Details fetched.', { codUsu: basicUser.CODUSU, codEmp: userDetails.CODEMP, companyDetails });
      } else {
        logger.warn('Sankhya Company Details not found for CODEMP', { codUsu: basicUser.CODUSU, codEmp: userDetails.CODEMP });
      }
    }

    // Fetch all permissions for the user and their groups
    const groupCods = userGroups.map(group => group.CODGRUPO);
    userPermissions = await getAllUserPermissions(basicUser.CODUSU, groupCods);
    logger.info('Sankhya User Permissions fetched:', { codUsu: basicUser.CODUSU, permissionsCount: userPermissions.length });

    // Example: Log a specific configuration if needed
    // const userConfig = await getUserConfigurations(basicUser.CODUSU, 'VERSAOSKWBIN', 'T');
    // logger.info('Sankhya User Configuration (VERSAOSKWBIN) after login:', { codUsu: basicUser.CODUSU, config: userConfig });

  } catch (detailsError: any) {
    logger.error('Error fetching additional Sankhya user details after login', detailsError, { codUsu: basicUser.CODUSU });
    throw detailsError; // Re-throw to indicate a critical failure in getting user details
  }
  // --- End of additional logging ---

  // Construct the token response
  const authTokenResponse: AuthTokenResponse = {
    accessToken: token,
    expiresIn: 8 * 3600, // 8 hours in seconds
    refreshToken: 'placeholder_refresh_token', // Refresh token not implemented yet
  };

  // Construct the session response
  const authSessionResponse: AuthSessionResponse = {
    sessionId: sessionResult.insertId.toString(),
    createdAt: new Date().toISOString(), // Placeholder
    lastAccess: new Date().toISOString(), // Placeholder
    ipAddress: 'unknown', // Not available in current flow
    userAgent: 'unknown', // Not available in current flow
  };

  // Construct the user details response
  const authUserDetailsResponse: AuthUserDetailsResponse = {
    id: userDetails.CODUSU,
    username: userDetails.NOMEUSU || basicUser.NOMEUSU,
    email: userDetails.ACCOUNTEMAIL || basicUser.EMAIL,
    fullName: userDetails.employeeDetails?.NOMEFUNC || userDetails.NOMEUSU || basicUser.NOMEUSU,
    cpf: userDetails.CPF,
    active: true, // Placeholder
    createdAt: new Date().toISOString(), // Placeholder
    updatedAt: new Date().toISOString(), // Placeholder
  };

  // Construct the employee response (if employeeDetails exist)
  let authEmployeeResponse: AuthEmployeeResponse | undefined;
  if (userDetails.employeeDetails) {
    const cargoMatch = userDetails.AD_CARGO?.match(/^(\d+) - (.*)$/);
    const cargoCodigo = cargoMatch ? parseInt(cargoMatch[1], 10) : 0; // Default to 0 if not found
    const cargoDescricao = cargoMatch ? cargoMatch[2] : userDetails.AD_CARGO || '';

    authEmployeeResponse = {
      employeeId: userDetails.employeeDetails.CODFUNC,
      matricula: userDetails.employeeDetails.CODFUNC.toString(), // Assuming CODFUNC is matricula
      cargoCodigo: cargoCodigo,
      cargoDescricao: cargoDescricao,
      setorCodigo: 0, // Placeholder
      setorDescricao: 'unknown', // Placeholder
      vinculo: 'unknown', // Placeholder
      dataAdmissao: new Date().toISOString(), // Placeholder
      dataNascimento: new Date().toISOString(), // Placeholder
      sexo: 'unknown', // Placeholder
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
      escala: {
        tipo: 'unknown', // Placeholder
        horarioEntrada: 'unknown', // Placeholder
        horarioSaida: 'unknown', // Placeholder
        intervalo: 'unknown', // Placeholder
      },
    };
  }

  // Construct the company response (if companyDetails exist)
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

  // Construct the final AuthResponse object
  const authResponse: AuthResponse = {
    token: authTokenResponse,
    session: authSessionResponse,
    userDetails: authUserDetailsResponse,
    employee: authEmployeeResponse,
    company: authCompanyResponse,
    permissionsDetails: userPermissions,
    groupsDetails: detailedGroups,
  };

  return authResponse;
}

export async function findUserByUsername(username: string): Promise<SankhyaUser | null> {
  const sql = await getSqlServer()
  const normalizedUsername = username.toLowerCase()

  const result = await sql.query`
    SELECT CODUSU, NOMEUSU, EMAIL, INTERNO, CPF
    FROM TSIUSU
    WHERE NOMEUSU = ${normalizedUsername}
  `

  if (result.recordset.length === 0) return null
  return result.recordset[0] as SankhyaUser
}
