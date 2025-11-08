import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TfpfisEntity } from './tFPFIS.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPHDE', ['referencia', 'coddep'], { unique: true })
@Entity('TFPHDE', { schema: 'SANKHYA' })
export class TfphdeEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODDEP' })
  coddep: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfphdes)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TfpfisEntity, (tfpfisEntity) => tfpfisEntity.tfphdes)
  @JoinColumn([{ name: 'CODREGFIS', referencedColumnName: 'codregfis' }])
  codregfis: TfpfisEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfphdes)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep2: TfpdepEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphdes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
