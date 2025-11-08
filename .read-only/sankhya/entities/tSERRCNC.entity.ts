import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRCNC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRCNC', { schema: 'SANKHYA' })
export class TserrcncEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('smallint', { name: 'QTDETOTAL', nullable: true })
  qtdetotal: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('varchar', { name: 'DATAMENOR', nullable: true, length: 10 })
  datamenor: string | null;

  @Column('varchar', { name: 'DATAMAIOR', nullable: true, length: 10 })
  datamaior: string | null;

  @Column('float', { name: 'VLRULTIMA', nullable: true, precision: 53 })
  vlrultima: number | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 20 })
  origem: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'PERIODO', nullable: true, length: 20 })
  periodo: string | null;
}
