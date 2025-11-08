import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERCCC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERCCC', { schema: 'SANKHYA' })
export class TsercccEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DTOCORR', nullable: true })
  dtocorr: Date | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 40 })
  origem: string | null;

  @Column('varchar', { name: 'MODALIDADE', nullable: true, length: 12 })
  modalidade: string | null;

  @Column('varchar', { name: 'TIPOMOEDA', nullable: true, length: 3 })
  tipomoeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
