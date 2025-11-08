import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpirccEntity } from './tFPIRCC.entity';

@Index('PK_TFPICR', ['codircc', 'dtref', 'codemp', 'tpcr'], { unique: true })
@Entity('TFPICR', { schema: 'SANKHYA' })
export class TfpicrEntity {
  @Column('smallint', { primary: true, name: 'CODIRCC' })
  codircc: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'TPCR' })
  tpcr: number;

  @Column('float', { name: 'VRCR', nullable: true, precision: 53 })
  vrcr: number | null;

  @ManyToOne(() => TfpirccEntity, (tfpirccEntity) => tfpirccEntity.tfpicrs)
  @JoinColumn([
    { name: 'CODIRCC', referencedColumnName: 'codircc' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tfpircc: TfpirccEntity;
}
