import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002BenefpenEntity } from './tFPS5002_BENEFPEN.entity';
import { Tfps5002InfovaloresEntity } from './tFPS5002_INFOVALORES.entity';

@Index('PK_TFPS5002_DEDSUSP', ['cods5002Dedsusp'], { unique: true })
@Entity('TFPS5002_DEDSUSP', { schema: 'SANKHYA' })
export class Tfps5002DedsuspEntity {
  @Column('int', { primary: true, name: 'CODS5002_DEDSUSP' })
  cods5002Dedsusp: number;

  @Column('varchar', { name: 'INDTPDEDUCAO', nullable: true, length: 1 })
  indtpdeducao: string | null;

  @Column('float', { name: 'VLRDEDSUSP', nullable: true, precision: 53 })
  vlrdedsusp: number | null;

  @Column('varchar', { name: 'CNPJENTIDPC', nullable: true, length: 14 })
  cnpjentidpc: string | null;

  @Column('float', { name: 'VLRPATROCFUNP', nullable: true, precision: 53 })
  vlrpatrocfunp: number | null;

  @OneToMany(
    () => Tfps5002BenefpenEntity,
    (tfps5002BenefpenEntity) => tfps5002BenefpenEntity.cods5002Dedsusp,
  )
  tfps5002Benefpens: Tfps5002BenefpenEntity[];

  @ManyToOne(
    () => Tfps5002InfovaloresEntity,
    (tfps5002InfovaloresEntity) => tfps5002InfovaloresEntity.tfps5002Dedsusps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOVALORES',
      referencedColumnName: 'cods5002Infovalores',
    },
  ])
  cods5002Infovalores: Tfps5002InfovaloresEntity;
}
