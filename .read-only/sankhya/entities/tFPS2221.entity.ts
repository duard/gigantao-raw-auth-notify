import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS2221', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS2221', { schema: 'SANKHYA' })
export class Tfps2221Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 15 })
  nrinsc: string | null;

  @Column('smallint', { name: 'CODEMPFUNC', nullable: true })
  codempfunc: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('varchar', { name: 'CPFTRAB', nullable: true, length: 11 })
  cpftrab: string | null;

  @Column('varchar', { name: 'NISTRAB', nullable: true, length: 11 })
  nistrab: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('datetime', { name: 'DTEXAME', nullable: true })
  dtexame: Date | null;

  @Column('varchar', { name: 'CNPJLAB', nullable: true, length: 14 })
  cnpjlab: string | null;

  @Column('varchar', { name: 'CODSEQEXAME', nullable: true, length: 11 })
  codseqexame: string | null;

  @Column('varchar', { name: 'NMMED', nullable: true, length: 70 })
  nmmed: string | null;

  @Column('varchar', { name: 'NRCRM', nullable: true, length: 10 })
  nrcrm: string | null;

  @Column('varchar', { name: 'UFCRM', nullable: true, length: 2 })
  ufcrm: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('char', { name: 'INDRECUSA', nullable: true, length: 1 })
  indrecusa: string | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;
}
