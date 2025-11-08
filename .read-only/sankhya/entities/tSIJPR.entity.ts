import { Column, Entity, Index } from 'typeorm';

@Index('TSIJPR_PK', ['nujpr'], { unique: true })
@Entity('TSIJPR', { schema: 'SANKHYA' })
export class TsijprEntity {
  @Column('int', { primary: true, name: 'NUJPR' })
  nujpr: number;

  @Column('varchar', { name: 'IDGRUPOJOB', length: 40 })
  idgrupojob: string;

  @Column('varchar', { name: 'DESCRIPTION', nullable: true, length: 300 })
  description: string | null;

  @Column('varchar', { name: 'IDDOC', nullable: true, length: 50 })
  iddoc: string | null;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 500 })
  msgerro: string | null;

  @Column('varchar', { name: 'JOBSTATUS', length: 50 })
  jobstatus: string;

  @Column('varchar', { name: 'TIPODOC', length: 50 })
  tipodoc: string;

  @Column('varchar', { name: 'MIMETYPE', length: 50 })
  mimetype: string;

  @Column('varchar', { name: 'FILENAME', length: 100 })
  filename: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHINC' })
  dhinc: Date;

  @Column('datetime', { name: 'DHULTENV', nullable: true })
  dhultenv: Date | null;

  @Column('varchar', { name: 'PRINTERURI', nullable: true, length: 300 })
  printeruri: string | null;

  @Column('varchar', { name: 'ORIGINALPRINTER', length: 300 })
  originalprinter: string;

  @Column('smallint', { name: 'COPIES' })
  copies: number;

  @Column('smallint', { name: 'NUMTENTATIVAS', default: () => '(0)' })
  numtentativas: number;

  @Column('varchar', { name: 'PRINTSERVERURI', nullable: true, length: 200 })
  printserveruri: string | null;

  @Column('varchar', { name: 'JOBID', nullable: true, length: 30 })
  jobid: string | null;

  @Column('char', { name: 'BOLETOPIX', nullable: true, length: 1 })
  boletopix: string | null;

  @Column('char', { name: 'READY', nullable: true, length: 1 })
  ready: string | null;
}
