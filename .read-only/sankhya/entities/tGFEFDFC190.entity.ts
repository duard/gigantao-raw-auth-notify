import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC190', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFC190', { schema: 'SANKHYA' })
export class Tgfefdfc190Entity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C190'" })
  registro: string;

  @Column('int', { name: 'CST_ICMS', nullable: true })
  cstIcms: number | null;

  @Column('int', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('float', { name: 'ALIQ_ICMS', nullable: true, precision: 53 })
  aliqIcms: number | null;

  @Column('float', { name: 'VL_OPR', nullable: true, precision: 53 })
  vlOpr: number | null;

  @Column('float', { name: 'VL_BC_ICMS', nullable: true, precision: 53 })
  vlBcIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

  @Column('float', { name: 'VL_BC_ICMS_ST', nullable: true, precision: 53 })
  vlBcIcmsSt: number | null;

  @Column('float', { name: 'VL_ICMS_ST', nullable: true, precision: 53 })
  vlIcmsSt: number | null;

  @Column('float', { name: 'VL_RED_BC', nullable: true, precision: 53 })
  vlRedBc: number | null;

  @Column('float', { name: 'VL_IPI', nullable: true, precision: 53 })
  vlIpi: number | null;

  @Column('varchar', { name: 'COD_OBS', nullable: true, length: 6 })
  codObs: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
