import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFREGSPEDH030', ['codemp', 'dtref', 'codprod'], { unique: true })
@Entity('TGFREGSPEDH030', { schema: 'SANKHYA' })
export class Tgfregspedh030Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { name: 'DTINV' })
  dtinv: Date;

  @Column('smallint', { name: 'TIPINV' })
  tipinv: number;

  @Column('float', { name: 'QTDTOT', nullable: true, precision: 53 })
  qtdtot: number | null;

  @Column('float', { name: 'VL_ICMS_OP', nullable: true, precision: 53 })
  vlIcmsOp: number | null;

  @Column('float', { name: 'VL_BC_ICMS_ST', nullable: true, precision: 53 })
  vlBcIcmsSt: number | null;

  @Column('float', { name: 'VL_ICMS_ST', nullable: true, precision: 53 })
  vlIcmsSt: number | null;

  @Column('float', { name: 'VL_FCP', nullable: true, precision: 53 })
  vlFcp: number | null;
}
