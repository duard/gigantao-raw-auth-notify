import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_AD_PRODMANUTENCAO', ['codveiculo', 'id'], { unique: true })
@Entity('AD_PRODMANUTENCAO', { schema: 'SANKHYA' })
export class AdProdmanutencaoEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('float', { name: 'QDE', nullable: true, precision: 53 })
  qde: number | null;

  @ManyToOne(
    () => TgfveiEntity,
    (tgfveiEntity) => tgfveiEntity.adProdmanutencaos,
  )
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;

  @ManyToOne(
    () => TgfproEntity,
    (tgfproEntity) => tgfproEntity.adProdmanutencaos,
  )
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
