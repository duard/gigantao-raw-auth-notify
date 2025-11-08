import { TgfcabEntity } from '../../../entities/tGFCAB.entity';
import { TgfcabResponseDto } from '../dto/tgfcab-response.dto';
import { Tgfcab } from './tgfcab.domain';
import { Tsiusu } from '../../tsiusu/domain/tsiusu.domain';
import { TsiusuEntity } from '../../../entities/tSIUSU.entity';
import { TgftopEntity } from '../../../entities/tGFTOP.entity';
import { Tgftop } from '../../tgftop/domain/tgftop.domain';
import { Tsicid } from '../../tsicid/domain/tsicid.domain';
import { Tgfpar } from '../../tgfpar/domain/tgfpar.domain';
import { TsicidMapper } from '../../tsicid/domain/tsicid.mapper';
import { TsiufsMapper } from '../../tsiufs/domain/tsiufs.mapper';
import { TgfcabSummaryDto } from '../dto/tgfcab-summary.dto';
import { TgfiteMapper } from '../../tgfite/domain/tgfite.mapper';
import { TgflibMapper } from '../../tgflib/domain/tgflib.mapper';
import { TsiusuMapper } from '../../tsiusu/domain/tsiusu.mapper';
import { TgfparMapper } from '../../tgfpar/domain/tgfpar.mapper';
import { TgftopMapper } from '../../tgftop/domain/tgftop.mapper';
// import { TgfempMapper } from '../../tgfemp/domain/tgfemp.mapper';
import { TgfveiEntity } from '../../../entities/tGFVEI.entity';
import {
  translateStatusnota,
  translateTipmov,
} from '../../../../utils/helpers/translation.helpers';
import { trim } from '../../../../utils/helpers/string.helpers';
// import { TgfcotMapper } from '../../tgfcot/domain/tgfcot.mapper';

export class TgfcabMapper {
  static toDomain(raw: TgfcabEntity): Tgfcab {
    const domain = new Tgfcab();
    domain.nunota = raw.nunota;
    domain.codemp = raw.codemp;
    domain.numnota = raw.numnota;
    domain.serienota = trim(raw.serienota);
    domain.dtneg = raw.dtneg;
    domain.dtfatur = raw.dtfatur;
    domain.dtentsai = raw.dtentsai;
    domain.dtval = raw.dtval;
    domain.dtmov = raw.dtmov;
    domain.dtcontab = raw.dtcontab;
    domain.hrmov = raw.hrmov;
    domain.codparc = raw.codparc;
    domain.codcontato = raw.codcontato;
    domain.rateado = trim(raw.rateado);
    domain.codtipoper = raw.codtipoper;
    domain.dhtipoper = raw.dhtipoper;
    domain.tipmov = trim(raw.tipmov);
    domain.numcotacao = raw.numcotacao;
    domain.comissao = raw.comissao;
    domain.observacao = trim(raw.observacao);
    domain.vlrseg = raw.vlrseg;
    domain.vlricmsseg = raw.vlricmsseg;
    domain.vlrdestaque = raw.vlrdestaque;
    domain.vlrjuro = raw.vlrjuro;
    domain.vlrvendor = raw.vlrvendor;
    domain.vlroutros = raw.vlroutros;
    domain.vlremb = raw.vlremb;
    domain.vlricmsemb = raw.vlricmsemb;
    domain.vlrdescserv = raw.vlrdescserv;
    domain.ipiemb = raw.ipiemb;
    domain.tipipiemb = trim(raw.tipipiemb);
    domain.vlrdesctot = raw.vlrdesctot;
    domain.vlrdesctotitem = raw.vlrdesctotitem;
    domain.vlrfrete = raw.vlrfrete;
    domain.icmsfrete = raw.icmsfrete;
    domain.baseicmsfrete = raw.baseicmsfrete;
    domain.tipfrete = trim(raw.tipfrete);
    domain.cifFob = trim(raw.cifFob);
    domain.vencfrete = raw.vencfrete;
    domain.vencipi = raw.vencipi;
    domain.ordemcarga = raw.ordemcarga;
    domain.seqcarga = raw.seqcarga;
    domain.kmveiculo = raw.kmveiculo;
    domain.codparctransp = raw.codparctransp;
    domain.qtdvol = raw.qtdvol;
    domain.pendente = trim(raw.pendente);
    domain.baseicms = raw.baseicms;
    domain.vlricms = raw.vlricms;
    domain.baseipi = raw.baseipi;
    domain.vlripi = raw.vlripi;
    domain.issretido = trim(raw.issretido);
    domain.baseiss = raw.baseiss;
    domain.vlriss = raw.vlriss;
    if (raw.codusu2) {
      domain.codusu = new Tsiusu();
      domain.codusu.codusu = raw.codusu2.codusu;
      domain.codusu.nomeusu = trim(raw.codusu2.nomeusu);
    }
    domain.aprovado = trim(raw.aprovado);
    domain.vlrirf = raw.vlrirf;
    domain.irfretido = trim(raw.irfretido);
    domain.statusnota = trim(raw.statusnota);
    domain.comger = raw.comger;
    domain.dtalter = raw.dtalter;
    domain.volume = trim(raw.volume);
    domain.vlrsubst = raw.vlrsubst;
    domain.basesubstit = raw.basesubstit;
    domain.codproj = raw.codproj;
    domain.numcontrato = raw.numcontrato;
    domain.baseinss = raw.baseinss;
    domain.vlrinss = raw.vlrinss;
    domain.vlrrepredtot = raw.vlrrepredtot;
    domain.percdesc = raw.percdesc;
    domain.codparcremetente = raw.codparcremetente;
    domain.codparcconsignatario = raw.codparcconsignatario;
    domain.codparcredespacho = raw.codparcredespacho;
    domain.localcoleta = trim(raw.localcoleta);
    domain.localentrega = trim(raw.localentrega);
    domain.vlrmercadoria = raw.vlrmercadoria;
    domain.peso = raw.peso;
    domain.notascf = trim(raw.notascf);
    domain.codmoddoc = raw.codmoddoc;
    domain.numcf = raw.numcf;
    domain.vlrfretecpl = raw.vlrfretecpl;
    domain.troco = raw.troco;
    domain.nroredz = raw.nroredz;
    domain.vlrmoeda = raw.vlrmoeda;
    domain.occn48 = raw.occn48;
    domain.nutransf = raw.nutransf;
    domain.nurd8 = raw.nurd8;
    domain.codsite = raw.codsite;
    domain.totalcustoprod = raw.totalcustoprod;
    domain.totalcustoserv = raw.totalcustoserv;
    domain.basesubstsemred = raw.basesubstsemred;
    domain.codmotorista = raw.codmotorista;
    domain.naturezaoperdes = trim(raw.naturezaoperdes);
    domain.serienfdes = trim(raw.serienfdes);
    domain.modelonfdes = trim(raw.modelonfdes);
    domain.dtprevent = raw.dtprevent;
    domain.nunotapedfret = raw.nunotapedfret;
    domain.baseirf = raw.baseirf;
    domain.aliqirf = raw.aliqirf;
    domain.placa = trim(raw.placa);
    domain.pesobruto = raw.pesobruto;
    domain.hrentsai = raw.hrentsai;
    domain.antt = trim(raw.antt);
    domain.lacres = trim(raw.lacres);
    domain.danfe = raw.danfe;
    domain.chavenfe = trim(raw.chavenfe);
    domain.numeracaovolumes = trim(raw.numeracaovolumes);
    domain.dtenviopmb = raw.dtenviopmb;
    domain.tipnotapmb = trim(raw.tipnotapmb);
    domain.numaleatorio = raw.numaleatorio;
    domain.numprotoc = trim(raw.numprotoc);
    domain.dhprotoc = raw.dhprotoc;
    domain.dtenvsuf = raw.dtenvsuf;
    domain.statusnfe = trim(raw.statusnfe);
    domain.tpemisnfe = raw.tpemisnfe;
    domain.dtadiam = raw.dtadiam;
    domain.hradiam = raw.hradiam;
    domain.digital = trim(raw.digital);
    domain.totdispdesc = raw.totdispdesc;
    domain.basepis = raw.basepis;
    domain.vlrpis = raw.vlrpis;
    domain.basepisst = raw.basepisst;
    domain.vlrpisst = raw.vlrpisst;
    domain.basecofins = raw.basecofins;
    domain.vlrcofins = raw.vlrcofins;
    domain.basecofinsst = raw.basecofinsst;
    domain.vlrcofinsst = raw.vlrcofinsst;
    domain.vlrroyalt = raw.vlrroyalt;
    domain.nrocaixa = raw.nrocaixa;
    domain.numregdpec = trim(raw.numregdpec);
    domain.dhregdpec = raw.dhregdpec;
    domain.tpligacao = raw.tpligacao;
    domain.codgrupotensao = trim(raw.codgrupotensao);
    domain.tpassinante = raw.tpassinante;
    domain.vlrindeniz = raw.vlrindeniz;
    domain.marca = trim(raw.marca);
    domain.tipoptagjnfe = raw.tipoptagjnfe;
    domain.tpemisnfse = raw.tpemisnfse;
    domain.numnfse = trim(raw.numnfse);
    domain.statusnfse = trim(raw.statusnfse);
    domain.ufembarq = trim(raw.ufembarq);
    domain.locembarq = trim(raw.locembarq);
    domain.nurem = raw.nurem;
    domain.retdatacritica = trim(raw.retdatacritica);
    domain.qtdbatidas = raw.qtdbatidas;
    domain.percpureza = raw.percpureza;
    domain.percgermin = raw.percgermin;
    domain.fretevlrbruto = raw.fretevlrbruto;
    domain.fretevlrdesc = raw.fretevlrdesc;
    domain.fretepercdesc = raw.fretepercdesc;
    domain.fretevlrimp = raw.fretevlrimp;
    domain.fretevlrjur = raw.fretevlrjur;
    domain.fretevlrpago = raw.fretevlrpago;
    domain.numpedido = raw.numpedido;
    domain.vlrindenizdist = raw.vlrindenizdist;
    domain.numpedido2 = trim(raw.numpedido2);
    domain.dtref = raw.dtref;
    domain.agrupbol = trim(raw.agrupbol);
    domain.fretevlrnegoc = raw.fretevlrnegoc;
    domain.codprodpermuta = raw.codprodpermuta;
    domain.nrogar = raw.nrogar;
    domain.md5Paf = trim(raw.md5Paf);
    domain.codmoddocnota = raw.codmoddocnota;
    domain.cpfcnpjadquirente = trim(raw.cpfcnpjadquirente);
    domain.nomeadquirente = trim(raw.nomeadquirente);
    domain.vlrsacadolar = raw.vlrsacadolar;
    domain.numcoo = raw.numcoo;
    domain.ordemcargaant = raw.ordemcargaant;
    domain.tpambnfe = trim(raw.tpambnfe);
    domain.przmed = raw.przmed;
    domain.dtref2 = raw.dtref2;
    domain.vlrliqitemnfe = trim(raw.vlrliqitemnfe);
    domain.clascons = trim(raw.clascons);
    domain.numform = raw.numform;
    domain.dtref3 = raw.dtref3;
    domain.produetloc = trim(raw.produetloc);
    domain.vlrstextranotatot = raw.vlrstextranotatot;
    domain.nutranemp = raw.nutranemp;
    domain.sitespecialresp = trim(raw.sitespecialresp);
    domain.dtentsaiinfo = raw.dtentsaiinfo;
    domain.exigeissqn = trim(raw.exigeissqn);
    domain.regesptribut = trim(raw.regesptribut);
    domain.motnaoreterissqn = trim(raw.motnaoreterissqn);
    domain.dtremret = raw.dtremret;
    domain.libconf = trim(raw.libconf);
    domain.nuconfatual = raw.nuconfatual;
    domain.statusxtrategie = trim(raw.statusxtrategie);
    domain.vlrfretecalc = raw.vlrfretecalc;
    domain.vlrjurodist = raw.vlrjurodist;
    domain.notaempenho = trim(raw.notaempenho);
    domain.pesobrutomanual = trim(raw.pesobrutomanual);
    domain.pesoliquimanual = trim(raw.pesoliquimanual);
    domain.cancelado = trim(raw.cancelado);
    domain.nupca = raw.nupca;
    domain.indpresnfce = trim(raw.indpresnfce);
    domain.m3 = raw.m3;
    domain.vlrtotliqitemmoe = raw.vlrtotliqitemmoe;
    domain.vlrdesctotitemmoe = raw.vlrdesctotitemmoe;
    domain.chavecte = trim(raw.chavecte);
    domain.prodpred = trim(raw.prodpred);
    domain.tpemiscte = raw.tpemiscte;
    domain.tpambcte = trim(raw.tpambcte);
    domain.lotacao = trim(raw.lotacao);
    domain.statuscte = trim(raw.statuscte);
    domain.numaleatoriocte = raw.numaleatoriocte;
    domain.numprotoccte = trim(raw.numprotoccte);
    domain.dhprotoccte = raw.dhprotoccte;
    domain.nulotecte = raw.nulotecte;
    domain.dtdeclara = raw.dtdeclara;
    domain.situacaocte = trim(raw.situacaocte);
    domain.ctelotacao = trim(raw.ctelotacao);
    domain.codobra = trim(raw.codobra);
    domain.codart = trim(raw.codart);
    domain.idiproc = raw.idiproc;
    domain.viatransp = trim(raw.viatransp);
    domain.tipprocimp = trim(raw.tipprocimp);
    domain.cnpjadquirente = trim(raw.cnpjadquirente);
    domain.ufadquirente = trim(raw.ufadquirente);
    domain.nunotasub = raw.nunotasub;
    domain.chavenfse = trim(raw.chavenfse);
    domain.dhemissepec = raw.dhemissepec;
    domain.vlricmsdifaldest = raw.vlricmsdifaldest;
    domain.vlricmsdifalrem = raw.vlricmsdifalrem;
    domain.vlricmsfcp = raw.vlricmsfcp;
    domain.modentrega = trim(raw.modentrega);
    domain.ciot = raw.ciot;
    domain.vlrfretetotal = raw.vlrfretetotal;
    domain.fusoemissepec = trim(raw.fusoemissepec);
    domain.chavenferef = trim(raw.chavenferef);
    domain.vlrdescrat = raw.vlrdescrat;
    domain.seqconfirma = raw.seqconfirma;
    domain.codcontatoentrega = raw.codcontatoentrega;
    domain.codcidorigem = raw.codcidorigem;
    domain.codciddestino = raw.codciddestino;
    domain.codcidentrega = raw.codcidentrega;
    domain.coduforigem = raw.coduforigem;
    domain.codufdestino = raw.codufdestino;
    domain.codufentrega = raw.codufentrega;
    domain.classificms = trim(raw.classificms);
    domain.codrastreamentoect = trim(raw.codrastreamentoect);
    domain.nuodp = raw.nuodp;
    domain.nupedfrete = raw.nupedfrete;
    domain.codcidprest = raw.codcidprest;
    domain.formpgtcte = trim(raw.formpgtcte);
    domain.tpambnfse = trim(raw.tpambnfse);
    domain.percdescfob = raw.percdescfob;
    domain.termacordnota = trim(raw.termacordnota);
    domain.vlrdescqtd = raw.vlrdescqtd;
    domain.vlricmsfcpint = raw.vlricmsfcpint;
    domain.vlrstfcpint = raw.vlrstfcpint;
    domain.vlrstfcpintant = raw.vlrstfcpintant;
    domain.cteglobal = trim(raw.cteglobal);
    domain.vlrcargaaverb = raw.vlrcargaaverb;
    domain.nucfr = raw.nucfr;
    domain.nfedevrecusa = trim(raw.nfedevrecusa);
    domain.agrupfinnota = trim(raw.agrupfinnota);
    domain.vlrprestafrmm = raw.vlrprestafrmm;
    domain.vlrafrmm = raw.vlrafrmm;
    domain.idnavio = trim(raw.idnavio);
    domain.irinnavio = trim(raw.irinnavio);
    domain.direcaoviag = trim(raw.direcaoviag);
    domain.idbalsa01 = trim(raw.idbalsa01);
    domain.idbalsa02 = trim(raw.idbalsa02);
    domain.idbalsa03 = trim(raw.idbalsa03);
    domain.confirmnotafat = trim(raw.confirmnotafat);
    domain.permaltercentral = trim(raw.permaltercentral);
    domain.finalizadofox = trim(raw.finalizadofox);
    domain.vlrrepredtotsemdesc = raw.vlrrepredtotsemdesc;
    domain.numcupomeconect = raw.numcupomeconect;
    domain.timnufinorig = raw.timnufinorig;
    domain.timcontratovenda = raw.timcontratovenda;
    domain.timorigem = trim(raw.timorigem);
    domain.timcontratoltv = raw.timcontratoltv;
    domain.timnunotamod = raw.timnunotamod;
    domain.dtextempk280 = raw.dtextempk280;
    domain.latitude = trim(raw.latitude);
    domain.longitude = trim(raw.longitude);
    domain.coddocarrecad = raw.coddocarrecad;
    domain.numdocarrecad = trim(raw.numdocarrecad);
    domain.premiacaoestadual = trim(raw.premiacaoestadual);
    domain.nfseid = trim(raw.nfseid);
    domain.codparcdepo = raw.codparcdepo;
    domain.vlrfethab = raw.vlrfethab;
    domain.codcheckout = raw.codcheckout;
    domain.baseicmsat = raw.baseicmsat;
    domain.vlricmsat = raw.vlricmsat;
    domain.disdesautimpemb = trim(raw.disdesautimpemb);
    domain.valordesonpiscofins = raw.valordesonpiscofins;
    domain.iddescparceria = raw.iddescparceria;
    domain.vlrdescparceria = raw.vlrdescparceria;
    domain.clienteidparceria = raw.clienteidparceria;
    domain.idpontuacaoparceria = raw.idpontuacaoparceria;
    domain.nunotaorigcorte = raw.nunotaorigcorte;
    domain.baseicmsstfrete = raw.baseicmsstfrete;
    domain.icmsstfrete = raw.icmsstfrete;
    domain.vlrrepredst = raw.vlrrepredst;
    domain.intermed = trim(raw.intermed);
    domain.fistel = trim(raw.fistel);
    domain.numcstc = raw.numcstc;
    domain.qtdusu = raw.qtdusu;
    domain.numtermtel = trim(raw.numtermtel);
    domain.tipclienteservcom = raw.tipclienteservcom;
    domain.md5Modcomtel = trim(raw.md5Modcomtel);
    domain.indnegmodal = trim(raw.indnegmodal);
    domain.codprodpred = raw.codprodpred;
    domain.nuoscab = raw.nuoscab;
    domain.dthrinfracao = raw.dthrinfracao;
    domain.averbadotms = trim(raw.averbadotms);
    domain.codaft = raw.codaft;
    domain.dhaltertms = raw.dhaltertms;
    domain.tipoviagem = trim(raw.tipoviagem);
    domain.notaporpedidopdv = trim(raw.notaporpedidopdv);
    domain.adDescontafunc = trim(raw.adDescontafunc);
    domain.adStatusproposta = trim(raw.adStatusproposta);
    domain.adMotivooutros = trim(raw.adMotivooutros);
    domain.adAlimentacao = trim(raw.adAlimentacao);
    domain.adCombustivel = trim(raw.adCombustivel);
    domain.adTransporte = trim(raw.adTransporte);
    domain.adHospedagem = trim(raw.adHospedagem);
    domain.adSinaleiro = trim(raw.adSinaleiro);
    domain.adDtlimite = raw.adDtlimite;
    domain.sumvlriioutnota = raw.sumvlriioutnota;
    domain.somicmsnfenac = raw.somicmsnfenac;
    domain.adNunotareqorig = raw.adNunotareqorig;
    domain.retornoequipfiscal = trim(raw.retornoequipfiscal);
    domain.statuscfe = trim(raw.statuscfe);
    domain.sompiscofnfenac = raw.sompiscofnfenac;
    domain.adNumpedcomp = trim(raw.adNumpedcomp);
    domain.adDtpedcomp = raw.adDtpedcomp;
    domain.adVlrpedcomp = raw.adVlrpedcomp;
    domain.adObsfin = trim(raw.adObsfin);
    domain.adNroproposta = raw.adNroproposta;
    domain.adAtualizareq = trim(raw.adAtualizareq);
    domain.adOriginalreq = trim(raw.adOriginalreq);
    domain.adVlrkm = raw.adVlrkm;
    domain.adVlrfretesec = raw.adVlrfretesec;
    domain.adPrazofrete = raw.adPrazofrete;
    domain.adFormapgtofrete = trim(raw.adFormapgtofrete);
    domain.nurecebimento = raw.nurecebimento;
    domain.retgerwms = trim(raw.retgerwms);
    domain.nunotarec = raw.nunotarec;
    domain.adLocalexec = trim(raw.adLocalexec);
    domain.dhviagem = raw.dhviagem;
    domain.nusessao = raw.nusessao;
    domain.tpfretamento = raw.tpfretamento;
    domain.dtescrcont = raw.dtescrcont;
    domain.modrecebpdvweb = trim(raw.modrecebpdvweb);
    domain.chavecteref = trim(raw.chavecteref);
    domain.adPrioridade = trim(raw.adPrioridade);
    domain.numprotocincte = trim(raw.numprotocincte);
    domain.serienfse = trim(raw.serienfse);
    domain.histconfig = trim(raw.histconfig);
    domain.adResponsavelsetor = trim(raw.adResponsavelsetor);
    domain.chvnfeineref = trim(raw.chvnfeineref);
    domain.adExibedash = trim(raw.adExibedash);
    domain.caracser = trim(raw.caracser);
    domain.caracad = trim(raw.caracad);
    domain.somdespadunfenac = raw.somdespadunfenac;
    domain.numprotocinnfe = trim(raw.numprotocinnfe);
    domain.vlrrepterc = raw.vlrrepterc;
    domain.adDtfinaliza = raw.adDtfinaliza;
    domain.serieguia = trim(raw.serieguia);
    domain.numguia = raw.numguia;
    domain.ufemissao = trim(raw.ufemissao);
    domain.cpfresptec = trim(raw.cpfresptec);
    domain.tipoguia = trim(raw.tipoguia);
    domain.numreceitagro = trim(raw.numreceitagro);
    domain.chavesinief1324 = trim(raw.chavesinief1324);
    domain.chavenfcom = trim(raw.chavenfcom);
    domain.numprotocnfcom = trim(raw.numprotocnfcom);
    domain.nulotenfcom = raw.nulotenfcom;
    domain.statusnfcom = trim(raw.statusnfcom);
    domain.tpambnfcom = trim(raw.tpambnfcom);
    domain.situacaonfcom = trim(raw.situacaonfcom);
    domain.tpemisnfcom = raw.tpemisnfcom;
    domain.tpretiss = trim(raw.tpretiss);
    domain.adHorimetro = raw.adHorimetro;
    domain.adMotivoabast = trim(raw.adMotivoabast);
    domain.adDtinicioserv = raw.adDtinicioserv;
    domain.ufemiss = raw.ufemiss;
    if (raw.adCodususolicit) {
      domain.adCodususolicit = new Tsiusu();
      domain.adCodususolicit.codusu = raw.adCodususolicit.codusu;
      domain.adCodususolicit.nomeusu = trim(raw.adCodususolicit.nomeusu);
    }
    if (raw.codusucomprador) {
      domain.codusucomprador = new Tsiusu();
      domain.codusucomprador.codusu = raw.codusucomprador.codusu;
      domain.codusucomprador.nomeusu = trim(raw.codusucomprador.nomeusu);
    }
    if (raw.codusuinc) {
      domain.codusuinc = new Tsiusu();
      domain.codusuinc.codusu = raw.codusuinc.codusu;
      domain.codusuinc.nomeusu = trim(raw.codusuinc.nomeusu);
    }
    if (raw.adCodusucomp) {
      domain.adCodusucomp = new Tsiusu();
      domain.adCodusucomp.codusu = raw.adCodusucomp.codusu;
      domain.adCodusucomp.nomeusu = trim(raw.adCodusucomp.nomeusu);
    }
    if (raw.codusu2) {
      domain.codusu2 = new Tsiusu();
      domain.codusu2.codusu = raw.codusu2.codusu;
      domain.codusu2.nomeusu = trim(raw.codusu2.nomeusu);
    }
    if (raw.tgftop) {
      domain.tgftop = new Tgftop();
      domain.tgftop.codtipoper = raw.tgftop.codtipoper;
      domain.tgftop.descroper = trim(raw.tgftop.descroper);
    }
    if (raw.codcidinicte) {
      domain.cidadeOrigem = TsicidMapper.toDomain(raw.codcidinicte);
    }
    if (raw.codcidfimcte) {
      domain.cidadeDestino = TsicidMapper.toDomain(raw.codcidfimcte);
    }
    if (raw.codparc2) {
      domain.tgfpar = new Tgfpar();
      domain.tgfpar.codparc = raw.codparc2.codparc;
      domain.tgfpar.nomeparc = trim(raw.codparc2.nomeparc);
      domain.tgfpar.razaosocial = trim(raw.codparc2.razaosocial);
    }
    if (raw.tgfparRemetente) {
      domain.tgfparRemetente = TgfparMapper.toDomain(raw.tgfparRemetente);
    }
    if (raw.codcidinicte) {
      domain.cidadeOrigem = TsicidMapper.toDomain(raw.codcidinicte);
    }
    if (raw.codcidfimcte) {
      domain.cidadeDestino = TsicidMapper.toDomain(raw.codcidfimcte);
    }
    if (raw.numcotacao2) {
      // domain.numcotacao2 = TgfcotMapper.toDomain(raw.numcotacao2);
    }
    if (raw.codparctransp2) {
      domain.tgfparTransp = TgfparMapper.toDomain(raw.codparctransp2);
    }
    if (raw.codmotorista2) {
      domain.tgfparMotorista = TgfparMapper.toDomain(raw.codmotorista2);
    }
    if (raw.codveiculo) {
      // domain.tgfvei = TgfveiMapper.toDomain(raw.veiculo);
    }
    if (raw.codemp2) {
      // domain.codemp2 = TgfempMapper.toDomain(raw.codemp2);
    }
    domain.observacao = trim(raw.observacao);
    domain.pendente = trim(raw.pendente);
    domain.aprovado = trim(raw.aprovado);
    domain.cancelado = trim(raw.cancelado);
    domain.numpedido = raw.numpedido;
    domain.numpedido2 = trim(raw.numpedido2);
    domain.codparctransp = raw.codparctransp;
    if (raw.codparctransp2) {
      domain.tgfparTransp = TgfparMapper.toDomain(raw.codparctransp2);
    }
    domain.codmotorista = raw.codmotorista;
    if (raw.codmotorista2) {
      domain.tgfparMotorista = TgfparMapper.toDomain(raw.codmotorista2);
    }
    domain.codveiculo = raw.codveiculo ? raw.codveiculo.codveiculo : 0;
    domain.placa = trim(raw.placa);
    domain.kmveiculo = raw.kmveiculo;
    domain.pesobruto = raw.pesobruto;
    domain.qtdvol = raw.qtdvol;
    domain.volume = trim(raw.volume);
    domain.totalcustoprod = raw.totalcustoprod;
    domain.totalcustoserv = raw.totalcustoserv;

    // if (raw.tgfcots) {
    //   domain.tgfcots = raw.tgfcots.map((item) => TgfcotMapper.toDomain(item));
    // }

    if (raw.tgflibs) {
      domain.tgflibs = raw.tgflibs.map((item) => TgflibMapper.toDomain(item));
    }

    return domain;
  }

  static toPersistence(domain: Tgfcab): TgfcabEntity {
    const persistence = new TgfcabEntity();
    persistence.nunota = domain.nunota;
    persistence.codemp = domain.codemp;
    persistence.numnota = domain.numnota;
    persistence.serienota = domain.serienota;
    persistence.dtneg = domain.dtneg;
    persistence.dtfatur = domain.dtfatur;
    persistence.dtentsai = domain.dtentsai;
    persistence.dtval = domain.dtval;
    persistence.dtmov = domain.dtmov;
    persistence.dtcontab = domain.dtcontab;
    persistence.hrmov = domain.hrmov;
    persistence.codparc = domain.codparc;
    persistence.codcontato = domain.codcontato;
    persistence.rateado = domain.rateado ?? 'N';
    persistence.codtipoper = domain.codtipoper;
    persistence.dhtipoper = domain.dhtipoper;
    persistence.tipmov = domain.tipmov ?? 'P';
    persistence.numcotacao = domain.numcotacao;
    persistence.comissao = domain.comissao;
    persistence.observacao = domain.observacao;
    persistence.vlrseg = domain.vlrseg;
    persistence.vlricmsseg = domain.vlricmsseg;
    persistence.vlrdestaque = domain.vlrdestaque;
    persistence.vlrjuro = domain.vlrjuro;
    persistence.vlrvendor = domain.vlrvendor;
    persistence.vlroutros = domain.vlroutros;
    persistence.vlremb = domain.vlremb;
    persistence.vlricmsemb = domain.vlricmsemb;
    persistence.vlrdescserv = domain.vlrdescserv;
    persistence.ipiemb = domain.ipiemb;
    persistence.tipipiemb = domain.tipipiemb ?? 'N';
    persistence.vlrdesctot = domain.vlrdesctot;
    persistence.vlrdesctotitem = domain.vlrdesctotitem;
    persistence.vlrfrete = domain.vlrfrete;
    persistence.icmsfrete = domain.icmsfrete;
    persistence.baseicmsfrete = domain.baseicmsfrete;
    persistence.tipfrete = domain.tipfrete ?? 'S';
    persistence.cifFob = domain.cifFob;
    persistence.vencfrete = domain.vencfrete;
    persistence.vencipi = domain.vencipi;
    persistence.ordemcarga = domain.ordemcarga;
    persistence.seqcarga = domain.seqcarga;
    persistence.kmveiculo = domain.kmveiculo;
    persistence.codparctransp = domain.codparctransp;
    persistence.qtdvol = domain.qtdvol;
    persistence.pendente = domain.pendente ?? 'S';
    persistence.baseicms = domain.baseicms;
    persistence.vlricms = domain.vlricms;
    persistence.baseipi = domain.baseipi;
    persistence.vlripi = domain.vlripi;
    persistence.issretido = domain.issretido ?? 'S';
    persistence.baseiss = domain.baseiss;
    persistence.vlriss = domain.vlriss;
    if (domain.codusu) {
      persistence.codusu = domain.codusu.codusu;
    }
    persistence.aprovado = domain.aprovado ?? 'S';
    persistence.vlrirf = domain.vlrirf;
    persistence.irfretido = domain.irfretido ?? 'N';
    persistence.statusnota = domain.statusnota ?? 'P';
    persistence.comger = domain.comger;
    persistence.dtalter = domain.dtalter;
    persistence.volume = domain.volume;
    persistence.vlrsubst = domain.vlrsubst;
    persistence.basesubstit = domain.basesubstit;
    persistence.codproj = domain.codproj;
    persistence.numcontrato = domain.numcontrato;
    persistence.baseinss = domain.baseinss;
    persistence.vlrinss = domain.vlrinss;
    persistence.vlrrepredtot = domain.vlrrepredtot;
    persistence.percdesc = domain.percdesc;
    persistence.codparcremetente = domain.codparcremetente;
    persistence.codparcconsignatario = domain.codparcconsignatario;
    persistence.codparcredespacho = domain.codparcredespacho;
    persistence.localcoleta = domain.localcoleta;
    persistence.localentrega = domain.localentrega;
    persistence.vlrmercadoria = domain.vlrmercadoria;
    persistence.peso = domain.peso;
    persistence.notascf = domain.notascf;
    persistence.codmoddoc = domain.codmoddoc;
    persistence.numcf = domain.numcf;
    persistence.vlrfretecpl = domain.vlrfretecpl;
    persistence.troco = domain.troco;
    persistence.nroredz = domain.nroredz;
    persistence.vlrmoeda = domain.vlrmoeda;
    persistence.occn48 = domain.occn48;
    persistence.nutransf = domain.nutransf;
    persistence.nurd8 = domain.nurd8;
    persistence.codsite = domain.codsite;
    persistence.totalcustoprod = domain.totalcustoprod;
    persistence.totalcustoserv = domain.totalcustoserv;
    persistence.basesubstsemred = domain.basesubstsemred;
    persistence.codmotorista = domain.codmotorista;
    persistence.naturezaoperdes = domain.naturezaoperdes;
    persistence.serienfdes = domain.serienfdes;
    persistence.modelonfdes = domain.modelonfdes;
    persistence.dtprevent = domain.dtprevent;
    persistence.nunotapedfret = domain.nunotapedfret;
    persistence.baseirf = domain.baseirf;
    persistence.aliqirf = domain.aliqirf;
    persistence.placa = domain.placa;
    persistence.pesobruto = domain.pesobruto;
    persistence.hrentsai = domain.hrentsai;
    persistence.antt = domain.antt;
    persistence.lacres = domain.lacres;
    persistence.danfe = domain.danfe;
    persistence.chavenfe = domain.chavenfe;
    persistence.numeracaovolumes = domain.numeracaovolumes;
    persistence.dtenviopmb = domain.dtenviopmb;
    persistence.tipnotapmb = domain.tipnotapmb;
    persistence.numaleatorio = domain.numaleatorio;
    persistence.numprotoc = domain.numprotoc;
    persistence.dhprotoc = domain.dhprotoc;
    persistence.dtenvsuf = domain.dtenvsuf;
    persistence.statusnfe = domain.statusnfe;
    persistence.tpemisnfe = domain.tpemisnfe;
    persistence.dtadiam = domain.dtadiam;
    persistence.hradiam = domain.hradiam;
    persistence.digital = domain.digital;
    persistence.totdispdesc = domain.totdispdesc;
    persistence.basepis = domain.basepis;
    persistence.vlrpis = domain.vlrpis;
    persistence.basepisst = domain.basepisst;
    persistence.vlrpisst = domain.vlrpisst;
    persistence.basecofins = domain.basecofins;
    persistence.vlrcofins = domain.vlrcofins;
    persistence.basecofinsst = domain.basecofinsst;
    persistence.vlrcofinsst = domain.vlrcofinsst;
    persistence.vlrroyalt = domain.vlrroyalt;
    persistence.nrocaixa = domain.nrocaixa;
    persistence.numregdpec = domain.numregdpec;
    persistence.dhregdpec = domain.dhregdpec;
    persistence.tpligacao = domain.tpligacao;
    persistence.codgrupotensao = domain.codgrupotensao;
    persistence.tpassinante = domain.tpassinante;
    persistence.vlrindeniz = domain.vlrindeniz;
    persistence.marca = domain.marca;
    persistence.tipoptagjnfe = domain.tipoptagjnfe;
    persistence.tpemisnfse = domain.tpemisnfse;
    persistence.numnfse = domain.numnfse;
    persistence.statusnfse = domain.statusnfse;
    persistence.ufembarq = domain.ufembarq;
    persistence.locembarq = domain.locembarq;
    persistence.nurem = domain.nurem;
    persistence.retdatacritica = domain.retdatacritica;
    persistence.qtdbatidas = domain.qtdbatidas;
    persistence.percpureza = domain.percpureza;
    persistence.percgermin = domain.percgermin;
    persistence.fretevlrbruto = domain.fretevlrbruto;
    persistence.fretevlrdesc = domain.fretevlrdesc;
    persistence.fretepercdesc = domain.fretepercdesc;
    persistence.fretevlrimp = domain.fretevlrimp;
    persistence.fretevlrjur = domain.fretevlrjur;
    persistence.fretevlrpago = domain.fretevlrpago;
    persistence.numpedido = domain.numpedido;
    persistence.vlrindenizdist = domain.vlrindenizdist;
    persistence.numpedido2 = domain.numpedido2;
    persistence.dtref = domain.dtref;
    persistence.agrupbol = domain.agrupbol;
    persistence.fretevlrnegoc = domain.fretevlrnegoc;
    persistence.codprodpermuta = domain.codprodpermuta;
    persistence.nrogar = domain.nrogar;
    persistence.md5Paf = domain.md5Paf;
    persistence.codmoddocnota = domain.codmoddocnota;
    persistence.cpfcnpjadquirente = domain.cpfcnpjadquirente;
    persistence.nomeadquirente = domain.nomeadquirente;
    persistence.vlrsacadolar = domain.vlrsacadolar;
    persistence.numcoo = domain.numcoo;
    persistence.ordemcargaant = domain.ordemcargaant;
    persistence.tpambnfe = domain.tpambnfe;
    persistence.przmed = domain.przmed;
    persistence.dtref2 = domain.dtref2;
    persistence.vlrliqitemnfe = domain.vlrliqitemnfe;
    persistence.clascons = domain.clascons;
    persistence.numform = domain.numform;
    persistence.dtref3 = domain.dtref3;
    persistence.produetloc = domain.produetloc;
    persistence.vlrstextranotatot = domain.vlrstextranotatot;
    persistence.nutranemp = domain.nutranemp;
    persistence.sitespecialresp = domain.sitespecialresp;
    persistence.dtentsaiinfo = domain.dtentsaiinfo;
    persistence.exigeissqn = domain.exigeissqn;
    persistence.regesptribut = domain.regesptribut;
    persistence.motnaoreterissqn = domain.motnaoreterissqn;
    persistence.dtremret = domain.dtremret;
    persistence.libconf = domain.libconf;
    persistence.nuconfatual = domain.nuconfatual;
    persistence.statusxtrategie = domain.statusxtrategie;
    persistence.vlrfretecalc = domain.vlrfretecalc;
    persistence.vlrjurodist = domain.vlrjurodist;
    persistence.notaempenho = domain.notaempenho;
    persistence.pesobrutomanual = domain.pesobrutomanual;
    persistence.pesoliquimanual = domain.pesoliquimanual;
    persistence.cancelado = domain.cancelado;
    persistence.nupca = domain.nupca;
    persistence.indpresnfce = domain.indpresnfce;
    persistence.m3 = domain.m3;
    persistence.vlrtotliqitemmoe = domain.vlrtotliqitemmoe;
    persistence.vlrdesctotitemmoe = domain.vlrdesctotitemmoe;
    persistence.chavecte = domain.chavecte;
    persistence.prodpred = domain.prodpred;
    persistence.tpemiscte = domain.tpemiscte;
    persistence.tpambcte = domain.tpambcte;
    persistence.lotacao = domain.lotacao;
    persistence.statuscte = domain.statuscte;
    persistence.numaleatoriocte = domain.numaleatoriocte;
    persistence.numprotoccte = domain.numprotoccte;
    persistence.dhprotoccte = domain.dhprotoccte;
    persistence.nulotecte = domain.nulotecte;
    persistence.dtdeclara = domain.dtdeclara;
    persistence.situacaocte = domain.situacaocte;
    persistence.ctelotacao = domain.ctelotacao;
    persistence.codobra = domain.codobra;
    persistence.codart = domain.codart;
    persistence.idiproc = domain.idiproc;
    persistence.viatransp = domain.viatransp;
    persistence.tipprocimp = domain.tipprocimp;
    persistence.cnpjadquirente = domain.cnpjadquirente;
    persistence.ufadquirente = domain.ufadquirente;
    persistence.nunotasub = domain.nunotasub;
    persistence.chavenfse = domain.chavenfse;
    persistence.dhemissepec = domain.dhemissepec;
    persistence.vlricmsdifaldest = domain.vlricmsdifaldest;
    persistence.vlricmsdifalrem = domain.vlricmsdifalrem;
    persistence.vlricmsfcp = domain.vlricmsfcp;
    persistence.modentrega = domain.modentrega;
    persistence.ciot = domain.ciot;
    persistence.vlrfretetotal = domain.vlrfretetotal;
    persistence.fusoemissepec = domain.fusoemissepec;
    persistence.chavenferef = domain.chavenferef;
    persistence.vlrdescrat = domain.vlrdescrat;
    persistence.seqconfirma = domain.seqconfirma;
    persistence.codcontatoentrega = domain.codcontatoentrega;
    persistence.codcidorigem = domain.codcidorigem;
    persistence.codciddestino = domain.codciddestino;
    persistence.codcidentrega = domain.codcidentrega;
    persistence.coduforigem = domain.coduforigem;
    persistence.codufdestino = domain.codufdestino;
    persistence.codufentrega = domain.codufentrega;
    persistence.classificms = domain.classificms;
    persistence.codrastreamentoect = domain.codrastreamentoect;
    persistence.nuodp = domain.nuodp;
    persistence.nupedfrete = domain.nupedfrete;
    persistence.codcidprest = domain.codcidprest;
    persistence.formpgtcte = domain.formpgtcte;
    persistence.tpambnfse = domain.tpambnfse;
    persistence.percdescfob = domain.percdescfob;
    persistence.termacordnota = domain.termacordnota;
    persistence.vlrdescqtd = domain.vlrdescqtd;
    persistence.vlricmsfcpint = domain.vlricmsfcpint;
    persistence.vlrstfcpint = domain.vlrstfcpint;
    persistence.vlrstfcpintant = domain.vlrstfcpintant;
    persistence.cteglobal = domain.cteglobal;
    persistence.vlrcargaaverb = domain.vlrcargaaverb;
    persistence.nucfr = domain.nucfr;
    persistence.nfedevrecusa = domain.nfedevrecusa;
    persistence.agrupfinnota = domain.agrupfinnota;
    persistence.vlrprestafrmm = domain.vlrprestafrmm;
    persistence.vlrafrmm = domain.vlrafrmm;
    persistence.idnavio = domain.idnavio;
    persistence.irinnavio = domain.irinnavio;
    persistence.direcaoviag = domain.direcaoviag;
    persistence.idbalsa01 = domain.idbalsa01;
    persistence.idbalsa02 = domain.idbalsa02;
    persistence.idbalsa03 = domain.idbalsa03;
    persistence.confirmnotafat = domain.confirmnotafat;
    persistence.permaltercentral = domain.permaltercentral;
    persistence.finalizadofox = domain.finalizadofox;
    persistence.vlrrepredtotsemdesc = domain.vlrrepredtotsemdesc;
    persistence.numcupomeconect = domain.numcupomeconect;
    persistence.timnufinorig = domain.timnufinorig;
    persistence.timcontratovenda = domain.timcontratovenda;
    persistence.timorigem = domain.timorigem;
    persistence.timcontratoltv = domain.timcontratoltv;
    persistence.timnunotamod = domain.timnunotamod;
    persistence.dtextempk280 = domain.dtextempk280;
    persistence.latitude = domain.latitude;
    persistence.longitude = domain.longitude;
    persistence.coddocarrecad = domain.coddocarrecad;
    persistence.numdocarrecad = domain.numdocarrecad;
    persistence.premiacaoestadual = domain.premiacaoestadual;
    persistence.nfseid = domain.nfseid;
    persistence.codparcdepo = domain.codparcdepo;
    persistence.vlrfethab = domain.vlrfethab;
    persistence.codcheckout = domain.codcheckout;
    persistence.baseicmsat = domain.baseicmsat;
    persistence.vlricmsat = domain.vlricmsat;
    persistence.disdesautimpemb = domain.disdesautimpemb;
    persistence.valordesonpiscofins = domain.valordesonpiscofins;
    persistence.iddescparceria = domain.iddescparceria;
    persistence.vlrdescparceria = domain.vlrdescparceria;
    persistence.clienteidparceria = domain.clienteidparceria;
    persistence.idpontuacaoparceria = domain.idpontuacaoparceria;
    persistence.nunotaorigcorte = domain.nunotaorigcorte;
    persistence.baseicmsstfrete = domain.baseicmsstfrete;
    persistence.icmsstfrete = domain.icmsstfrete;
    persistence.vlrrepredst = domain.vlrrepredst;
    persistence.intermed = domain.intermed;
    persistence.fistel = domain.fistel;
    persistence.numcstc = domain.numcstc;
    persistence.qtdusu = domain.qtdusu;
    persistence.numtermtel = domain.numtermtel;
    persistence.tipclienteservcom = domain.tipclienteservcom;
    persistence.md5Modcomtel = domain.md5Modcomtel;
    persistence.indnegmodal = domain.indnegmodal;
    persistence.codprodpred = domain.codprodpred;
    persistence.nuoscab = domain.nuoscab;
    persistence.dthrinfracao = domain.dthrinfracao;
    persistence.averbadotms = domain.averbadotms;
    persistence.codaft = domain.codaft;
    persistence.dhaltertms = domain.dhaltertms;
    persistence.tipoviagem = domain.tipoviagem;
    persistence.notaporpedidopdv = domain.notaporpedidopdv ?? 'N';
    persistence.adDescontafunc = domain.adDescontafunc;
    persistence.adStatusproposta = domain.adStatusproposta;
    persistence.adMotivooutros = domain.adMotivooutros;
    persistence.adAlimentacao = domain.adAlimentacao;
    persistence.adCombustivel = domain.adCombustivel;
    persistence.adTransporte = domain.adTransporte;
    persistence.adHospedagem = domain.adHospedagem;
    persistence.adSinaleiro = domain.adSinaleiro;
    persistence.adDtlimite = domain.adDtlimite;
    persistence.sumvlriioutnota = domain.sumvlriioutnota;
    persistence.somicmsnfenac = domain.somicmsnfenac;
    persistence.adNunotareqorig = domain.adNunotareqorig;
    persistence.retornoequipfiscal = domain.retornoequipfiscal;
    persistence.statuscfe = domain.statuscfe;
    persistence.sompiscofnfenac = domain.sompiscofnfenac;
    persistence.adNumpedcomp = domain.adNumpedcomp;
    persistence.adDtpedcomp = domain.adDtpedcomp;
    persistence.adVlrpedcomp = domain.adVlrpedcomp;
    persistence.adObsfin = domain.adObsfin;
    persistence.adNroproposta = domain.adNroproposta;
    persistence.adAtualizareq = domain.adAtualizareq;
    persistence.adOriginalreq = domain.adOriginalreq;
    persistence.adVlrkm = domain.adVlrkm;
    persistence.adVlrfretesec = domain.adVlrfretesec;
    persistence.adPrazofrete = domain.adPrazofrete;
    persistence.adFormapgtofrete = domain.adFormapgtofrete;
    persistence.nurecebimento = domain.nurecebimento;
    persistence.retgerwms = domain.retgerwms;
    persistence.nunotarec = domain.nunotarec;
    persistence.adLocalexec = domain.adLocalexec;
    persistence.dhviagem = domain.dhviagem;
    persistence.nusessao = domain.nusessao;
    persistence.tpfretamento = domain.tpfretamento;
    persistence.dtescrcont = domain.dtescrcont;
    persistence.modrecebpdvweb = domain.modrecebpdvweb;
    persistence.chavecteref = domain.chavecteref;
    persistence.adPrioridade = domain.adPrioridade;
    persistence.numprotocincte = domain.numprotocincte;
    persistence.serienfse = domain.serienfse;
    persistence.histconfig = domain.histconfig;
    persistence.adResponsavelsetor = domain.adResponsavelsetor;
    persistence.chvnfeineref = domain.chvnfeineref;
    persistence.adExibedash = domain.adExibedash;
    persistence.caracser = domain.caracser;
    persistence.caracad = domain.caracad;
    persistence.somdespadunfenac = domain.somdespadunfenac;
    persistence.numprotocinnfe = domain.numprotocinnfe;
    persistence.vlrrepterc = domain.vlrrepterc;
    persistence.adDtfinaliza = domain.adDtfinaliza;
    persistence.serieguia = domain.serieguia;
    persistence.numguia = domain.numguia;
    persistence.ufemissao = domain.ufemissao;
    persistence.cpfresptec = domain.cpfresptec;
    persistence.tipoguia = domain.tipoguia;
    persistence.numreceitagro = domain.numreceitagro;
    persistence.chavesinief1324 = domain.chavesinief1324;
    persistence.chavenfcom = domain.chavenfcom;
    persistence.numprotocnfcom = domain.numprotocnfcom;
    persistence.nulotenfcom = domain.nulotenfcom;
    persistence.statusnfcom = domain.statusnfcom;
    persistence.tpambnfcom = domain.tpambnfcom;
    persistence.situacaonfcom = domain.situacaonfcom;
    persistence.tpemisnfcom = domain.tpemisnfcom;
    persistence.tpretiss = domain.tpretiss;
    persistence.adHorimetro = domain.adHorimetro;
    persistence.adMotivoabast = domain.adMotivoabast;
    persistence.adDtinicioserv = domain.adDtinicioserv;
    persistence.ufemiss = domain.ufemiss;
    if (domain.adCodususolicit) {
      persistence.adCodususolicit = new TsiusuEntity();
      persistence.adCodususolicit.codusu = domain.adCodususolicit.codusu;
    }
    if (domain.codusucomprador) {
      persistence.codusucomprador = new TsiusuEntity();
      persistence.codusucomprador.codusu = domain.codusucomprador.codusu;
    }
    if (domain.codusuinc) {
      persistence.codusuinc = new TsiusuEntity();
      persistence.codusuinc.codusu = domain.codusuinc.codusu;
    }
    if (domain.adCodusucomp) {
      persistence.adCodusucomp = new TsiusuEntity();
      persistence.adCodusucomp.codusu = domain.adCodusucomp.codusu;
    }
    if (domain.codusu2) {
      persistence.codusu2 = new TsiusuEntity();
      persistence.codusu2.codusu = domain.codusu2.codusu;
    }
    if (domain.tgftop) {
      persistence.tgftop = new TgftopEntity();
      persistence.tgftop.codtipoper = domain.tgftop.codtipoper;
    }
    return persistence;
  }

  static toResponse(entity: Tgfcab): TgfcabResponseDto {
    const response = new TgfcabResponseDto();
    response.nunota = entity.nunota;
    response.codemp = entity.codemp;
    response.numnota = entity.numnota;
    response.serienota = entity.serienota;
    response.dtneg = entity.dtneg;
    response.dtfatur = entity.dtfatur;
    response.dtentsai = entity.dtentsai;
    response.dtval = entity.dtval;
    response.dtmov = entity.dtmov;
    response.dtcontab = entity.dtcontab;
    response.hrmov = entity.hrmov;
    response.codparc = entity.codparc;
    response.codcontato = entity.codcontato;
    response.rateado = entity.rateado;
    response.codtipoper = entity.codtipoper;
    response.dhtipoper = entity.dhtipoper;
    response.tipmov = entity.tipmov;
    response.numcotacao = entity.numcotacao;
    response.comissao = entity.comissao;
    response.observacao = entity.observacao;
    response.vlrseg = entity.vlrseg;
    response.vlricmsseg = entity.vlricmsseg;
    response.vlrdestaque = entity.vlrdestaque;
    response.vlrjuro = entity.vlrjuro;
    response.vlrvendor = entity.vlrvendor;
    response.vlroutros = entity.vlroutros;
    response.vlremb = entity.vlremb;
    response.vlricmsemb = entity.vlricmsemb;
    response.vlrdescserv = entity.vlrdescserv;
    response.ipiemb = entity.ipiemb;
    response.tipipiemb = entity.tipipiemb;
    response.vlrdesctot = entity.vlrdesctot;
    response.vlrdesctotitem = entity.vlrdesctotitem;
    response.vlrfrete = entity.vlrfrete;
    response.icmsfrete = entity.icmsfrete;
    response.baseicmsfrete = entity.baseicmsfrete;
    response.tipfrete = entity.tipfrete;
    response.cifFob = entity.cifFob;
    response.vencfrete = entity.vencfrete;
    response.vencipi = entity.vencipi;
    response.ordemcarga = entity.ordemcarga;
    response.seqcarga = entity.seqcarga;
    response.kmveiculo = entity.kmveiculo;
    response.codparctransp = entity.codparctransp;
    response.qtdvol = entity.qtdvol;
    response.pendente = entity.pendente;
    response.baseicms = entity.baseicms;
    response.vlricms = entity.vlricms;
    response.baseipi = entity.baseipi;
    response.vlripi = entity.vlripi;
    response.issretido = entity.issretido;
    response.baseiss = entity.baseiss;
    response.vlriss = entity.vlriss;
    if (entity.codusu) {
      response.codusu2 = {
        codusu: entity.codusu.codusu,
        nomeusu: entity.codusu.nomeusu,
        email: entity.codusu.email ?? null,
      };
    }
    response.aprovado = entity.aprovado;
    response.vlrirf = entity.vlrirf;
    response.irfretido = entity.irfretido;
    response.statusnota = entity.statusnota;
    response.comger = entity.comger;
    response.dtalter = entity.dtalter;
    response.volume = entity.volume;
    response.vlrsubst = entity.vlrsubst;
    response.basesubstit = entity.basesubstit;
    response.codproj = entity.codproj;
    response.numcontrato = entity.numcontrato;
    response.baseinss = entity.baseinss;
    response.vlrinss = entity.vlrinss;
    response.vlrrepredtot = entity.vlrrepredtot;
    response.percdesc = entity.percdesc;
    response.codparcremetente = entity.codparcremetente;
    response.codparcconsignatario = entity.codparcconsignatario;
    response.codparcredespacho = entity.codparcredespacho;
    response.localcoleta = entity.localcoleta;
    response.localentrega = entity.localentrega;
    response.vlrmercadoria = entity.vlrmercadoria;
    response.peso = entity.peso;
    response.notascf = entity.notascf;
    response.codmoddoc = entity.codmoddoc;
    response.numcf = entity.numcf;
    response.vlrfretecpl = entity.vlrfretecpl;
    response.troco = entity.troco;
    response.nroredz = entity.nroredz;
    response.vlrmoeda = entity.vlrmoeda;
    response.occn48 = entity.occn48;
    response.nutransf = entity.nutransf;
    response.nurd8 = entity.nurd8;
    response.codsite = entity.codsite;
    response.totalcustoprod = entity.totalcustoprod;
    response.totalcustoserv = entity.totalcustoserv;
    response.basesubstsemred = entity.basesubstsemred;
    response.codmotorista = entity.codmotorista;
    response.naturezaoperdes = entity.naturezaoperdes;
    response.serienfdes = entity.serienfdes;
    response.modelonfdes = entity.modelonfdes;
    response.dtprevent = entity.dtprevent;
    response.nunotapedfret = entity.nunotapedfret;
    response.baseirf = entity.baseirf;
    response.aliqirf = entity.aliqirf;
    response.placa = entity.placa;
    response.pesobruto = entity.pesobruto;
    response.hrentsai = entity.hrentsai;
    response.antt = entity.antt;
    response.lacres = entity.lacres;
    response.danfe = entity.danfe;
    response.chavenfe = entity.chavenfe;
    response.numeracaovolumes = entity.numeracaovolumes;
    response.dtenviopmb = entity.dtenviopmb;
    response.tipnotapmb = entity.tipnotapmb;
    response.numaleatorio = entity.numaleatorio;
    response.numprotoc = entity.numprotoc;
    response.dhprotoc = entity.dhprotoc;
    response.dtenvsuf = entity.dtenvsuf;
    response.statusnfe = entity.statusnfe;
    response.tpemisnfe = entity.tpemisnfe;
    response.dtadiam = entity.dtadiam;
    response.hradiam = entity.hradiam;
    response.digital = entity.digital;
    response.totdispdesc = entity.totdispdesc;
    response.basepis = entity.basepis;
    response.vlrpis = entity.vlrpis;
    response.basepisst = entity.basepisst;
    response.vlrpisst = entity.vlrpisst;
    response.basecofins = entity.basecofins;
    response.vlrcofins = entity.vlrcofins;
    response.basecofinsst = entity.basecofinsst;
    response.vlrcofinsst = entity.vlrcofinsst;
    response.vlrroyalt = entity.vlrroyalt;
    response.nrocaixa = entity.nrocaixa;
    response.numregdpec = entity.numregdpec;
    response.dhregdpec = entity.dhregdpec;
    response.tpligacao = entity.tpligacao;
    response.codgrupotensao = entity.codgrupotensao;
    response.tpassinante = entity.tpassinante;
    response.vlrindeniz = entity.vlrindeniz;
    response.marca = entity.marca;
    response.tipoptagjnfe = entity.tipoptagjnfe;
    response.tpemisnfse = entity.tpemisnfse;
    response.numnfse = entity.numnfse;
    response.statusnfse = entity.statusnfse;
    response.ufembarq = entity.ufembarq;
    response.locembarq = entity.locembarq;
    response.nurem = entity.nurem;
    response.retdatacritica = entity.retdatacritica;
    response.qtdbatidas = entity.qtdbatidas;
    response.percpureza = entity.percpureza;
    response.percgermin = entity.percgermin;
    response.fretevlrbruto = entity.fretevlrbruto;
    response.fretevlrdesc = entity.fretevlrdesc;
    response.fretepercdesc = entity.fretepercdesc;
    response.fretevlrimp = entity.fretevlrimp;
    response.fretevlrjur = entity.fretevlrjur;
    response.fretevlrpago = entity.fretevlrpago;
    response.numpedido = entity.numpedido;
    response.vlrindenizdist = entity.vlrindenizdist;
    response.numpedido2 = entity.numpedido2;
    response.dtref = entity.dtref;
    response.agrupbol = entity.agrupbol;
    response.fretevlrnegoc = entity.fretevlrnegoc;
    response.codprodpermuta = entity.codprodpermuta;
    response.nrogar = entity.nrogar;
    response.md5Paf = entity.md5Paf;
    response.codmoddocnota = entity.codmoddocnota;
    response.cpfcnpjadquirente = entity.cpfcnpjadquirente;
    response.nomeadquirente = entity.nomeadquirente;
    response.vlrsacadolar = entity.vlrsacadolar;
    response.numcoo = entity.numcoo;
    response.ordemcargaant = entity.ordemcargaant;
    response.tpambnfe = entity.tpambnfe;
    response.przmed = entity.przmed;
    response.dtref2 = entity.dtref2;
    response.vlrliqitemnfe = entity.vlrliqitemnfe;
    response.clascons = entity.clascons;
    response.numform = entity.numform;
    response.dtref3 = entity.dtref3;
    response.produetloc = entity.produetloc;
    response.vlrstextranotatot = entity.vlrstextranotatot;
    response.nutranemp = entity.nutranemp;
    response.sitespecialresp = entity.sitespecialresp;
    response.dtentsaiinfo = entity.dtentsaiinfo;
    response.exigeissqn = entity.exigeissqn;
    response.regesptribut = entity.regesptribut;
    response.motnaoreterissqn = entity.motnaoreterissqn;
    response.dtremret = entity.dtremret;
    response.libconf = entity.libconf;
    response.nuconfatual = entity.nuconfatual;
    response.statusxtrategie = entity.statusxtrategie;
    response.vlrfretecalc = entity.vlrfretecalc;
    response.vlrjurodist = entity.vlrjurodist;
    response.notaempenho = entity.notaempenho;
    response.pesobrutomanual = entity.pesobrutomanual;
    response.pesoliquimanual = entity.pesoliquimanual;
    response.cancelado = entity.cancelado;
    response.nupca = entity.nupca;
    response.indpresnfce = entity.indpresnfce;
    response.m3 = entity.m3;
    response.vlrtotliqitemmoe = entity.vlrtotliqitemmoe;
    response.vlrdesctotitemmoe = entity.vlrdesctotitemmoe;
    response.chavecte = entity.chavecte;
    response.prodpred = entity.prodpred;
    response.tpemiscte = entity.tpemiscte;
    response.tpambcte = entity.tpambcte;
    response.lotacao = entity.lotacao;
    response.statuscte = entity.statuscte;
    response.numaleatoriocte = entity.numaleatoriocte;
    response.numprotoccte = entity.numprotoccte;
    response.dhprotoccte = entity.dhprotoccte;
    response.nulotecte = entity.nulotecte;
    response.dtdeclara = entity.dtdeclara;
    response.situacaocte = entity.situacaocte;
    response.ctelotacao = entity.ctelotacao;
    response.codobra = entity.codobra;
    response.codart = entity.codart;
    response.idiproc = entity.idiproc;
    response.viatransp = entity.viatransp;
    response.tipprocimp = entity.tipprocimp;
    response.cnpjadquirente = entity.cnpjadquirente;
    response.ufadquirente = entity.ufadquirente;
    response.nunotasub = entity.nunotasub;
    response.chavenfse = entity.chavenfse;
    response.dhemissepec = entity.dhemissepec;
    response.vlricmsdifaldest = entity.vlricmsdifaldest;
    response.vlricmsdifalrem = entity.vlricmsdifalrem;
    response.vlricmsfcp = entity.vlricmsfcp;
    response.modentrega = entity.modentrega;
    response.ciot = entity.ciot;
    response.vlrfretetotal = entity.vlrfretetotal;
    response.fusoemissepec = entity.fusoemissepec;
    response.chavenferef = entity.chavenferef;
    response.vlrdescrat = entity.vlrdescrat;
    response.seqconfirma = entity.seqconfirma;
    response.codcontatoentrega = entity.codcontatoentrega;
    response.codcidorigem = entity.codcidorigem;
    response.codciddestino = entity.codciddestino;
    response.codcidentrega = entity.codcidentrega;
    response.coduforigem = entity.coduforigem;
    response.codufdestino = entity.codufdestino;
    response.codufentrega = entity.codufentrega;
    response.classificms = entity.classificms;
    response.codrastreamentoect = entity.codrastreamentoect;
    response.nuodp = entity.nuodp;
    response.nupedfrete = entity.nupedfrete;
    response.codcidprest = entity.codcidprest;
    response.formpgtcte = entity.formpgtcte;
    response.tpambnfse = entity.tpambnfse;
    response.percdescfob = entity.percdescfob;
    response.termacordnota = entity.termacordnota;
    response.vlrdescqtd = entity.vlrdescqtd;
    response.vlricmsfcpint = entity.vlricmsfcpint;
    response.vlrstfcpint = entity.vlrstfcpint;
    response.vlrstfcpintant = entity.vlrstfcpintant;
    response.cteglobal = entity.cteglobal;
    response.vlrcargaaverb = entity.vlrcargaaverb;
    response.nucfr = entity.nucfr;
    response.nfedevrecusa = entity.nfedevrecusa;
    response.agrupfinnota = entity.agrupfinnota;
    response.vlrprestafrmm = entity.vlrprestafrmm;
    response.vlrafrmm = entity.vlrafrmm;
    response.idnavio = entity.idnavio;
    response.irinnavio = entity.irinnavio;
    response.direcaoviag = entity.direcaoviag;
    response.idbalsa01 = entity.idbalsa01;
    response.idbalsa02 = entity.idbalsa02;
    response.idbalsa03 = entity.idbalsa03;
    response.confirmnotafat = entity.confirmnotafat;
    response.permaltercentral = entity.permaltercentral;
    response.finalizadofox = entity.finalizadofox;
    response.vlrrepredtotsemdesc = entity.vlrrepredtotsemdesc;
    response.numcupomeconect = entity.numcupomeconect;
    response.timnufinorig = entity.timnufinorig;
    response.timcontratovenda = entity.timcontratovenda;
    response.timorigem = entity.timorigem;
    response.timcontratoltv = entity.timcontratoltv;
    response.timnunotamod = entity.timnunotamod;
    response.dtextempk280 = entity.dtextempk280;
    response.latitude = entity.latitude;
    response.longitude = entity.longitude;
    response.coddocarrecad = entity.coddocarrecad;
    response.numdocarrecad = entity.numdocarrecad;
    response.premiacaoestadual = entity.premiacaoestadual;
    response.nfseid = entity.nfseid;
    response.codparcdepo = entity.codparcdepo;
    response.vlrfethab = entity.vlrfethab;
    response.codcheckout = entity.codcheckout;
    response.baseicmsat = entity.baseicmsat;
    response.vlricmsat = entity.vlricmsat;
    response.disdesautimpemb = entity.disdesautimpemb;
    response.valordesonpiscofins = entity.valordesonpiscofins;
    response.iddescparceria = entity.iddescparceria;
    response.vlrdescparceria = entity.vlrdescparceria;
    response.clienteidparceria = entity.clienteidparceria;
    response.idpontuacaoparceria = entity.idpontuacaoparceria;
    response.nunotaorigcorte = entity.nunotaorigcorte;
    response.baseicmsstfrete = entity.baseicmsstfrete;
    response.icmsstfrete = entity.icmsstfrete;
    response.vlrrepredst = entity.vlrrepredst;
    response.intermed = entity.intermed;
    response.fistel = entity.fistel;
    response.numcstc = entity.numcstc;
    response.qtdusu = entity.qtdusu;
    response.numtermtel = entity.numtermtel;
    response.tipclienteservcom = entity.tipclienteservcom;
    response.md5Modcomtel = entity.md5Modcomtel;
    response.indnegmodal = entity.indnegmodal;
    response.codprodpred = entity.codprodpred;
    response.nuoscab = entity.nuoscab;
    response.dthrinfracao = entity.dthrinfracao;
    response.averbadotms = entity.averbadotms;
    response.codaft = entity.codaft;
    response.dhaltertms = entity.dhaltertms;
    response.tipoviagem = entity.tipoviagem;
    response.notaporpedidopdv = entity.notaporpedidopdv;
    response.adDescontafunc = entity.adDescontafunc;
    response.adStatusproposta = entity.adStatusproposta;
    response.adMotivooutros = entity.adMotivooutros;
    response.adAlimentacao = entity.adAlimentacao;
    response.adCombustivel = entity.adCombustivel;
    response.adTransporte = entity.adTransporte;
    response.adHospedagem = entity.adHospedagem;
    response.adSinaleiro = entity.adSinaleiro;
    response.adDtlimite = entity.adDtlimite;
    response.sumvlriioutnota = entity.sumvlriioutnota;
    response.somicmsnfenac = entity.somicmsnfenac;
    response.adNunotareqorig = entity.adNunotareqorig;
    response.retornoequipfiscal = entity.retornoequipfiscal;
    response.statuscfe = entity.statuscfe;
    response.sompiscofnfenac = entity.sompiscofnfenac;
    response.adNumpedcomp = entity.adNumpedcomp;
    response.adDtpedcomp = entity.adDtpedcomp;
    response.adVlrpedcomp = entity.adVlrpedcomp;
    response.adObsfin = entity.adObsfin;
    response.adNroproposta = entity.adNroproposta;
    response.adAtualizareq = entity.adAtualizareq;
    response.adOriginalreq = entity.adOriginalreq;
    response.adVlrkm = entity.adVlrkm;
    response.adVlrfretesec = entity.adVlrfretesec;
    response.adPrazofrete = entity.adPrazofrete;
    response.adFormapgtofrete = entity.adFormapgtofrete;
    response.nurecebimento = entity.nurecebimento;
    response.retgerwms = entity.retgerwms;
    response.nunotarec = entity.nunotarec;
    response.adLocalexec = entity.adLocalexec;
    response.dhviagem = entity.dhviagem;
    response.nusessao = entity.nusessao;
    response.tpfretamento = entity.tpfretamento;
    response.dtescrcont = entity.dtescrcont;
    response.modrecebpdvweb = entity.modrecebpdvweb;
    response.chavecteref = entity.chavecteref;
    response.adPrioridade = entity.adPrioridade;
    response.numprotocincte = entity.numprotocincte;
    response.serienfse = entity.serienfse;
    response.histconfig = entity.histconfig;
    response.adResponsavelsetor = entity.adResponsavelsetor;
    response.chvnfeineref = entity.chvnfeineref;
    response.adExibedash = entity.adExibedash;
    response.caracser = entity.caracser;
    response.caracad = entity.caracad;
    response.somdespadunfenac = entity.somdespadunfenac;
    response.numprotocinnfe = entity.numprotocinnfe;
    response.vlrrepterc = entity.vlrrepterc;
    response.adDtfinaliza = entity.adDtfinaliza;
    response.serieguia = entity.serieguia;
    response.numguia = entity.numguia;
    response.ufemissao = entity.ufemissao;
    response.cpfresptec = entity.cpfresptec;
    response.tipoguia = entity.tipoguia;
    response.numreceitagro = entity.numreceitagro;
    response.chavesinief1324 = entity.chavesinief1324;
    response.chavenfcom = entity.chavenfcom;
    response.numprotocnfcom = entity.numprotocnfcom;
    response.nulotenfcom = entity.nulotenfcom;
    response.statusnfcom = entity.statusnfcom;
    response.tpambnfcom = entity.tpambnfcom;
    response.situacaonfcom = entity.situacaonfcom;
    response.tpemisnfcom = entity.tpemisnfcom;
    response.tpretiss = entity.tpretiss;
    response.adHorimetro = entity.adHorimetro;
    response.adMotivoabast = entity.adMotivoabast;
    response.adDtinicioserv = entity.adDtinicioserv;
    response.ufemiss = entity.ufemiss;
    if (entity.adCodususolicit) {
      response.adCodususolicit = {
        codusu: entity.adCodususolicit.codusu,
        nomeusu: entity.adCodususolicit.nomeusu,
        email: entity.adCodususolicit.email ?? null,
      };
    }
    if (entity.codusucomprador) {
      response.codusucomprador = {
        codusu: entity.codusucomprador.codusu,
        nomeusu: entity.codusucomprador.nomeusu,
        email: entity.codusucomprador.email ?? null,
      };
    }
    if (entity.codusuinc) {
      response.codusuinc = {
        codusu: entity.codusuinc.codusu,
        nomeusu: entity.codusuinc.nomeusu,
        email: entity.codusuinc.email ?? null,
      };
    }
    if (entity.adCodusucomp) {
      response.adCodusucomp = {
        codusu: entity.adCodusucomp.codusu,
        nomeusu: entity.adCodusucomp.nomeusu,
        email: entity.adCodusucomp.email ?? null,
      };
    }
    if (entity.codusu2) {
      response.codusu2 = {
        codusu: entity.codusu2.codusu,
        nomeusu: entity.codusu2.nomeusu,
        email: entity.codusu2.email ?? null,
      };
    }
    if (entity.tgftop) {
      response.tgftop = {
        codtipoper: entity.tgftop.codtipoper,
        descroper: entity.tgftop.descroper,
      };
    }
    if (entity.cidadeOrigem) {
      response.cidadeOrigem = TsicidMapper.toResponse(entity.cidadeOrigem);
    }
    if (entity.cidadeDestino) {
      response.cidadeDestino = TsicidMapper.toResponse(entity.cidadeDestino);
    }
    if (entity.tgfpar) {
      response.tgfpar = TgfparMapper.toResponse(entity.tgfpar);
    }
    return response;
  }

  static toSummaryResponse(domain: Tgfcab): TgfcabSummaryDto {
    const response = new TgfcabSummaryDto();
    response.nunota = domain.nunota;
    response.codemp = domain.codemp;
    response.numnota = domain.numnota;
    response.serienota = domain.serienota;
    response.dtneg = domain.dtneg;
    response.dtfatur = domain.dtfatur;
    response.dtentsai = domain.dtentsai;
    response.tipmov = translateTipmov(domain.tipmov);
    response.statusnota = translateStatusnota(domain.statusnota);
    response.vlrnota = domain.vlrnota;
    response.vlrfrete = domain.vlrfrete;
    response.peso = domain.peso;
    response.chavenfe = domain.chavenfe;
    response.numcotacao = domain.numcotacao;
    response.codparc = domain.codparc;
    if (domain.tgfpar) {
      response.tgfpar = TgfparMapper.toResponse(domain.tgfpar);
    }
    response.codparcremetente = domain.codparcremetente;
    if (domain.tgfparRemetente) {
      response.tgfparRemetente = TgfparMapper.toResponse(
        domain.tgfparRemetente,
      );
    }
    if (domain.codusu2) {
      response.codusu2 = TsiusuMapper.toResponse(domain.codusu2);
    }
    if (domain.tgftop) {
      response.tgftop = TgftopMapper.toResponse(domain.tgftop);
    }
    if (domain.tgfites) {
      response.tgfites = domain.tgfites.map((item) =>
        TgfiteMapper.toResponse(item),
      );
    }
    if (domain.tgflibs) {
      response.tgflibs = domain.tgflibs.map((item) =>
        TgflibMapper.toResponse(item),
      );
    }
    response.codcidorigem = domain.codcidorigem;
    if (domain.cidadeOrigem) {
      response.cidadeOrigem = TsicidMapper.toResponse(domain.cidadeOrigem);
    }
    response.codciddestino = domain.codciddestino;
    if (domain.cidadeDestino) {
      response.cidadeDestino = TsicidMapper.toResponse(domain.cidadeDestino);
    }
    if (domain.adNunotapedcompra) {
      response.adNunotapedcompra = TgfcabMapper.toSummaryResponse(
        domain.adNunotapedcompra,
      );
    }

    if (domain.tgfparRemetente) {
      response.tgfparRemetente = TgfparMapper.toResponse(
        domain.tgfparRemetente,
      );
    }

    if (domain.cidadeOrigem) {
      response.cidadeOrigem = TsicidMapper.toResponse(domain.cidadeOrigem);
    }

    if (domain.cidadeDestino) {
      response.cidadeDestino = TsicidMapper.toResponse(domain.cidadeDestino);
    }

    if (domain.tgfparTransp) {
      response.tgfparTransp = TgfparMapper.toResponse(domain.tgfparTransp);
    }

    if (domain.tgfparMotorista) {
      response.tgfparMotorista = TgfparMapper.toResponse(
        domain.tgfparMotorista,
      );
    }

    response.observacao = domain.observacao;
    response.pendente = domain.pendente;
    response.aprovado = domain.aprovado;
    response.cancelado = domain.cancelado;
    response.numpedido = domain.numpedido;
    response.numpedido2 = domain.numpedido2;
    response.codparctransp = domain.codparctransp;
    if (domain.tgfparTransp) {
      response.tgfparTransp = TgfparMapper.toResponse(domain.tgfparTransp);
    }
    response.codmotorista = domain.codmotorista;
    if (domain.tgfparMotorista) {
      response.tgfparMotorista = TgfparMapper.toResponse(
        domain.tgfparMotorista,
      );
    }
    response.codveiculo = domain.codveiculo;
    response.placa = domain.placa;
    response.kmveiculo = domain.kmveiculo;
    response.pesobruto = domain.pesobruto;
    response.qtdvol = domain.qtdvol;
    response.volume = domain.volume;
    response.totalcustoprod = domain.totalcustoprod;
    response.totalcustoserv = domain.totalcustoserv;

    return response;
  }
}
