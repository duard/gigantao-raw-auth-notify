import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERTCM', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERTCM', { schema: 'SANKHYA' })
export class TsertcmEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('smallint', { name: 'ANOCONS', nullable: true })
  anocons: number | null;

  @Column('smallint', { name: 'MESCONS', nullable: true })
  mescons: number | null;

  @Column('varchar', { name: 'MESDESCR', nullable: true, length: 3 })
  mesdescr: string | null;

  @Column('smallint', { name: 'QTDCONS', nullable: true })
  qtdcons: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
