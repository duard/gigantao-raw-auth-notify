import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpitcrEntity } from './tFPITCR.entity';

@Index('PK_TFPDRTD', ['nudrtd'], { unique: true })
@Entity('TFPDRTD', { schema: 'SANKHYA' })
export class TfpdrtdEntity {
  @Column('int', { primary: true, name: 'NUDRTD' })
  nudrtd: number;

  @Column('varchar', { name: 'NMDEP', nullable: true, length: 70 })
  nmdep: string | null;

  @Column('varchar', { name: 'TPREND', length: 2 })
  tprend: string;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('float', { name: 'VLRDEDUCAO', precision: 53 })
  vlrdeducao: number;

  @ManyToOne(() => TfpitcrEntity, (tfpitcrEntity) => tfpitcrEntity.tfpdrtds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUITCR', referencedColumnName: 'nuitcr' }])
  nuitcr: TfpitcrEntity;
}
