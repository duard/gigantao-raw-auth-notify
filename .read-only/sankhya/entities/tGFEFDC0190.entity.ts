import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC0190',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'unid'],
  { unique: true },
)
@Entity('TGFEFDC0190', { schema: 'SANKHYA' })
export class Tgfefdc0190Entity {
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

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0190'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'UNID', length: 6 })
  unid: string;

  @Column('varchar', { name: 'DESCR', nullable: true, length: 3103 })
  descr: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
