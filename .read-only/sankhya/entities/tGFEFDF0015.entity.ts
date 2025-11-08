import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0015', ['codemp', 'dtref', 'regniv1', 'ufSt'], {
  unique: true,
})
@Entity('TGFEFDF0015', { schema: 'SANKHYA' })
export class Tgfefdf0015Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0015'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'UF_ST', length: 2 })
  ufSt: string;

  @Column('varchar', { name: 'IE_ST', nullable: true, length: 14 })
  ieSt: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
