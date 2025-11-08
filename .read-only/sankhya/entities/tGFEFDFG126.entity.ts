import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFG126',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqg125', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFG126', { schema: 'SANKHYA' })
export class Tgfefdfg126Entity {
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

  @Column('int', { primary: true, name: 'SEQG125' })
  seqg125: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'G126'" })
  registro: string;

  @Column('datetime', { name: 'DT_INI', nullable: true })
  dtIni: Date | null;

  @Column('datetime', { name: 'DT_FIN', nullable: true })
  dtFin: Date | null;

  @Column('int', { name: 'NUM_PARC', nullable: true })
  numParc: number | null;

  @Column('float', { name: 'VL_PARC_PASS', nullable: true, precision: 53 })
  vlParcPass: number | null;

  @Column('float', { name: 'VL_TRIB_OC', nullable: true, precision: 53 })
  vlTribOc: number | null;

  @Column('float', { name: 'VL_TOTAL', nullable: true, precision: 53 })
  vlTotal: number | null;

  @Column('float', { name: 'IND_PER_SAI', nullable: true, precision: 53 })
  indPerSai: number | null;

  @Column('float', { name: 'VL_PARC_APROP', nullable: true, precision: 53 })
  vlParcAprop: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
