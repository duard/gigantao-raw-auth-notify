import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0900', ['codemp', 'dtref', 'regniv1', 'registro', 'codscp'], {
  unique: true,
})
@Entity('TGFEFDC0900', { schema: 'SANKHYA' })
export class Tgfefdc0900Entity {
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

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0900'",
  })
  registro: string;

  @Column('float', { name: 'REC_TOTAL_BLOCO_A', nullable: true, precision: 53 })
  recTotalBlocoA: number | null;

  @Column('float', { name: 'REC_NRB_BLOCO_A', nullable: true, precision: 53 })
  recNrbBlocoA: number | null;

  @Column('float', { name: 'REC_TOTAL_BLOCO_C', nullable: true, precision: 53 })
  recTotalBlocoC: number | null;

  @Column('float', { name: 'REC_NRB_BLOCO_C', nullable: true, precision: 53 })
  recNrbBlocoC: number | null;

  @Column('float', { name: 'REC_TOTAL_BLOCO_D', nullable: true, precision: 53 })
  recTotalBlocoD: number | null;

  @Column('float', { name: 'REC_NRB_BLOCO_D', nullable: true, precision: 53 })
  recNrbBlocoD: number | null;

  @Column('float', { name: 'REC_TOTAL_BLOCO_F', nullable: true, precision: 53 })
  recTotalBlocoF: number | null;

  @Column('float', { name: 'REC_NRB_BLOCO_F', nullable: true, precision: 53 })
  recNrbBlocoF: number | null;

  @Column('float', { name: 'REC_TOTAL_BLOCO_I', nullable: true, precision: 53 })
  recTotalBlocoI: number | null;

  @Column('float', { name: 'REC_NRB_BLOCO_I', nullable: true, precision: 53 })
  recNrbBlocoI: number | null;

  @Column('float', { name: 'REC_TOTAL_BLOCO_1', nullable: true, precision: 53 })
  recTotalBloco_1: number | null;

  @Column('float', { name: 'REC_NRB_BLOCO_1', nullable: true, precision: 53 })
  recNrbBloco_1: number | null;

  @Column('float', { name: 'REC_TOTAL_PERIODO', nullable: true, precision: 53 })
  recTotalPeriodo: number | null;

  @Column('float', {
    name: 'REC_TOTAL_NRB_PERIODO',
    nullable: true,
    precision: 53,
  })
  recTotalNrbPeriodo: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { primary: true, name: 'CODSCP', default: () => '(0)' })
  codscp: number;
}
