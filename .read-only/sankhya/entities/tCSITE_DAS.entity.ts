import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';

@Index('PK_TCSITE_DAS', ['numos', 'numitem'], { unique: true })
@Entity('TCSITE_DAS', { schema: 'SANKHYA' })
export class TcsiteDasEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('int', { name: 'NUDOC', nullable: true })
  nudoc: number | null;

  @OneToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tcsiteDas)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;
}
