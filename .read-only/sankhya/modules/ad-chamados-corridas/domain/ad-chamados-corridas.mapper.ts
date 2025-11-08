import { AdChamadoscorridasEntity } from 'src/sankhya/entities/aD_CHAMADOSCORRIDAS.entity';
import { Tgfpar } from 'src/sankhya/interfaces/tgfpar.interface';
import { Tsiusu } from 'src/sankhya/interfaces/tsiusu.interface';
import { AdChamadosCorridasResponseDto } from '../dto/ad-chamados-corridas.response.dto';
import { TfplgrResponseDto } from '../dto/tfplgr.response.dto';
import { AdChamadosCorridas } from './ad-chamados-corridas.entity';

export class AdChamadosCorridasMapper {
  static toDomain(repoEntity: AdChamadoscorridasEntity): AdChamadosCorridas {
    const domainEntity = new AdChamadosCorridas();
    domainEntity.id = repoEntity.id;
    domainEntity.destino = repoEntity.destino;
    domainEntity.status = repoEntity.status;
    domainEntity.dtUpdated = repoEntity.dtUpdated;
    domainEntity.dtFinished = repoEntity.dtFinished;
    domainEntity.dtCreated = repoEntity.dtCreated;
    domainEntity.prioridade = repoEntity.prioridade;
    domainEntity.buscarlevar = repoEntity.buscarlevar;
    domainEntity.obs = repoEntity.obs;
    domainEntity.passageirosmercadoria = repoEntity.passageirosmercadoria;
    domainEntity.dtAcionamento = repoEntity.dtAcionamento;
    domainEntity.enviawpp = repoEntity.enviawpp;
    domainEntity.tgfpar = repoEntity.codparc
      ? ({
          codparc: repoEntity.codparc.codparc,
          nomeparc: repoEntity.codparc.nomeparc,
          razaosocial: repoEntity.codparc.razaosocial,
          tippessoa: repoEntity.codparc.tippessoa,
          codparcmatriz: repoEntity.codparc.codparcmatriz,
          numend: repoEntity.codparc.numend,
          complemento: repoEntity.codparc.complemento,
          telefone: repoEntity.codparc.telefone,
          email: repoEntity.codparc.email,
          cgcCpf: repoEntity.codparc.cgcCpf,
          codend: repoEntity.codparc.codend
            ? {
                codend: repoEntity.codparc.codend.codend,
                nomeend: repoEntity.codparc.codend.nomeend,
                tipo: repoEntity.codparc.codend.tipo,
                descricaocorreio: repoEntity.codparc.codend.descricaocorreio,
                codlogradouro: repoEntity.codparc.codend.codlogradouro
                  ? {
                      codlogradouro:
                        repoEntity.codparc.codend.codlogradouro.codlogradouro,
                      descrlogradouro:
                        repoEntity.codparc.codend.codlogradouro.descrlogradouro,
                    }
                  : undefined,
              }
            : undefined,
        } as Tgfpar)
      : undefined;
    domainEntity.tsiusuUsuario = repoEntity.user
      ? ({
          codusu: repoEntity.user.codusu,
          nomeusu: repoEntity.user.nomeusu,
        } as Tsiusu)
      : undefined;
    domainEntity.tsiusuUsuMotorista = repoEntity.usuMotorista
      ? ({
          codusu: repoEntity.usuMotorista.codusu,
          nomeusu: repoEntity.usuMotorista.nomeusu,
        } as Tsiusu)
      : undefined;
    domainEntity.tsiusuUsuSolicitante = repoEntity.usuSolicitante
      ? ({
          codusu: repoEntity.usuSolicitante.codusu,
          nomeusu: repoEntity.usuSolicitante.nomeusu,
        } as Tsiusu)
      : undefined;
    return domainEntity;
  }

  static toPersistence(
    domainEntity: AdChamadosCorridas,
  ): AdChamadoscorridasEntity {
    const repoEntity = new AdChamadoscorridasEntity();
    repoEntity.id = domainEntity.id;
    repoEntity.destino = domainEntity.destino;
    repoEntity.status = domainEntity.status;
    repoEntity.dtUpdated = domainEntity.dtUpdated;
    repoEntity.dtFinished = domainEntity.dtFinished;
    repoEntity.dtCreated = domainEntity.dtCreated;
    repoEntity.prioridade = domainEntity.prioridade;
    repoEntity.buscarlevar = domainEntity.buscarlevar;
    repoEntity.obs = domainEntity.obs;
    repoEntity.passageirosmercadoria = domainEntity.passageirosmercadoria;
    repoEntity.dtAcionamento = domainEntity.dtAcionamento;
    repoEntity.enviawpp = domainEntity.enviawpp;
    // Note: This is a simplified mapping. In a real scenario, you might need to fetch the full related entities.
    if (domainEntity.tgfpar) {
      repoEntity.codparc = { codparc: domainEntity.tgfpar.codparc } as any;
    }
    if (domainEntity.tsiusuUsuario) {
      repoEntity.user = { codusu: domainEntity.tsiusuUsuario.codusu } as any;
    }
    if (domainEntity.tsiusuUsuMotorista) {
      repoEntity.usuMotorista = {
        codusu: domainEntity.tsiusuUsuMotorista.codusu,
      } as any;
    }
    if (domainEntity.tsiusuUsuSolicitante) {
      repoEntity.usuSolicitante = {
        codusu: domainEntity.tsiusuUsuSolicitante.codusu,
      } as any;
    }
    return repoEntity;
  }

  static toPersistencePartial(
    domainEntity: Partial<AdChamadosCorridas>,
  ): Partial<AdChamadoscorridasEntity> {
    const persistenceEntity: Partial<AdChamadoscorridasEntity> = {};
    if (domainEntity.destino !== undefined)
      persistenceEntity.destino = domainEntity.destino;
    if (domainEntity.status !== undefined)
      persistenceEntity.status = domainEntity.status;
    if (domainEntity.dtUpdated !== undefined)
      persistenceEntity.dtUpdated = domainEntity.dtUpdated;
    if (domainEntity.dtFinished !== undefined)
      persistenceEntity.dtFinished = domainEntity.dtFinished;
    if (domainEntity.dtCreated !== undefined)
      persistenceEntity.dtCreated = domainEntity.dtCreated;
    if (domainEntity.prioridade !== undefined)
      persistenceEntity.prioridade = domainEntity.prioridade;
    if (domainEntity.buscarlevar !== undefined)
      persistenceEntity.buscarlevar = domainEntity.buscarlevar;
    if (domainEntity.obs !== undefined)
      persistenceEntity.obs = domainEntity.obs;
    if (domainEntity.passageirosmercadoria !== undefined)
      persistenceEntity.passageirosmercadoria =
        domainEntity.passageirosmercadoria;
    if (domainEntity.dtAcionamento !== undefined)
      persistenceEntity.dtAcionamento = domainEntity.dtAcionamento;
    if (domainEntity.enviawpp !== undefined)
      persistenceEntity.enviawpp = domainEntity.enviawpp;
    if (domainEntity.tgfpar?.codparc !== undefined)
      persistenceEntity.codparc = {
        codparc: domainEntity.tgfpar.codparc,
      } as any;
    if (domainEntity.tsiusuUsuario?.codusu !== undefined)
      persistenceEntity.user = {
        codusu: domainEntity.tsiusuUsuario.codusu,
      } as any;
    if (domainEntity.tsiusuUsuMotorista?.codusu !== undefined)
      persistenceEntity.usuMotorista = {
        codusu: domainEntity.tsiusuUsuMotorista.codusu,
      } as any;
    if (domainEntity.tsiusuUsuSolicitante?.codusu !== undefined)
      persistenceEntity.usuSolicitante = {
        codusu: domainEntity.tsiusuUsuSolicitante.codusu,
      } as any;
    return persistenceEntity;
  }

  static toResponse(
    domainEntity: AdChamadosCorridas,
  ): AdChamadosCorridasResponseDto {
    const responseDto = new AdChamadosCorridasResponseDto();
    responseDto.id = domainEntity.id;
    responseDto.destino = domainEntity.destino;
    responseDto.status = domainEntity.status;
    responseDto.dtUpdated = domainEntity.dtUpdated;
    responseDto.dtFinished = domainEntity.dtFinished;
    responseDto.dtCreated = domainEntity.dtCreated;
    responseDto.prioridade = domainEntity.prioridade;
    responseDto.buscarlevar = domainEntity.buscarlevar;
    responseDto.obs = domainEntity.obs;
    responseDto.passageirosmercadoria = domainEntity.passageirosmercadoria;
    responseDto.dtAcionamento = domainEntity.dtAcionamento;
    responseDto.enviawpp = domainEntity.enviawpp;
    if (domainEntity.tgfpar) {
      responseDto.tgfpar = {
        codparc: domainEntity.tgfpar.codparc,
        nomeparc: domainEntity.tgfpar.nomeparc,
        razaosocial: domainEntity.tgfpar.razaosocial,
        tippessoa: domainEntity.tgfpar.tippessoa,
        codparcmatriz: domainEntity.tgfpar.codparcmatriz,
        numend: domainEntity.tgfpar.numend,
        complemento: domainEntity.tgfpar.complemento,
        telefone: domainEntity.tgfpar.telefone,
        email: domainEntity.tgfpar.email,
        cgcCpf: domainEntity.tgfpar.cgcCpf,
        cep: domainEntity.tgfpar.cep,
        codend: domainEntity.tgfpar.codend
          ? {
              codend: domainEntity.tgfpar.codend.codend,
              nomeend: domainEntity.tgfpar.codend.nomeend,
              tipo: domainEntity.tgfpar.codend.tipo,
              descricaocorreio: domainEntity.tgfpar.codend.descricaocorreio,
              codlogradouro: domainEntity.tgfpar.codend.codlogradouro
                ? ({
                    codlogradouro:
                      domainEntity.tgfpar.codend.codlogradouro.codlogradouro,
                    descrlogradouro:
                      domainEntity.tgfpar.codend.codlogradouro.descrlogradouro,
                  } as TfplgrResponseDto)
                : undefined,
            }
          : undefined,
        codc: domainEntity.tgfpar.codc
          ? {
              codcid: domainEntity.tgfpar.codc.codcid,
              nomecid: domainEntity.tgfpar.codc.nomecid,
              uf: domainEntity.tgfpar.codc.uf,
            }
          : undefined,
        codbai: domainEntity.tgfpar.codbai
          ? {
              codbai: domainEntity.tgfpar.codbai.codbai,
              nomebai: domainEntity.tgfpar.codbai.nomebai,
            }
          : undefined,
      };
    }

    if (domainEntity.tsiusuUsuario) {
      responseDto.tsiusuUsuario = {
        codusu: domainEntity.tsiusuUsuario.codusu,
        nomeusu: domainEntity.tsiusuUsuario.nomeusu ?? null,
        email: domainEntity.tsiusuUsuario.email ?? null,
      };
    }

    if (domainEntity.tsiusuUsuMotorista) {
      responseDto.tsiusuUsuMotorista = {
        codusu: domainEntity.tsiusuUsuMotorista.codusu,
        nomeusu: domainEntity.tsiusuUsuMotorista.nomeusu ?? null,
        email: domainEntity.tsiusuUsuMotorista.email ?? null,
      };
    }

    if (domainEntity.tsiusuUsuSolicitante) {
      responseDto.tsiusuUsuSolicitante = {
        codusu: domainEntity.tsiusuUsuSolicitante.codusu,
        nomeusu: domainEntity.tsiusuUsuSolicitante.nomeusu ?? null,
        email: domainEntity.tsiusuUsuSolicitante.email ?? null,
      };
    }
    return responseDto;
  }
}
