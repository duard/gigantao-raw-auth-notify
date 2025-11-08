import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AdCadlavchecklistEntity } from './aD_CADLAVCHECKLIST.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { AdItenchecklistlavautoEntity } from './aD_ITENCHECKLISTLAVAUTO.entity';

@Index('PK_AD_CHECKLISTLAVAUTO', ['codchecklist'], { unique: true })
@Entity('AD_CHECKLISTLAVAUTO', { schema: 'SANKHYA' })
export class AdChecklistlavautoEntity {
  @Column('int', { primary: true, name: 'CODCHECKLIST' })
  codchecklist: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'REVISAO', nullable: true, length: 100 })
  revisao: string | null;

  @OneToMany(
    () => AdCadlavchecklistEntity,
    (adCadlavchecklistEntity) => adCadlavchecklistEntity.codchecklist,
  )
  adCadlavchecklists: AdCadlavchecklistEntity[];

  @ManyToOne(
    () => TgfveiEntity,
    (tgfveiEntity) => tgfveiEntity.adChecklistlavautos,
  )
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @OneToMany(
    () => AdItenchecklistlavautoEntity,
    (adItenchecklistlavautoEntity) =>
      adItenchecklistlavautoEntity.codchecklist2,
  )
  adItenchecklistlavautos: AdItenchecklistlavautoEntity[];
}
