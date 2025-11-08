import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRCSPC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRCSPC', { schema: 'SANKHYA' })
export class TserrcspcEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'DATCON', nullable: true, length: 8 })
  datcon: string | null;

  @Column('varchar', { name: 'HORCON', nullable: true, length: 4 })
  horcon: string | null;

  @Column('varchar', { name: 'NOMASS', nullable: true, length: 60 })
  nomass: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 30 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 30 })
  origem: string | null;

  @Column('smallint', { name: 'QTCONS', nullable: true })
  qtcons: number | null;

  @Column('varchar', { name: 'CNPJCONS', nullable: true, length: 14 })
  cnpjcons: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
