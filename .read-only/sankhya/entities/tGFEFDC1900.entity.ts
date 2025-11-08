import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC1900', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDC1900', { schema: 'SANKHYA' })
export class Tgfefdc1900Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1900'" })
  registro: string;

  @Column('varchar', { name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('varchar', { name: 'SUB_SER', nullable: true, length: 20 })
  subSer: string | null;

  @Column('varchar', { name: 'COD_SIT', nullable: true, length: 2 })
  codSit: string | null;

  @Column('float', { name: 'VL_TOT_REC', nullable: true, precision: 53 })
  vlTotRec: number | null;

  @Column('int', { name: 'QUANT_DOC', nullable: true })
  quantDoc: number | null;

  @Column('varchar', { name: 'CST_PIS', nullable: true, length: 2 })
  cstPis: string | null;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('varchar', { name: 'INF_COMPL', nullable: true, length: 3103 })
  infCompl: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('int', { name: 'CODSCP', default: () => '(0)' })
  codscp: number;
}
