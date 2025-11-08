import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERPSC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERPSC', { schema: 'SANKHYA' })
export class TserpscEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'EMPRESA', nullable: true, length: 40 })
  empresa: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 8 })
  cnpj: string | null;

  @Column('smallint', { name: 'PARTIC', nullable: true })
  partic: number | null;

  @Column('varchar', { name: 'ESTADO', nullable: true, length: 2 })
  estado: string | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 43 })
  situacao: string | null;

  @Column('datetime', { name: 'DTINIPARTIC', nullable: true })
  dtinipartic: Date | null;

  @Column('datetime', { name: 'DTULTATU', nullable: true })
  dtultatu: Date | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
