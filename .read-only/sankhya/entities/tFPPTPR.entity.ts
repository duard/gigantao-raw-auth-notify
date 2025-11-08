import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfppssEntity } from './tFPPSS.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPPTPR', ['nuprocesso', 'codemp'], { unique: true })
@Entity('TFPPTPR', { schema: 'SANKHYA' })
export class TfpptprEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpptpr)
  tfpemps: TfpempEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpptpr2)
  tfpemps2: TfpempEntity[];

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpptprs)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso2: TfppssEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpptprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpptprs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
