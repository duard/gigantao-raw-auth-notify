import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdChecklistlavautoEntity } from './aD_CHECKLISTLAVAUTO.entity';

@Index('PK_AD_ITENCHECKLISTLAVAUTO', ['codchecklist', 'coditenlavauto'], {
  unique: true,
})
@Entity('AD_ITENCHECKLISTLAVAUTO', { schema: 'SANKHYA' })
export class AdItenchecklistlavautoEntity {
  @Column('int', { primary: true, name: 'CODCHECKLIST' })
  codchecklist: number;

  @Column('int', { primary: true, name: 'CODITENLAVAUTO' })
  coditenlavauto: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @ManyToOne(
    () => AdChecklistlavautoEntity,
    (adChecklistlavautoEntity) =>
      adChecklistlavautoEntity.adItenchecklistlavautos,
  )
  @JoinColumn([{ name: 'CODCHECKLIST', referencedColumnName: 'codchecklist' }])
  codchecklist2: AdChecklistlavautoEntity;
}
