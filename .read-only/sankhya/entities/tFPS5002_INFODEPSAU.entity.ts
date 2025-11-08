import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002PlansaudeEntity } from './tFPS5002_PLANSAUDE.entity';

@Index('PK_TFPS5002_INFODEPSAU', ['cods5002Infodepsau'], { unique: true })
@Entity('TFPS5002_INFODEPSAU', { schema: 'SANKHYA' })
export class Tfps5002InfodepsauEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFODEPSAU' })
  cods5002Infodepsau: number;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('float', { name: 'VLRSAUDEDEP', nullable: true, precision: 53 })
  vlrsaudedep: number | null;

  @ManyToOne(
    () => Tfps5002PlansaudeEntity,
    (tfps5002PlansaudeEntity) => tfps5002PlansaudeEntity.tfps5002Infodepsaus,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_PLANSAUDE', referencedColumnName: 'cods5002Plansaude' },
  ])
  cods5002Plansaude: Tfps5002PlansaudeEntity;
}
