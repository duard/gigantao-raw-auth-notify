import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGATRA', ['codtra'], { unique: true })
@Entity('TGATRA', { schema: 'SANKHYA' })
export class TgatraEntity {
  @Column('int', { primary: true, name: 'CODTRA' })
  codtra: number;

  @Column('int', { name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('datetime', { name: 'DATAINICIO', nullable: true })
  datainicio: Date | null;

  @Column('datetime', { name: 'DATAFINAL', nullable: true })
  datafinal: Date | null;

  @Column('int', { name: 'NUMTRANS', nullable: true })
  numtrans: number | null;

  @Column('varchar', { name: 'AVULSA', nullable: true, length: 1 })
  avulsa: string | null;

  @Column('float', { name: 'PESTOTAL', nullable: true, precision: 53 })
  pestotal: number | null;

  @Column('float', { name: 'SACASTOTAL', nullable: true, precision: 53 })
  sacastotal: number | null;

  @Column('float', { name: 'VLRMEDIOSC', nullable: true, precision: 53 })
  vlrmediosc: number | null;

  @Column('float', { name: 'VLRSERVPEN', nullable: true, precision: 53 })
  vlrservpen: number | null;

  @Column('float', { name: 'QTDTRANS', nullable: true, precision: 53 })
  qtdtrans: number | null;

  @Column('float', { name: 'SACASTRANS', nullable: true, precision: 53 })
  sacastrans: number | null;

  @Column('float', { name: 'VLRPORSC', nullable: true, precision: 53 })
  vlrporsc: number | null;

  @Column('float', { name: 'VLRSERVTRANS', nullable: true, precision: 53 })
  vlrservtrans: number | null;

  @Column('int', { name: 'CODDEST', nullable: true })
  coddest: number | null;

  @Column('float', { name: 'QTDTRIDA', nullable: true, precision: 53 })
  qtdtrida: number | null;

  @Column('float', { name: 'SCTRIDA', nullable: true, precision: 53 })
  sctrida: number | null;

  @Column('datetime', { name: 'DATACAD', nullable: true })
  datacad: Date | null;

  @Column('float', { name: 'VLRPORSCRIDA', nullable: true, precision: 53 })
  vlrporscrida: number | null;

  @Column('float', { name: 'VLRSCTRIDA', nullable: true, precision: 53 })
  vlrsctrida: number | null;

  @Column('float', { name: 'VLRSERVTRIDA', nullable: true, precision: 53 })
  vlrservtrida: number | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;
}
