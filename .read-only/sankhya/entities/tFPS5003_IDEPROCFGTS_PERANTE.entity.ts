import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5003DetrubrsuspPeranteEntity } from './tFPS5003_DETRUBRSUSP_PERANTE.entity';

@Index(
  'PK_TFPS5003_IDPROCFGTS_PERANTE',
  ['cods5003DetrubrsuspPerante', 'nrproc'],
  { unique: true },
)
@Entity('TFPS5003_IDEPROCFGTS_PERANTE', { schema: 'SANKHYA' })
export class Tfps5003IdeprocfgtsPeranteEntity {
  @Column('int', { primary: true, name: 'CODS5003_DETRUBRSUSP_PERANTE' })
  cods5003DetrubrsuspPerante: number;

  @Column('varchar', { primary: true, name: 'NRPROC', length: 20 })
  nrproc: string;

  @ManyToOne(
    () => Tfps5003DetrubrsuspPeranteEntity,
    (tfps5003DetrubrsuspPeranteEntity) =>
      tfps5003DetrubrsuspPeranteEntity.tfps5003IdeprocfgtsPerantes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_DETRUBRSUSP_PERANTE',
      referencedColumnName: 'cods5003DetrubrsuspPerante',
    },
  ])
  cods5003DetrubrsuspPerante2: Tfps5003DetrubrsuspPeranteEntity;
}
