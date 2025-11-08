import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE520',
  ['codemp', 'dtref', 'regniv1', 'seqe500', 'registro'],
  { unique: true },
)
@Entity('TGFEFDFE520', { schema: 'SANKHYA' })
export class Tgfefdfe520Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'E001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQE500' })
  seqe500: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'E520'",
  })
  registro: string;

  @Column('float', { name: 'VL_SD_ANT_IPI', nullable: true, precision: 53 })
  vlSdAntIpi: number | null;

  @Column('float', { name: 'VL_DEB_IPI', nullable: true, precision: 53 })
  vlDebIpi: number | null;

  @Column('float', { name: 'VL_CRED_IPI', nullable: true, precision: 53 })
  vlCredIpi: number | null;

  @Column('float', { name: 'VL_OD_IPI', nullable: true, precision: 53 })
  vlOdIpi: number | null;

  @Column('float', { name: 'VL_OC_IPI', nullable: true, precision: 53 })
  vlOcIpi: number | null;

  @Column('float', { name: 'VL_SC_IPI', nullable: true, precision: 53 })
  vlScIpi: number | null;

  @Column('float', { name: 'VL_SD_IPI', nullable: true, precision: 53 })
  vlSdIpi: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
