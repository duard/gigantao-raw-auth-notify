import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfisEntity } from './tFPFIS.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppssEntity } from './tFPPSS.entity';

@Index('PK_TFPPRTC', ['nuprocesso', 'codregfis'], { unique: true })
@Entity('TFPPRTC', { schema: 'SANKHYA' })
export class TfpprtcEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'CODREGFIS' })
  codregfis: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpfisEntity, (tfpfisEntity) => tfpfisEntity.tfpprtcs)
  @JoinColumn([{ name: 'CODREGFIS', referencedColumnName: 'codregfis' }])
  codregfis2: TfpfisEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpprtcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpprtcs)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso2: TfppssEntity;
}
