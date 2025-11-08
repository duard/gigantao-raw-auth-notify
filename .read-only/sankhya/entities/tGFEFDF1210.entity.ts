import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF1210',
  ['codemp', 'dtref', 'regniv1', 'seq1200', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDF1210', { schema: 'SANKHYA' })
export class Tgfefdf1210Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQ1200' })
  seq1200: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1210'" })
  registro: string;

  @Column('varchar', { name: 'TIPO_UTIL', nullable: true, length: 4 })
  tipoUtil: string | null;

  @Column('varchar', { name: 'NR_DOC', nullable: true, length: 10 })
  nrDoc: string | null;

  @Column('float', { name: 'VL_CRED_UTIL', nullable: true, precision: 53 })
  vlCredUtil: number | null;

  @Column('varchar', { name: 'CHV_DOCE', nullable: true, length: 44 })
  chvDoce: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
