import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGACSV', ['numcontrato', 'tipo', 'sequencia'], { unique: true })
@Entity('TGACSV', { schema: 'SANKHYA' })
export class TgacsvEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 200 })
  nomeparc: string | null;

  @Column('varchar', { name: 'TIPCOBR', length: 1 })
  tipcobr: string;

  @Column('int', { name: 'TIPOAPUR', nullable: true })
  tipoapur: number | null;

  @Column('varchar', { name: 'PERIODICIDADE', nullable: true, length: 1 })
  periodicidade: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('datetime', { name: 'DATAINI', nullable: true })
  dataini: Date | null;

  @Column('datetime', { name: 'DATAFIM', nullable: true })
  datafim: Date | null;

  @Column('float', { name: 'PESOTOTAL', nullable: true, precision: 53 })
  pesototal: number | null;

  @Column('float', { name: 'TOTALSACAS', nullable: true, precision: 53 })
  totalsacas: number | null;

  @Column('float', { name: 'VLRSERV', nullable: true, precision: 53 })
  vlrserv: number | null;

  @Column('float', { name: 'VLRTRANS', nullable: true, precision: 53 })
  vlrtrans: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'VLRFATUR', nullable: true, precision: 53 })
  vlrfatur: number | null;

  @Column('float', { name: 'VLRLIQUIDO', nullable: true, precision: 53 })
  vlrliquido: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'NOMEPROD', nullable: true, length: 40 })
  nomeprod: string | null;

  @Column('varchar', { name: 'GRUPOCONTRATO', nullable: true, length: 30 })
  grupocontrato: string | null;
}
