import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMBC_EXC', ['nubco', 'dhexclusao'], { unique: true })
@Entity('TGFMBC_EXC', { schema: 'SANKHYA' })
export class TgfmbcExcEntity {
  @Column('int', { primary: true, name: 'NUBCO' })
  nubco: number;

  @Column('smallint', { name: 'CODLANC', nullable: true })
  codlanc: number | null;

  @Column('datetime', { name: 'DTLANC', nullable: true })
  dtlanc: Date | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('datetime', { name: 'DHTIPOPER', nullable: true })
  dhtipoper: Date | null;

  @Column('datetime', { name: 'DTCONTAB', nullable: true })
  dtcontab: Date | null;

  @Column('smallint', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('money', { name: 'VLRLANC', nullable: true })
  vlrlanc: number | null;

  @Column('smallint', { name: 'TALAO', nullable: true })
  talao: number | null;

  @Column('datetime', { name: 'PREDATA', nullable: true })
  predata: Date | null;

  @Column('char', { name: 'CONCILIADO', nullable: true, length: 1 })
  conciliado: string | null;

  @Column('datetime', { name: 'DHCONCILIACAO', nullable: true })
  dhconciliacao: Date | null;

  @Column('char', { name: 'ORIGMOV', nullable: true, length: 1 })
  origmov: string | null;

  @Column('int', { name: 'NUMTRANSF', nullable: true })
  numtransf: number | null;

  @Column('smallint', { name: 'RECDESP', nullable: true })
  recdesp: number | null;

  @Column('varchar', { name: 'HISTORICO', nullable: true, length: 90 })
  historico: string | null;

  @Column('char', { name: 'NT_USERNAME', nullable: true, length: 30 })
  ntUsername: string | null;

  @Column('char', { name: 'HOSTNAME', nullable: true, length: 64 })
  hostname: string | null;

  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('char', { name: 'USUARIO', nullable: true, length: 30 })
  usuario: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true, default: () => '(0)' })
  codusu: number | null;

  @Column('char', { name: 'PROGRAMA', nullable: true, length: 80 })
  programa: string | null;
}
