import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TfpcbeEntity } from './tFPCBE.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TFPMOV',
  ['referencia', 'codemp', 'codfunc', 'tipmov', 'codevento', 'sequencia'],
  {
    unique: true,
  },
)
@Index('TFPMOV_I01', ['nufin'], {})
@Index('TFPMOV_I02', ['codemp', 'codfunc', 'referenciaorig'], {})
@Entity('TFPMOV', { schema: 'SANKHYA' })
export class TfpmovEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('char', {
    primary: true,
    name: 'TIPMOV',
    length: 1,
    default: () => "'M'",
  })
  tipmov: string;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TIPEVENTO' })
  tipevento: number;

  @Column('money', { name: 'VLRMOV', nullable: true })
  vlrmov: number | null;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('char', {
    name: 'UNIDADE',
    nullable: true,
    length: 1,
    default: () => "'V'",
  })
  unidade: string | null;

  @Column('smallint', { name: 'PRAZO', nullable: true })
  prazo: number | null;

  @Column('smallint', { name: 'PRAZOTOTAL', nullable: true })
  prazototal: number | null;

  @Column('int', { name: 'NUMCHEQ', nullable: true })
  numcheq: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'OBS', nullable: true, length: 120 })
  obs: string | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('varchar', {
    name: 'PROVISAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  provisao: string | null;

  @Column('int', { name: 'NUFALTA', nullable: true })
  nufalta: number | null;

  @Column('smallint', { name: 'DIASUTEIS', nullable: true })
  diasuteis: number | null;

  @Column('smallint', { name: 'DIASNAOUTEIS', nullable: true })
  diasnaouteis: number | null;

  @Column('smallint', { name: 'SEQFOLHA', nullable: true })
  seqfolha: number | null;

  @Column('char', { name: 'MANTEMPROXIMAREF', length: 1, default: () => "'S'" })
  mantemproximaref: string;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 40 })
  nrcontr: string | null;

  @Column('float', { name: 'INDICEHORA', nullable: true, precision: 53 })
  indicehora: number | null;

  @Column('char', { name: 'ORIGEM', nullable: true, length: 1 })
  origem: string | null;

  @Column('smallint', { name: 'SEQFER', nullable: true, default: () => '(0)' })
  seqfer: number | null;

  @Column('datetime', { name: 'REFERENCIAORIG', nullable: true })
  referenciaorig: Date | null;

  @Column('char', { name: 'TIPFOLHAORIG', nullable: true, length: 1 })
  tipfolhaorig: string | null;

  @Column('smallint', { name: 'SEQUENCIAORIG', nullable: true })
  sequenciaorig: number | null;

  @Column('char', { name: 'TIPFOLHAFIXO', nullable: true, length: 1 })
  tipfolhafixo: string | null;

  @Column('int', { name: 'CODPARCPENS', nullable: true })
  codparcpens: number | null;

  @Column('datetime', { name: 'REFCOMPLEMENTAR', nullable: true })
  refcomplementar: Date | null;

  @Column('int', { name: 'NROINFODESCFOL', nullable: true })
  nroinfodescfol: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpmovs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tfpmovs)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TfpcbeEntity, (tfpcbeEntity) => tfpcbeEntity.tfpmovs)
  @JoinColumn([{ name: 'CODCBE', referencedColumnName: 'codcbe' }])
  codcbe: TfpcbeEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpmovs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpmovs)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmovs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
