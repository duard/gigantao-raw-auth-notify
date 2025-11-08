import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFB470', ['codemp', 'dtref', 'regniv1', 'registro'], {
  unique: true,
})
@Entity('TGFEFDFB470', { schema: 'SANKHYA' })
export class Tgfefdfb470Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'B001'",
  })
  regniv1: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'B470'",
  })
  registro: string;

  @Column('float', { name: 'VL_CONT', nullable: true, precision: 53 })
  vlCont: number | null;

  @Column('float', { name: 'VL_MAT_TERC', nullable: true, precision: 53 })
  vlMatTerc: number | null;

  @Column('float', { name: 'VL_MAT_PROP', nullable: true, precision: 53 })
  vlMatProp: number | null;

  @Column('float', { name: 'VL_SUB', nullable: true, precision: 53 })
  vlSub: number | null;

  @Column('float', { name: 'VL_ISNT', nullable: true, precision: 53 })
  vlIsnt: number | null;

  @Column('float', { name: 'VL_DED_BC', nullable: true, precision: 53 })
  vlDedBc: number | null;

  @Column('float', { name: 'VL_BC_ISS', nullable: true, precision: 53 })
  vlBcIss: number | null;

  @Column('float', { name: 'VL_BC_ISS_RT', nullable: true, precision: 53 })
  vlBcIssRt: number | null;

  @Column('float', { name: 'VL_ISS', nullable: true, precision: 53 })
  vlIss: number | null;

  @Column('float', { name: 'VL_ISS_RT', nullable: true, precision: 53 })
  vlIssRt: number | null;

  @Column('float', { name: 'VL_DED', nullable: true, precision: 53 })
  vlDed: number | null;

  @Column('float', { name: 'VL_ISS_REC', nullable: true, precision: 53 })
  vlIssRec: number | null;

  @Column('float', { name: 'VL_ISS_ST', nullable: true, precision: 53 })
  vlIssSt: number | null;

  @Column('float', { name: 'VL_ISS_REC_UNI', nullable: true, precision: 53 })
  vlIssRecUni: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
