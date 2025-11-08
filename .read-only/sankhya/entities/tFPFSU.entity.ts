import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpbsuEntity } from './tFPBSU.entity';
import { TfpocoEntity } from './tFPOCO.entity';

@Index(
  'PK_TFPFSU',
  [
    'referencia',
    'codemp',
    'codfunc',
    'tipfolha',
    'seqfolha',
    'codevento',
    'sequencia',
    'tipevento',
  ],
  { unique: true },
)
@Entity('TFPFSU', { schema: 'SANKHYA' })
export class TfpfsuEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'TIPFOLHA', length: 1 })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'SEQFOLHA', default: () => '(1)' })
  seqfolha: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'TIPEVENTO' })
  tipevento: number;

  @Column('float', { name: 'VLREVENTO', precision: 53 })
  vlrevento: number;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('varchar', { name: 'UNIDADE', length: 1 })
  unidade: string;

  @Column('smallint', { name: 'PRAZO', nullable: true })
  prazo: number | null;

  @Column('float', { name: 'VLRCALCULO', nullable: true, precision: 53 })
  vlrcalculo: number | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 120 })
  obs: string | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('datetime', { name: 'REFERENCIAORIG', nullable: true })
  referenciaorig: Date | null;

  @Column('char', {
    name: 'TIPFOLHAORIG',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  tipfolhaorig: string | null;

  @Column('smallint', { name: 'SEQUENCIAORIG', nullable: true })
  sequenciaorig: number | null;

  @Column('smallint', { name: 'CODEVENTOORIG', nullable: true })
  codeventoorig: number | null;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 40 })
  nrcontr: string | null;

  @Column('int', { name: 'CODFUNCORIG', nullable: true })
  codfuncorig: number | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('smallint', { name: 'SEQROE', nullable: true })
  seqroe: number | null;

  @Column('int', { name: 'NROINFODESCFOL', nullable: true })
  nroinfodescfol: number | null;

  @ManyToOne(() => TfpbsuEntity, (tfpbsuEntity) => tfpbsuEntity.tfpfsus)
  @JoinColumn([
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'TIPFOLHA', referencedColumnName: 'tipfolha' },
    { name: 'SEQFOLHA', referencedColumnName: 'seqfolha' },
  ])
  tfpbsu: TfpbsuEntity;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpfsus)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TfpocoEntity;
}
