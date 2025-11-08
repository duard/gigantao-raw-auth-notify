import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InforraEntity } from './tFPS5002_INFORRA.entity';

@Index('PK_TFPS5002_DESPPROCJUD', ['cods5002Despprocjud'], { unique: true })
@Entity('TFPS5002_DESPPROCJUD', { schema: 'SANKHYA' })
export class Tfps5002DespprocjudEntity {
  @Column('int', { primary: true, name: 'CODS5002_DESPPROCJUD' })
  cods5002Despprocjud: number;

  @Column('float', { name: 'VLRDESPCUSTAS', nullable: true, precision: 53 })
  vlrdespcustas: number | null;

  @Column('float', { name: 'VLRDESPADVOGADOS', nullable: true, precision: 53 })
  vlrdespadvogados: number | null;

  @ManyToOne(
    () => Tfps5002InforraEntity,
    (tfps5002InforraEntity) => tfps5002InforraEntity.tfps5002Despprocjuds,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_INFORRA', referencedColumnName: 'cods5002Inforra' },
  ])
  cods5002Inforra: Tfps5002InforraEntity;
}
