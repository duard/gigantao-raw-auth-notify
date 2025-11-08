import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCP200', ['codemp', 'dtref', 'regniv1', 'perRef', 'codRec'], {
  unique: true,
})
@Entity('TGFEFDCP200', { schema: 'SANKHYA' })
export class Tgfefdcp200Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'P001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'P200'" })
  registro: string;

  @Column('datetime', { primary: true, name: 'PER_REF' })
  perRef: Date;

  @Column('float', { name: 'VL_TOT_CONT_APU', nullable: true, precision: 53 })
  vlTotContApu: number | null;

  @Column('float', { name: 'VL_TOT_AJ_REDUC', nullable: true, precision: 53 })
  vlTotAjReduc: number | null;

  @Column('float', { name: 'VL_TOT_AJ_ACRES', nullable: true, precision: 53 })
  vlTotAjAcres: number | null;

  @Column('float', { name: 'VL_TOT_CONT_DEV', nullable: true, precision: 53 })
  vlTotContDev: number | null;

  @Column('varchar', { primary: true, name: 'COD_REC', length: 6 })
  codRec: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
