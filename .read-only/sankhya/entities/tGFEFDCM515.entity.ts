import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCM515',
  ['codemp', 'dtref', 'regniv1', 'aliqCofins', 'seqm510', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCM515', { schema: 'SANKHYA' })
export class Tgfefdcm515Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'M001'",
  })
  regniv1: string;

  @Column('float', { primary: true, name: 'ALIQ_COFINS', precision: 53 })
  aliqCofins: number;

  @Column('smallint', { primary: true, name: 'SEQM510' })
  seqm510: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'M515'" })
  registro: string;

  @Column('float', { name: 'DET_VALOR_AJ', nullable: true, precision: 53 })
  detValorAj: number | null;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('float', { name: 'DET_BC_CRED', nullable: true, precision: 53 })
  detBcCred: number | null;

  @Column('float', { name: 'DET_ALIQ', nullable: true, precision: 53 })
  detAliq: number | null;

  @Column('datetime', { name: 'DT_OPER_AJ', nullable: true })
  dtOperAj: Date | null;

  @Column('varchar', { name: 'DESC_AJ', nullable: true, length: 3103 })
  descAj: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('varchar', { name: 'INFO_COMPL', nullable: true, length: 3103 })
  infoCompl: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
