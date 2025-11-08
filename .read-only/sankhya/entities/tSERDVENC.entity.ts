import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERDVENC', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERDVENC', { schema: 'SANKHYA' })
export class TserdvencEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DTOCORR', nullable: true })
  dtocorr: Date | null;

  @Column('varchar', { name: 'MODALID', nullable: true, length: 15 })
  modalid: string | null;

  @Column('varchar', { name: 'TIPOMOEDA', nullable: true, length: 3 })
  tipomoeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'TITULO', nullable: true, length: 17 })
  titulo: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 20 })
  origem: string | null;

  @Column('varchar', { name: 'LOCAL', nullable: true, length: 4 })
  local: string | null;

  @Column('smallint', { name: 'QTDEOCORR', nullable: true })
  qtdeocorr: number | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VALORTOTAL', nullable: true, precision: 53 })
  valortotal: number | null;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 18 })
  cpfcnpj: string | null;

  @Column('float', { name: 'VALORGERAL', nullable: true, precision: 53 })
  valorgeral: number | null;
}
