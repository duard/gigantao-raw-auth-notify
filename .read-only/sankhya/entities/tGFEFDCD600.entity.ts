import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDCD600',
  ['codemp', 'dtref', 'regniv1', 'codempestab', 'chave'],
  { unique: true },
)
@Entity('TGFEFDCD600', { schema: 'SANKHYA' })
export class Tgfefdcd600Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'D001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODEMPESTAB' })
  codempestab: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D600'" })
  registro: string;

  @Column('varchar', { name: 'COD_MOD', length: 2 })
  codMod: string;

  @Column('int', { name: 'COD_MUN', nullable: true })
  codMun: number | null;

  @Column('varchar', { name: 'SER', nullable: true, length: 4 })
  ser: string | null;

  @Column('int', { name: 'SUB', nullable: true })
  sub: number | null;

  @Column('int', { name: 'IND_REC', nullable: true })
  indRec: number | null;

  @Column('int', { name: 'QTD_CONS', nullable: true })
  qtdCons: number | null;

  @Column('datetime', { name: 'DT_DOC_INI', nullable: true })
  dtDocIni: Date | null;

  @Column('datetime', { name: 'DT_DOC_FIN', nullable: true })
  dtDocFin: Date | null;

  @Column('float', { name: 'VL_DOC', nullable: true, precision: 53 })
  vlDoc: number | null;

  @Column('float', { name: 'VL_DESC', nullable: true, precision: 53 })
  vlDesc: number | null;

  @Column('float', { name: 'VL_SERV', nullable: true, precision: 53 })
  vlServ: number | null;

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

  @Column('float', { name: 'VL_PIS', nullable: true, precision: 53 })
  vlPis: number | null;

  @Column('float', { name: 'VL_COFINS', nullable: true, precision: 53 })
  vlCofins: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
