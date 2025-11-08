import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';

@Index('PK_TCSSNS', ['numos', 'numitem'], { unique: true })
@Entity('TCSSNS', { schema: 'SANKHYA' })
export class TcssnsEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('char', { name: 'ARQSOM', nullable: true, length: 250 })
  arqsom: string | null;

  @OneToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tcssns)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;
}
