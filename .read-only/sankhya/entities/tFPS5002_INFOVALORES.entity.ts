import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002DedsuspEntity } from './tFPS5002_DEDSUSP.entity';
import { Tfps5002InfoprocretEntity } from './tFPS5002_INFOPROCRET.entity';

@Index('PK_TFPS5002_INFOVALORES', ['cods5002Infovalores'], { unique: true })
@Entity('TFPS5002_INFOVALORES', { schema: 'SANKHYA' })
export class Tfps5002InfovaloresEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOVALORES' })
  cods5002Infovalores: number;

  @Column('varchar', { name: 'INDAPURACAO', nullable: true, length: 1 })
  indapuracao: string | null;

  @Column('float', { name: 'VLRNRETIDO', nullable: true, precision: 53 })
  vlrnretido: number | null;

  @Column('float', { name: 'VLRDEPJUD', nullable: true, precision: 53 })
  vlrdepjud: number | null;

  @Column('float', { name: 'VLRCMPANOCAL', nullable: true, precision: 53 })
  vlrcmpanocal: number | null;

  @Column('float', { name: 'VLRCMPANOANT', nullable: true, precision: 53 })
  vlrcmpanoant: number | null;

  @Column('float', { name: 'VLRRENDSUSP', nullable: true, precision: 53 })
  vlrrendsusp: number | null;

  @OneToMany(
    () => Tfps5002DedsuspEntity,
    (tfps5002DedsuspEntity) => tfps5002DedsuspEntity.cods5002Infovalores,
  )
  tfps5002Dedsusps: Tfps5002DedsuspEntity[];

  @ManyToOne(
    () => Tfps5002InfoprocretEntity,
    (tfps5002InfoprocretEntity) =>
      tfps5002InfoprocretEntity.tfps5002Infovalores,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5002_INFOPROCRET',
      referencedColumnName: 'cods5002Infoprocret',
    },
  ])
  cods5002Infoprocret: Tfps5002InfoprocretEntity;
}
