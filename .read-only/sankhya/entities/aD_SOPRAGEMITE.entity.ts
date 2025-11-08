import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfphisEntity } from './tFPHIS.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { AdSopragemEntity } from './aD_SOPRAGEM.entity';

@Index('PK_AD_SOPRAGEMITE', ['id', 'codemp', 'codfunc'], { unique: true })
@Entity('AD_SOPRAGEMITE', { schema: 'SANKHYA' })
export class AdSopragemiteEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTSOPRAGEM', nullable: true })
  dtsopragem: Date | null;

  @Column('varchar', { name: 'EXECUTADO', nullable: true, length: 10 })
  executado: string | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 10 })
  motivo: string | null;

  @Column('datetime', { name: 'DHREGISTRO', nullable: true })
  dhregistro: Date | null;

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.adSopragemites)
  @JoinColumn([{ name: 'CODHISTOCOR', referencedColumnName: 'codhistocor' }])
  codhistocor: TfphisEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.adSopragemites)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(
    () => AdSopragemEntity,
    (adSopragemEntity) => adSopragemEntity.adSopragemites,
  )
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adSopragem: AdSopragemEntity;
}
