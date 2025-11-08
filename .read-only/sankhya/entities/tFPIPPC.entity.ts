import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpilccEntity } from './tFPILCC.entity';

@Index(
  'PK_TFPIPPC',
  ['codicsc', 'dtref', 'codemp', 'codfilial', 'codlotacao', 'codopportuario'],
  {
    unique: true,
  },
)
@Entity('TFPIPPC', { schema: 'SANKHYA' })
export class TfpippcEntity {
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

  @Column('smallint', { primary: true, name: 'CODOPPORTUARIO' })
  codopportuario: number;

  @ManyToOne(() => TfpilccEntity, (tfpilccEntity) => tfpilccEntity.tfpippcs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
  ])
  tfpilcc: TfpilccEntity;
}
