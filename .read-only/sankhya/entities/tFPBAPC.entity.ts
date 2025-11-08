import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpilccEntity } from './tFPILCC.entity';

@Index(
  'PK_TFPBAPC',
  ['codicsc', 'dtref', 'codemp', 'codfilial', 'codlotacao', 'vrbccp00'],
  {
    unique: true,
  },
)
@Entity('TFPBAPC', { schema: 'SANKHYA' })
export class TfpbapcEntity {
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

  @Column('float', { primary: true, name: 'VRBCCP00', precision: 53 })
  vrbccp00: number;

  @Column('float', { name: 'VRBCCP15', nullable: true, precision: 53 })
  vrbccp15: number | null;

  @Column('float', { name: 'VRBCCP20', nullable: true, precision: 53 })
  vrbccp20: number | null;

  @Column('float', { name: 'VRBCCP25', nullable: true, precision: 53 })
  vrbccp25: number | null;

  @Column('float', { name: 'VRBCCP13', nullable: true, precision: 53 })
  vrbccp13: number | null;

  @Column('float', { name: 'VRBCFGTS', nullable: true, precision: 53 })
  vrbcfgts: number | null;

  @Column('float', { name: 'VRDESCCP', nullable: true, precision: 53 })
  vrdesccp: number | null;

  @ManyToOne(() => TfpilccEntity, (tfpilccEntity) => tfpilccEntity.tfpbapcs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
  ])
  tfpilcc: TfpilccEntity;
}
