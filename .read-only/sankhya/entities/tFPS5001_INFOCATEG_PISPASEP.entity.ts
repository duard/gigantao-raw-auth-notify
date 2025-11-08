import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5001InfobasePispasepEntity } from './tFPS5001_INFOBASE_PISPASEP.entity';
import { Tfps5001InfopispasepIdeestabEntity } from './tFPS5001_INFOPISPASEP_IDEESTAB.entity';

@Index('PK_TFPS5001_INFOCATEG', ['codinfocateg'], { unique: true })
@Entity('TFPS5001_INFOCATEG_PISPASEP', { schema: 'SANKHYA' })
export class Tfps5001InfocategPispasepEntity {
  @Column('int', { primary: true, name: 'CODINFOCATEG' })
  codinfocateg: number;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'CODCATEG', nullable: true, length: 3 })
  codcateg: string | null;

  @OneToMany(
    () => Tfps5001InfobasePispasepEntity,
    (tfps5001InfobasePispasepEntity) =>
      tfps5001InfobasePispasepEntity.codinfocateg,
  )
  tfps5001InfobasePispaseps: Tfps5001InfobasePispasepEntity[];

  @ManyToOne(
    () => Tfps5001InfopispasepIdeestabEntity,
    (tfps5001InfopispasepIdeestabEntity) =>
      tfps5001InfopispasepIdeestabEntity.tfps5001InfocategPispaseps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODINFOPISPASEP', referencedColumnName: 'codinfopispasep' },
  ])
  codinfopispasep: Tfps5001InfopispasepIdeestabEntity;
}
