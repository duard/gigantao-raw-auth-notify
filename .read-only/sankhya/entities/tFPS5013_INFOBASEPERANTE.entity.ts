import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5013BaseperanteEntity } from './tFPS5013_BASEPERANTE.entity';
import { Tfps5013IdelotacaoEntity } from './tFPS5013_IDELOTACAO.entity';

@Index('PK_TFPS5013_INFOBASEPERANTE', ['cods5013Infobaseperante'], {
  unique: true,
})
@Index(
  'TFPS5013_INFOBASEPERANTE_I01',
  ['cods5013Idelotacao', 'perref', 'tpacconv'],
  {},
)
@Entity('TFPS5013_INFOBASEPERANTE', { schema: 'SANKHYA' })
export class Tfps5013InfobaseperanteEntity {
  @Column('int', { primary: true, name: 'CODS5013_INFOBASEPERANTE' })
  cods5013Infobaseperante: number;

  @Column('int', { name: 'CODS5013_IDELOTACAO' })
  cods5013Idelotacao: number;

  @Column('varchar', { name: 'PERREF', length: 7 })
  perref: string;

  @Column('varchar', { name: 'TPACCONV', length: 1 })
  tpacconv: string;

  @OneToMany(
    () => Tfps5013BaseperanteEntity,
    (tfps5013BaseperanteEntity) =>
      tfps5013BaseperanteEntity.cods5013Infobaseperante2,
  )
  tfps5013Baseperantes: Tfps5013BaseperanteEntity[];

  @ManyToOne(
    () => Tfps5013IdelotacaoEntity,
    (tfps5013IdelotacaoEntity) =>
      tfps5013IdelotacaoEntity.tfps5013Infobaseperantes,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5013_IDELOTACAO', referencedColumnName: 'cods5013Idelotacao' },
  ])
  cods5013Idelotacao2: Tfps5013IdelotacaoEntity;
}
