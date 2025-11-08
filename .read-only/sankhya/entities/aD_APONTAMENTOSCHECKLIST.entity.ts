import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_AD_APONTAMENTOSCHECKLIST', ['codapontamento'], { unique: true })
@Entity('AD_APONTAMENTOSCHECKLIST', { schema: 'SANKHYA' })
export class AdApontamentoschecklistEntity {
  @Column('int', { primary: true, name: 'CODAPONTAMENTO' })
  codapontamento: number;

  @Column('int', { name: 'PLACAVEICULO', nullable: true })
  placaveiculo: number | null;

  @ManyToOne(
    () => TgfveiEntity,
    (tgfveiEntity) => tgfveiEntity.adApontamentoschecklists,
  )
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;
}
