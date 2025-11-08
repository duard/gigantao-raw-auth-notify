import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';
import { TddinsEntity } from './tDDINS.entity';

@Index('PK_TRDTEL', ['nucontrole'], { unique: true })
@Entity('TRDTEL', { schema: 'SANKHYA' })
export class TrdtelEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @OneToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdtel)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;

  @ManyToOne(() => TddinsEntity, (tddinsEntity) => tddinsEntity.trdtels)
  @JoinColumn([{ name: 'NUINSTANCIA', referencedColumnName: 'nuinstancia' }])
  nuinstancia: TddinsEntity;
}
