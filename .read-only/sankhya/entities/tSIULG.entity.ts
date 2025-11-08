import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIULG', ['spid'], { unique: true })
@Entity('TSIULG', { schema: 'SANKHYA' })
export class TsiulgEntity {
  @Column('int', { primary: true, name: 'SPID' })
  spid: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'NOMEUSU', nullable: true, length: 40 })
  nomeusu: string | null;

  @Column('char', { name: 'BAIXAPARCIAL', length: 1, default: () => "'N'" })
  baixaparcial: string;

  @Column('smallint', { name: 'TIPOEMPRESA', default: () => '(0)' })
  tipoempresa: number;

  @Column('smallint', { name: 'TIPORESERVA', default: () => '(-1)' })
  tiporeserva: number;

  @Column('char', {
    name: 'VALIDA_FINANCEIRO',
    length: 1,
    default: () => "'S'",
  })
  validaFinanceiro: string;

  @Column('char', { name: 'RASTEST_LIBEXEC', length: 1, default: () => "'N'" })
  rastestLibexec: string;

  @Column('smallint', { name: 'ATUALIZANDO', default: () => '(0)' })
  atualizando: number;

  @Column('char', { name: 'ALTERADO_CAB', length: 1, default: () => "'N'" })
  alteradoCab: string;

  @Column('smallint', { name: 'PROCRET', default: () => '(0)' })
  procret: number;

  @Column('char', {
    name: 'VALEST_BLOQWMS_FAT',
    length: 1,
    default: () => "'S'",
  })
  valestBloqwmsFat: string;

  @Column('char', { name: 'AGRUPALOCVALEST', length: 1, default: () => "'N'" })
  agrupalocvalest: string;

  @Column('char', { name: 'CODBARRA_EST', length: 3, default: () => "' '" })
  codbarraEst: string;

  @Column('char', {
    name: 'DLT_REG_COMPENSACAO',
    length: 1,
    default: () => "'N'",
  })
  dltRegCompensacao: string;

  @Column('char', { name: 'DLT_MOV_COMISSAO', length: 1, default: () => "'S'" })
  dltMovComissao: string;

  @Column('char', { name: 'V_TRANSF_PKG', length: 1, default: () => "'N'" })
  vTransfPkg: string;

  @Column('char', { name: 'DESMEMBRANDOBEM', length: 1, default: () => "'N'" })
  desmembrandobem: string;

  @Column('char', {
    name: 'V_GERANDO_REMESSA',
    length: 1,
    default: () => "'N'",
  })
  vGerandoRemessa: string;

  @Column('int', { name: 'PROCPROVFIN_BATCH', nullable: true })
  procprovfinBatch: number | null;

  @Column('char', {
    name: 'FATURANDOESTOQUECONFERIDO',
    nullable: true,
    length: 1,
  })
  faturandoestoqueconferido: string | null;

  @Column('char', { name: 'FATURARESTWMS', nullable: true, length: 1 })
  faturarestwms: string | null;

  @Column('varchar', { name: 'TIPCANCELATEF', nullable: true, length: 1 })
  tipcancelatef: string | null;

  @Column('char', { name: 'V_IGNORE_OCORR_BAIXA', nullable: true, length: 1 })
  vIgnoreOcorrBaixa: string | null;

  @Column('char', {
    name: 'CONSIDERARIMPOSTORETIDONOTA',
    length: 1,
    default: () => "'S'",
  })
  considerarimpostoretidonota: string;

  @Column('char', {
    name: 'IPINAVENDASEMDESCONTO',
    length: 1,
    default: () => "'N'",
  })
  ipinavendasemdesconto: string;

  @Column('char', { name: 'SOMARSERVICONOTA', length: 1, default: () => "'S'" })
  somarserviconota: string;

  @Column('int', { name: 'CODIMPGARANTIDO', nullable: true })
  codimpgarantido: number | null;

  @Column('char', { name: 'TEMFUNRURAL', nullable: true, length: 1 })
  temfunrural: string | null;

  @Column('text', { name: 'TOPSREQCON', nullable: true })
  topsreqcon: string | null;

  @Column('int', { name: 'NATVA', nullable: true })
  natva: number | null;

  @Column('int', { name: 'NATVT', nullable: true })
  natvt: number | null;

  @Column('text', { name: 'FORMULAFRETE_IRF', nullable: true })
  formulafreteIrf: string | null;

  @Column('int', { name: 'TOPPISREDAQUIS', nullable: true })
  toppisredaquis: number | null;

  @Column('int', { name: 'CODOBSGARANTIDO', nullable: true })
  codobsgarantido: number | null;

  @Column('float', { name: 'VLRMINRETENCAOIR', nullable: true, precision: 53 })
  vlrminretencaoir: number | null;

  @Column('char', {
    name: 'IPINACOMPRASEMDESCONTO',
    length: 1,
    default: () => "'N'",
  })
  ipinacomprasemdesconto: string;

  @Column('char', { name: 'RATDESCSEMIMP', nullable: true, length: 1 })
  ratdescsemimp: string | null;

  @Column('char', { name: 'DISTJDCONF', nullable: true, length: 1 })
  distjdconf: string | null;

  @Column('char', { name: 'EDITMPSOMAEXT', nullable: true, length: 1 })
  editmpsomaext: string | null;

  @Column('char', {
    name: 'UTILIZA_CERTIFIC',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaCertific: string | null;

  @Column('char', {
    name: 'UTILIZA_TGAMOV',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaTgamov: string | null;

  @Column('char', {
    name: 'UTILIZA_GRANDES_CARGAS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaGrandesCargas: string | null;

  @Column('char', {
    name: 'UTILIZA_ESTTERC',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaEstterc: string | null;

  @Column('char', {
    name: 'UTILIZA_METAS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaMetas: string | null;

  @Column('char', {
    name: 'UTILIZA_FLEX',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaFlex: string | null;

  @Column('char', {
    name: 'UTILIZA_INDENIZ',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaIndeniz: string | null;

  @Column('char', {
    name: 'UTILIZA_TGFCPP',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaTgfcpp: string | null;

  @Column('char', {
    name: 'UTILIZA_RASTEST',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaRastest: string | null;

  @Column('char', {
    name: 'UTILIZA_TCIBEM',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaTcibem: string | null;

  @Column('char', {
    name: 'UTILIZA_VERIFCORTE',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaVerifcorte: string | null;

  @Column('char', {
    name: 'UTILIZA_DAV',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaDav: string | null;

  @Column('char', {
    name: 'UTILIZA_TRANSG',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaTransg: string | null;

  @Column('char', {
    name: 'UTILIZA_HCRUZADAS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  utilizaHcruzadas: string | null;

  @Column('int', { name: 'NUNOTA_LIV_PERMITEALTERAR', nullable: true })
  nunotaLivPermitealterar: number | null;

  @Column('varchar', { name: 'DBHASHCODE', nullable: true, length: 400 })
  dbhashcode: string | null;

  @Column('char', { name: 'USA_CONTA_BAIXA', nullable: true, length: 1 })
  usaContaBaixa: string | null;

  @Column('varchar', {
    name: 'PROCESSO_ATUAL_CUSTO',
    nullable: true,
    length: 255,
  })
  processoAtualCusto: string | null;

  @Column('char', {
    name: 'TPAMBESOCIAL',
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  tpambesocial: string | null;

  @Column('datetime', { name: 'DTREFESOCIAL', nullable: true })
  dtrefesocial: Date | null;

  @Column('int', { name: 'SEQESOCIAL', nullable: true })
  seqesocial: number | null;

  @Column('int', { name: 'CODEMP_EFDICMS', nullable: true })
  codempEfdicms: number | null;

  @Column('datetime', { name: 'DTINI_EFDICMS', nullable: true })
  dtiniEfdicms: Date | null;

  @Column('datetime', { name: 'DTFIM_EFDICMS', nullable: true })
  dtfimEfdicms: Date | null;

  @Column('varchar', { name: 'UF_EFDICMS', nullable: true, length: 2 })
  ufEfdicms: string | null;

  @Column('int', { name: 'NUNOTA_EFDICMS', nullable: true })
  nunotaEfdicms: number | null;

  @Column('char', { name: 'V_ROTINACTB', nullable: true, length: 1 })
  vRotinactb: string | null;

  @Column('char', { name: 'ADIARATUALIZACAOORIGEM', nullable: true, length: 1 })
  adiaratualizacaoorigem: string | null;

  @Column('char', { name: 'V_IGNORE_VALID_EST_MOV', nullable: true, length: 1 })
  vIgnoreValidEstMov: string | null;

  @Column('char', {
    name: 'V_RASTSTULTENTRA',
    nullable: true,
    length: 1,
    default: () => "'*'",
  })
  vRaststultentra: string | null;

  @Column('char', {
    name: 'V_UTILDOCNAOFISCALRASTST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vUtildocnaofiscalrastst: string | null;

  @Column('char', {
    name: 'V_AJUSIMPRASTSTCOMULTENT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vAjusimpraststcomultent: string | null;

  @Column('char', {
    name: 'V_REPROCESSANDODRCST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vReprocessandodrcst: string | null;

  @Column('char', {
    name: 'V_TIMUTILIZAIMOB',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vTimutilizaimob: string | null;

  @Column('bit', { name: 'V_SNK_CHECKOUT_CALC_IMP', nullable: true })
  vSnkCheckoutCalcImp: boolean | null;

  @Column('bit', { name: 'VALIDA_FORNECEDOR', nullable: true })
  validaFornecedor: boolean | null;

  @Column('char', { name: 'RASTREA_VIA_SIS', length: 1, default: () => "'N'" })
  rastreaViaSis: string;

  @Column('char', {
    name: 'V_UTILIZA_FECHACTB',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vUtilizaFechactb: string | null;

  @Column('char', { name: 'DESMEMBRANDO_BEM', nullable: true, length: 1 })
  desmembrandoBem: string | null;

  @Column('datetime', { name: 'DTREF_EXEC', nullable: true })
  dtrefExec: Date | null;

  @Column('char', { name: 'IGNORA_VINCULO_FUNC', nullable: true, length: 1 })
  ignoraVinculoFunc: string | null;

  @Column('char', { name: 'CONSIDERAR_TIT_RENEG', nullable: true, length: 1 })
  considerarTitReneg: string | null;

  @Column('int', { name: 'EXECINSERTTGFFIN', nullable: true })
  execinserttgffin: number | null;

  @Column('char', { name: 'INSERINDOFINLIBERACAO', nullable: true, length: 1 })
  inserindofinliberacao: string | null;

  @Column('char', { name: 'VALIDAESTGRUPROD', nullable: true, length: 1 })
  validaestgruprod: string | null;

  @Column('char', { name: 'V_VALIDA_EST_RESERVAR', nullable: true, length: 1 })
  vValidaEstReservar: string | null;

  @Column('char', {
    name: 'ADIARATUALIZACAOESTOQUE',
    nullable: true,
    length: 1,
  })
  adiaratualizacaoestoque: string | null;

  @Column('char', { name: 'SUBESTDOCAWMS', nullable: true, length: 1 })
  subestdocawms: string | null;

  @Column('char', { name: 'WMSDESCONESTBLQ', nullable: true, length: 1 })
  wmsdesconestblq: string | null;

  @Column('char', { name: 'INSERINDOADIANTAEMPRES', nullable: true, length: 1 })
  inserindoadiantaempres: string | null;
}
