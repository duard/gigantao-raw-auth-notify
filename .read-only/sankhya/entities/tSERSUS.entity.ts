import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERSUS', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERSUS', { schema: 'SANKHYA' })
export class TsersusEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DTOCORR', nullable: true })
  dtocorr: Date | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 20 })
  origem: string | null;

  @Column('smallint', { name: 'AGENCIA', nullable: true })
  agencia: number | null;

  @Column('smallint', { name: 'CONTACORR', nullable: true })
  contacorr: number | null;

  @Column('smallint', { name: 'CHINICIAL', nullable: true })
  chinicial: number | null;

  @Column('smallint', { name: 'CHFINAL', nullable: true })
  chfinal: number | null;

  @Column('varchar', { name: 'MOTIVOSUSTA', nullable: true, length: 10 })
  motivosusta: string | null;

  @Column('smallint', { name: 'QTDEOCORR', nullable: true })
  qtdeocorr: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
