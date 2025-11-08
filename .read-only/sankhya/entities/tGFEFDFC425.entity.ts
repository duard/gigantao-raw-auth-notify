import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC425',
  ['codemp', 'dtref', 'regniv1', 'seqc400', 'seqc405', 'seqc420', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFC425', { schema: 'SANKHYA' })
export class Tgfefdfc425Entity {
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

  @Column('int', { primary: true, name: 'SEQC400' })
  seqc400: number;

  @Column('int', { primary: true, name: 'SEQC405' })
  seqc405: number;

  @Column('int', { primary: true, name: 'SEQC420' })
  seqc420: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C425'" })
  registro: string;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'VL_ITEM', nullable: true, precision: 53 })
  vlItem: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
