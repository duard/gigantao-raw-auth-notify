import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsdpltEntity } from './tSDPLT.entity';

@Index('PK_TSDPLC', ['nupla', 'nometab', 'nomecampo'], { unique: true })
@Entity('TSDPLC', { schema: 'SANKHYA' })
export class TsdplcEntity {
  @Column('int', { primary: true, name: 'NUPLA' })
  nupla: number;

  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'NOMECAMPO', length: 32 })
  nomecampo: string;

  @Column('varchar', { name: 'DESCRCAMPO', nullable: true, length: 255 })
  descrcampo: string | null;

  @ManyToOne(() => TsdpltEntity, (tsdpltEntity) => tsdpltEntity.tsdplcs)
  @JoinColumn([
    { name: 'NUPLA', referencedColumnName: 'nupla' },
    { name: 'NOMETAB', referencedColumnName: 'nometab' },
  ])
  tsdplt: TsdpltEntity;
}
