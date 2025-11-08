import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpilccEntity } from './tFPILCC.entity';

@Index(
  'PK_TFPIEPC',
  ['codicsc', 'dtref', 'codemp', 'codfilial', 'codlotacao', 'nrinsccontrat'],
  {
    unique: true,
  },
)
@Entity('TFPIEPC', { schema: 'SANKHYA' })
export class TfpiepcEntity {
  @Column('smallint', { primary: true, name: 'CODICSC' })
  codicsc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFILIAL' })
  codfilial: number;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 30 })
  codlotacao: string;

  @Column('varchar', { primary: true, name: 'NRINSCCONTRAT', length: 15 })
  nrinsccontrat: string;

  @Column('smallint', { name: 'TPINSCCONTRAT', nullable: true })
  tpinsccontrat: number | null;

  @Column('smallint', { name: 'TPINSCPROP', nullable: true })
  tpinscprop: number | null;

  @Column('varchar', { name: 'NRINSCPROP', nullable: true, length: 15 })
  nrinscprop: string | null;

  @ManyToOne(() => TfpilccEntity, (tfpilccEntity) => tfpilccEntity.tfpiepcs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
  ])
  tfpilcc: TfpilccEntity;
}
