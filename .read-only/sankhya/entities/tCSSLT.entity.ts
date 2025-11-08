import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TcsiteEntity } from './tCSITE.entity';

@Index('PK_TCSSLT', ['numos', 'numitem'], { unique: true })
@Entity('TCSSLT', { schema: 'SANKHYA' })
export class TcssltEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('int', { name: 'TEMPOSLA', nullable: true })
  temposla: number | null;

  @Column('int', { name: 'SLADECORRIDO', nullable: true })
  sladecorrido: number | null;

  @Column('int', { name: 'SLARESTANTE', nullable: true })
  slarestante: number | null;

  @Column('varchar', { name: 'HORASUTEIS', length: 1, default: () => "'N'" })
  horasuteis: string;

  @OneToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tcsslt)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'NUMITEM', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;
}
