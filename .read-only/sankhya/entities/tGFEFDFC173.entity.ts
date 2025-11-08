import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC173',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc170', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC173', { schema: 'SANKHYA' })
export class Tgfefdfc173Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C173'" })
  registro: string;

  @Column('varchar', { name: 'LOTE_MED', nullable: true, length: 100 })
  loteMed: string | null;

  @Column('float', { name: 'QTD_ITEM', nullable: true, precision: 53 })
  qtdItem: number | null;

  @Column('datetime', { name: 'DT_FAB', nullable: true })
  dtFab: Date | null;

  @Column('datetime', { name: 'DT_VAL', nullable: true })
  dtVal: Date | null;

  @Column('varchar', { name: 'IND_MED', nullable: true, length: 1 })
  indMed: string | null;

  @Column('varchar', { name: 'TP_PROD', nullable: true, length: 1 })
  tpProd: string | null;

  @Column('float', { name: 'VL_TAB_MAX', nullable: true, precision: 53 })
  vlTabMax: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
