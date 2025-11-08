import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCF525',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCF525', { schema: 'SANKHYA' })
export class Tgfefdcf525Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'F001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'F525'" })
  registro: string;

  @Column('float', { name: 'VL_REC', nullable: true, precision: 53 })
  vlRec: number | null;

  @Column('varchar', { name: 'IND_REC', length: 2 })
  indRec: string;

  @Column('varchar', { name: 'CNPJ_CPF', nullable: true, length: 14 })
  cnpjCpf: string | null;

  @Column('varchar', { name: 'NUM_DOC', nullable: true, length: 60 })
  numDoc: string | null;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'VL_REC_DET', nullable: true, precision: 53 })
  vlRecDet: number | null;

  @Column('varchar', { name: 'CST_PIS', nullable: true, length: 2 })
  cstPis: string | null;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('varchar', { name: 'INFO_COMPL', nullable: true, length: 3103 })
  infoCompl: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 200 })
  codCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('int', { name: 'CODEMPSCP', nullable: true })
  codempscp: number | null;
}
