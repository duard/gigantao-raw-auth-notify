import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpitcrEntity } from './tFPITCR.entity';

@Index('PK_TFPIBPA', ['nuibpa'], { unique: true })
@Entity('TFPIBPA', { schema: 'SANKHYA' })
export class TfpibpaEntity {
  @Column('int', { primary: true, name: 'NUIBPA' })
  nuibpa: number;

  @Column('varchar', { name: 'NMDEP', nullable: true, length: 70 })
  nmdep: string | null;

  @Column('varchar', { name: 'TPREND', length: 2 })
  tprend: string;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('float', { name: 'VLRPENSAO', precision: 53 })
  vlrpensao: number;

  @ManyToOne(() => TfpitcrEntity, (tfpitcrEntity) => tfpitcrEntity.tfpibpas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUITCR', referencedColumnName: 'nuitcr' }])
  nuitcr: TfpitcrEntity;
}
