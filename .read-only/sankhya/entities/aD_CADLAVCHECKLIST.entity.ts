import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { AdChecklistlavautoEntity } from './aD_CHECKLISTLAVAUTO.entity';

@Index('PK_AD_CADLAVCHECKLIST', ['codcadlav'], { unique: true })
@Entity('AD_CADLAVCHECKLIST', { schema: 'SANKHYA' })
export class AdCadlavchecklistEntity {
  @Column('int', { primary: true, name: 'CODCADLAV' })
  codcadlav: number;

  @Column('int', { name: 'NUCONSULTA', nullable: true })
  nuconsulta: number | null;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adCadlavchecklists,
  )
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(
    () => AdChecklistlavautoEntity,
    (adChecklistlavautoEntity) => adChecklistlavautoEntity.adCadlavchecklists,
  )
  @JoinColumn([{ name: 'CODCHECKLIST', referencedColumnName: 'codchecklist' }])
  codchecklist: AdChecklistlavautoEntity;
}
