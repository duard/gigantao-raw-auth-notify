import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC395',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'nunota'],
  { unique: true },
)
@Entity('TGFEFDCC395', { schema: 'SANKHYA' })
export class Tgfefdcc395Entity {
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

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C395'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 3 })
  ser: string | null;

  @Column('varchar', { name: 'SUB_SER', nullable: true, length: 3 })
  subSer: string | null;

  @Column('varchar', { name: 'NUM_DOC', nullable: true, length: 6 })
  numDoc: string | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
