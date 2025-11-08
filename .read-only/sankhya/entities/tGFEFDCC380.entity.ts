import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC380',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codMod'],
  { unique: true },
)
@Entity('TGFEFDCC380', { schema: 'SANKHYA' })
export class Tgfefdcc380Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C380'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('datetime', { name: 'DT_DOC_INI', nullable: true })
  dtDocIni: Date | null;

  @Column('datetime', { name: 'DT_DOC_FIN', nullable: true })
  dtDocFin: Date | null;

  @Column('int', { name: 'NUM_DOC_INI', nullable: true })
  numDocIni: number | null;

  @Column('int', { name: 'NUM_DOC_FIN', nullable: true })
  numDocFin: number | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_DOC_CANC', nullable: true, precision: 53 })
  vlDocCanc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
