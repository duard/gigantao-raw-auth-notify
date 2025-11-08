import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpeveEntity } from './tFPEVE.entity';

@Index(
  'PK_TFPMOVANT',
  ['referencia', 'codemp', 'codfunc', 'tipmov', 'codevento', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TFPMOVANT', { schema: 'SANKHYA' })
export class TfpmovantEntity {
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

  @Column('int', { name: 'NUMCHEQ', nullable: true })
  numcheq: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpmovants)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tfpmovants)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpmovants)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpmovants)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;
}
