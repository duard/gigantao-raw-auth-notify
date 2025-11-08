import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TrpcamEntity } from './tRPCAM.entity';
import { TrpmapEntity } from './tRPMAP.entity';

@Index('PK_TRPTAB', ['nuligacao'], { unique: true })
@Entity('TRPTAB', { schema: 'SANKHYA' })
export class TrptabEntity {
  @Column('int', { primary: true, name: 'NULIGACAO' })
  nuligacao: number;

  @Column('varchar', { name: 'TABORIGEM', length: 50 })
  taborigem: string;

  @Column('varchar', { name: 'TABDESTINO', length: 50 })
  tabdestino: string;

  @OneToMany(() => TrpcamEntity, (trpcamEntity) => trpcamEntity.nuligacao2)
  trpcams: TrpcamEntity[];

  @ManyToOne(() => TrpmapEntity, (trpmapEntity) => trpmapEntity.trptabs)
  @JoinColumn([{ name: 'CODMAPA', referencedColumnName: 'codmapa' }])
  codmapa: TrpmapEntity;
}
