import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCM115',
  ['codemp', 'dtref', 'regniv1', 'aliqPis', 'seqm110', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCM115', { schema: 'SANKHYA' })
export class Tgfefdcm115Entity {
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

  @Column('float', { primary: true, name: 'ALIQ_PIS', precision: 53 })
  aliqPis: number;

  @Column('smallint', { primary: true, name: 'SEQM110' })
  seqm110: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'M115'" })
  registro: string;

  @Column('float', { name: 'DET_VALOR_AJ', nullable: true, precision: 53 })
  detValorAj: number | null;

  @Column('varchar', { name: 'CST_PIS', nullable: true, length: 2 })
  cstPis: string | null;

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
