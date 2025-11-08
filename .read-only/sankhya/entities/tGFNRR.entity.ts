import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNRR', ['codnatrend'], { unique: true })
@Entity('TGFNRR', { schema: 'SANKHYA' })
export class TgfnrrEntity {
  @Column('int', { primary: true, name: 'CODNATREND' })
  codnatrend: number;

  @Column('varchar', { name: 'DESCNATREND', nullable: true, length: 255 })
  descnatrend: string | null;

  @Column('varchar', {
    name: 'FCI',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  fci: string | null;

  @Column('varchar', {
    name: 'DECIMOTERCEIRO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  decimoterceiro: string | null;

  @Column('varchar', {
    name: 'RRA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  rra: string | null;

  @Column('varchar', { name: 'DEDUCAO', nullable: true, length: 50 })
  deducao: string | null;

  @Column('varchar', { name: 'RENDISENTO', nullable: true, length: 50 })
  rendisento: string | null;

  @Column('varchar', { name: 'TRIBUTO', nullable: true, length: 50 })
  tributo: string | null;

  @Column('varchar', { name: 'APLICACAO', nullable: true, length: 1 })
  aplicacao: string | null;

  @Column('datetime', { name: 'DTINICIOVAL', nullable: true })
  dtinicioval: Date | null;

  @Column('datetime', { name: 'DTFIMVAL', nullable: true })
  dtfimval: Date | null;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('varchar', { name: 'BLOCOAPLIC', nullable: true, length: 50 })
  blocoaplic: string | null;

  @Column('varchar', { name: 'GERSEMTRIB', nullable: true, length: 1 })
  gersemtrib: string | null;
}
