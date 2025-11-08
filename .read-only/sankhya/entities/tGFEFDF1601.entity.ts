import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1601', ['codemp', 'dtref', 'regniv1', 'codPartIp'], {
  unique: true,
})
@Entity('TGFEFDF1601', { schema: 'SANKHYA' })
export class Tgfefdf1601Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('bigint', { primary: true, name: 'COD_PART_IP' })
  codPartIp: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1601'" })
  registro: string;

  @Column('varchar', { name: 'COD_PART_IT', nullable: true, length: 60 })
  codPartIt: string | null;

  @Column('float', { name: 'TOT_VS', nullable: true, precision: 53 })
  totVs: number | null;

  @Column('float', { name: 'TOT_ISS', nullable: true, precision: 53 })
  totIss: number | null;

  @Column('float', { name: 'TOT_OUTROS', nullable: true, precision: 53 })
  totOutros: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'CODPARCTEF1601', nullable: true })
  codparctef1601: number | null;

  @Column('int', { name: 'CODPARCINTER1601', nullable: true })
  codparcinter1601: number | null;

  @Column('float', { name: 'VLRBRUTVEN1601', nullable: true, precision: 53 })
  vlrbrutven1601: number | null;

  @Column('float', { name: 'VLRBRUTSERV1601', nullable: true, precision: 53 })
  vlrbrutserv1601: number | null;

  @Column('float', { name: 'VLRVENDOUT1601', nullable: true, precision: 53 })
  vlrvendout1601: number | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
