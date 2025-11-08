import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCD200',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCD200', { schema: 'SANKHYA' })
export class Tgfefdcd200Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'D001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D200'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('varchar', { name: 'COD_SIT', nullable: true, length: 2 })
  codSit: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('varchar', { name: 'SUB', nullable: true, length: 3 })
  sub: string | null;

  @Column('int', { name: 'NUM_DOC_INI', nullable: true })
  numDocIni: number | null;

  @Column('int', { name: 'NUM_DOC_FIN', nullable: true })
  numDocFin: number | null;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('datetime', { name: 'DT_REF', nullable: true })
  dtRef: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
