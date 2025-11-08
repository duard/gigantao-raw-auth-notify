import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';
import { TcsmteEntity } from './tCSMTE.entity';

@Index('PK_TCSAFO', ['numos', 'numitem'], { unique: true })
@Entity('TCSAFO', { schema: 'SANKHYA' })
export class TcsafoEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('char', { name: 'AUTORIZADO', length: 1 })
  autorizado: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'CODUSUAUT', nullable: true })
  codusuaut: number | null;

  @OneToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tcsafo)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;

  @ManyToOne(() => TcsmteEntity, (tcsmteEntity) => tcsmteEntity.tcsafos)
  @JoinColumn([{ name: 'NUMOTIVO', referencedColumnName: 'numotivo' }])
  numotivo: TcsmteEntity;
}
