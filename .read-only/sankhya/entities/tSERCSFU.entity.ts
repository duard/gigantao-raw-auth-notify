import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERCSFU', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERCSFU', { schema: 'SANKHYA' })
export class TsercsfuEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 18 })
  cpfcnpj: string | null;

  @Column('int', { name: 'QTDEOCOR', nullable: true })
  qtdeocor: number | null;

  @Column('datetime', { name: 'DATAOCOR', nullable: true })
  dataocor: Date | null;

  @Column('float', { name: 'VALORTOTAL', nullable: true, precision: 53 })
  valortotal: number | null;

  @Column('varchar', { name: 'CCF', nullable: true, length: 1 })
  ccf: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NMRCHEQUE', nullable: true, length: 6 })
  nmrcheque: string | null;

  @Column('int', { name: 'QTDEBANCO', nullable: true })
  qtdebanco: number | null;

  @Column('varchar', { name: 'BANCOCCF', nullable: true, length: 16 })
  bancoccf: string | null;

  @Column('int', { name: 'AGENCIACCF', nullable: true })
  agenciaccf: number | null;

  @Column('varchar', { name: 'CIDACCF', nullable: true, length: 30 })
  cidaccf: string | null;

  @Column('varchar', { name: 'UFCCF', nullable: true, length: 2 })
  ufccf: string | null;

  @Column('varchar', { name: 'CDNATU', nullable: true, length: 3 })
  cdnatu: string | null;

  @Column('varchar', { name: 'RESERVADOSERASA', nullable: true, length: 24 })
  reservadoserasa: string | null;

  @Column('int', { name: 'ALIN', nullable: true })
  alin: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'MOEDA', nullable: true, length: 3 })
  moeda: string | null;
}
