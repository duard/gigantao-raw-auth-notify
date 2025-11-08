import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCC600',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDCC600', { schema: 'SANKHYA' })
export class Tgfefdcc600Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C600'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', nullable: true, length: 2 })
  codMod: string | null;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('int', { name: 'SUB', nullable: true })
  sub: number | null;

  @Column('int', { name: 'COD_CONS', nullable: true })
  codCons: number | null;

  @Column('int', { name: 'QTD_CONS', nullable: true })
  qtdCons: number | null;

  @Column('int', { name: 'QTD_CANC', nullable: true })
  qtdCanc: number | null;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('int', { name: 'CONS', nullable: true })
  cons: number | null;

  @Column('float', { name: 'VL_FORN', nullable: true, precision: 53 })
  vlForn: number | null;

  @Column('float', { name: 'VL_SERV_NT', nullable: true, precision: 53 })
  vlServNt: number | null;

  @Column('float', { name: 'VL_TERC', nullable: true, precision: 53 })
  vlTerc: number | null;

  @Column('float', { name: 'VL_DA', nullable: true, precision: 53 })
  vlDa: number | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_BC_ICMS_ST', nullable: true, precision: 53 })
  vlBcIcmsSt: number | null;

  @Column('float', { name: 'VL_ICMS_ST', nullable: true, precision: 53 })
  vlIcmsSt: number | null;

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
