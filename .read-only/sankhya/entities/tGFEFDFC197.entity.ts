import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC197',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc195', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC197', { schema: 'SANKHYA' })
export class Tgfefdfc197Entity {
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

  @Column('int', { primary: true, name: 'SEQC195' })
  seqc195: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C197'" })
  registro: string;

  @Column('varchar', { name: 'COD_AJ', length: 10 })
  codAj: string;

  @Column('varchar', { name: 'DESCR_COMPL_AJ', nullable: true, length: 255 })
  descrComplAj: string | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'ALIQ_ICMS', nullable: true, precision: 53 })
  aliqIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_OUTROS', nullable: true, precision: 53 })
  vlOutros: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
