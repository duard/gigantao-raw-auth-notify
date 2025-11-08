import { Column, Entity, Index } from 'typeorm';

@Index('MFDITE_I01', ['coocupom', 'nroredz', 'codmaq'], {})
@Index('MFDITE_I02', ['dtemissao'], {})
@Index('PK_MFDITE', ['coocupom', 'seqitem', 'codprod', 'codmaq'], {
  unique: true,
})
@Entity('MFDITE', { schema: 'SANKHYA' })
export class MfditeEntity {
  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('int', { name: 'NROREDZ', nullable: true })
  nroredz: number | null;

  @Column('int', { primary: true, name: 'COOCUPOM' })
  coocupom: number;

  @Column('int', { name: 'CCFCUPOM', nullable: true })
  ccfcupom: number | null;

  @Column('smallint', { primary: true, name: 'SEQITEM' })
  seqitem: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'ALIQUOTA', nullable: true, length: 8 })
  aliquota: string | null;

  @Column('smallint', { name: 'INDALIQUOTA', nullable: true })
  indaliquota: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'AJUSTE', nullable: true, precision: 53 })
  ajuste: number | null;

  @Column('float', { name: 'VLRDESCTOT', nullable: true, precision: 53 })
  vlrdesctot: number | null;

  @Column('char', { name: 'CANCELADO', nullable: true, length: 1 })
  cancelado: string | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('char', { name: 'KIT', length: 1, default: () => "'N'" })
  kit: string;

  @Column('datetime', { name: 'DTEMISSAO', nullable: true })
  dtemissao: Date | null;
}
