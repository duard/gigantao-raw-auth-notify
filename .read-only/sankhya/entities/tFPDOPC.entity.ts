import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpilccEntity } from './tFPILCC.entity';

@Index(
  'PK_TFPDOPC',
  ['codicsc', 'dtref', 'codemp', 'codfilial', 'codlotacao', 'cnpjopportuario'],
  {
    unique: true,
  },
)
@Entity('TFPDOPC', { schema: 'SANKHYA' })
export class TfpdopcEntity {
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

  @Column('varchar', { primary: true, name: 'CNPJOPPORTUARIO', length: 15 })
  cnpjopportuario: string;

  @Column('smallint', { name: 'ALIQRAT', nullable: true })
  aliqrat: number | null;

  @Column('float', { name: 'FAP', nullable: true, precision: 53 })
  fap: number | null;

  @Column('float', { name: 'ALIQRATAJUST', nullable: true, precision: 53 })
  aliqratajust: number | null;

  @ManyToOne(() => TfpilccEntity, (tfpilccEntity) => tfpilccEntity.tfpdopcs)
  @JoinColumn([
    { name: 'CODICSC', referencedColumnName: 'codicsc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFILIAL', referencedColumnName: 'codfilial' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
  ])
  tfpilcc: TfpilccEntity;
}
