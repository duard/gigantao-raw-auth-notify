import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC860',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCC860', { schema: 'SANKHYA' })
export class Tgfefdcc860Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C860'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('int', { name: 'NR_SAT', nullable: true })
  nrSat: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('int', { name: 'DOC_INI', nullable: true })
  docIni: number | null;

  @Column('int', { name: 'DOC_FIM', nullable: true })
  docFim: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
