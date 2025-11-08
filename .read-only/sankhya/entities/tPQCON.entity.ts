import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqpesEntity } from './tPQPES.entity';

@Index('PK_TPQCON', ['nupesq', 'nupesqavaliado', 'nupesqconsenso'], {
  unique: true,
})
@Entity('TPQCON', { schema: 'SANKHYA' })
export class TpqconEntity {
  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('int', { primary: true, name: 'NUPESQAVALIADO' })
  nupesqavaliado: number;

  @Column('int', { primary: true, name: 'NUPESQCONSENSO' })
  nupesqconsenso: number;

  @Column('int', { name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('varchar', { name: 'PLANODEACAO', nullable: true, length: 3103 })
  planodeacao: string | null;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.tpqcons)
  @JoinColumn([{ name: 'NUPESQ', referencedColumnName: 'nupesq' }])
  nupesq2: TpqpesEntity;

  @ManyToOne(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.tpqcons2)
  @JoinColumn([{ name: 'NUPESQAVALIADO', referencedColumnName: 'nupesq' }])
  nupesqavaliado2: TpqpesEntity;

  @ManyToOne(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.tpqcons3)
  @JoinColumn([{ name: 'NUPESQCONSENSO', referencedColumnName: 'nupesq' }])
  nupesqconsenso2: TpqpesEntity;
}
