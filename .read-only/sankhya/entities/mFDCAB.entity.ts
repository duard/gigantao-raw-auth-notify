import { Column, Entity, Index } from 'typeorm';

@Index('MFDCAB_I01', ['coocupom', 'nroredz', 'codmaq'], {})
@Index('MFDCAB_I02', ['dtemissao', 'nroredz', 'codmaq'], {})
@Index('PK__MFDCAB__018D25A0', ['codmaq', 'coocupom'], { unique: true })
@Entity('MFDCAB', { schema: 'SANKHYA' })
export class MfdcabEntity {
  @Column('datetime', { name: 'DTEMISSAO', nullable: true })
  dtemissao: Date | null;

  @Column('int', { primary: true, name: 'COOCUPOM' })
  coocupom: number;

  @Column('int', { name: 'CCFCUPOM', nullable: true })
  ccfcupom: number | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('float', { name: 'VLRDESCTOT', nullable: true, precision: 53 })
  vlrdesctot: number | null;

  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('int', { name: 'NROREDZ', nullable: true })
  nroredz: number | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;
}
