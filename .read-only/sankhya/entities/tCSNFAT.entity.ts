import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';

@Index('PK_TCSNFAT', ['numos', 'numitem'], { unique: true })
@Entity('TCSNFAT', { schema: 'SANKHYA' })
export class TcsnfatEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @OneToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tcsnfat)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;
}
