import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InforraEntity } from './tFPS5002_INFORRA.entity';

@Index('PK_TFPS5002_IDEADV', ['cods5002Ideadv'], { unique: true })
@Entity('TFPS5002_IDEADV', { schema: 'SANKHYA' })
export class Tfps5002IdeadvEntity {
  @Column('int', { primary: true, name: 'CODS5002_IDEADV' })
  cods5002Ideadv: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('float', { name: 'VLRADV', nullable: true, precision: 53 })
  vlradv: number | null;

  @ManyToOne(
    () => Tfps5002InforraEntity,
    (tfps5002InforraEntity) => tfps5002InforraEntity.tfps5002Ideadvs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_INFORRA', referencedColumnName: 'cods5002Inforra' },
  ])
  cods5002Inforra: Tfps5002InforraEntity;
}
