import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsacvEntity } from './tMSACV.entity';

@Index('PK_TMSACVABT', ['nuacerto', 'idabt'], { unique: true })
@Entity('TMSACVABT', { schema: 'SANKHYA' })
export class TmsacvabtEntity {
  @Column('int', { primary: true, name: 'NUACERTO' })
  nuacerto: number;

  @Column('int', { primary: true, name: 'IDABT' })
  idabt: number;

  @ManyToOne(() => TmsacvEntity, (tmsacvEntity) => tmsacvEntity.tmsacvabts)
  @JoinColumn([{ name: 'NUACERTO', referencedColumnName: 'nuacerto' }])
  nuacerto2: TmsacvEntity;
}
