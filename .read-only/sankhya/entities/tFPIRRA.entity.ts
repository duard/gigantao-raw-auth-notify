import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpitcrEntity } from './tFPITCR.entity';
import { TfpitadvEntity } from './tFPITADV.entity';

@Index('PK_TFPIRRA', ['nurra'], { unique: true })
@Entity('TFPIRRA', { schema: 'SANKHYA' })
export class TfpirraEntity {
  @Column('int', { primary: true, name: 'NURRA' })
  nurra: number;

  @Column('varchar', { name: 'DESCRRA', nullable: true, length: 50 })
  descrra: string | null;

  @Column('smallint', { name: 'QTDMESESRRA', nullable: true })
  qtdmesesrra: number | null;

  @Column('float', { name: 'VLRDESPCUSTAS', nullable: true, precision: 53 })
  vlrdespcustas: number | null;

  @Column('float', { name: 'VLRDESPADVOGADOS', nullable: true, precision: 53 })
  vlrdespadvogados: number | null;

  @ManyToOne(() => TfpitcrEntity, (tfpitcrEntity) => tfpitcrEntity.tfpirras, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUITCR', referencedColumnName: 'nuitcr' }])
  nuitcr: TfpitcrEntity;

  @OneToMany(() => TfpitadvEntity, (tfpitadvEntity) => tfpitadvEntity.nurra)
  tfpitadvs: TfpitadvEntity[];
}
