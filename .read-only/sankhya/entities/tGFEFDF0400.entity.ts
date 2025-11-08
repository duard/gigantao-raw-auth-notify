import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0400', ['codemp', 'dtref', 'regniv1', 'codNat'], {
  unique: true,
})
@Entity('TGFEFDF0400', { schema: 'SANKHYA' })
export class Tgfefdf0400Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0400'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_NAT', length: 10 })
  codNat: string;

  @Column('varchar', { name: 'DESCR_NAT', nullable: true, length: 255 })
  descrNat: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
