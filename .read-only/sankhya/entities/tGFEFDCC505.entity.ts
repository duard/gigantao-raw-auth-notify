import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC505',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCC505', { schema: 'SANKHYA' })
export class Tgfefdcc505Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C505'" })
  registro: string;

  @Column('varchar', { name: 'CST_COFINS', nullable: true, length: 2 })
  cstCofins: string | null;

  @Column('float', { name: 'VL_ITEM', nullable: true, precision: 53 })
  vlItem: number | null;

  @Column('varchar', { name: 'NAT_BC_CRED', nullable: true, length: 2 })
  natBcCred: string | null;

  @Column('float', { name: 'VL_BC_COFINS', nullable: true, precision: 53 })
  vlBcCofins: number | null;

  @Column('float', { name: 'ALIQ_COFINS', nullable: true, precision: 53 })
  aliqCofins: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 255 })
  codCta: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
