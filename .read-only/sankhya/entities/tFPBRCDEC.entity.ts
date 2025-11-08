import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpilccEntity } from './tFPILCC.entity';

@Index(
  'PK_TFPBRCDEC',
  ['codicsc', 'dtref', 'codemp', 'codfilial', 'codlotacao', 'codcateg'],
  {
    unique: true,
  },
)
@Entity('TFPBRCDEC', { schema: 'SANKHYA' })
export class TfpbrcdecEntity {
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

  @Column('smallint', { primary: true, name: 'CODCATEG' })
  codcateg: number;

  @Column('float', { name: 'VRBCCP00', nullable: true, precision: 53 })
  vrbccp00: number | null;

  @Column('float', { name: 'VRBCCP15', nullable: true, precision: 53 })
  vrbccp15: number | null;

  @Column('float', { name: 'VRBCCP20', nullable: true, precision: 53 })
  vrbccp20: number | null;

  @Column('float', { name: 'VRBCCP25', nullable: true, precision: 53 })
  vrbccp25: number | null;

  @Column('float', { name: 'VRSUSPBCCP00', nullable: true, precision: 53 })
  vrsuspbccp00: number | null;

  @Column('float', { name: 'VRSUSPBCCP15', nullable: true, precision: 53 })
  vrsuspbccp15: number | null;

  @Column('float', { name: 'VRSUSPBCCP20', nullable: true, precision: 53 })
  vrsuspbccp20: number | null;

  @Column('float', { name: 'VRSUSPBCCP25', nullable: true, precision: 53 })
  vrsuspbccp25: number | null;

  @ManyToOne(() => TfpilccEntity, (tfpilccEntity) => tfpilccEntity.tfpbrcdecs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
  ])
  tfpilcc: TfpilccEntity;
}
