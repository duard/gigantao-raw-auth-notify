import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERBUR', ['nuconsulta'], { unique: true })
@Entity('TSERBUR', { schema: 'SANKHYA' })
export class TserburEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'OCUPACAO', nullable: true, length: 10 })
  ocupacao: string | null;

  @Column('float', { name: 'RENDA', nullable: true, precision: 53 })
  renda: number | null;

  @Column('varchar', { name: 'CTSERIE', nullable: true, length: 5 })
  ctserie: string | null;

  @Column('varchar', { name: 'NUMCT', nullable: true, length: 7 })
  numct: string | null;

  @Column('varchar', { name: 'EMPRESA', nullable: true, length: 40 })
  empresa: string | null;

  @Column('varchar', { name: 'DTADMISSAO', nullable: true, length: 6 })
  dtadmissao: string | null;

  @Column('varchar', { name: 'PROFISSAO', nullable: true, length: 30 })
  profissao: string | null;

  @Column('varchar', { name: 'CARGO', nullable: true, length: 20 })
  cargo: string | null;

  @Column('varchar', { name: 'CCBANCO1', nullable: true, length: 20 })
  ccbanco1: string | null;

  @Column('varchar', { name: 'CCBANDEIRA2', nullable: true, length: 10 })
  ccbandeira2: string | null;

  @Column('varchar', { name: 'CCOUTREMIS', nullable: true, length: 20 })
  ccoutremis: string | null;

  @Column('varchar', { name: 'CCBANDEIRA3', nullable: true, length: 10 })
  ccbandeira3: string | null;

  @Column('varchar', { name: 'CCTIPOSEGURO', nullable: true, length: 15 })
  cctiposeguro: string | null;

  @Column('varchar', { name: 'TIPOSEG', nullable: true, length: 15 })
  tiposeg: string | null;

  @Column('varchar', { name: 'TIPOSEG2', nullable: true, length: 15 })
  tiposeg2: string | null;

  @Column('varchar', { name: 'TIPOSEG3', nullable: true, length: 15 })
  tiposeg3: string | null;

  @Column('varchar', { name: 'TIPOSEG4', nullable: true, length: 15 })
  tiposeg4: string | null;

  @Column('varchar', { name: 'TIPOSEG5', nullable: true, length: 15 })
  tiposeg5: string | null;

  @Column('float', { name: 'OUTRRENDA', nullable: true, precision: 53 })
  outrrenda: number | null;

  @Column('datetime', { name: 'PERIODIC', nullable: true })
  periodic: Date | null;

  @Column('varchar', { name: 'ORIGEM1', nullable: true, length: 15 })
  origem1: string | null;

  @Column('varchar', { name: 'BANCO1CHQESP', nullable: true, length: 20 })
  banco1Chqesp: string | null;

  @Column('float', { name: 'LIMITE1CHQESP', nullable: true, precision: 53 })
  limite1Chqesp: number | null;

  @Column('varchar', { name: 'BANCO2CHQESP', nullable: true, length: 20 })
  banco2Chqesp: string | null;

  @Column('float', { name: 'LIMITE2CHQESP', nullable: true, precision: 53 })
  limite2Chqesp: number | null;

  @Column('varchar', { name: 'REFPESSOAL1', nullable: true, length: 35 })
  refpessoal1: string | null;

  @Column('smallint', { name: 'REFDDD1', nullable: true })
  refddd1: number | null;

  @Column('smallint', { name: 'REFFONE1', nullable: true })
  reffone1: number | null;

  @Column('smallint', { name: 'REFRAMAL1', nullable: true })
  reframal1: number | null;

  @Column('varchar', { name: 'REFPESSOAL2', nullable: true, length: 35 })
  refpessoal2: string | null;

  @Column('smallint', { name: 'REFDDD2', nullable: true })
  refddd2: number | null;

  @Column('smallint', { name: 'REFFONE2', nullable: true })
  reffone2: number | null;

  @Column('smallint', { name: 'REFRAMAL2', nullable: true })
  reframal2: number | null;

  @Column('varchar', { name: 'CCBANCO2', nullable: true, length: 20 })
  ccbanco2: string | null;

  @Column('varchar', { name: 'CCBANDEIRA1', nullable: true, length: 10 })
  ccbandeira1: string | null;

  @Column('varchar', { name: 'ORIGEM2', nullable: true, length: 15 })
  origem2: string | null;

  @Column('float', { name: 'RENDAFAML', nullable: true, precision: 53 })
  rendafaml: number | null;

  @Column('varchar', { name: 'FAMILIAR1', nullable: true, length: 8 })
  familiar1: string | null;

  @Column('varchar', { name: 'FAMILIAR2', nullable: true, length: 8 })
  familiar2: string | null;

  @Column('int', { name: 'RCSFATOR', nullable: true })
  rcsfator: number | null;

  @Column('varchar', { name: 'TAXA', nullable: true, length: 5 })
  taxa: string | null;

  @Column('varchar', { name: 'CODIGODERETORNO', nullable: true, length: 10 })
  codigoderetorno: string | null;

  @Column('varchar', { name: 'RCSMSGFRASE', nullable: true, length: 100 })
  rcsmsgfrase: string | null;

  @Column('varchar', { name: 'TIPOSCORE', nullable: true, length: 4 })
  tiposcore: string | null;
}
