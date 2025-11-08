import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCBCALCLUCPRES', ['codemp', 'sequencia'], { unique: true })
@Entity('TCBCALCLUCPRES', { schema: 'SANKHYA' })
export class TcbcalclucpresEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTDOCUMENTO', nullable: true })
  dtdocumento: Date | null;

  @Column('float', { name: 'VLRIPI', nullable: true, precision: 53 })
  vlripi: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'ICMSSTFRETE', nullable: true, precision: 53 })
  icmsstfrete: number | null;

  @Column('float', { name: 'VLRICMSFCPINT', nullable: true, precision: 53 })
  vlricmsfcpint: number | null;

  @Column('float', { name: 'VLRICMSFCP', nullable: true, precision: 53 })
  vlricmsfcp: number | null;

  @Column('float', { name: 'VLRSTFCPINT', nullable: true, precision: 53 })
  vlrstfcpint: number | null;

  @Column('float', { name: 'VLRDESCTOT', nullable: true, precision: 53 })
  vlrdesctot: number | null;

  @Column('float', { name: 'VLRDESCTOTITEM', nullable: true, precision: 53 })
  vlrdesctotitem: number | null;

  @Column('float', { name: 'VLRDOCUMENTO', nullable: true, precision: 53 })
  vlrdocumento: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('smallint', { name: 'CODNATLP', nullable: true })
  codnatlp: number | null;

  @Column('smallint', { name: 'RECDESP', nullable: true })
  recdesp: number | null;

  @Column('char', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('char', { name: 'TIPLANC', nullable: true, length: 3 })
  tiplanc: string | null;
}
