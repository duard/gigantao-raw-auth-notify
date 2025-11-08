import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC405',
  ['codemp', 'dtref', 'regniv1', 'seqc400', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFC405', { schema: 'SANKHYA' })
export class Tgfefdfc405Entity {
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

  @Column('int', { primary: true, name: 'SEQC400' })
  seqc400: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C405'" })
  registro: string;

  @Column('datetime', { name: 'DT_DOC', nullable: true })
  dtDoc: Date | null;

  @Column('int', { name: 'CRO', nullable: true })
  cro: number | null;

  @Column('int', { name: 'CRZ', nullable: true })
  crz: number | null;

  @Column('int', { name: 'NUM_COO_FIN', nullable: true })
  numCooFin: number | null;

  @Column('float', { name: 'GT_FIN', nullable: true, precision: 53 })
  gtFin: number | null;

  @Column('float', { name: 'VL_BRT', nullable: true, precision: 53 })
  vlBrt: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
