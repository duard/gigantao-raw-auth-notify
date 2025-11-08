import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrptabEntity } from './tRPTAB.entity';

@Index('PK_TRPCAM', ['nuligacao', 'sequencia'], { unique: true })
@Entity('TRPCAM', { schema: 'SANKHYA' })
export class TrpcamEntity {
  @Column('int', { primary: true, name: 'NULIGACAO' })
  nuligacao: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CAMPOORIGEM', length: 50 })
  campoorigem: string;

  @Column('varchar', { name: 'CAMPODESTINO', length: 50 })
  campodestino: string;

  @Column('varchar', { name: 'FILTRO', nullable: true, length: 300 })
  filtro: string | null;

  @ManyToOne(() => TrptabEntity, (trptabEntity) => trptabEntity.trpcams)
  @JoinColumn([{ name: 'NULIGACAO', referencedColumnName: 'nuligacao' }])
  nuligacao2: TrptabEntity;
}
