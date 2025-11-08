import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC490',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codMod'],
  { unique: true },
)
@Entity('TGFEFDCC490', { schema: 'SANKHYA' })
export class Tgfefdcc490Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C490'" })
  registro: string;

  @Column('datetime', { name: 'DT_DOC_INI', nullable: true })
  dtDocIni: Date | null;

  @Column('datetime', { name: 'DT_DOC_FIN', nullable: true })
  dtDocFin: Date | null;

  @Column('varchar', { primary: true, name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
