import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFD161',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqd160', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFD161', { schema: 'SANKHYA' })
export class Tgfefdfd161Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQD160' })
  seqd160: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'D161'",
  })
  registro: string;

  @Column('smallint', { name: 'IND_CARGA', nullable: true })
  indCarga: number | null;

  @Column('varchar', { name: 'CNPJ_CPF_COL', nullable: true, length: 14 })
  cnpjCpfCol: string | null;

  @Column('varchar', { name: 'IE_COL', nullable: true, length: 14 })
  ieCol: string | null;

  @Column('int', { name: 'COD_MUN_COL', nullable: true })
  codMunCol: number | null;

  @Column('varchar', { name: 'CNPJ_CPF_ENTG', nullable: true, length: 14 })
  cnpjCpfEntg: string | null;

  @Column('varchar', { name: 'IE_ENTG', nullable: true, length: 14 })
  ieEntg: string | null;

  @Column('int', { name: 'COD_MUN_ENTG', nullable: true })
  codMunEntg: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
