import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdCadcurricEntity } from './aD_CADCURRIC.entity';

@Index('PK_AD_STATUS', ['codcurriculo', 'codstatus'], { unique: true })
@Entity('AD_STATUS', { schema: 'SANKHYA' })
export class AdStatusEntity {
  @Column('int', { primary: true, name: 'CODSTATUS' })
  codstatus: number;

  @Column('int', { primary: true, name: 'CODCURRICULO' })
  codcurriculo: number;

  @Column('varchar', { name: 'STATUSAPROREPRO', nullable: true, length: 10 })
  statusaprorepro: string | null;

  @Column('datetime', { name: 'DATASTATUS', nullable: true })
  datastatus: Date | null;

  @Column('varchar', { name: 'MOTIVOSTATUS', nullable: true, length: 100 })
  motivostatus: string | null;

  @Column('varchar', { name: 'RESPONSAVEL', nullable: true, length: 100 })
  responsavel: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @ManyToOne(
    () => AdCadcurricEntity,
    (adCadcurricEntity) => adCadcurricEntity.adStatuses,
  )
  @JoinColumn([{ name: 'CODCURRICULO', referencedColumnName: 'codcurriculo' }])
  codcurriculo2: AdCadcurricEntity;
}
