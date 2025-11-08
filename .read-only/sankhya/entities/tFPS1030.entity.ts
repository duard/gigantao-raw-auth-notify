import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPS1030', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TFPS1030', { schema: 'SANKHYA' })
export class Tfps1030Entity {
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

  @Column('varchar', { name: 'CODCARGO', nullable: true, length: 30 })
  codcargo: string | null;

  @Column('varchar', { name: 'NMCARGO', nullable: true, length: 100 })
  nmcargo: string | null;

  @Column('varchar', { name: 'CODCBO', nullable: true, length: 6 })
  codcbo: string | null;

  @Column('int', { name: 'ACUMCARGO', nullable: true })
  acumcargo: number | null;

  @Column('int', { name: 'CONTAGEMESP', nullable: true })
  contagemesp: number | null;

  @Column('char', { name: 'DEDICEXCL', nullable: true, length: 1 })
  dedicexcl: string | null;

  @Column('varchar', { name: 'NRLEI', nullable: true, length: 12 })
  nrlei: string | null;

  @Column('datetime', { name: 'DTLEI', nullable: true })
  dtlei: Date | null;

  @Column('smallint', { name: 'SITCARGO', nullable: true })
  sitcargo: number | null;

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
}
