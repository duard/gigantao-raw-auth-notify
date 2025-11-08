import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0190', ['codemp', 'dtref', 'regniv1', 'unid'], {
  unique: true,
})
@Entity('TGFEFDF0190', { schema: 'SANKHYA' })
export class Tgfefdf0190Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0190'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'UNID', length: 6 })
  unid: string;

  @Column('varchar', { name: 'DESCR', nullable: true, length: 255 })
  descr: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
