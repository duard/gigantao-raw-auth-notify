import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDF0175',
  ['codemp', 'dtref', 'regniv1', 'codparc', 'dtAlt', 'nrCampo'],
  {
    unique: true,
  },
)
@Entity('TGFEFDF0175', { schema: 'SANKHYA' })
export class Tgfefdf0175Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0175'" })
  registro: string;

  @Column('datetime', { primary: true, name: 'DT_ALT' })
  dtAlt: Date;

  @Column('varchar', { primary: true, name: 'NR_CAMPO', length: 2 })
  nrCampo: string;

  @Column('varchar', { name: 'CONT_ANT', nullable: true, length: 100 })
  contAnt: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
