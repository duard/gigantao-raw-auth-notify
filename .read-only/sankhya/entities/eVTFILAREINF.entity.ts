import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { EvtlotereinfEntity } from './eVTLOTEREINF.entity';

@Index('PK_EVTFILAREINF', ['codemp', 'dhinc', 'seqevento'], { unique: true })
@Entity('EVTFILAREINF', { schema: 'SANKHYA' })
export class EvtfilareinfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('datetime', { primary: true, name: 'DHINC' })
  dhinc: Date;

  @Column('int', { primary: true, name: 'SEQEVENTO' })
  seqevento: number;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 255 })
  chave: string | null;

  @Column('varchar', { name: 'CHAVETABDADOS', nullable: true, length: 255 })
  chavetabdados: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('smallint', { name: 'INDAPURACAO', nullable: true })
  indapuracao: number | null;

  @Column('smallint', { name: 'INDRETIF', nullable: true })
  indretif: number | null;

  @Column('smallint', { name: 'TPAMB', nullable: true })
  tpamb: number | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 50 })
  origem: string | null;

  @Column('varchar', { name: 'TIPOEVENTO', nullable: true, length: 20 })
  tipoevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 100 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'CHAVEEVENTO', nullable: true, length: 40 })
  chaveevento: string | null;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('smallint', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('int', { name: 'CODRETORNO', nullable: true })
  codretorno: number | null;

  @Column('datetime', { name: 'DHPROC', nullable: true })
  dhproc: Date | null;

  @Column('char', { name: 'ENVIOLIB', nullable: true, length: 1 })
  enviolib: string | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @Column('varchar', { name: 'NROPROTLOTE', nullable: true, length: 255 })
  nroprotlote: string | null;

  @Column('varchar', { name: 'VERPROC', nullable: true, length: 20 })
  verproc: string | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('smallint', { name: 'VERSAOLAYOUT', nullable: true })
  versaolayout: number | null;

  @ManyToOne(
    () => EvtlotereinfEntity,
    (evtlotereinfEntity) => evtlotereinfEntity.evtfilareinfs,
  )
  @JoinColumn([{ name: 'NULOTE', referencedColumnName: 'nulote' }])
  nulote: EvtlotereinfEntity;
}
