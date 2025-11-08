import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFCAB_EXC', ['nunota', 'dhexclusao'], { unique: true })
@Index('TGFCAB_EXC_I_REDZ', ['codemp', 'codmaq', 'nroredz'], {})
@Index('TGFCAB_EXC_I01', ['codmaq'], {})
@Index('TGFCAB_EXC_I28', ['codcontatoentrega'], {})
@Entity('TGFCAB_EXC', { schema: 'SANKHYA' })
export class TgfcabExcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('money', { name: 'VLRNOTA', nullable: true })
  vlrnota: number | null;

  @Column('char', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('nchar', { name: 'NT_USERNAME', nullable: true, length: 512 })
  ntUsername: string | null;

  @Column('nchar', { name: 'HOSTNAME', nullable: true, length: 512 })
  hostname: string | null;

  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('char', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('datetime', { name: 'DTFATUR', nullable: true })
  dtfatur: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('datetime', { name: 'DTCONTAB', nullable: true })
  dtcontab: Date | null;

  @Column('int', { name: 'HRMOV', nullable: true })
  hrmov: number | null;

  @Column('smallint', { name: 'CODEMPNEGOC', nullable: true })
  codempnegoc: number | null;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('char', { name: 'RATEADO', nullable: true, length: 1 })
  rateado: string | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('datetime', { name: 'DHTIPOPER', nullable: true })
  dhtipoper: Date | null;

  @Column('smallint', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('datetime', { name: 'DHTIPVENDA', nullable: true })
  dhtipvenda: Date | null;

  @Column('int', { name: 'NUMCOTACAO', nullable: true })
  numcotacao: number | null;

  @Column('money', { name: 'COMISSAO', nullable: true })
  comissao: number | null;

  @Column('smallint', { name: 'CODMOEDA', nullable: true })
  codmoeda: number | null;

  @Column('smallint', { name: 'CODOBSPADRAO', nullable: true })
  codobspadrao: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('money', { name: 'VLRSEG', nullable: true })
  vlrseg: number | null;

  @Column('money', { name: 'VLRICMSSEG', nullable: true })
  vlricmsseg: number | null;

  @Column('money', { name: 'VLRDESTAQUE', nullable: true })
  vlrdestaque: number | null;

  @Column('money', { name: 'VLRJURO', nullable: true })
  vlrjuro: number | null;

  @Column('money', { name: 'VLRVENDOR', nullable: true })
  vlrvendor: number | null;

  @Column('money', { name: 'VLROUTROS', nullable: true })
  vlroutros: number | null;

  @Column('money', { name: 'VLREMB', nullable: true })
  vlremb: number | null;

  @Column('money', { name: 'VLRICMSEMB', nullable: true })
  vlricmsemb: number | null;

  @Column('money', { name: 'VLRDESCSERV', nullable: true })
  vlrdescserv: number | null;

  @Column('money', { name: 'IPIEMB', nullable: true })
  ipiemb: number | null;

  @Column('char', { name: 'TIPIPIEMB', nullable: true, length: 1 })
  tipipiemb: string | null;

  @Column('money', { name: 'VLRDESCTOT', nullable: true })
  vlrdesctot: number | null;

  @Column('money', { name: 'VLRDESCTOTITEM', nullable: true })
  vlrdesctotitem: number | null;

  @Column('money', { name: 'VLRFRETE', nullable: true })
  vlrfrete: number | null;

  @Column('money', { name: 'ICMSFRETE', nullable: true })
  icmsfrete: number | null;

  @Column('money', { name: 'BASEICMSFRETE', nullable: true })
  baseicmsfrete: number | null;

  @Column('char', { name: 'TIPFRETE', nullable: true, length: 1 })
  tipfrete: string | null;

  @Column('char', { name: 'CIF_FOB', nullable: true, length: 1 })
  cifFob: string | null;

  @Column('datetime', { name: 'VENCFRETE', nullable: true })
  vencfrete: Date | null;

  @Column('datetime', { name: 'VENCIPI', nullable: true })
  vencipi: Date | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('smallint', { name: 'SEQCARGA', nullable: true })
  seqcarga: number | null;

  @Column('int', { name: 'KMVEICULO', nullable: true })
  kmveiculo: number | null;

  @Column('int', { name: 'CODPARCTRANSP', nullable: true })
  codparctransp: number | null;

  @Column('int', { name: 'QTDVOL', nullable: true })
  qtdvol: number | null;

  @Column('char', { name: 'PENDENTE', nullable: true, length: 1 })
  pendente: string | null;

  @Column('money', { name: 'BASEICMS', nullable: true })
  baseicms: number | null;

  @Column('money', { name: 'VLRICMS', nullable: true })
  vlricms: number | null;

  @Column('money', { name: 'BASEIPI', nullable: true })
  baseipi: number | null;

  @Column('money', { name: 'VLRIPI', nullable: true })
  vlripi: number | null;

  @Column('char', { name: 'ISSRETIDO', nullable: true, length: 1 })
  issretido: string | null;

  @Column('money', { name: 'BASEISS', nullable: true })
  baseiss: number | null;

  @Column('money', { name: 'VLRISS', nullable: true })
  vlriss: number | null;

  @Column('char', { name: 'APROVADO', nullable: true, length: 1 })
  aprovado: string | null;

  @Column('char', { name: 'STATUSNOTA', nullable: true, length: 1 })
  statusnota: string | null;

  @Column('char', { name: 'IRFRETIDO', nullable: true, length: 1 })
  irfretido: string | null;

  @Column('money', { name: 'COMGER', nullable: true })
  comger: number | null;

  @Column('money', { name: 'VLRIRF', nullable: true })
  vlrirf: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'VOLUME', nullable: true, length: 60 })
  volume: string | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('money', { name: 'VLRSUBST', nullable: true })
  vlrsubst: number | null;

  @Column('money', { name: 'BASESUBSTIT', nullable: true })
  basesubstit: number | null;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('money', { name: 'BASEINSS', nullable: true })
  baseinss: number | null;

  @Column('money', { name: 'VLRINSS', nullable: true })
  vlrinss: number | null;

  @Column('money', { name: 'VLRREPREDTOT', nullable: true })
  vlrrepredtot: number | null;

  @Column('money', { name: 'PERCDESC', nullable: true })
  percdesc: number | null;

  @Column('int', { name: 'CODPARCREMETENTE', nullable: true })
  codparcremetente: number | null;

  @Column('int', { name: 'CODPARCCONSIGNATARIO', nullable: true })
  codparcconsignatario: number | null;

  @Column('int', { name: 'CODPARCREDESPACHO', nullable: true })
  codparcredespacho: number | null;

  @Column('char', { name: 'LOCALCOLETA', nullable: true, length: 40 })
  localcoleta: string | null;

  @Column('char', { name: 'LOCALENTREGA', nullable: true, length: 40 })
  localentrega: string | null;

  @Column('money', { name: 'VLRMERCADORIA', nullable: true })
  vlrmercadoria: number | null;

  @Column('money', { name: 'PESO', nullable: true })
  peso: number | null;

  @Column('char', { name: 'NOTASCF', nullable: true, length: 35 })
  notascf: string | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', { name: 'NROREDZ', nullable: true, default: () => '(0)' })
  nroredz: number | null;

  @Column('int', { name: 'CODMAQ', nullable: true })
  codmaq: number | null;

  @Column('char', { name: 'PROGRAMA', nullable: true, length: 80 })
  programa: string | null;

  @Column('int', { name: 'NUMALEATORIO', nullable: true })
  numaleatorio: number | null;

  @Column('char', { name: 'NUMPROTOC', nullable: true, length: 15 })
  numprotoc: string | null;

  @Column('datetime', { name: 'DHPROTOC', nullable: true })
  dhprotoc: Date | null;

  @Column('varchar', { name: 'NUMREGDPEC', nullable: true, length: 15 })
  numregdpec: string | null;

  @Column('datetime', { name: 'DHREGDPEC', nullable: true })
  dhregdpec: Date | null;

  @Column('int', { name: 'DANFE', nullable: true })
  danfe: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('int', { name: 'NULOTENFE', nullable: true })
  nulotenfe: number | null;

  @Column('char', { name: 'STATUSNFE', nullable: true, length: 1 })
  statusnfe: string | null;

  @Column('varchar', { name: 'NATUREZAOPERDES', nullable: true, length: 2 })
  naturezaoperdes: string | null;

  @Column('varchar', { name: 'SERIENFDES', nullable: true, length: 4 })
  serienfdes: string | null;

  @Column('varchar', { name: 'MODELONFDES', nullable: true, length: 2 })
  modelonfdes: string | null;

  @Column('varchar', { name: 'UFEMBARQ', nullable: true, length: 2 })
  ufembarq: string | null;

  @Column('varchar', { name: 'LOCEMBARQ', nullable: true, length: 60 })
  locembarq: string | null;

  @Column('varchar', { name: 'NUMNFSE', nullable: true, length: 20 })
  numnfse: string | null;

  @Column('varchar', { name: 'CPFCNPJADQUIRENTE', nullable: true, length: 14 })
  cpfcnpjadquirente: string | null;

  @Column('varchar', { name: 'NOMEADQUIRENTE', nullable: true, length: 40 })
  nomeadquirente: string | null;

  @Column('int', { name: 'ORDEMCARGAANT', nullable: true })
  ordemcargaant: number | null;

  @Column('varchar', { name: 'TPAMBNFE', nullable: true, length: 1 })
  tpambnfe: string | null;

  @Column('smallint', { name: 'TPEMISNFE', nullable: true })
  tpemisnfe: number | null;

  @Column('datetime', { name: 'DTENVIOPMB', nullable: true })
  dtenviopmb: Date | null;

  @Column('datetime', { name: 'DTENVSUF', nullable: true })
  dtenvsuf: Date | null;

  @Column('char', { name: 'TIPNOTAPMB', nullable: true, length: 10 })
  tipnotapmb: string | null;

  @Column('datetime', { name: 'DTREMRET', nullable: true })
  dtremret: Date | null;

  @Column('char', { name: 'INDPRESNFCE', nullable: true, length: 1 })
  indpresnfce: string | null;

  @Column('float', { name: 'VLRICMSDIFALDEST', nullable: true, precision: 53 })
  vlricmsdifaldest: number | null;

  @Column('float', { name: 'VLRICMSDIFALREM', nullable: true, precision: 53 })
  vlricmsdifalrem: number | null;

  @Column('float', { name: 'VLRICMSFCP', nullable: true, precision: 53 })
  vlricmsfcp: number | null;

  @Column('float', { name: 'VLRFRETETOTAL', nullable: true, precision: 53 })
  vlrfretetotal: number | null;

  @Column('varchar', { name: 'CHAVENFEREF', nullable: true, length: 44 })
  chavenferef: string | null;

  @Column('float', {
    name: 'VLRDESCRAT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdescrat: number | null;

  @Column('int', { name: 'CODCONTATOENTREGA', nullable: true })
  codcontatoentrega: number | null;

  @Column('int', { name: 'CODCIDORIGEM', nullable: true })
  codcidorigem: number | null;

  @Column('int', { name: 'CODCIDDESTINO', nullable: true })
  codciddestino: number | null;

  @Column('int', { name: 'CODCIDENTREGA', nullable: true })
  codcidentrega: number | null;

  @Column('smallint', { name: 'CODUFORIGEM', nullable: true })
  coduforigem: number | null;

  @Column('smallint', { name: 'CODUFDESTINO', nullable: true })
  codufdestino: number | null;

  @Column('smallint', { name: 'CODUFENTREGA', nullable: true })
  codufentrega: number | null;

  @Column('char', { name: 'CLASSIFICMS', nullable: true, length: 1 })
  classificms: string | null;

  @Column('int', { name: 'CODCIDPREST', nullable: true })
  codcidprest: number | null;

  @Column('char', { name: 'FORMPGTCTE', nullable: true, length: 1 })
  formpgtcte: string | null;

  @Column('char', { name: 'TPAMBNFSE', nullable: true, length: 1 })
  tpambnfse: string | null;

  @Column('int', { name: 'NROCAIXA', nullable: true })
  nrocaixa: number | null;

  @Column('float', { name: 'VLRICMSFCPINT', nullable: true, precision: 53 })
  vlricmsfcpint: number | null;

  @Column('float', { name: 'VLRSTFCPINT', nullable: true, precision: 53 })
  vlrstfcpint: number | null;

  @Column('float', { name: 'VLRSTFCPINTANT', nullable: true, precision: 53 })
  vlrstfcpintant: number | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;

  @Column('int', { name: 'NUMCF', nullable: true })
  numcf: number | null;

  @Column('int', { name: 'NUMCOO', nullable: true })
  numcoo: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('float', {
    name: 'VLRREPREDTOTSEMDESC',
    nullable: true,
    precision: 53,
  })
  vlrrepredtotsemdesc: number | null;

  @Column('int', { name: 'NUMCUPOMECONECT', nullable: true })
  numcupomeconect: number | null;

  @Column('varchar', { name: 'INTERMED', nullable: true, length: 1 })
  intermed: string | null;

  @Column('varchar', { name: 'FISTEL', nullable: true, length: 11 })
  fistel: string | null;

  @Column('int', { name: 'NUMCSTC', nullable: true })
  numcstc: number | null;

  @Column('int', { name: 'QTDUSU', nullable: true })
  qtdusu: number | null;

  @Column('varchar', { name: 'NUMTERMTEL', nullable: true, length: 13 })
  numtermtel: string | null;

  @Column('smallint', { name: 'TIPCLIENTESERVCOM', nullable: true })
  tipclienteservcom: number | null;

  @Column('varchar', { name: 'MD5MODCOMTEL', nullable: true, length: 32 })
  md5Modcomtel: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabExcs)
  @JoinColumn([{ name: 'CODINTERM', referencedColumnName: 'codparc' }])
  codinterm: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcabExcs2)
  @JoinColumn([{ name: 'CODPARCTRANSPFINAL', referencedColumnName: 'codparc' }])
  codparctranspfinal: TgfparEntity;
}
