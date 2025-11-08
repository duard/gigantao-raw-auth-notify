import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEPF', ['codevento'], { unique: true })
@Entity('TFPEPF', { schema: 'SANKHYA' })
export class TfpepfEntity {
  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { name: 'TIPEVENTO', default: () => '(0)' })
  tipevento: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpepfs)
  @JoinColumn([{ name: 'CODEVENTOCOR', referencedColumnName: 'codevento' }])
  codeventocor: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpepfs2)
  @JoinColumn([{ name: 'CODEVENTOJUR', referencedColumnName: 'codevento' }])
  codeventojur: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpepfs3)
  @JoinColumn([{ name: 'CODEVENTODIF', referencedColumnName: 'codevento' }])
  codeventodif: TfpeveEntity;

  @OneToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpepf)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpepfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
