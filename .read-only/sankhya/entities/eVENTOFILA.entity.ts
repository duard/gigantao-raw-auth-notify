import { Column, Entity, Index } from 'typeorm';

@Index('PK_EVENTOFILA', ['seqevento', 'dhinc', 'codemp'], { unique: true })
@Entity('EVENTOFILA', { schema: 'SANKHYA' })
export class EventofilaEntity {
  @Column('int', { primary: true, name: 'SEQEVENTO' })
  seqevento: number;

  @Column('datetime', { primary: true, name: 'DHINC' })
  dhinc: Date;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'ACAO', nullable: true, length: 255 })
  acao: string | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 255 })
  chave: string | null;

  @Column('varchar', { name: 'CHAVEEVENTO', nullable: true, length: 255 })
  chaveevento: string | null;

  @Column('int', { name: 'CODRETORNO', nullable: true })
  codretorno: number | null;

  @Column('int', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('datetime', { name: 'DHPROC', nullable: true })
  dhproc: Date | null;

  @Column('varchar', { name: 'ENVIOLIB', nullable: true, length: 255 })
  enviolib: string | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @Column('int', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('int', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 255 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NROPROTLOTE', nullable: true, length: 255 })
  nroprotlote: string | null;

  @Column('int', { name: 'NULOTE', nullable: true })
  nulote: number | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 255 })
  origem: string | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('int', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 255 })
  situacao: string | null;

  @Column('varchar', { name: 'TIPOEVENTO', nullable: true, length: 255 })
  tipoevento: string | null;

  @Column('int', { name: 'TPAMB', nullable: true })
  tpamb: number | null;

  @Column('varchar', { name: 'VERPROC', nullable: true, length: 255 })
  verproc: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;
}
