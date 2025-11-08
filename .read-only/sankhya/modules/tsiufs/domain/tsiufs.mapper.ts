import { TsiufsEntity } from '../../../entities/tSIUFS.entity';
import { TsiufsResponseDto } from '../dto/tsiufs-response.dto';
import { Tsiufs } from './tsiufs.domain';

export class TsiufsMapper {
  static toDomain(raw: TsiufsEntity): Tsiufs {
    const domain = new Tsiufs();
    domain.coduf = raw.coduf;
    domain.uf = raw.uf;
    domain.descricao = raw.descricao;
    domain.codibge = raw.codibge;
    domain.codstgnre = raw.codstgnre;
    domain.coddetgnre = raw.coddetgnre;
    domain.codprodgnre = raw.codprodgnre;
    domain.protocoloconvenio = raw.protocoloconvenio;
    domain.valsitcadsefaz = raw.valsitcadsefaz;
    domain.estornonfe = raw.estornonfe;
    domain.gerinfcampadicgnre = raw.gerinfcampadicgnre;
    domain.codcampoextragnre = raw.codcampoextragnre;
    domain.valorcampoextra = raw.valorcampoextra;
    domain.versaognre = raw.versaognre;
    domain.codfcpstgnre = raw.codfcpstgnre;
    domain.usawebservicegnre = raw.usawebservicegnre;
    domain.tipoinfo = raw.tipoinfo;
    domain.tipodoc = raw.tipodoc;
    domain.codcampoextragnre2 = raw.codcampoextragnre2;
    domain.codrecdime = raw.codrecdime;
    domain.codclsvencdime = raw.codclsvencdime;
    domain.codrecdimefcpst = raw.codrecdimefcpst;
    domain.codclsvencdimefcpst = raw.codclsvencdimefcpst;
    domain.vlrpersgnre = raw.vlrpersgnre;
    domain.tabprecpmc = raw.tabprecpmc;
    domain.tabprecopf = raw.tabprecopf;
    return domain;
  }

  static toPersistence(domain: Tsiufs): TsiufsEntity {
    const persistence = new TsiufsEntity();
    persistence.coduf = domain.coduf;
    persistence.uf = domain.uf;
    persistence.descricao = domain.descricao;
    persistence.codibge = domain.codibge;
    persistence.codstgnre = domain.codstgnre;
    persistence.coddetgnre = domain.coddetgnre;
    persistence.codprodgnre = domain.codprodgnre;
    persistence.protocoloconvenio = domain.protocoloconvenio;
    persistence.valsitcadsefaz = domain.valsitcadsefaz;
    persistence.estornonfe = domain.estornonfe;
    persistence.gerinfcampadicgnre = domain.gerinfcampadicgnre;
    persistence.codcampoextragnre = domain.codcampoextragnre;
    persistence.valorcampoextra = domain.valorcampoextra;
    persistence.versaognre = domain.versaognre;
    persistence.codfcpstgnre = domain.codfcpstgnre;
    persistence.usawebservicegnre = domain.usawebservicegnre;
    persistence.tipoinfo = domain.tipoinfo;
    persistence.tipodoc = domain.tipodoc;
    persistence.codcampoextragnre2 = domain.codcampoextragnre2;
    persistence.codrecdime = domain.codrecdime;
    persistence.codclsvencdime = domain.codclsvencdime;
    persistence.codrecdimefcpst = domain.codrecdimefcpst;
    persistence.codclsvencdimefcpst = domain.codclsvencdimefcpst;
    persistence.vlrpersgnre = domain.vlrpersgnre;
    persistence.tabprecpmc = domain.tabprecpmc;
    persistence.tabprecopf = domain.tabprecopf;
    return persistence;
  }

  static toResponse(domain: Tsiufs): TsiufsResponseDto {
    const response = new TsiufsResponseDto();
    response.coduf = domain.coduf;
    response.uf = domain.uf;
    response.descricao = domain.descricao;
    response.codibge = domain.codibge;
    response.codstgnre = domain.codstgnre;
    response.coddetgnre = domain.coddetgnre;
    response.codprodgnre = domain.codprodgnre;
    response.protocoloconvenio = domain.protocoloconvenio;
    response.valsitcadsefaz = domain.valsitcadsefaz;
    response.estornonfe = domain.estornonfe;
    response.gerinfcampadicgnre = domain.gerinfcampadicgnre;
    response.codcampoextragnre = domain.codcampoextragnre;
    response.valorcampoextra = domain.valorcampoextra;
    response.versaognre = domain.versaognre;
    response.codfcpstgnre = domain.codfcpstgnre;
    response.usawebservicegnre = domain.usawebservicegnre;
    response.tipoinfo = domain.tipoinfo;
    response.tipodoc = domain.tipodoc;
    response.codcampoextragnre2 = domain.codcampoextragnre2;
    response.codrecdime = domain.codrecdime;
    response.codclsvencdime = domain.codclsvencdime;
    response.codrecdimefcpst = domain.codrecdimefcpst;
    response.codclsvencdimefcpst = domain.codclsvencdimefcpst;
    response.vlrpersgnre = domain.vlrpersgnre;
    response.tabprecpmc = domain.tabprecpmc;
    response.tabprecopf = domain.tabprecopf;
    return response;
  }

  static toPersistencePartial(domain: Partial<Tsiufs>): Partial<TsiufsEntity> {
    const persistence = new TsiufsEntity();
    if (domain.coduf) {
      persistence.coduf = domain.coduf;
    }
    if (domain.uf) {
      persistence.uf = domain.uf;
    }
    if (domain.descricao) {
      persistence.descricao = domain.descricao;
    }
    if (domain.codibge) {
      persistence.codibge = domain.codibge;
    }
    if (domain.codstgnre) {
      persistence.codstgnre = domain.codstgnre;
    }
    if (domain.coddetgnre) {
      persistence.coddetgnre = domain.coddetgnre;
    }
    if (domain.codprodgnre) {
      persistence.codprodgnre = domain.codprodgnre;
    }
    if (domain.protocoloconvenio) {
      persistence.protocoloconvenio = domain.protocoloconvenio;
    }
    if (domain.valsitcadsefaz) {
      persistence.valsitcadsefaz = domain.valsitcadsefaz;
    }
    if (domain.estornonfe) {
      persistence.estornonfe = domain.estornonfe;
    }
    if (domain.gerinfcampadicgnre) {
      persistence.gerinfcampadicgnre = domain.gerinfcampadicgnre;
    }
    if (domain.codcampoextragnre) {
      persistence.codcampoextragnre = domain.codcampoextragnre;
    }
    if (domain.valorcampoextra) {
      persistence.valorcampoextra = domain.valorcampoextra;
    }
    if (domain.versaognre) {
      persistence.versaognre = domain.versaognre;
    }
    if (domain.codfcpstgnre) {
      persistence.codfcpstgnre = domain.codfcpstgnre;
    }
    if (domain.usawebservicegnre) {
      persistence.usawebservicegnre = domain.usawebservicegnre;
    }
    if (domain.tipoinfo) {
      persistence.tipoinfo = domain.tipoinfo;
    }
    if (domain.tipodoc) {
      persistence.tipodoc = domain.tipodoc;
    }
    if (domain.codcampoextragnre2) {
      persistence.codcampoextragnre2 = domain.codcampoextragnre2;
    }
    if (domain.codrecdime) {
      persistence.codrecdime = domain.codrecdime;
    }
    if (domain.codclsvencdime) {
      persistence.codclsvencdime = domain.codclsvencdime;
    }
    if (domain.codrecdimefcpst) {
      persistence.codrecdimefcpst = domain.codrecdimefcpst;
    }
    if (domain.codclsvencdimefcpst) {
      persistence.codclsvencdimefcpst = domain.codclsvencdimefcpst;
    }
    if (domain.vlrpersgnre) {
      persistence.vlrpersgnre = domain.vlrpersgnre;
    }
    if (domain.tabprecpmc) {
      persistence.tabprecpmc = domain.tabprecpmc;
    }
    if (domain.tabprecopf) {
      persistence.tabprecopf = domain.tabprecopf;
    }
    return persistence;
  }
}
