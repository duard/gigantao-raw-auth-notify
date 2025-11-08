import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002InfoircrEntity } from './tFPS5002_INFOIRCR.entity';
import { Tfps5002InfovaloresEntity } from './tFPS5002_INFOVALORES.entity';

@Index('PK_TFPS5002_INFOPROCRET', ['cods5002Infoprocret'], { unique: true })
@Entity('TFPS5002_INFOPROCRET', { schema: 'SANKHYA' })
export class Tfps5002InfoprocretEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOPROCRET' })
  cods5002Infoprocret: number;

  @Column('varchar', { name: 'TPPROCRET', nullable: true, length: 1 })
  tpprocret: string | null;

  @Column('varchar', { name: 'NRPROCRET', nullable: true, length: 21 })
  nrprocret: string | null;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @ManyToOne(
    () => Tfps5002InfoircrEntity,
    (tfps5002InfoircrEntity) => tfps5002InfoircrEntity.tfps5002Infoprocrets,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_INFOIRCR', referencedColumnName: 'cods5002Infoircr' },
  ])
  cods5002Infoircr: Tfps5002InfoircrEntity;

  @OneToMany(
    () => Tfps5002InfovaloresEntity,
    (tfps5002InfovaloresEntity) =>
      tfps5002InfovaloresEntity.cods5002Infoprocret,
  )
  tfps5002Infovalores: Tfps5002InfovaloresEntity[];
}
