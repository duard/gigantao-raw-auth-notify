import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1900', ['codemp', 'dtref', 'regniv1', 'indApurIcms'], {
  unique: true,
})
@Entity('TGFEFDF1900', { schema: 'SANKHYA' })
export class Tgfefdf1900Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1900'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'IND_APUR_ICMS', length: 1 })
  indApurIcms: string;

  @Column('varchar', {
    name: 'DESCR_COMPL_OUT_APUR',
    nullable: true,
    length: 255,
  })
  descrComplOutApur: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
