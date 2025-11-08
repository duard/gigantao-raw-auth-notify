import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfrpcEntity } from './tGFRPC.entity';

@Index('PK_TGFDPC', ['codpeca', 'codface'], { unique: true })
@Entity('TGFDPC', { schema: 'SANKHYA' })
export class TgfdpcEntity {
  @Column('int', { primary: true, name: 'CODPECA' })
  codpeca: number;

  @Column('smallint', { primary: true, name: 'CODFACE' })
  codface: number;

  @Column('float', { name: 'LARGURA', precision: 53 })
  largura: number;

  @Column('float', { name: 'ANGULO', precision: 53 })
  angulo: number;

  @ManyToOne(() => TgfrpcEntity, (tgfrpcEntity) => tgfrpcEntity.tgfdpcs)
  @JoinColumn([{ name: 'CODPECA', referencedColumnName: 'codpeca' }])
  codpeca2: TgfrpcEntity;
}
