import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfhoEntity } from './tFPFHO.entity';
import { TfpmanEntity } from './tFPMAN.entity';
import { TfpescEntity } from './tFPESC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcghEntity } from './tFPCGH.entity';

@Index('PK_TFPTUR', ['nuescala', 'numturma'], { unique: true })
@Entity('TFPTUR', { schema: 'SANKHYA' })
export class TfpturEntity {
  @Column('int', { primary: true, name: 'NUESCALA' })
  nuescala: number;

  @Column('smallint', { primary: true, name: 'NUMTURMA' })
  numturma: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TfpfhoEntity, (tfpfhoEntity) => tfpfhoEntity.tfptur)
  tfpfhos: TfpfhoEntity[];

  @OneToMany(() => TfpmanEntity, (tfpmanEntity) => tfpmanEntity.tfptur)
  tfpmen: TfpmanEntity[];

  @ManyToOne(() => TfpescEntity, (tfpescEntity) => tfpescEntity.tfpturs)
  @JoinColumn([{ name: 'NUESCALA', referencedColumnName: 'nuescala' }])
  nuescala2: TfpescEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpturs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfpturs)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;
}
