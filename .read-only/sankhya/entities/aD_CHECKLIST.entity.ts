import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfveiEntity } from './tGFVEI.entity';
import { AdItenchecklistEntity } from './aD_ITENCHECKLIST.entity';

@Index('PK_AD_CHECKLIST', ['codchecklist'], { unique: true })
@Entity('AD_CHECKLIST', { schema: 'SANKHYA' })
export class AdChecklistEntity {
  @Column('int', { primary: true, name: 'CODCHECKLIST' })
  codchecklist: number;

  @Column('varchar', { name: 'DESCRCHECKLIST', nullable: true, length: 100 })
  descrchecklist: string | null;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.adChecklists)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @OneToMany(
    () => AdItenchecklistEntity,
    (adItenchecklistEntity) => adItenchecklistEntity.codchecklist2,
  )
  adItenchecklists: AdItenchecklistEntity[];

  @OneToMany(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.adCodchecklist)
  tgfveis: TgfveiEntity[];
}
