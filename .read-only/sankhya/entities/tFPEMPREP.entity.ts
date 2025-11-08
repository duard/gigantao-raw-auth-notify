import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpeqpEntity } from './tFPEQP.entity';

@Index('PK_TFPEMPREP', ['codeqp', 'codemp'], { unique: true })
@Entity('TFPEMPREP', { schema: 'SANKHYA' })
export class TfpemprepEntity {
  @Column('smallint', { primary: true, name: 'CODEQP' })
  codeqp: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @ManyToOne(() => TfpeqpEntity, (tfpeqpEntity) => tfpeqpEntity.tfpempreps)
  @JoinColumn([{ name: 'CODEQP', referencedColumnName: 'codeqp' }])
  codeqp2: TfpeqpEntity;
}
