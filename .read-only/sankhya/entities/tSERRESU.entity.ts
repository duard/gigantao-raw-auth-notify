import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRESU', ['nuconsulta', 'sequencia'], { unique: true })
@Entity('TSERRESU', { schema: 'SANKHYA' })
export class TserresuEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('smallint', { name: 'QTDRESUMO', nullable: true })
  qtdresumo: number | null;

  @Column('varchar', { name: 'GRUPORESUMO', nullable: true, length: 27 })
  gruporesumo: string | null;

  @Column('varchar', { name: 'DESCRMESINI', nullable: true, length: 3 })
  descrmesini: string | null;

  @Column('smallint', { name: 'MESINI', nullable: true })
  mesini: number | null;

  @Column('smallint', { name: 'ANOINI', nullable: true })
  anoini: number | null;

  @Column('varchar', { name: 'DESCRMESFIM', nullable: true, length: 3 })
  descrmesfim: string | null;

  @Column('smallint', { name: 'MESFIM', nullable: true })
  mesfim: number | null;

  @Column('smallint', { name: 'ANOFIM', nullable: true })
  anofim: number | null;

  @Column('varchar', { name: 'MOEDA', nullable: true, length: 3 })
  moeda: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 20 })
  origem: string | null;

  @Column('varchar', { name: 'AGENCIA', nullable: true, length: 4 })
  agencia: string | null;

  @Column('float', { name: 'VALORTOTAL', nullable: true, precision: 53 })
  valortotal: number | null;

  @Column('varchar', { name: 'NATUREZA', nullable: true, length: 3 })
  natureza: string | null;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'PERIODO', nullable: true, length: 30 })
  periodo: string | null;

  @Column('varchar', { name: 'CPFCNPJ', nullable: true, length: 18 })
  cpfcnpj: string | null;
}
