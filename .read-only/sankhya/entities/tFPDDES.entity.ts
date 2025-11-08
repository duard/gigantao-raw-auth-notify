import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpivrdjEntity } from './tFPIVRDJ.entity';
import { TfpddesdEntity } from './tFPDDESD.entity';

@Index('PK_TFPDDES', ['nuddes'], { unique: true })
@Entity('TFPDDES', { schema: 'SANKHYA' })
export class TfpddesEntity {
  @Column('int', { primary: true, name: 'NUDDES' })
  nuddes: number;

  @Column('varchar', { name: 'INDTPDEDUCAO', length: 1 })
  indtpdeducao: string;

  @Column('float', { name: 'VLRDEDSUSP', nullable: true, precision: 53 })
  vlrdedsusp: number | null;

  @ManyToOne(() => TfpivrdjEntity, (tfpivrdjEntity) => tfpivrdjEntity.tfpddes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUIVRDJ', referencedColumnName: 'nuivrdj' }])
  nuivrdj: TfpivrdjEntity;

  @OneToMany(() => TfpddesdEntity, (tfpddesdEntity) => tfpddesdEntity.nuddes)
  tfpddesds: TfpddesdEntity[];
}
