import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC400',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codmaq'],
  { unique: true },
)
@Entity('TGFEFDCC400', { schema: 'SANKHYA' })
export class Tgfefdcc400Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C400'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'ECF_MOD', nullable: true, length: 20 })
  ecfMod: string | null;

  @Column('varchar', { name: 'ECF_FAB', nullable: true, length: 21 })
  ecfFab: string | null;

  @Column('int', { name: 'ECF_CX', nullable: true })
  ecfCx: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
