import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AdSirvomotivoEntity } from './aD_SIRVOMOTIVO.entity';
import { AdSirvoEntity } from './aD_SIRVO.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_SIRVOMOT', ['id', 'idmot'], { unique: true })
@Entity('AD_SIRVOMOT', { schema: 'SANKHYA' })
export class AdSirvomotEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'IDMOT' })
  idmot: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODEMPGES', nullable: true })
  codempges: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 100 })
  observacao: string | null;

  @ManyToOne(
    () => AdSirvomotivoEntity,
    (adSirvomotivoEntity) => adSirvomotivoEntity.adSirvomots,
  )
  @JoinColumn([{ name: 'IDMOTIVO', referencedColumnName: 'idmotivo' }])
  idmotivo: AdSirvomotivoEntity;

  @ManyToOne(() => AdSirvoEntity, (adSirvoEntity) => adSirvoEntity.adSirvomots)
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adSirvo: AdSirvoEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.adSirvomots)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.adSirvomots)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adSirvomots)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
