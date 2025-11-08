import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFG110', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFG110', { schema: 'SANKHYA' })
export class Tgfefdfg110Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'G110'" })
  registro: string;

  @Column('datetime', { name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { name: 'DT_FIN', nullable: true })
  dtFin: Date | null;

  @Column('float', { name: 'SALDO_IN_ICMS', nullable: true, precision: 53 })
  saldoInIcms: number | null;

  @Column('float', { name: 'SOM_PARC', nullable: true, precision: 53 })
  somParc: number | null;

  @Column('float', { name: 'VL_TRIB_EXP', nullable: true, precision: 53 })
  vlTribExp: number | null;

  @Column('float', { name: 'VL_TOTAL', nullable: true, precision: 53 })
  vlTotal: number | null;

  @Column('float', { name: 'IND_PER_SAI', nullable: true, precision: 53 })
  indPerSai: number | null;

  @Column('float', { name: 'ICMS_APROP', nullable: true, precision: 53 })
  icmsAprop: number | null;

  @Column('float', { name: 'SOM_ICMS_OC', nullable: true, precision: 53 })
  somIcmsOc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
