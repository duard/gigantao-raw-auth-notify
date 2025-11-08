import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFH010', ['codemp', 'dtref', 'regniv1', 'dtInv', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFH010', { schema: 'SANKHYA' })
export class Tgfefdfh010Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'H001'",
  })
  regniv1: string;

  @Column('datetime', { primary: true, name: 'DT_INV' })
  dtInv: Date;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'H010'" })
  registro: string;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('varchar', { name: 'UNID', nullable: true, length: 6 })
  unid: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'VL_UNIT', nullable: true, precision: 53 })
  vlUnit: number | null;

  @Column('float', { name: 'VL_ITEM', nullable: true, precision: 53 })
  vlItem: number | null;

  @Column('varchar', { name: 'IND_PROP', nullable: true, length: 1 })
  indProp: string | null;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 60 })
  codPart: string | null;

  @Column('varchar', { name: 'TXT_COMPL', nullable: true, length: 255 })
  txtCompl: string | null;

  @Column('varchar', { name: 'COD_CTA', nullable: true, length: 30 })
  codCta: string | null;

  @Column('float', { name: 'VL_ITEM_IR', nullable: true, precision: 53 })
  vlItemIr: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', {
    name: 'MOT_INV',
    nullable: true,
    length: 2,
    default: () => "'01'",
  })
  motInv: string | null;
}
