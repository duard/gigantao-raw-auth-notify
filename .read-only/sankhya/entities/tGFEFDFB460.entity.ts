import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFB460', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFB460', { schema: 'SANKHYA' })
export class Tgfefdfb460Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'B460'" })
  registro: string;

  @Column('varchar', { name: 'IND_DED', nullable: true, length: 1 })
  indDed: string | null;

  @Column('float', { name: 'VL_DED', nullable: true, precision: 53 })
  vlDed: number | null;

  @Column('varchar', { name: 'NUM_PROC', nullable: true, length: 10 })
  numProc: string | null;

  @Column('varchar', { name: 'IND_PROC', nullable: true, length: 1 })
  indProc: string | null;

  @Column('varchar', { name: 'DESCPROC', nullable: true, length: 255 })
  descproc: string | null;

  @Column('varchar', { name: 'COD_INF_OBS', nullable: true, length: 60 })
  codInfObs: string | null;

  @Column('varchar', { name: 'IND_OBR', nullable: true, length: 1 })
  indObr: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
