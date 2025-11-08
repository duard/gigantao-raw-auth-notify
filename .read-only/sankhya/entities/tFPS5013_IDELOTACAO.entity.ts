import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5013BaseperapurEntity } from './tFPS5013_BASEPERAPUR.entity';
import { Tfps5013IdeestabEntity } from './tFPS5013_IDEESTAB.entity';
import { Tfps5013InfobaseperanteEntity } from './tFPS5013_INFOBASEPERANTE.entity';

@Index('PK_TFPS5013_IDELOTACAO', ['cods5013Idelotacao'], { unique: true })
@Index(
  'TFPS5013_IDELOTACAO_I01',
  [
    'cods5013Ideestab',
    'codlotacao',
    'tplotacao',
    'tpinsclotacao',
    'nrinsclotacao',
  ],
  {},
)
@Entity('TFPS5013_IDELOTACAO', { schema: 'SANKHYA' })
export class Tfps5013IdelotacaoEntity {
  @Column('int', { primary: true, name: 'CODS5013_IDELOTACAO' })
  cods5013Idelotacao: number;

  @Column('int', { name: 'CODS5013_IDEESTAB' })
  cods5013Ideestab: number;

  @Column('varchar', { name: 'CODLOTACAO', nullable: true, length: 30 })
  codlotacao: string | null;

  @Column('varchar', { name: 'TPLOTACAO', nullable: true, length: 2 })
  tplotacao: string | null;

  @Column('varchar', { name: 'TPINSCLOTACAO', nullable: true, length: 1 })
  tpinsclotacao: string | null;

  @Column('varchar', { name: 'NRINSCLOTACAO', nullable: true, length: 14 })
  nrinsclotacao: string | null;

  @OneToMany(
    () => Tfps5013BaseperapurEntity,
    (tfps5013BaseperapurEntity) =>
      tfps5013BaseperapurEntity.cods5013Idelotacao2,
  )
  tfps5013Baseperapurs: Tfps5013BaseperapurEntity[];

  @ManyToOne(
    () => Tfps5013IdeestabEntity,
    (tfps5013IdeestabEntity) => tfps5013IdeestabEntity.tfps5013Idelotacaos,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5013_IDEESTAB', referencedColumnName: 'cods5013Ideestab' },
  ])
  cods5013Ideestab2: Tfps5013IdeestabEntity;

  @OneToMany(
    () => Tfps5013InfobaseperanteEntity,
    (tfps5013InfobaseperanteEntity) =>
      tfps5013InfobaseperanteEntity.cods5013Idelotacao2,
  )
  tfps5013Infobaseperantes: Tfps5013InfobaseperanteEntity[];
}
