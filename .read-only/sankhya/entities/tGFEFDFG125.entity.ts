import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFG125', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFG125', { schema: 'SANKHYA' })
export class Tgfefdfg125Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'G001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'G125'" })
  registro: string;

  @Column('varchar', { name: 'COD_IND_BEM', nullable: true, length: 60 })
  codIndBem: string | null;

  @Column('datetime', { name: 'DT_MOV', nullable: true })
  dtMov: Date | null;

  @Column('varchar', { name: 'TIPO_MOV', nullable: true, length: 2 })
  tipoMov: string | null;

  @Column('float', { name: 'VL_IMOB_ICMS_OP', nullable: true, precision: 53 })
  vlImobIcmsOp: number | null;

  @Column('float', { name: 'VL_IMOB_ICMS_ST', nullable: true, precision: 53 })
  vlImobIcmsSt: number | null;

  @Column('float', { name: 'VL_IMOB_ICMS_FRT', nullable: true, precision: 53 })
  vlImobIcmsFrt: number | null;

  @Column('float', { name: 'VL_IMOB_ICMS_DIF', nullable: true, precision: 53 })
  vlImobIcmsDif: number | null;

  @Column('int', { name: 'NUM_PARC', nullable: true })
  numParc: number | null;

  @Column('float', { name: 'VL_PARC_PASS', nullable: true, precision: 53 })
  vlParcPass: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
