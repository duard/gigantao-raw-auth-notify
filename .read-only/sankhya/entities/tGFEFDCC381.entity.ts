import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC381',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'codMod', 'chave'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCC381', { schema: 'SANKHYA' })
export class Tgfefdcc381Entity {
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

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C381'" })
  registro: string;

  @Column('varchar', { name: 'CST_PIS', length: 2 })
  cstPis: string;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'VL_ITEM', nullable: true, precision: 53 })
  vlItem: number | null;

  @Column('float', { name: 'VL_BC_PIS', nullable: true, precision: 53 })
  vlBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS', nullable: true, precision: 53 })
  aliqPis: number | null;

  @Column('float', { name: 'QUANT_BC_PIS', nullable: true, precision: 53 })
  quantBcPis: number | null;

  @Column('float', { name: 'ALIQ_PIS_QUANT', nullable: true, precision: 53 })
  aliqPisQuant: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
