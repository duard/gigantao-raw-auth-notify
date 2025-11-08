import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpalunoEntity } from './tFPALUNO.entity';
import { TfpprtrEntity } from './tFPPRTR.entity';
import { AdCadhabEntity } from './aD_CADHAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPTREI', ['nrounico'], { unique: true })
@Entity('TFPTREI', { schema: 'SANKHYA' })
export class TfptreiEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('datetime', { name: 'DTTREIN', nullable: true })
  dttrein: Date | null;

  @Column('int', { name: 'CODTREICAP', nullable: true })
  codtreicap: number | null;

  @Column('float', { name: 'DURTREICAP', nullable: true, precision: 53 })
  durtreicap: number | null;

  @Column('smallint', { name: 'MODTREICAP', nullable: true })
  modtreicap: number | null;

  @Column('smallint', { name: 'TPTREICAP', nullable: true })
  tptreicap: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('text', { name: 'AD_OBSERVACAO2', nullable: true })
  adObservacao2: string | null;

  @OneToMany(() => TfpalunoEntity, (tfpalunoEntity) => tfpalunoEntity.nrounico2)
  tfpalunos: TfpalunoEntity[];

  @OneToMany(() => TfpprtrEntity, (tfpprtrEntity) => tfpprtrEntity.nrounico2)
  tfpprtrs: TfpprtrEntity[];

  @ManyToOne(() => TfptreiEntity, (tfptreiEntity) => tfptreiEntity.tfptreis)
  @JoinColumn([{ name: 'AD_NROUNICO', referencedColumnName: 'nrounico' }])
  adNrounico: TfptreiEntity;

  @OneToMany(() => TfptreiEntity, (tfptreiEntity) => tfptreiEntity.adNrounico)
  tfptreis: TfptreiEntity[];

  @ManyToOne(() => AdCadhabEntity, (adCadhabEntity) => adCadhabEntity.tfptreis)
  @JoinColumn([{ name: 'AD_CODTREICAP2', referencedColumnName: 'codhab' }])
  adCodtreicap: AdCadhabEntity;

  @ManyToOne(() => AdCadhabEntity, (adCadhabEntity) => adCadhabEntity.tfptreis2)
  @JoinColumn([{ name: 'AD_CODTREICAP2', referencedColumnName: 'codhab' }])
  adCodtreicap2: AdCadhabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptreis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
