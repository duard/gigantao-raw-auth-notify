import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSEREVCF', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSEREVCF', { schema: 'SANKHYA' })
export class TserevcfEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('smallint', { name: 'ANOEVO', nullable: true })
  anoevo: number | null;

  @Column('smallint', { name: 'MESEVO', nullable: true })
  mesevo: number | null;

  @Column('varchar', { name: 'DESCRICAOMES', nullable: true, length: 3 })
  descricaomes: string | null;

  @Column('float', { name: 'VENCIDOS', nullable: true, precision: 53 })
  vencidos: number | null;

  @Column('float', { name: 'AVENCER', nullable: true, precision: 53 })
  avencer: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'MESANO', nullable: true, length: 10 })
  mesano: string | null;
}
