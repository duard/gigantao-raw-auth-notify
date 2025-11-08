import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCA110',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave', 'codInf'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCA110', { schema: 'SANKHYA' })
export class Tgfefdca110Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'A001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'A110'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_INF', length: 6 })
  codInf: string;

  @Column('varchar', { name: 'TXT_COMPL', nullable: true, length: 3103 })
  txtCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'CODINF0450', nullable: true })
  codinf0450: number | null;
}
