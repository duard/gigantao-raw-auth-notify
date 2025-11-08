import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBCCO', ['codcco'], { unique: true })
@Entity('TCBCCO', { schema: 'SANKHYA' })
export class TcbccoEntity {
  @Column('int', { primary: true, name: 'CODCCO' })
  codcco: number;

  @Column('varchar', { name: 'DESCRICAO', length: 120 })
  descricao: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'CTACTBPART', length: 1, default: () => "'N'" })
  ctactbpart: string;

  @Column('varchar', { name: 'GRUCTACTBPART', length: 1, default: () => "'N'" })
  gructactbpart: string;

  @Column('varchar', { name: 'PROJPART', length: 1, default: () => "'N'" })
  projpart: string;

  @Column('varchar', { name: 'CRPART', length: 1, default: () => "'N'" })
  crpart: string;

  @Column('varchar', { name: 'EMPPART', length: 1, default: () => "'S'" })
  emppart: string;

  @Column('varchar', { name: 'APRESCOD', length: 1, default: () => "'N'" })
  aprescod: string;

  @Column('varchar', { name: 'PERIODIC', nullable: true, length: 1 })
  periodic: string | null;

  @Column('varchar', { name: 'DETALHARPOR', nullable: true, length: 1 })
  detalharpor: string | null;

  @Column('smallint', { name: 'DTINICORC', nullable: true })
  dtinicorc: number | null;

  @Column('varchar', { name: 'CALDESINRECDESP', nullable: true, length: 1 })
  caldesinrecdesp: string | null;

  @Column('varchar', { name: 'ZERARCTACTAB', nullable: true, length: 1 })
  zerarctactab: string | null;

  @Column('varchar', { name: 'USASALCONREALI', nullable: true, length: 1 })
  usasalconreali: string | null;
}
