import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002DedsuspEntity } from './tFPS5002_DEDSUSP.entity';

@Index('PK_TFPS5002_BENEFPEN', ['cods5002Benefpen'], { unique: true })
@Entity('TFPS5002_BENEFPEN', { schema: 'SANKHYA' })
export class Tfps5002BenefpenEntity {
  @Column('int', { primary: true, name: 'CODS5002_BENEFPEN' })
  cods5002Benefpen: number;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('float', { name: 'VLRDEPENSUSP', nullable: true, precision: 53 })
  vlrdepensusp: number | null;

  @ManyToOne(
    () => Tfps5002DedsuspEntity,
    (tfps5002DedsuspEntity) => tfps5002DedsuspEntity.tfps5002Benefpens,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_DEDSUSP', referencedColumnName: 'cods5002Dedsusp' },
  ])
  cods5002Dedsusp: Tfps5002DedsuspEntity;
}
