import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpddesEntity } from './tFPDDES.entity';

@Index('PK_TFPDDESD', ['nuddesd'], { unique: true })
@Entity('TFPDDESD', { schema: 'SANKHYA' })
export class TfpddesdEntity {
  @Column('int', { primary: true, name: 'NUDDESD' })
  nuddesd: number;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('float', { name: 'VLRDEPENSUSP', precision: 53 })
  vlrdepensusp: number;

  @Column('varchar', { name: 'NMDEP', nullable: true, length: 70 })
  nmdep: string | null;

  @ManyToOne(() => TfpddesEntity, (tfpddesEntity) => tfpddesEntity.tfpddesds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUDDES', referencedColumnName: 'nuddes' }])
  nuddes: TfpddesEntity;
}
