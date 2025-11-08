import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002DmdevEntity } from './tFPS5002_DMDEV.entity';
import { Tfps5002InfoprocjudrubEntity } from './tFPS5002_INFOPROCJUDRUB.entity';

@Index('PK_TFPS5002_INFOIR', ['cods5002Infoir'], { unique: true })
@Index('TFPS5002_INFOIR_I01', ['cods5002Dmdev', 'tpinfoir'], {})
@Entity('TFPS5002_INFOIR', { schema: 'SANKHYA' })
export class Tfps5002InfoirEntity {
  @Column('int', { primary: true, name: 'CODS5002_INFOIR' })
  cods5002Infoir: number;

  @Column('int', { name: 'CODS5002_DMDEV' })
  cods5002Dmdev: number;

  @Column('varchar', { name: 'TPINFOIR', nullable: true, length: 10 })
  tpinfoir: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'DESCRENDIMENTO', nullable: true, length: 100 })
  descrendimento: string | null;

  @ManyToOne(
    () => Tfps5002DmdevEntity,
    (tfps5002DmdevEntity) => tfps5002DmdevEntity.tfps5002Infoirs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_DMDEV', referencedColumnName: 'cods5002Dmdev' },
  ])
  cods5002Dmdev2: Tfps5002DmdevEntity;

  @OneToMany(
    () => Tfps5002InfoprocjudrubEntity,
    (tfps5002InfoprocjudrubEntity) =>
      tfps5002InfoprocjudrubEntity.cods5002Infoir,
  )
  tfps5002Infoprocjudrubs: Tfps5002InfoprocjudrubEntity[];
}
