import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpbasEntity } from './tFPBAS.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpeveEntity } from './tFPEVE.entity';

@Index(
  'PK_TFPFOL',
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
@Index('TFPFOL_I01', ['codemp', 'codfunc', 'tipfolha', 'referencia'], {})
@Index(
  'TFPFOL_IFUNCPRINC',
  ['codemp', 'referencia', 'tipfolha', 'codfuncprinc'],
  {},
)
@Index('TFPFOL_IPER', ['nufin'], {})
@Entity('TFPFOL', { schema: 'SANKHYA' })
export class TfpfolEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('char', {
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

  @Column('smallint', { primary: true, name: 'TIPEVENTO' })
  tipevento: number;

  @Column('money', { name: 'VLREVENTO' })
  vlrevento: number;

  @Column('float', {
    name: 'INDICE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  indice: number | null;

  @Column('char', { name: 'UNIDADE', length: 1, default: () => "'V'" })
  unidade: string;

  @Column('smallint', { name: 'PRAZO', nullable: true })
  prazo: number | null;

  @Column('money', { name: 'VLRCALCULO', default: () => '(0)' })
  vlrcalculo: number;

  @Column('char', { name: 'OBS', nullable: true, length: 120 })
  obs: string | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('datetime', { name: 'REFERENCIAORIG', nullable: true })
  referenciaorig: Date | null;

  @Column('char', { name: 'TIPFOLHAORIG', nullable: true, length: 1 })
  tipfolhaorig: string | null;

  @Column('smallint', { name: 'SEQUENCIAORIG', nullable: true })
  sequenciaorig: number | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('int', { name: 'CODFUNCORIG', nullable: true })
  codfuncorig: number | null;

  @Column('smallint', { name: 'SEQROE', nullable: true })
  seqroe: number | null;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 40 })
  nrcontr: string | null;

  @Column('int', { name: 'CODFUNCPRINC', nullable: true })
  codfuncprinc: number | null;

  @Column('float', { name: 'VLRORIGINAL', nullable: true, precision: 53 })
  vlroriginal: number | null;

  @Column('float', { name: 'INDORIGINAL', nullable: true, precision: 53 })
  indoriginal: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('char', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('char', {
    name: 'PROTEGIDO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  protegido: string | null;

  @Column('char', { name: 'USADOESOCIAL', nullable: true, length: 1 })
  usadoesocial: string | null;

  @Column('int', { name: 'CODPARCPENS', nullable: true })
  codparcpens: number | null;

  @Column('varchar', { name: 'EHCOMPLEMENTAR', nullable: true, length: 1 })
  ehcomplementar: string | null;

  @Column('varchar', { name: 'AD_TIPFOLHA', nullable: true, length: 10 })
  adTipfolha: string | null;

  @Column('int', { name: 'NROINFODESCFOL', nullable: true })
  nroinfodescfol: number | null;

  @ManyToOne(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.tfpfols)
  @JoinColumn([
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'TIPFOLHA', referencedColumnName: 'tipfolha' },
  ])
  tfpbas: TfpbasEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpfols)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpfols)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpfols2)
  @JoinColumn([{ name: 'CODEVENTOORIG', referencedColumnName: 'codevento' }])
  codeventoorig: TfpeveEntity;
}
