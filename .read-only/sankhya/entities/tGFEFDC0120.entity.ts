import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0120', ['codemp', 'dtref', 'regniv1', 'mesRefer'], {
  unique: true,
})
@Entity('TGFEFDC0120', { schema: 'SANKHYA' })
export class Tgfefdc0120Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0120'" })
  registro: string;

  @Column('datetime', { primary: true, name: 'MES_REFER' })
  mesRefer: Date;

  @Column('varchar', { name: 'INF_COMP', nullable: true, length: 2 })
  infComp: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
