import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC460',
  ['codemp', 'dtref', 'regniv1', 'seqc400', 'seqc405', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC460', { schema: 'SANKHYA' })
export class Tgfefdfc460Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C460'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('int', { name: 'COD_SIT', nullable: true })
  codSit: number | null;

  @Column('int', { name: 'NUM_DOC' })
  numDoc: number;

  @Column('datetime', { name: 'DT_DOC' })
  dtDoc: Date;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'CPF_CNPJ', nullable: true, length: 14 })
  cpfCnpj: string | null;

  @Column('varchar', { name: 'NOM_ADQ', nullable: true, length: 60 })
  nomAdq: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
