import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERFLC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERFLC', { schema: 'SANKHYA' })
export class TserflcEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DATAOCOR', nullable: true })
  dataocor: Date | null;

  @Column('varchar', { name: 'TIPOOCOR', nullable: true, length: 10 })
  tipoocor: string | null;

  @Column('varchar', { name: 'CNPJPIE', nullable: true, length: 14 })
  cnpjpie: string | null;

  @Column('varchar', { name: 'EMPRESA', nullable: true, length: 45 })
  empresa: string | null;

  @Column('smallint', { name: 'TOTALOCOR', nullable: true })
  totalocor: number | null;

  @Column('varchar', { name: 'QUALIF', nullable: true, length: 3 })
  qualif: string | null;

  @Column('smallint', { name: 'VARACIVIL', nullable: true })
  varacivil: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
