import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5003DetrubrsuspEntity } from './tFPS5003_DETRUBRSUSP.entity';

@Index('PK_TFPS5003_IDEPROCESSOFGTS', ['cods5003Detrubrsusp', 'nrproc'], {
  unique: true,
})
@Entity('TFPS5003_IDEPROCESSOFGTS', { schema: 'SANKHYA' })
export class Tfps5003IdeprocessofgtsEntity {
  @Column('int', { primary: true, name: 'CODS5003_DETRUBRSUSP' })
  cods5003Detrubrsusp: number;

  @Column('varchar', { primary: true, name: 'NRPROC', length: 20 })
  nrproc: string;

  @ManyToOne(
    () => Tfps5003DetrubrsuspEntity,
    (tfps5003DetrubrsuspEntity) =>
      tfps5003DetrubrsuspEntity.tfps5003Ideprocessofgts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_DETRUBRSUSP',
      referencedColumnName: 'cods5003Detrubrsusp',
    },
  ])
  cods5003Detrubrsusp2: Tfps5003DetrubrsuspEntity;
}
