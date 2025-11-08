import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InfoircrEntity } from './tFPS5002_INFOIRCR.entity';

@Index('PK_TFPS5002_PENALIM', ['cods5002Penalim'], { unique: true })
@Entity('TFPS5002_PENALIM', { schema: 'SANKHYA' })
export class Tfps5002PenalimEntity {
  @Column('int', { primary: true, name: 'CODS5002_PENALIM' })
  cods5002Penalim: number;

  @Column('varchar', { name: 'TPREND', nullable: true, length: 2 })
  tprend: string | null;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('float', { name: 'VLRDEDPENALIM', nullable: true, precision: 53 })
  vlrdedpenalim: number | null;

  @ManyToOne(
    () => Tfps5002InfoircrEntity,
    (tfps5002InfoircrEntity) => tfps5002InfoircrEntity.tfps5002Penalims,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_INFOIRCR', referencedColumnName: 'cods5002Infoircr' },
  ])
  cods5002Infoircr: Tfps5002InfoircrEntity;
}
