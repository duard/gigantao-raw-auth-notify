import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERVEI', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERVEI', { schema: 'SANKHYA' })
export class TserveiEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'MARCAVEIC', nullable: true, length: 10 })
  marcaveic: string | null;

  @Column('varchar', { name: 'MODELOVEIC', nullable: true, length: 15 })
  modeloveic: string | null;

  @Column('smallint', { name: 'ANOVEIC', nullable: true })
  anoveic: number | null;

  @Column('varchar', { name: 'PLACAVEIC', nullable: true, length: 7 })
  placaveic: string | null;

  @Column('float', { name: 'VLPREST', nullable: true, precision: 53 })
  vlprest: number | null;

  @Column('smallint', { name: 'PRESTRESTVEIC', nullable: true })
  prestrestveic: number | null;

  @Column('varchar', { name: 'SEGVEIC', nullable: true, length: 1 })
  segveic: string | null;

  @Column('datetime', { name: 'VENCTO', nullable: true })
  vencto: Date | null;
}
