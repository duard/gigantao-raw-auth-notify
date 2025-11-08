import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC112',
  ['codemp', 'dtref', 'regniv1', 'chave', 'codInf', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC112', { schema: 'SANKHYA' })
export class Tgfefdfc112Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C112'" })
  registro: string;

  @Column('varchar', { name: 'COD_DA', nullable: true, length: 1 })
  codDa: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'NUM_DA', nullable: true, length: 15 })
  numDa: string | null;

  @Column('varchar', { name: 'COD_AUT', nullable: true, length: 15 })
  codAut: string | null;

  @Column('float', { name: 'VL_DA', nullable: true, precision: 53 })
  vlDa: number | null;

  @Column('datetime', { name: 'DT_VCTO', nullable: true })
  dtVcto: Date | null;

  @Column('datetime', { name: 'DT_PGTO', nullable: true })
  dtPgto: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
