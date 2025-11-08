import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5003BaseperanteEntity } from './tFPS5003_BASEPERANTE.entity';
import { Tfps5003IdeprocfgtsPeranteEntity } from './tFPS5003_IDEPROCFGTS_PERANTE.entity';

@Index('PK_TFPS5003_DETRUBRSUSP_PERANT', ['cods5003DetrubrsuspPerante'], {
  unique: true,
})
@Index(
  'TFPS5003_DETRUBRSUSP_PERAN_I01',
  ['cods5003Baseperante', 'codrubr', 'idetabrubr'],
  {},
)
@Entity('TFPS5003_DETRUBRSUSP_PERANTE', { schema: 'SANKHYA' })
export class Tfps5003DetrubrsuspPeranteEntity {
  @Column('int', { primary: true, name: 'CODS5003_DETRUBRSUSP_PERANTE' })
  cods5003DetrubrsuspPerante: number;

  @Column('int', { name: 'CODS5003_BASEPERANTE' })
  cods5003Baseperante: number;

  @Column('varchar', { name: 'CODRUBR', nullable: true, length: 30 })
  codrubr: string | null;

  @Column('varchar', { name: 'IDETABRUBR', nullable: true, length: 8 })
  idetabrubr: string | null;

  @Column('float', { name: 'VRRUBR', nullable: true, precision: 53 })
  vrrubr: number | null;

  @ManyToOne(
    () => Tfps5003BaseperanteEntity,
    (tfps5003BaseperanteEntity) =>
      tfps5003BaseperanteEntity.tfps5003DetrubrsuspPerantes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_BASEPERANTE',
      referencedColumnName: 'cods5003Baseperante',
    },
  ])
  cods5003Baseperante2: Tfps5003BaseperanteEntity;

  @OneToMany(
    () => Tfps5003IdeprocfgtsPeranteEntity,
    (tfps5003IdeprocfgtsPeranteEntity) =>
      tfps5003IdeprocfgtsPeranteEntity.cods5003DetrubrsuspPerante2,
  )
  tfps5003IdeprocfgtsPerantes: Tfps5003IdeprocfgtsPeranteEntity[];
}
