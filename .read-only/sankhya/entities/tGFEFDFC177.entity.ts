import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC177',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc170', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC177', { schema: 'SANKHYA' })
export class Tgfefdfc177Entity {
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

  @Column('int', { primary: true, name: 'SEQC170' })
  seqc170: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C177'",
  })
  registro: string;

  @Column('varchar', { name: 'COD_INF_ITEM', length: 8 })
  codInfItem: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
