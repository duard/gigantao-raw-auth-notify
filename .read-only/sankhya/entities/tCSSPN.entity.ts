import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSSPN', ['numos'], { unique: true })
@Entity('TCSSPN', { schema: 'SANKHYA' })
export class TcsspnEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @OneToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsspn)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsspns)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
