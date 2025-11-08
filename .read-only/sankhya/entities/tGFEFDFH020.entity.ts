import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFH020',
  ['codemp', 'dtref', 'regniv1', 'dtInv', 'seqh010', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFH020', { schema: 'SANKHYA' })
export class Tgfefdfh020Entity {
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

  @Column('int', { primary: true, name: 'SEQH010' })
  seqh010: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'H020'" })
  registro: string;

  @Column('int', { name: 'CST_ICMS', nullable: true })
  cstIcms: number | null;

  @Column('float', { name: 'BC_ICMS', nullable: true, precision: 53 })
  bcIcms: number | null;

  @Column('float', { name: 'VL_ICMS', nullable: true, precision: 53 })
  vlIcms: number | null;

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
