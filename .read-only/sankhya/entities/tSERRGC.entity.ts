import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRGC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRGC', { schema: 'SANKHYA' })
export class TserrgcEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('smallint', { name: 'ANOCONS', nullable: true })
  anocons: number | null;

  @Column('smallint', { name: 'MESCONS', nullable: true })
  mescons: number | null;

  @Column('varchar', { name: 'MESDESCOM', nullable: true, length: 3 })
  mesdescom: string | null;

  @Column('smallint', { name: 'QTDCONS', nullable: true })
  qtdcons: number | null;

  @Column('smallint', { name: 'QTDBCOCONS', nullable: true })
  qtdbcocons: number | null;

  @Column('varchar', { name: 'INDBCOEMP', nullable: true, length: 1 })
  indbcoemp: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
