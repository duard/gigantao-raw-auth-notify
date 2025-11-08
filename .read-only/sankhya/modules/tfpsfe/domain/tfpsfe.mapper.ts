import { TfpsfeEntity } from '../../../entities/tFPSFE.entity';

import { TfpsfeResponseDto } from '../dto/tfpsfe-response.dto';

export class TfpsfeMapper {
  public static toResponse(domain: TfpsfeEntity): TfpsfeResponseDto {
    const response: TfpsfeResponseDto = {
      id: domain.id,
      codemp: domain.codemp,
      empresa: domain.empresa
        ? {
            codemp: domain.empresa.codemp,
            nomefantasia: domain.empresa.nomefantasia,
            razaosocial: domain.empresa.razaosocial,
            cgc: domain.empresa.cgc,
          }
        : undefined,
      tfpreq: domain.tfpreq
        ? (() => {
            let statusTraduzido = 'DESCONHECIDO';
            switch (domain.tfpreq.status) {
              case 0:
                statusTraduzido = 'PENDENTE';
                break;
              case 1:
                statusTraduzido = 'APROVADO';
                break;
              case 2:
                statusTraduzido = 'REPROVADO';
                break;
              case 3:
                statusTraduzido = 'CONCLUÍDO';
                break;
              case 4:
                statusTraduzido = 'CANCELADO';
                break;
              default:
                statusTraduzido = 'DESCONHECIDO';
            }

            let prioridadeTraduzida = 'NÃO DEFINIDA';
            switch (domain.tfpreq.prioridade) {
              case -1:
                prioridadeTraduzida = 'NÃO DEFINIDA';
                break;
              case 0:
                prioridadeTraduzida = 'BAIXA';
                break;
              case 1:
                prioridadeTraduzida = 'NORMAL';
                break;
              case 2:
                prioridadeTraduzida = 'ALTA';
                break;
              case 3:
                prioridadeTraduzida = 'URGENTE';
                break;
              case 4:
                prioridadeTraduzida = 'CRÍTICA';
                break;
              default:
                prioridadeTraduzida = 'DESCONHECIDO';
            }

            return {
              id: domain.tfpreq.id,
              dtcriacao: domain.tfpreq.dtcriacao,
              status: statusTraduzido,
              statusOriginal: domain.tfpreq.status,
              observacao: domain.tfpreq.observacao,
              prioridade: prioridadeTraduzida,
              prioridadeOriginal: domain.tfpreq.prioridade,
              dtlimite: domain.tfpreq.dtlimite,
              codusu: domain.tfpreq.codusu
                ? {
                    codusu: domain.tfpreq.usuario.codusu,
                    nomeusu: domain.tfpreq.usuario.nomeusu,
                    email: domain.tfpreq.usuario.email ?? null,
                  }
                : undefined,
            };
          })()
        : undefined,
      codfunc: domain.codfunc,
      tfpfun: domain.tfpfun
        ? (() => {
            let situacaoTraduzida = 'DESCONHECIDO';
            switch (domain.tfpfun.situacao) {
              case '1':
                situacaoTraduzida = 'ATIVO';
                break;
              case '2':
                situacaoTraduzida = 'FÉRIAS';
                break;
              case '3':
                situacaoTraduzida = 'AFASTADO';
                break;
              case '4':
                situacaoTraduzida = 'DEMITIDO';
                break;
              case '5':
                situacaoTraduzida = 'RESCINDIDO';
                break;
            }

            const hoje = new Date();
            const dtadm = domain.tfpfun.dtadm
              ? new Date(domain.tfpfun.dtadm)
              : null;
            const dtnasc = domain.tfpfun.dtnasc
              ? new Date(domain.tfpfun.dtnasc)
              : null;

            const diasDeEmpresa = dtadm
              ? Math.floor(
                  (hoje.getTime() - dtadm.getTime()) / (1000 * 60 * 60 * 24),
                )
              : null;

            let idade: number | null = null;
            if (dtnasc) {
              let age = hoje.getFullYear() - dtnasc.getFullYear();
              const m = hoje.getMonth() - dtnasc.getMonth();
              if (m < 0 || (m === 0 && hoje.getDate() < dtnasc.getDate())) {
                age--;
              }
              idade = age;
            }

            return {
              codfunc: domain.tfpfun.codfunc,
              nomefunc: domain.tfpfun.nomefunc,
              email: domain.tfpfun.email,
              situacao: situacaoTraduzida,
              dtadm: domain.tfpfun.dtadm,
              diasDeEmpresa: diasDeEmpresa,
              dtnasc: domain.tfpfun.dtnasc,
              idade: idade,
            };
          })()
        : undefined,
      nusolicit: domain.nusolicit,
      dhsolicit: domain.dhsolicit,
      status: domain.status,
      previnicio: domain.previnicio,
      diassolicitados: domain.diassolicitados,
      adiantadecterc: domain.adiantadecterc,
      abonopecuniario: domain.abonopecuniario,
      observacao: domain.observacao,
      dtiniaqui: domain.dtiniaqui,
      seqfer: domain.seqfer,
      diasabonopec: domain.diasabonopec,
    };

    if (domain.status !== null) {
      switch (domain.status) {
        case 'P':
          response.statusSolicitacao = 'PENDENTE';
          break;
        case 'A':
          response.statusSolicitacao = 'APROVADO';
          break;
        case 'R':
          response.statusSolicitacao = 'REPROVADO';
          break;
        case 'C':
          response.statusSolicitacao = 'CANCELADO';
          break;
        default:
          response.statusSolicitacao = 'DESCONHECIDO';
      }
    }

    return response;
  }
}
