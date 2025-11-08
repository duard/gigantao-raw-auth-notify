import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC111',
  ['codemp', 'dtref', 'regniv1', 'chave', 'codInf', 'numProc'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC111', { schema: 'SANKHYA' })
export class Tgfefdfc111Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C111'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'NUM_PROC', length: 60 })
  numProc: string;

  @Column('varchar', { name: 'IND_PROC', length: 1 })
  indProc: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
