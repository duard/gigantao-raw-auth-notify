import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERHPQ', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERHPQ', { schema: 'SANKHYA' })
export class TserhpqEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCR1', nullable: true, length: 20 })
  descr1: string | null;

  @Column('float', { name: 'VALOR1', nullable: true, precision: 53 })
  valor1: number | null;

  @Column('int', { name: 'PERC1', nullable: true })
  perc1: number | null;

  @Column('varchar', { name: 'DESCR2', nullable: true, length: 20 })
  descr2: string | null;

  @Column('float', { name: 'VALOR2', nullable: true, precision: 53 })
  valor2: number | null;

  @Column('int', { name: 'PERC2', nullable: true })
  perc2: number | null;

  @Column('varchar', { name: 'DESCR3', nullable: true, length: 20 })
  descr3: string | null;

  @Column('float', { name: 'VALOR3', nullable: true, precision: 53 })
  valor3: number | null;

  @Column('int', { name: 'PERC3', nullable: true })
  perc3: number | null;

  @Column('varchar', { name: 'DESCR4', nullable: true, length: 20 })
  descr4: string | null;

  @Column('float', { name: 'VALOR4', nullable: true, precision: 53 })
  valor4: number | null;

  @Column('int', { name: 'PERC4', nullable: true })
  perc4: number | null;

  @Column('varchar', { name: 'DESCR5', nullable: true, length: 20 })
  descr5: string | null;

  @Column('float', { name: 'VALOR5', nullable: true, precision: 53 })
  valor5: number | null;

  @Column('int', { name: 'PERC5', nullable: true })
  perc5: number | null;

  @Column('varchar', { name: 'DESCR6', nullable: true, length: 20 })
  descr6: string | null;

  @Column('float', { name: 'VALOR6', nullable: true, precision: 53 })
  valor6: number | null;

  @Column('int', { name: 'PERC6', nullable: true })
  perc6: number | null;

  @Column('int', { name: 'QTDFONTESHISTPAG', nullable: true })
  qtdfonteshistpag: number | null;
}
