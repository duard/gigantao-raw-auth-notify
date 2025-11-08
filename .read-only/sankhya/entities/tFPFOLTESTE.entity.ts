import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpbastesteEntity } from './tFPBASTESTE.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index(
  'PK_TFPFOLTESTE',
  [
    'referencia',
    'codemp',
    'codfunc',
    'tipfolha',
    'codevento',
    'sequencia',
    'tipevento',
  ],
  { unique: true },
)
@Index('TFPFOLTESTE_I01', ['nufin'], {})
@Entity('TFPFOLTESTE', { schema: 'SANKHYA' })
export class TfpfoltesteEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLREVENTO', precision: 53 })
  vlrevento: number;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('varchar', { name: 'UNIDADE', length: 1, default: () => "'V'" })
  unidade: string;

  @Column('smallint', { name: 'PRAZO', nullable: true })
  prazo: number | null;

  @Column('float', {
    name: 'VLRCALCULO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcalculo: number | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 120 })
  obs: string | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('smallint', {
    primary: true,
    name: 'TIPEVENTO',
    default: () => '(-1)',
  })
  tipevento: number;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('datetime', { name: 'REFERENCIAORIG', nullable: true })
  referenciaorig: Date | null;

  @Column('char', { name: 'TIPFOLHAORIG', nullable: true, length: 1 })
  tipfolhaorig: string | null;

  @Column('smallint', { name: 'SEQUENCIAORIG', nullable: true })
  sequenciaorig: number | null;

  @Column('float', { name: 'VLRORIGINAL', precision: 53 })
  vlroriginal: number;

  @Column('float', { name: 'INDORIGINAL', nullable: true, precision: 53 })
  indoriginal: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'PROTEGIDO', nullable: true, length: 1 })
  protegido: string | null;

  @Column('varchar', { name: 'USADOESOCIAL', nullable: true, length: 1 })
  usadoesocial: string | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('int', { name: 'CODFUNCORIG', nullable: true })
  codfuncorig: number | null;

  @Column('int', { name: 'CODFUNCPRINC', nullable: true })
  codfuncprinc: number | null;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 40 })
  nrcontr: string | null;

  @Column('smallint', { name: 'SEQROE', nullable: true })
  seqroe: number | null;

  @Column('int', { name: 'CODPARCPENS', nullable: true })
  codparcpens: number | null;

  @Column('varchar', { name: 'EHCOMPLEMENTAR', nullable: true, length: 1 })
  ehcomplementar: string | null;

  @Column('int', { name: 'NROINFODESCFOL', nullable: true })
  nroinfodescfol: number | null;

  @ManyToOne(
    () => TfpbastesteEntity,
    (tfpbastesteEntity) => tfpbastesteEntity.tfpfoltestes,
  )
  @JoinColumn([
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'TIPFOLHA', referencedColumnName: 'tipfolha' },
  ])
  tfpbasteste: TfpbastesteEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpfoltestes)
  @JoinColumn([{ name: 'CODEVENTOORIG', referencedColumnName: 'codevento' }])
  codeventoorig: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpfoltestes2)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpfoltestes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
