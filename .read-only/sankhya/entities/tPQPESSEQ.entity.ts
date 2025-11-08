import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPQPESSEQ', ['seqproposta', 'numos', 'nupesq'], { unique: true })
@Entity('TPQPESSEQ', { schema: 'SANKHYA' })
export class TpqpesseqEntity {
  @Column('int', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('int', { name: 'NUPLA' })
  nupla: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { name: 'DTAPLICACAO' })
  dtaplicacao: Date;

  @Column('int', { name: 'HORAAPLICACAO' })
  horaaplicacao: number;

  @Column('float', { name: 'NOTAFINAL', nullable: true, precision: 53 })
  notafinal: number | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'NOMEPESQ', nullable: true, length: 60 })
  nomepesq: string | null;

  @Column('int', { name: 'CODPARCPESQ', nullable: true })
  codparcpesq: number | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'CODEMPFUNPESQ', nullable: true })
  codempfunpesq: number | null;

  @Column('int', { name: 'CODFUNCPESQ', nullable: true })
  codfuncpesq: number | null;

  @Column('smallint', { name: 'CODUSUPESQ', nullable: true })
  codusupesq: number | null;

  @Column('int', { name: 'CODPAPPESQ', nullable: true })
  codpappesq: number | null;

  @Column('int', { name: 'NUCURRICULOPESQ', nullable: true })
  nucurriculopesq: number | null;

  @Column('varchar', { name: 'TIPOPESQ', length: 1 })
  tipopesq: string;

  @Column('int', { name: 'CODCONTATOPESQ', nullable: true })
  codcontatopesq: number | null;

  @Column('int', { name: 'CODQUEST', nullable: true })
  codquest: number | null;

  @Column('int', { name: 'CODPRODPESQ', nullable: true })
  codprodpesq: number | null;
}
