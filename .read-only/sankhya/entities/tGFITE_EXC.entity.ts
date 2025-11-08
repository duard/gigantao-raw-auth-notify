import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFITE_EXC', ['nunota', 'sequencia', 'dhexclusao'], { unique: true })
@Entity('TGFITE_EXC', { schema: 'SANKHYA' })
export class TgfiteExcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUTAB', nullable: true })
  nutab: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODLOCALORIG', nullable: true })
  codlocalorig: number | null;

  @Column('char', { name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('char', { name: 'USOPROD', nullable: true, length: 1 })
  usoprod: string | null;

  @Column('int', { name: 'CODCFO', nullable: true })
  codcfo: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'QTDENTREGUE', nullable: true, precision: 53 })
  qtdentregue: number | null;

  @Column('float', { name: 'QTDCONFERIDA', nullable: true, precision: 53 })
  qtdconferida: number | null;

  @Column('money', { name: 'VLRUNIT', nullable: true })
  vlrunit: number | null;

  @Column('money', { name: 'VLRTOT', nullable: true })
  vlrtot: number | null;

  @Column('float', { name: 'VLRCUS', nullable: true, precision: 53 })
  vlrcus: number | null;

  @Column('money', { name: 'BASEIPI', nullable: true })
  baseipi: number | null;

  @Column('money', { name: 'VLRIPI', nullable: true })
  vlripi: number | null;

  @Column('money', { name: 'ALIQIPI', nullable: true })
  aliqipi: number | null;

  @Column('money', { name: 'BASEICMS', nullable: true })
  baseicms: number | null;

  @Column('money', { name: 'ALIQICMS', nullable: true })
  aliqicms: number | null;

  @Column('money', { name: 'VLRICMS', nullable: true })
  vlricms: number | null;

  @Column('money', { name: 'VLRDESC', nullable: true })
  vlrdesc: number | null;

  @Column('money', { name: 'BASESUBSTIT', nullable: true })
  basesubstit: number | null;

  @Column('money', { name: 'VLRSUBST', nullable: true })
  vlrsubst: number | null;

  @Column('char', { name: 'PENDENTE', nullable: true, length: 1 })
  pendente: string | null;

  @Column('char', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('smallint', { name: 'CODTRIB', nullable: true })
  codtrib: number | null;

  @Column('smallint', { name: 'ATUALESTOQUE', nullable: true })
  atualestoque: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'RESERVA', nullable: true, length: 1 })
  reserva: string | null;

  @Column('char', { name: 'STATUSNOTA', nullable: true, length: 1 })
  statusnota: string | null;

  @Column('smallint', { name: 'CODEXEC', nullable: true })
  codexec: number | null;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('char', { name: 'FATURAR', nullable: true, length: 1 })
  faturar: string | null;

  @Column('smallint', { name: 'CODOBSPADRAO', nullable: true })
  codobspadrao: number | null;

  @Column('nchar', { name: 'SOLICITANTE', nullable: true, length: 256 })
  solicitante: string | null;

  @Column('nchar', { name: 'NT_USERNAME', nullable: true, length: 256 })
  ntUsername: string | null;

  @Column('nchar', { name: 'HOSTNAME', nullable: true, length: 256 })
  hostname: string | null;

  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('money', { name: 'VLRREPRED', nullable: true })
  vlrrepred: number | null;

  @Column('money', { name: 'VLRDESCBONIF', nullable: true })
  vlrdescbonif: number | null;

  @Column('money', { name: 'PERCDESC', nullable: true })
  percdesc: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('char', { name: 'PROGRAMA', nullable: true, length: 80 })
  programa: string | null;

  @Column('int', { name: 'CODCFPS', nullable: true })
  codcfps: number | null;

  @Column('varchar', { name: 'PRODUTONFE', nullable: true, length: 60 })
  produtonfe: string | null;

  @Column('varchar', { name: 'GTINNFE', nullable: true, length: 14 })
  gtinnfe: string | null;

  @Column('varchar', { name: 'GTINTRIBNFE', nullable: true, length: 14 })
  gtintribnfe: string | null;

  @Column('smallint', { name: 'CODTRIBISS', nullable: true })
  codtribiss: number | null;

  @Column('float', { name: 'ALIQISS', nullable: true, precision: 53 })
  aliqiss: number | null;

  @Column('money', { name: 'ALIQICMSRED', nullable: true })
  aliqicmsred: number | null;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 30 })
  usuario: string | null;

  @Column('float', { name: 'PERCPUREZA', nullable: true, precision: 53 })
  percpureza: number | null;

  @Column('float', { name: 'PERCGERMIN', nullable: true, precision: 53 })
  percgermin: number | null;

  @Column('smallint', { name: 'CSOSN', nullable: true })
  csosn: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('float', { name: 'BASEISS', nullable: true, precision: 53 })
  baseiss: number | null;

  @Column('float', { name: 'VLRISS', nullable: true, precision: 53 })
  vlriss: number | null;

  @Column('int', { name: 'CODTPA', nullable: true })
  codtpa: number | null;

  @Column('varchar', { name: 'ORIGPROD', nullable: true, length: 1 })
  origprod: string | null;

  @Column('smallint', { name: 'CSTIPI', nullable: true })
  cstipi: number | null;

  @Column('smallint', { name: 'CODMOTDESONERAICMS', nullable: true })
  codmotdesoneraicms: number | null;

  @Column('smallint', { name: 'SEQUENCIAFISCAL', nullable: true })
  sequenciafiscal: number | null;

  @Column('float', { name: 'VLRUNITLOC', nullable: true, precision: 53 })
  vlrunitloc: number | null;

  @Column('smallint', { name: 'CODENQIPI', nullable: true })
  codenqipi: number | null;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @Column('float', {
    name: 'VLRDESCRAT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdescrat: number | null;

  @Column('varchar', { name: 'CODBENEFNAUF', nullable: true, length: 20 })
  codbenefnauf: string | null;

  @Column('float', { name: 'BASESTFCPINTANT', nullable: true, precision: 53 })
  basestfcpintant: number | null;

  @Column('float', { name: 'PERCSTFCPINTANT', nullable: true, precision: 53 })
  percstfcpintant: number | null;

  @Column('float', { name: 'VLRSTFCPINTANT', nullable: true, precision: 53 })
  vlrstfcpintant: number | null;

  @Column('varchar', { name: 'CNPJFABRICANTE', nullable: true, length: 14 })
  cnpjfabricante: string | null;

  @Column('char', { name: 'INDESCALA', nullable: true, length: 1 })
  indescala: string | null;

  @Column('varchar', { name: 'CODAGREGACAO', nullable: true, length: 20 })
  codagregacao: string | null;

  @Column('float', { name: 'BASESTEXTRANOTA', nullable: true, precision: 53 })
  basestextranota: number | null;

  @Column('float', { name: 'ALIQSTEXTRANOTA', nullable: true, precision: 53 })
  aliqstextranota: number | null;

  @Column('float', { name: 'QTDTRIBEXPORT', nullable: true, precision: 53 })
  qtdtribexport: number | null;

  @Column('varchar', { name: 'CODPROINFO', nullable: true, length: 32 })
  codproinfo: string | null;

  @Column('float', { name: 'VLRACRESCDESC', nullable: true, precision: 53 })
  vlracrescdesc: number | null;

  @Column('float', { name: 'VLRRETENCAO', nullable: true, precision: 53 })
  vlrretencao: number | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;

  @Column('float', { name: 'ALIQSTFCPSTANT', nullable: true, precision: 53 })
  aliqstfcpstant: number | null;

  @Column('float', { name: 'VLRREPREDSEMDESC', nullable: true, precision: 53 })
  vlrrepredsemdesc: number | null;

  @Column('float', {
    name: 'BASECALCSTEXTRANOTA',
    nullable: true,
    precision: 53,
  })
  basecalcstextranota: number | null;

  @Column('float', { name: 'REDBASEST', nullable: true, precision: 53 })
  redbasest: number | null;

  @Column('float', { name: 'MARGLUCRO', nullable: true, precision: 53 })
  marglucro: number | null;

  @Column('numeric', {
    name: 'VLRDESCPARCERIA',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  vlrdescparceria: number | null;

  @Column('numeric', {
    name: 'IDDESCPARCERIA',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  iddescparceria: number | null;

  @Column('float', { name: 'PERCUSAQUDECPE', nullable: true, precision: 53 })
  percusaqudecpe: number | null;

  @Column('float', { name: 'VLRCUSAQUDECPE', nullable: true, precision: 53 })
  vlrcusaqudecpe: number | null;

  @Column('smallint', { name: 'TIPUTILCOM', nullable: true })
  tiputilcom: number | null;

  @Column('smallint', { name: 'CODMOTDESONERAST', nullable: true })
  codmotdesonerast: number | null;

  @Column('varchar', { name: 'CODFCI', nullable: true, length: 36 })
  codfci: string | null;
}
