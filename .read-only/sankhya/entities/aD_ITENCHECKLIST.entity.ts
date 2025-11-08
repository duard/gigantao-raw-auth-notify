import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdChecklistEntity } from './aD_CHECKLIST.entity';

@Index('PK_AD_ITENCHECKLIST', ['codchecklist', 'coditenchecklist'], {
  unique: true,
})
@Entity('AD_ITENCHECKLIST', { schema: 'SANKHYA' })
export class AdItenchecklistEntity {
  @Column('int', { primary: true, name: 'CODCHECKLIST' })
  codchecklist: number;

  @Column('int', { primary: true, name: 'CODITENCHECKLIST' })
  coditenchecklist: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'TIPOCHECK', nullable: true, length: 100 })
  tipocheck: string | null;

  @ManyToOne(
    () => AdChecklistEntity,
    (adChecklistEntity) => adChecklistEntity.adItenchecklists,
  )
  @JoinColumn([{ name: 'CODCHECKLIST', referencedColumnName: 'codchecklist' }])
  codchecklist2: AdChecklistEntity;
}
