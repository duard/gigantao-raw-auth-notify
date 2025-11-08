import { TsicidEntity } from '../../../entities/tSICID.entity';
import { TsiufsMapper } from '../../tsiufs/domain/tsiufs.mapper';
import { TsicidResponseDto } from '../dto/tsicid-response.dto';
import { Tsicid } from './tsicid.domain';

export class TsicidMapper {
  static toDomain(raw: TsicidEntity): Tsicid {
    const domain = new Tsicid();
    domain.codcid = raw.codcid;
    domain.nomecid = raw.nomecid;
    domain.uf = raw.uf;
    domain.ddd = raw.ddd;
    domain.distancia = raw.distancia;
    domain.dtalter = raw.dtalter;
    domain.descricaocorreio = raw.descricaocorreio;
    domain.seqentrega = raw.seqentrega;
    domain.populacao = raw.populacao;
    domain.codmunfis = raw.codmunfis;
    domain.vlrfretemin = raw.vlrfretemin;
    domain.vlrfreteton = raw.vlrfreteton;
    domain.tipofrete = raw.tipofrete;
    domain.vlrfretekm = raw.vlrfretekm;
    domain.vlrtaxaent = raw.vlrtaxaent;
    domain.codmunsiafi = raw.codmunsiafi;
    domain.codmundms = raw.codmundms;
    domain.vendamin = raw.vendamin;
    domain.latitude = raw.latitude;
    domain.longitude = raw.longitude;
    domain.codmundief = raw.codmundief;
    domain.qtddiassub = raw.qtddiassub;
    domain.qtdsub = raw.qtdsub;
    domain.temsubstitnfse = raw.temsubstitnfse;
    domain.tipcancnfse = raw.tipcancnfse;
    domain.vlrlimcancnfse = raw.vlrlimcancnfse;
    domain.motcancsubnfse = raw.motcancsubnfse;
    domain.metarredvlriss = raw.metarredvlriss;
    domain.maxnotalotenfse = raw.maxnotalotenfse;
    domain.nfsetemplatesubst = raw.nfsetemplatesubst;
    domain.tipocnae = raw.tipocnae;
    domain.nuversao = raw.nuversao;
    domain.linkagua = raw.linkagua;
    domain.linkenergia = raw.linkenergia;
    domain.linkiptu = raw.linkiptu;
    domain.noformatlc116 = raw.noformatlc116;
    domain.cnaefullnfse = raw.cnaefullnfse;
    domain.noinscmunpar = raw.noinscmunpar;
    domain.gercodnatissjson = raw.gercodnatissjson;
    domain.envitenssepjson = raw.envitenssepjson;
    domain.qtdmaxenvitensjson = raw.qtdmaxenvitensjson;
    domain.obsjsonenotas = raw.obsjsonenotas;
    domain.permcancnfsesubstit = raw.permcancnfsesubstit;
    domain.jsonsemalidenmun = raw.jsonsemalidenmun;
    domain.vminretencaoiss = raw.vminretencaoiss;
    domain.actcanexnt = raw.actcanexnt;
    domain.remzeroesquerdlc116 = raw.remzeroesquerdlc116;
    domain.envfpjson = raw.envfpjson;
    domain.infqtdvlrunijson = raw.infqtdvlrunijson;
    domain.envmulemailjson = raw.envmulemailjson;
    domain.atunuversao = raw.atunuversao;
    domain.envtagdesconjson = raw.envtagdesconjson;
    domain.gernunfseinfcpm = raw.gernunfseinfcpm;
    domain.mascaralc116 = raw.mascaralc116;
    domain.gercnaemultjson = raw.gercnaemultjson;
    domain.regesptrib = raw.regesptrib;
    domain.envcodigonbsjson = raw.envcodigonbsjson;
    return domain;
  }

  static toPersistence(domain: Tsicid): TsicidEntity {
    const persistence = new TsicidEntity();
    persistence.codcid = domain.codcid;
    persistence.nomecid = domain.nomecid;
    if (domain.uf) {
      persistence.uf = domain.uf;
    }
    persistence.ddd = domain.ddd;
    persistence.distancia = domain.distancia;
    persistence.dtalter = domain.dtalter;
    persistence.descricaocorreio = domain.descricaocorreio;
    persistence.seqentrega = domain.seqentrega;
    persistence.populacao = domain.populacao;
    persistence.codmunfis = domain.codmunfis;
    persistence.vlrfretemin = domain.vlrfretemin;
    persistence.vlrfreteton = domain.vlrfreteton;
    persistence.tipofrete = domain.tipofrete;
    persistence.vlrfretekm = domain.vlrfretekm;
    persistence.vlrtaxaent = domain.vlrtaxaent;
    persistence.codmunsiafi = domain.codmunsiafi;
    persistence.codmundms = domain.codmundms;
    persistence.vendamin = domain.vendamin;
    persistence.latitude = domain.latitude;
    persistence.longitude = domain.longitude;
    persistence.codmundief = domain.codmundief;
    persistence.qtddiassub = domain.qtddiassub;
    persistence.qtdsub = domain.qtdsub;
    persistence.temsubstitnfse = domain.temsubstitnfse;
    persistence.tipcancnfse = domain.tipcancnfse;
    persistence.vlrlimcancnfse = domain.vlrlimcancnfse;
    persistence.motcancsubnfse = domain.motcancsubnfse;
    persistence.metarredvlriss = domain.metarredvlriss;
    persistence.maxnotalotenfse = domain.maxnotalotenfse;
    persistence.nfsetemplatesubst = domain.nfsetemplatesubst;
    persistence.tipocnae = domain.tipocnae;
    persistence.nuversao = domain.nuversao;
    persistence.linkagua = domain.linkagua;
    persistence.linkenergia = domain.linkenergia;
    persistence.linkiptu = domain.linkiptu;
    persistence.noformatlc116 = domain.noformatlc116;
    persistence.cnaefullnfse = domain.cnaefullnfse;
    persistence.noinscmunpar = domain.noinscmunpar;
    persistence.gercodnatissjson = domain.gercodnatissjson;
    persistence.envitenssepjson = domain.envitenssepjson;
    persistence.qtdmaxenvitensjson = domain.qtdmaxenvitensjson;
    persistence.obsjsonenotas = domain.obsjsonenotas;
    persistence.permcancnfsesubstit = domain.permcancnfsesubstit;
    persistence.jsonsemalidenmun = domain.jsonsemalidenmun;
    persistence.vminretencaoiss = domain.vminretencaoiss;
    persistence.actcanexnt = domain.actcanexnt;
    persistence.remzeroesquerdlc116 = domain.remzeroesquerdlc116;
    persistence.envfpjson = domain.envfpjson;
    persistence.infqtdvlrunijson = domain.infqtdvlrunijson;
    persistence.envmulemailjson = domain.envmulemailjson;
    persistence.atunuversao = domain.atunuversao;
    persistence.envtagdesconjson = domain.envtagdesconjson;
    persistence.gernunfseinfcpm = domain.gernunfseinfcpm;
    persistence.mascaralc116 = domain.mascaralc116;
    persistence.gercnaemultjson = domain.gercnaemultjson;
    persistence.regesptrib = domain.regesptrib;
    persistence.envcodigonbsjson = domain.envcodigonbsjson;
    return persistence;
  }

  static toResponse(domain: Tsicid): TsicidResponseDto {
    const response = new TsicidResponseDto();
    response.codcid = domain.codcid;
    response.nomecid = domain.nomecid;
    if (domain.uf) {
      response.uf = domain.uf;
    }
    response.ddd = domain.ddd;
    response.distancia = domain.distancia;
    response.dtalter = domain.dtalter;
    response.descricaocorreio = domain.descricaocorreio;
    response.seqentrega = domain.seqentrega;
    response.populacao = domain.populacao;
    response.codmunfis = domain.codmunfis;
    response.vlrfretemin = domain.vlrfretemin;
    response.vlrfreteton = domain.vlrfreteton;
    response.tipofrete = domain.tipofrete;
    response.vlrfretekm = domain.vlrfretekm;
    response.vlrtaxaent = domain.vlrtaxaent;
    response.codmunsiafi = domain.codmunsiafi;
    response.codmundms = domain.codmundms;
    response.vendamin = domain.vendamin;
    response.latitude = domain.latitude;
    response.longitude = domain.longitude;
    response.codmundief = domain.codmundief;
    response.qtddiassub = domain.qtddiassub;
    response.qtdsub = domain.qtdsub;
    response.temsubstitnfse = domain.temsubstitnfse;
    response.tipcancnfse = domain.tipcancnfse;
    response.vlrlimcancnfse = domain.vlrlimcancnfse;
    response.motcancsubnfse = domain.motcancsubnfse;
    response.metarredvlriss = domain.metarredvlriss;
    response.maxnotalotenfse = domain.maxnotalotenfse;
    response.nfsetemplatesubst = domain.nfsetemplatesubst;
    response.tipocnae = domain.tipocnae;
    response.nuversao = domain.nuversao;
    response.linkagua = domain.linkagua;
    response.linkenergia = domain.linkenergia;
    response.linkiptu = domain.linkiptu;
    response.noformatlc116 = domain.noformatlc116;
    response.cnaefullnfse = domain.cnaefullnfse;
    response.noinscmunpar = domain.noinscmunpar;
    response.gercodnatissjson = domain.gercodnatissjson;
    response.envitenssepjson = domain.envitenssepjson;
    response.qtdmaxenvitensjson = domain.qtdmaxenvitensjson;
    response.obsjsonenotas = domain.obsjsonenotas;
    response.permcancnfsesubstit = domain.permcancnfsesubstit;
    response.jsonsemalidenmun = domain.jsonsemalidenmun;
    response.vminretencaoiss = domain.vminretencaoiss;
    response.actcanexnt = domain.actcanexnt;
    response.remzeroesquerdlc116 = domain.remzeroesquerdlc116;
    response.envfpjson = domain.envfpjson;
    response.infqtdvlrunijson = domain.infqtdvlrunijson;
    response.envmulemailjson = domain.envmulemailjson;
    response.atunuversao = domain.atunuversao;
    response.envtagdesconjson = domain.envtagdesconjson;
    response.gernunfseinfcpm = domain.gernunfseinfcpm;
    response.mascaralc116 = domain.mascaralc116;
    response.gercnaemultjson = domain.gercnaemultjson;
    response.regesptrib = domain.regesptrib;
    response.envcodigonbsjson = domain.envcodigonbsjson;
    return response;
  }

  static toPersistencePartial(domain: Partial<Tsicid>): Partial<TsicidEntity> {
    const persistence = new TsicidEntity();
    if (domain.codcid) {
      persistence.codcid = domain.codcid;
    }
    if (domain.nomecid) {
      persistence.nomecid = domain.nomecid;
    }
    if (domain.uf) {
      persistence.uf = domain.uf;
    }
    if (domain.ddd) {
      persistence.ddd = domain.ddd;
    }
    if (domain.distancia) {
      persistence.distancia = domain.distancia;
    }
    if (domain.dtalter) {
      persistence.dtalter = domain.dtalter;
    }
    if (domain.descricaocorreio) {
      persistence.descricaocorreio = domain.descricaocorreio;
    }
    if (domain.seqentrega) {
      persistence.seqentrega = domain.seqentrega;
    }
    if (domain.populacao) {
      persistence.populacao = domain.populacao;
    }
    if (domain.codmunfis) {
      persistence.codmunfis = domain.codmunfis;
    }
    if (domain.vlrfretemin) {
      persistence.vlrfretemin = domain.vlrfretemin;
    }
    if (domain.vlrfreteton) {
      persistence.vlrfreteton = domain.vlrfreteton;
    }
    if (domain.tipofrete) {
      persistence.tipofrete = domain.tipofrete;
    }
    if (domain.vlrfretekm) {
      persistence.vlrfretekm = domain.vlrfretekm;
    }
    if (domain.vlrtaxaent) {
      persistence.vlrtaxaent = domain.vlrtaxaent;
    }
    if (domain.codmunsiafi) {
      persistence.codmunsiafi = domain.codmunsiafi;
    }
    if (domain.codmundms) {
      persistence.codmundms = domain.codmundms;
    }
    if (domain.vendamin) {
      persistence.vendamin = domain.vendamin;
    }
    if (domain.latitude) {
      persistence.latitude = domain.latitude;
    }
    if (domain.longitude) {
      persistence.longitude = domain.longitude;
    }
    if (domain.codmundief) {
      persistence.codmundief = domain.codmundief;
    }
    if (domain.qtddiassub) {
      persistence.qtddiassub = domain.qtddiassub;
    }
    if (domain.qtdsub) {
      persistence.qtdsub = domain.qtdsub;
    }
    if (domain.temsubstitnfse) {
      persistence.temsubstitnfse = domain.temsubstitnfse;
    }
    if (domain.tipcancnfse) {
      persistence.tipcancnfse = domain.tipcancnfse;
    }
    if (domain.vlrlimcancnfse) {
      persistence.vlrlimcancnfse = domain.vlrlimcancnfse;
    }
    if (domain.motcancsubnfse) {
      persistence.motcancsubnfse = domain.motcancsubnfse;
    }
    if (domain.metarredvlriss) {
      persistence.metarredvlriss = domain.metarredvlriss;
    }
    if (domain.maxnotalotenfse) {
      persistence.maxnotalotenfse = domain.maxnotalotenfse;
    }
    if (domain.nfsetemplatesubst) {
      persistence.nfsetemplatesubst = domain.nfsetemplatesubst;
    }
    if (domain.tipocnae) {
      persistence.tipocnae = domain.tipocnae;
    }
    if (domain.nuversao) {
      persistence.nuversao = domain.nuversao;
    }
    if (domain.linkagua) {
      persistence.linkagua = domain.linkagua;
    }
    if (domain.linkenergia) {
      persistence.linkenergia = domain.linkenergia;
    }
    if (domain.linkiptu) {
      persistence.linkiptu = domain.linkiptu;
    }
    if (domain.noformatlc116) {
      persistence.noformatlc116 = domain.noformatlc116;
    }
    if (domain.cnaefullnfse) {
      persistence.cnaefullnfse = domain.cnaefullnfse;
    }
    if (domain.noinscmunpar) {
      persistence.noinscmunpar = domain.noinscmunpar;
    }
    if (domain.gercodnatissjson) {
      persistence.gercodnatissjson = domain.gercodnatissjson;
    }
    if (domain.envitenssepjson) {
      persistence.envitenssepjson = domain.envitenssepjson;
    }
    if (domain.qtdmaxenvitensjson) {
      persistence.qtdmaxenvitensjson = domain.qtdmaxenvitensjson;
    }
    if (domain.obsjsonenotas) {
      persistence.obsjsonenotas = domain.obsjsonenotas;
    }
    if (domain.permcancnfsesubstit) {
      persistence.permcancnfsesubstit = domain.permcancnfsesubstit;
    }
    if (domain.jsonsemalidenmun) {
      persistence.jsonsemalidenmun = domain.jsonsemalidenmun;
    }
    if (domain.vminretencaoiss) {
      persistence.vminretencaoiss = domain.vminretencaoiss;
    }
    if (domain.actcanexnt) {
      persistence.actcanexnt = domain.actcanexnt;
    }
    if (domain.remzeroesquerdlc116) {
      persistence.remzeroesquerdlc116 = domain.remzeroesquerdlc116;
    }
    if (domain.envfpjson) {
      persistence.envfpjson = domain.envfpjson;
    }
    if (domain.infqtdvlrunijson) {
      persistence.infqtdvlrunijson = domain.infqtdvlrunijson;
    }
    if (domain.envmulemailjson) {
      persistence.envmulemailjson = domain.envmulemailjson;
    }
    if (domain.atunuversao) {
      persistence.atunuversao = domain.atunuversao;
    }
    if (domain.envtagdesconjson) {
      persistence.envtagdesconjson = domain.envtagdesconjson;
    }
    if (domain.gernunfseinfcpm) {
      persistence.gernunfseinfcpm = domain.gernunfseinfcpm;
    }
    if (domain.mascaralc116) {
      persistence.mascaralc116 = domain.mascaralc116;
    }
    if (domain.gercnaemultjson) {
      persistence.gercnaemultjson = domain.gercnaemultjson;
    }
    if (domain.regesptrib) {
      persistence.regesptrib = domain.regesptrib;
    }
    if (domain.envcodigonbsjson) {
      persistence.envcodigonbsjson = domain.envcodigonbsjson;
    }
    return persistence;
  }
}
