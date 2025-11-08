import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDC0450',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codInf'],
  { unique: true },
)
@Entity('TGFEFDC0450', { schema: 'SANKHYA' })
export class Tgfefdc0450Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0450'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_INF', length: 6 })
  codInf: string;

  @Column('varchar', { name: 'TXT', nullable: true, length: 3103 })
  txt: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
