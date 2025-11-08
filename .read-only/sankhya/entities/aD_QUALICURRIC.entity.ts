import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdCadcurricEntity } from './aD_CADCURRIC.entity';

@Index('PK_AD_QUALICURRIC', ['codcurriculo', 'codquali'], { unique: true })
@Entity('AD_QUALICURRIC', { schema: 'SANKHYA' })
export class AdQualicurricEntity {
  @Column('int', { primary: true, name: 'CODQUALI' })
  codquali: number;

  @Column('int', { primary: true, name: 'CODCURRICULO' })
  codcurriculo: number;

  @Column('text', { name: 'CURSOQUALI', nullable: true })
  cursoquali: string | null;

  @Column('datetime', { name: 'DTQUALIFIC', nullable: true })
  dtqualific: Date | null;

  @ManyToOne(
    () => AdCadcurricEntity,
    (adCadcurricEntity) => adCadcurricEntity.adQualicurrics,
  )
  @JoinColumn([{ name: 'CODCURRICULO', referencedColumnName: 'codcurriculo' }])
  codcurriculo2: AdCadcurricEntity;
}
