import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFE530',
  ['codemp', 'dtref', 'regniv1', 'seqe500', 'regniv3', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFE530', { schema: 'SANKHYA' })
export class Tgfefdfe530Entity {
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
    name: 'REGNIV3',
    length: 4,
    default: () => "'E520'",
  })
  regniv3: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'E530'" })
  registro: string;

  @Column('varchar', { name: 'IND_AJ', nullable: true, length: 1 })
  indAj: string | null;

  @Column('float', { name: 'VL_AJ', nullable: true, precision: 53 })
  vlAj: number | null;

  @Column('varchar', { name: 'COD_AJ', nullable: true, length: 3 })
  codAj: string | null;

  @Column('varchar', { name: 'IND_DOC', nullable: true, length: 1 })
  indDoc: string | null;

  @Column('varchar', { name: 'NUM_DOC', nullable: true, length: 30 })
  numDoc: string | null;

  @Column('varchar', { name: 'DESCR_AJ', nullable: true, length: 255 })
  descrAj: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
