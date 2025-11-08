import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpitcrEntity } from './tFPITCR.entity';
import { TfpivrdjEntity } from './tFPIVRDJ.entity';

@Index('PK_TFPIPRRDJ', ['nuiprrdj'], { unique: true })
@Entity('TFPIPRRDJ', { schema: 'SANKHYA' })
export class TfpiprrdjEntity {
  @Column('int', { primary: true, name: 'NUIPRRDJ' })
  nuiprrdj: number;

  @Column('varchar', { name: 'TPPROCRET', length: 1 })
  tpprocret: string;

  @Column('varchar', { name: 'NRPROCRET', length: 21 })
  nrprocret: string;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('varchar', { name: 'DESCPROCRET', nullable: true, length: 100 })
  descprocret: string | null;

  @ManyToOne(() => TfpitcrEntity, (tfpitcrEntity) => tfpitcrEntity.tfpiprrdjs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUITCR', referencedColumnName: 'nuitcr' }])
  nuitcr: TfpitcrEntity;

  @OneToMany(() => TfpivrdjEntity, (tfpivrdjEntity) => tfpivrdjEntity.nuiprrdj)
  tfpivrdjs: TfpivrdjEntity[];
}
