import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERPPAG', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERPPAG', { schema: 'SANKHYA' })
export class TserppagEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DTOCORR', nullable: true })
  dtocorr: Date | null;

  @Column('varchar', { name: 'SIGLAMOD', nullable: true, length: 2 })
  siglamod: string | null;

  @Column('varchar', { name: 'PRINCIPAL', nullable: true, length: 1 })
  principal: string | null;

  @Column('varchar', { name: 'TIPOMOEDA', nullable: true, length: 3 })
  tipomoeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'CONTRATO', nullable: true, length: 17 })
  contrato: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 20 })
  origem: string | null;

  @Column('varchar', { name: 'FILIAL', nullable: true, length: 4 })
  filial: string | null;

  @Column('smallint', { name: 'QTDEOCORR', nullable: true })
  qtdeocorr: number | null;

  @Column('varchar', { name: 'CODBANCO', nullable: true, length: 4 })
  codbanco: string | null;

  @Column('varchar', { name: 'SUBJUDX', nullable: true, length: 1 })
  subjudx: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
