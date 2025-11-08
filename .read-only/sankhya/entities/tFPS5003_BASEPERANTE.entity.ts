import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5003InfobaseperanteEntity } from './tFPS5003_INFOBASEPERANTE.entity';
import { Tfps5003DetrubrsuspPeranteEntity } from './tFPS5003_DETRUBRSUSP_PERANTE.entity';

@Index('PK_TFPS5003_BASEPERANTE', ['cods5003Baseperante'], { unique: true })
@Index(
  'TFPS5003_BASEPERANTE_I01',
  ['cods5003Infobaseperante', 'tpvalore', 'indincide'],
  {},
)
@Entity('TFPS5003_BASEPERANTE', { schema: 'SANKHYA' })
export class Tfps5003BaseperanteEntity {
  @Column('int', { primary: true, name: 'CODS5003_BASEPERANTE' })
  cods5003Baseperante: number;

  @Column('int', { name: 'CODS5003_INFOBASEPERANTE' })
  cods5003Infobaseperante: number;

  @Column('varchar', { name: 'TPVALORE', nullable: true, length: 2 })
  tpvalore: string | null;

  @Column('varchar', { name: 'INDINCIDE', nullable: true, length: 1 })
  indincide: string | null;

  @Column('float', { name: 'REMFGTSE', nullable: true, precision: 53 })
  remfgtse: number | null;

  @Column('float', { name: 'DPSFGTSE', nullable: true, precision: 53 })
  dpsfgtse: number | null;

  @ManyToOne(
    () => Tfps5003InfobaseperanteEntity,
    (tfps5003InfobaseperanteEntity) =>
      tfps5003InfobaseperanteEntity.tfps5003Baseperantes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'CODS5003_INFOBASEPERANTE',
      referencedColumnName: 'cods5003Infobaseperante',
    },
  ])
  cods5003Infobaseperante2: Tfps5003InfobaseperanteEntity;

  @OneToMany(
    () => Tfps5003DetrubrsuspPeranteEntity,
    (tfps5003DetrubrsuspPeranteEntity) =>
      tfps5003DetrubrsuspPeranteEntity.cods5003Baseperante2,
  )
  tfps5003DetrubrsuspPerantes: Tfps5003DetrubrsuspPeranteEntity[];
}
