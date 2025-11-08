import { getNewDateTime } from '../../../../common/utils/date-utils';
import { TfpreqEntity } from '../../../entities/tFPREQ.entity';

export class TfpreqMapper {
  public static toResponse(domain: TfpreqEntity): any {
    const response: any = {
      id: domain.id,
      dtcriacao: domain.dtcriacao
        ? getNewDateTime(domain.dtcriacao)
        : domain.dtcriacao, // domain.dtcriacao,
      codfunc: domain.codfunc,
      codemp: domain.codemp,
      status: domain.status,
      prioridade: domain.prioridade,
      dtlimite: domain.dtlimite,
      observacao: domain.observacao,
      origemtipo: domain.origemtipo,
      origemid: domain.origemid,
      dhalter: domain.dhalter ? getNewDateTime(domain.dhalter) : domain.dhalter,
      impacto: domain.impacto,
      eintegracao: domain.eintegracao,
      codusu: domain.codusu,

      // Relations
      adReqdps: domain.adReqdps,
      tfpanxes: domain.tfpanxes,
      tfpanxdpds: domain.tfpanxdpds,
      usuario: domain.usuario,
      tfpfun: domain.tfpfun,
      empresa: domain.empresa,
    };

    if (domain.dtcriacao) {
      response.dtlimite = new Date(
        domain.dtcriacao.getTime() + 20 * 24 * 60 * 60 * 1000,
      );
    }

    if (domain.status !== null) {
      switch (domain.status) {
        case 0:
          response.statusString = 'AGUARDANDO AÇÃO';
          break;
        case 1:
          response.statusString = 'AGUARDANDO AÇÃO';
          break;
        case 2:
          response.statusString = 'APROVADO';
          break;
        case 3:
          response.statusString = 'REJEITADO';
          break;
        case -2:
          response.statusString = 'CANCELADO';
          break;
        default:
          response.statusString = `${domain.status} - STATUS DESCONHECIDO`;
      }
    }

    switch (domain.origemtipo) {
      case 'R':
        response.origemtipoString = `R RESCISÃO`;
        break;
      case 'V':
        response.origemtipoString = `V FÉRIAS`;
        break;
      case 'S':
        response.origemtipoString = `S ALTERAÇÃO CARGO/SALARIO`;
        break;
      case 'G':
        response.origemtipoString = `G ALTERAÇÃO CARGA HORÁRIA`;
        break;
      case 'D':
        response.origemtipoString = `D Décimo Terceiro`;
        break;
      case 'E':
        response.origemtipoString = `E Alteração Endereço`;
        break;
      case 'T':
        response.origemtipoString = `T Transferência de Empresa`;
        break;
      case 'C':
        response.origemtipoString = `C Alteração de dados cadastrais`;
        break;
      case 'F':
        response.origemtipoString = `F Afastamento`;
        break;
      default:
        response.origemtipoString = `${domain.origemtipo} ORIGEM DESCONHECIDA`;
    }

    return response;
  }
}
