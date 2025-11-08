import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERIMOV', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERIMOV', { schema: 'SANKHYA' })
export class TserimovEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 10 })
  descricao: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 25 })
  cidade: string | null;

  @Column('float', { name: 'VLRPRESTACAO', nullable: true, precision: 53 })
  vlrprestacao: number | null;

  @Column('varchar', { name: 'OUTRINFORM', nullable: true, length: 25 })
  outrinform: string | null;

  @Column('smallint', { name: 'PRESTREST', nullable: true })
  prestrest: number | null;

  @Column('float', { name: 'VLMERCADO', nullable: true, precision: 53 })
  vlmercado: number | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;
}
