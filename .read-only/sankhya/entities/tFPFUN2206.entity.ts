import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFUN2206', ['codemp', 'codfunc', 'referencia'], { unique: true })
@Entity('TFPFUN2206', { schema: 'SANKHYA' })
export class Tfpfun2206Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'DTESOCIAL2206' })
  dtesocial2206: Date;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'PIS', nullable: true, length: 11 })
  pis: string | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('smallint', { name: 'REGIMETRAB', nullable: true })
  regimetrab: number | null;

  @Column('smallint', { name: 'REGIME', nullable: true })
  regime: number | null;

  @Column('smallint', { name: 'REGIMEJOR', nullable: true })
  regimejor: number | null;

  @Column('smallint', { name: 'CODSIND', nullable: true })
  codsind: number | null;

  @Column('smallint', { name: 'TPPLANRP', nullable: true })
  tpplanrp: number | null;

  @Column('int', { name: 'CODCARGO', nullable: true })
  codcargo: number | null;

  @Column('int', { name: 'CODFUNCAO', nullable: true })
  codfuncao: number | null;

  @Column('int', { name: 'CODCATEGESOCIAL', nullable: true })
  codcategesocial: number | null;

  @Column('int', { name: 'CODCARREIRA', nullable: true })
  codcarreira: number | null;

  @Column('datetime', { name: 'DTINGRCARR', nullable: true })
  dtingrcarr: Date | null;

  @Column('float', { name: 'SALBASE', nullable: true, precision: 53 })
  salbase: number | null;

  @Column('char', { name: 'TIPSAL', nullable: true, length: 1 })
  tipsal: string | null;

  @Column('smallint', { name: 'COMPSALARIO', nullable: true })
  compsalario: number | null;

  @Column('float', { name: 'SALPROFESSOR', nullable: true, precision: 53 })
  salprofessor: number | null;

  @Column('varchar', { name: 'OBSVARIAVEL', nullable: true, length: 250 })
  obsvariavel: string | null;

  @Column('varchar', { name: 'DSCALT', nullable: true, length: 150 })
  dscalt: string | null;

  @Column('smallint', { name: 'VINCULO', nullable: true })
  vinculo: number | null;

  @Column('datetime', { name: 'DTDEM', nullable: true })
  dtdem: Date | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('varchar', { name: 'OBJDET', nullable: true, length: 255 })
  objdet: string | null;

  @Column('int', { name: 'CODDEP', nullable: true })
  coddep: number | null;

  @Column('float', { name: 'HORASSEM', nullable: true, precision: 53 })
  horassem: number | null;

  @Column('float', { name: 'JORNADAPROF', nullable: true, precision: 53 })
  jornadaprof: number | null;

  @Column('smallint', { name: 'CODCARGAHOR', nullable: true })
  codcargahor: number | null;

  @Column('varchar', {
    name: 'NRINSCINFOCELETISTA',
    nullable: true,
    length: 15,
  })
  nrinscinfoceletista: string | null;

  @Column('varchar', { name: 'OBSDEFICIENCIA', nullable: true, length: 250 })
  obsdeficiencia: string | null;

  @Column('int', { name: 'NUPROCESSOJUD', nullable: true })
  nuprocessojud: number | null;

  @Column('varchar', { name: 'CBOFUNCAO', nullable: true, length: 6 })
  cbofuncao: string | null;

  @Column('varchar', { name: 'NATATIVIDADE', nullable: true, length: 1 })
  natatividade: string | null;

  @Column('varchar', { name: 'DESCRFUNCAO', nullable: true, length: 100 })
  descrfuncao: string | null;

  @Column('varchar', { name: 'CBOCARGO', nullable: true, length: 6 })
  cbocargo: string | null;

  @Column('varchar', { name: 'HRNOTURNO', nullable: true, length: 1 })
  hrnoturno: string | null;

  @Column('varchar', { name: 'DSCTPJORN', nullable: true, length: 100 })
  dsctpjorn: string | null;

  @Column('smallint', { name: 'TPJORNADA', nullable: true })
  tpjornada: number | null;

  @Column('varchar', { name: 'DESCRCARGO', nullable: true, length: 100 })
  descrcargo: string | null;
}
