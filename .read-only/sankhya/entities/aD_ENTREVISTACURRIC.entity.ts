import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdCadcurricEntity } from './aD_CADCURRIC.entity';

@Index('PK_AD_ENTREVISTACURRIC', ['codcurriculo', 'codentrev'], {
  unique: true,
})
@Entity('AD_ENTREVISTACURRIC', { schema: 'SANKHYA' })
export class AdEntrevistacurricEntity {
  @Column('int', { primary: true, name: 'CODENTREV' })
  codentrev: number;

  @Column('int', { primary: true, name: 'CODCURRICULO' })
  codcurriculo: number;

  @Column('datetime', { name: 'DTENTREV', nullable: true })
  dtentrev: Date | null;

  @Column('varchar', { name: 'CARGOENTREV', nullable: true, length: 100 })
  cargoentrev: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @ManyToOne(
    () => AdCadcurricEntity,
    (adCadcurricEntity) => adCadcurricEntity.adEntrevistacurrics,
  )
  @JoinColumn([{ name: 'CODCURRICULO', referencedColumnName: 'codcurriculo' }])
  codcurriculo2: AdCadcurricEntity;
}
