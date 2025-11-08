import { Column, Entity, Index } from 'typeorm';

@Index('PK_RESCSTECFOP', ['idgeracao', 'sequencia'], { unique: true })
@Entity('RESCSTECFOP', { schema: 'SANKHYA' })
export class RescstecfopEntity {
  @Column('varchar', { primary: true, name: 'IDGERACAO', length: 100 })
  idgeracao: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 100 })
  tipo: string | null;

  @Column('varchar', { name: 'NOMECFOP', nullable: true, length: 100 })
  nomecfop: string | null;

  @Column('varchar', { name: 'NOMECST', nullable: true, length: 100 })
  nomecst: string | null;

  @Column('float', { name: 'VLRTOTITEM', nullable: true, precision: 53 })
  vlrtotitem: number | null;

  @Column('float', { name: 'BASEPIS', nullable: true, precision: 53 })
  basepis: number | null;

  @Column('float', { name: 'VLRPIS', nullable: true, precision: 53 })
  vlrpis: number | null;

  @Column('float', { name: 'BASECOFINS', nullable: true, precision: 53 })
  basecofins: number | null;

  @Column('float', { name: 'VLRCOFINS', nullable: true, precision: 53 })
  vlrcofins: number | null;

  @Column('varchar', { name: 'ENTSAI', nullable: true, length: 1 })
  entsai: string | null;
}
