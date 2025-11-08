import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS2306', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index('TFPS2306_I01', ['codemp', 'tpamb', 'chave'], {})
@Entity('TFPS2306', { schema: 'SANKHYA' })
export class Tfps2306Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 15 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('datetime', { name: 'DTEF', nullable: true })
  dtef: Date | null;

  @Column('smallint', { name: 'NATATIVIDADE', nullable: true })
  natatividade: number | null;

  @Column('varchar', { name: 'CODCARGO', nullable: true, length: 30 })
  codcargo: string | null;

  @Column('varchar', { name: 'CODFUNCAO', nullable: true, length: 30 })
  codfuncao: string | null;

  @Column('float', { name: 'VRSALFX', nullable: true, precision: 53 })
  vrsalfx: number | null;

  @Column('smallint', { name: 'UNDSALFIXO', nullable: true })
  undsalfixo: number | null;

  @Column('varchar', { name: 'DSCSALVAR', nullable: true, length: 999 })
  dscsalvar: string | null;

  @Column('char', { name: 'NATESTAGIO', nullable: true, length: 1 })
  natestagio: string | null;

  @Column('char', { name: 'NIVESTAGIO', nullable: true, length: 1 })
  nivestagio: string | null;

  @Column('varchar', { name: 'AREAATUACAO', nullable: true, length: 50 })
  areaatuacao: string | null;

  @Column('varchar', { name: 'NRAPOL', nullable: true, length: 30 })
  nrapol: string | null;

  @Column('float', { name: 'VLRBOLSA', nullable: true, precision: 53 })
  vlrbolsa: number | null;

  @Column('datetime', { name: 'DTPREVTERM', nullable: true })
  dtprevterm: Date | null;

  @Column('varchar', { name: 'CNPJINSTENSINO', nullable: true, length: 14 })
  cnpjinstensino: string | null;

  @Column('varchar', { name: 'NMRAZAOINSTENS', nullable: true, length: 100 })
  nmrazaoinstens: string | null;

  @Column('varchar', { name: 'DSCLOGRADINSTENS', nullable: true, length: 80 })
  dsclogradinstens: string | null;

  @Column('varchar', { name: 'NRLOGRADINSTENS', nullable: true, length: 10 })
  nrlogradinstens: string | null;

  @Column('varchar', { name: 'BAIRROINSTENS', nullable: true, length: 60 })
  bairroinstens: string | null;

  @Column('varchar', { name: 'CEPINSTENS', nullable: true, length: 8 })
  cepinstens: string | null;

  @Column('int', { name: 'CODMUNICINSTENS', nullable: true })
  codmunicinstens: number | null;

  @Column('varchar', { name: 'UFINSTENS', nullable: true, length: 2 })
  ufinstens: string | null;

  @Column('varchar', { name: 'CNPJAGNTINTEG', nullable: true, length: 14 })
  cnpjagntinteg: string | null;

  @Column('varchar', { name: 'NMRAZAOAGNTINTEG', nullable: true, length: 100 })
  nmrazaoagntinteg: string | null;

  @Column('varchar', { name: 'DSCLOGRADAGNTINTEG', nullable: true, length: 80 })
  dsclogradagntinteg: string | null;

  @Column('varchar', { name: 'NRLOGRADAGNTINTEG', nullable: true, length: 10 })
  nrlogradagntinteg: string | null;

  @Column('varchar', { name: 'BAIRROAGNTINTEG', nullable: true, length: 60 })
  bairroagntinteg: string | null;

  @Column('varchar', { name: 'CEPAGNTINTEG', nullable: true, length: 8 })
  cepagntinteg: string | null;

  @Column('int', { name: 'CODMUNICAGNTINTEG', nullable: true })
  codmunicagntinteg: number | null;

  @Column('varchar', { name: 'UFAGNTINTEG', nullable: true, length: 2 })
  ufagntinteg: string | null;

  @Column('varchar', { name: 'CPFSUPERVISOR', nullable: true, length: 11 })
  cpfsupervisor: string | null;

  @Column('varchar', { name: 'NMSUPERV', nullable: true, length: 70 })
  nmsuperv: string | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'DESCRCARGO', nullable: true, length: 100 })
  descrcargo: string | null;

  @Column('varchar', { name: 'CBOCARGO', nullable: true, length: 6 })
  cbocargo: string | null;

  @Column('varchar', { name: 'DESCRFUNCAO', nullable: true, length: 100 })
  descrfuncao: string | null;

  @Column('varchar', { name: 'CBOFUNCAO', nullable: true, length: 6 })
  cbofuncao: string | null;

  @Column('varchar', { name: 'TPREGPREV', nullable: true, length: 1 })
  tpregprev: string | null;

  @Column('smallint', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('varchar', {
    name: 'NRINSCLOCALTRABGERAL',
    nullable: true,
    length: 100,
  })
  nrinsclocaltrabgeral: string | null;

  @Column('varchar', {
    name: 'TPINSCLOCALTRABGERAL',
    nullable: true,
    length: 1,
  })
  tpinsclocaltrabgeral: string | null;

  @Column('varchar', { name: 'MONTALOCALTRAB', nullable: true, length: 1 })
  montalocaltrab: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('varchar', { name: 'STATUSENVIO', nullable: true, length: 1 })
  statusenvio: string | null;

  @Column('varchar', { name: 'EXCLMANUAL', nullable: true, length: 1 })
  exclmanual: string | null;
}
