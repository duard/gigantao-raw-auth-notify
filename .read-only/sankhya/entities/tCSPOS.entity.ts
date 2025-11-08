import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqpesEntity } from './tPQPES.entity';
import { TcsfldEntity } from './tCSFLD.entity';

@Index('PK_TCSPOS', ['nupesq', 'numos', 'numitem'], { unique: true })
@Entity('TCSPOS', { schema: 'SANKHYA' })
export class TcsposEntity {
  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('varchar', { name: 'APLICAVEL', length: 1, default: () => "'S'" })
  aplicavel: string;

  @ManyToOne(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.tcspos)
  @JoinColumn([{ name: 'NUPESQ', referencedColumnName: 'nupesq' }])
  nupesq2: TpqpesEntity;

  @ManyToOne(() => TcsfldEntity, (tcsfldEntity) => tcsfldEntity.tcspos)
  @JoinColumn([{ name: 'CODFLD', referencedColumnName: 'codfld' }])
  codfld: TcsfldEntity;
}
