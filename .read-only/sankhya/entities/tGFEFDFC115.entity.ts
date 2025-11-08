import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC115',
  ['codemp', 'dtref', 'regniv1', 'chave', 'codInf', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC115', { schema: 'SANKHYA' })
export class Tgfefdfc115Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C115'" })
  registro: string;

  @Column('smallint', { name: 'IND_CARGA', nullable: true })
  indCarga: number | null;

  @Column('varchar', { name: 'CNPJ_COL', nullable: true, length: 14 })
  cnpjCol: string | null;

  @Column('varchar', { name: 'IE_COL', nullable: true, length: 14 })
  ieCol: string | null;

  @Column('varchar', { name: 'CPF_COL', nullable: true, length: 11 })
  cpfCol: string | null;

  @Column('int', { name: 'COD_MUN_COL', nullable: true })
  codMunCol: number | null;

  @Column('varchar', { name: 'CNPJ_ENTG', nullable: true, length: 14 })
  cnpjEntg: string | null;

  @Column('varchar', { name: 'IE_ENTG', nullable: true, length: 14 })
  ieEntg: string | null;

  @Column('varchar', { name: 'CPF_ENTG', nullable: true, length: 11 })
  cpfEntg: string | null;

  @Column('int', { name: 'COD_MUN_ENTG', nullable: true })
  codMunEntg: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
