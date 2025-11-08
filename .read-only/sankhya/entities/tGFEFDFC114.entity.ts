import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC114',
  ['codemp', 'dtref', 'regniv1', 'chave', 'codInf', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC114', { schema: 'SANKHYA' })
export class Tgfefdfc114Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { primary: true, name: 'COD_INF', length: 6 })
  codInf: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C114'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'ECF_FAB', nullable: true, length: 21 })
  ecfFab: string | null;

  @Column('int', { name: 'ECF_CX', nullable: true })
  ecfCx: number | null;

  @Column('int', { name: 'NUM_DOC', nullable: true })
  numDoc: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
