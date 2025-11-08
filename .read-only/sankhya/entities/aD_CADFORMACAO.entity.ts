import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdCadcurricEntity } from './aD_CADCURRIC.entity';

@Index('PK_AD_CADFORMACAO', ['codcurriculo', 'codformacao'], { unique: true })
@Entity('AD_CADFORMACAO', { schema: 'SANKHYA' })
export class AdCadformacaoEntity {
  @Column('int', { primary: true, name: 'CODFORMACAO' })
  codformacao: number;

  @Column('int', { primary: true, name: 'CODCURRICULO' })
  codcurriculo: number;

  @Column('varchar', { name: 'TIPOFORMAC', nullable: true, length: 10 })
  tipoformac: string | null;

  @Column('varchar', { name: 'CURSOFORMAC', nullable: true, length: 100 })
  cursoformac: string | null;

  @Column('varchar', { name: 'INSTFORMAC', nullable: true, length: 100 })
  instformac: string | null;

  @Column('datetime', { name: 'DTCONCFORMAC', nullable: true })
  dtconcformac: Date | null;

  @ManyToOne(
    () => AdCadcurricEntity,
    (adCadcurricEntity) => adCadcurricEntity.adCadformacaos,
  )
  @JoinColumn([{ name: 'CODCURRICULO', referencedColumnName: 'codcurriculo' }])
  codcurriculo2: AdCadcurricEntity;
}
