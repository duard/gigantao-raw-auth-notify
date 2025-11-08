import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS2190', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS2190', { schema: 'SANKHYA' })
export class Tfps2190Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 15 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('numeric', {
    name: 'SEQUENCIA_ANT',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  sequenciaAnt: number | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('numeric', {
    name: 'TPCONTR',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tpcontr: number | null;

  @Column('numeric', {
    name: 'UNDSALFIXO',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  undsalfixo: number | null;

  @Column('numeric', {
    name: 'CODCBO',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codcbo: number | null;

  @Column('numeric', { name: 'TTRAB', nullable: true, precision: 10, scale: 0 })
  ttrab: number | null;

  @Column('float', { name: 'SALBASE', nullable: true, precision: 53 })
  salbase: number | null;

  @Column('numeric', {
    name: 'CODCATEGORIA',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  codcategoria: number | null;

  @Column('numeric', {
    name: 'MATRICULA',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  matricula: number | null;

  @Column('varchar', { name: 'NMTRAB', nullable: true, length: 100 })
  nmtrab: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;
}
