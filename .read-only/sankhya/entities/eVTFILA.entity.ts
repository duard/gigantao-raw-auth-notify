import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { EvtloteEntity } from './eVTLOTE.entity';

@Index('EVTFILA_I01', ['codemp', 'referencia', 'sequencia', 'nrorecibo'], {})
@Index(
  'EVTFILA_I02',
  ['tipoevento', 'codemp', 'nrorecibo', 'inivalid', 'situacao', 'tpamb'],
  {},
)
@Index('EVTFILA_I03', ['nulote'], {})
@Index('EVTFILA_I04', ['tipoevento', 'codemp', 'tpamb', 'referencia'], {})
@Index('PK_EVTFILA', ['codemp', 'dhinc', 'seqevento'], { unique: true })
@Entity('EVTFILA', { schema: 'SANKHYA' })
export class EvtfilaEntity {
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

  @Column('smallint', { name: 'TPAMB' })
  tpamb: number;

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

  @Column('varchar', { name: 'ENVIOLIB', nullable: true, length: 1 })
  enviolib: string | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('int', { name: 'NULOTE', nullable: true })
  nulote: number | null;

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @Column('varchar', { name: 'VERPROC', nullable: true, length: 20 })
  verproc: string | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('char', { name: 'CANCELAMENTO', nullable: true, length: 1 })
  cancelamento: string | null;

  @Column('varchar', { name: 'NROPROTLOTE', nullable: true, length: 255 })
  nroprotlote: string | null;

  @Column('char', {
    name: 'OUTROS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  outros: string | null;

  @ManyToOne(() => EvtloteEntity, (evtloteEntity) => evtloteEntity.evtfilas)
  @JoinColumn([{ name: 'NULOTE', referencedColumnName: 'nulote' }])
  nulote2: EvtloteEntity;
}
