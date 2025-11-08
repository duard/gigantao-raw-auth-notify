import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002InfodepsauEntity } from './tFPS5002_INFODEPSAU.entity';
import { Tfps5002InfoircomplemEntity } from './tFPS5002_INFOIRCOMPLEM.entity';

@Index('PK_TFPS5002_PLANSAUDE', ['cods5002Plansaude'], { unique: true })
@Entity('TFPS5002_PLANSAUDE', { schema: 'SANKHYA' })
export class Tfps5002PlansaudeEntity {
  @Column('int', { primary: true, name: 'CODS5002_PLANSAUDE' })
  cods5002Plansaude: number;

  @Column('varchar', { name: 'CNPJOPER', nullable: true, length: 14 })
  cnpjoper: string | null;

  @Column('varchar', { name: 'REGANS', nullable: true, length: 6 })
  regans: string | null;

  @Column('float', { name: 'VLRSAUDETIT', nullable: true, precision: 53 })
  vlrsaudetit: number | null;

  @OneToMany(
    () => Tfps5002InfodepsauEntity,
    (tfps5002InfodepsauEntity) => tfps5002InfodepsauEntity.cods5002Plansaude,
  )
  tfps5002Infodepsaus: Tfps5002InfodepsauEntity[];

  @ManyToOne(
    () => Tfps5002InfoircomplemEntity,
    (tfps5002InfoircomplemEntity) =>
      tfps5002InfoircomplemEntity.tfps5002Plansaudes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOIRCOMPLEM',
      referencedColumnName: 'cods5002Infoircomplem',
    },
  ])
  cods5002Infoircomplem: Tfps5002InfoircomplemEntity;
}
