import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5002Entity } from './tFPS5002.entity';
import { Tfps5002InfoirEntity } from './tFPS5002_INFOIR.entity';
import { Tfps5002InfopgtoextEntity } from './tFPS5002_INFOPGTOEXT.entity';
import { Tfps5002InforraEntity } from './tFPS5002_INFORRA.entity';
import { Tfps5002TotapurdiaEntity } from './tFPS5002_TOTAPURDIA.entity';
import { Tfps5002TotapurmenEntity } from './tFPS5002_TOTAPURMEN.entity';

@Index('PK_TFPS5002_DMDEV', ['cods5002Dmdev'], { unique: true })
@Index('TFPS5002_DMDEV_I01', ['codempmatriz', 'dtref', 'cpf'], {})
@Index('TFPS5002_DMDEV_I02', ['perref', 'idedmdev', 'tppgto'], {})
@Entity('TFPS5002_DMDEV', { schema: 'SANKHYA' })
export class Tfps5002DmdevEntity {
  @Column('int', { primary: true, name: 'CODS5002_DMDEV' })
  cods5002Dmdev: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'PERREF', nullable: true, length: 7 })
  perref: string | null;

  @Column('varchar', { name: 'IDEDMDEV', nullable: true, length: 30 })
  idedmdev: string | null;

  @Column('varchar', { name: 'TPPGTO', nullable: true, length: 4 })
  tppgto: string | null;

  @Column('datetime', { name: 'DTPGTO', nullable: true })
  dtpgto: Date | null;

  @Column('varchar', { name: 'CODCATEG', nullable: true, length: 4 })
  codcateg: string | null;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @ManyToOne(
    () => Tfps5002Entity,
    (tfps5002Entity) => tfps5002Entity.tfps5002Dmdevs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODEMPMATRIZ', referencedColumnName: 'codempmatriz' },
    { name: 'CPF', referencedColumnName: 'cpf' },
  ])
  tfps5: Tfps5002Entity;

  @OneToMany(
    () => Tfps5002InfoirEntity,
    (tfps5002InfoirEntity) => tfps5002InfoirEntity.cods5002Dmdev2,
  )
  tfps5002Infoirs: Tfps5002InfoirEntity[];

  @OneToMany(
    () => Tfps5002InfopgtoextEntity,
    (tfps5002InfopgtoextEntity) => tfps5002InfopgtoextEntity.cods5002Dmdev,
  )
  tfps5002Infopgtoexts: Tfps5002InfopgtoextEntity[];

  @OneToMany(
    () => Tfps5002InforraEntity,
    (tfps5002InforraEntity) => tfps5002InforraEntity.cods5002Dmdev,
  )
  tfps5002Inforras: Tfps5002InforraEntity[];

  @OneToMany(
    () => Tfps5002TotapurdiaEntity,
    (tfps5002TotapurdiaEntity) => tfps5002TotapurdiaEntity.cods5002Dmdev,
  )
  tfps5002Totapurdias: Tfps5002TotapurdiaEntity[];

  @OneToMany(
    () => Tfps5002TotapurmenEntity,
    (tfps5002TotapurmenEntity) => tfps5002TotapurmenEntity.cods5002Dmdev,
  )
  tfps5002Totapurmen: Tfps5002TotapurmenEntity[];
}
