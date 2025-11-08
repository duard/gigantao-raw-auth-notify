import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdCadcurricEntity } from './aD_CADCURRIC.entity';

@Index('PK_AD_EXPPROFCURRIC', ['codcurriculo', 'codexpprof'], { unique: true })
@Entity('AD_EXPPROFCURRIC', { schema: 'SANKHYA' })
export class AdExpprofcurricEntity {
  @Column('int', { primary: true, name: 'CODEXPPROF' })
  codexpprof: number;

  @Column('int', { primary: true, name: 'CODCURRICULO' })
  codcurriculo: number;

  @Column('datetime', { name: 'DTEXPPROFIINI', nullable: true })
  dtexpprofiini: Date | null;

  @Column('datetime', { name: 'DTEXPPROFIFIM', nullable: true })
  dtexpprofifim: Date | null;

  @Column('varchar', { name: 'EMPPROFI', nullable: true, length: 100 })
  empprofi: string | null;

  @Column('varchar', { name: 'CARGOPROFI', nullable: true, length: 100 })
  cargoprofi: string | null;

  @Column('text', { name: 'ATIVPROFI', nullable: true })
  ativprofi: string | null;

  @ManyToOne(
    () => AdCadcurricEntity,
    (adCadcurricEntity) => adCadcurricEntity.adExpprofcurrics,
  )
  @JoinColumn([{ name: 'CODCURRICULO', referencedColumnName: 'codcurriculo' }])
  codcurriculo2: AdCadcurricEntity;
}
