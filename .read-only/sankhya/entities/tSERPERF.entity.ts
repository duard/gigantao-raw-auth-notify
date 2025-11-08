import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERPERF', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERPERF', { schema: 'SANKHYA' })
export class TserperfEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 18 })
  cnpj: string | null;

  @Column('varchar', { name: 'RAZAO', nullable: true, length: 70 })
  razao: string | null;

  @Column('datetime', { name: 'DTBALANCO', nullable: true })
  dtbalanco: Date | null;

  @Column('varchar', { name: 'TIPOBALANCO', nullable: true, length: 100 })
  tipobalanco: string | null;

  @Column('varchar', { name: 'DEMONSTRATIVO', nullable: true, length: 100 })
  demonstrativo: string | null;

  @Column('varchar', { name: 'PERIODO', nullable: true, length: 100 })
  periodo: string | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 100 })
  unidade: string | null;

  @Column('varchar', { name: 'MOEDA', nullable: true, length: 100 })
  moeda: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
