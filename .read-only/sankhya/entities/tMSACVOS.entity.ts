import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfoscabEntity } from './tCFOSCAB.entity';

@Index('PK_TMSACVOS', ['nuacerto', 'nuos'], { unique: true })
@Entity('TMSACVOS', { schema: 'SANKHYA' })
export class TmsacvosEntity {
  @Column('int', { primary: true, name: 'NUACERTO' })
  nuacerto: number;

  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @ManyToOne(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.tmsacvos)
  @JoinColumn([{ name: 'NUOS', referencedColumnName: 'nuos' }])
  nuos2: TcfoscabEntity;
}
