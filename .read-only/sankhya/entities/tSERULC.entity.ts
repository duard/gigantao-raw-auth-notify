import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERULC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERULC', { schema: 'SANKHYA' })
export class TserulcEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DATACONS', nullable: true })
  datacons: Date | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 100 })
  razaosocial: string | null;

  @Column('smallint', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('varchar', { name: 'CNPJCONS', nullable: true, length: 20 })
  cnpjcons: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
