import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBLUCPRESRT', ['codemp', 'dtref', 'trimestre', 'nudoc'], {
  unique: true,
})
@Entity('TCBLUCPRESRT', { schema: 'SANKHYA' })
export class TcblucpresrtEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'EMPRESAMOVIMENTO' })
  empresamovimento: number;

  @Column('smallint', { primary: true, name: 'DTREF' })
  dtref: number;

  @Column('char', { primary: true, name: 'TRIMESTRE', length: 1 })
  trimestre: string;

  @Column('int', { primary: true, name: 'NUDOC' })
  nudoc: number;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('datetime', { name: 'DHTIPOPER', nullable: true })
  dhtipoper: Date | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 40 })
  nomeparc: string | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('float', { name: 'VLRIR', nullable: true, precision: 53 })
  vlrir: number | null;

  @Column('float', { name: 'VLRCSLL', nullable: true, precision: 53 })
  vlrcsll: number | null;

  @Column('smallint', { name: 'CODNATLPIR', nullable: true })
  codnatlpir: number | null;

  @Column('varchar', { name: 'DESCIRPJ', nullable: true, length: 400 })
  descirpj: string | null;

  @Column('smallint', { name: 'CODNATLPCSLL', nullable: true })
  codnatlpcsll: number | null;

  @Column('varchar', { name: 'DESCCSLL', nullable: true, length: 400 })
  desccsll: string | null;

  @Column('char', { name: 'CONSAPUR', nullable: true, length: 1 })
  consapur: string | null;

  @Column('char', { name: 'TPMOV', nullable: true, length: 1 })
  tpmov: string | null;
}
