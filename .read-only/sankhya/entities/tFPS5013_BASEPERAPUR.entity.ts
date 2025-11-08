import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5013IdelotacaoEntity } from './tFPS5013_IDELOTACAO.entity';

@Index('PK_TFPS5013_BASEPERAPUR', ['cods5013Baseperapur'], { unique: true })
@Index(
  'TFPS5013_BASEPERAPUR_I01',
  ['cods5013Idelotacao', 'tpvalor', 'indincid'],
  {},
)
@Entity('TFPS5013_BASEPERAPUR', { schema: 'SANKHYA' })
export class Tfps5013BaseperapurEntity {
  @Column('int', { primary: true, name: 'CODS5013_BASEPERAPUR' })
  cods5013Baseperapur: number;

  @Column('int', { name: 'CODS5013_IDELOTACAO' })
  cods5013Idelotacao: number;

  @Column('varchar', { name: 'TPVALOR', nullable: true, length: 2 })
  tpvalor: string | null;

  @Column('varchar', { name: 'INDINCID', nullable: true, length: 1 })
  indincid: string | null;

  @Column('float', { name: 'BASEFGTS', nullable: true, precision: 53 })
  basefgts: number | null;

  @Column('float', { name: 'VRFGTS', nullable: true, precision: 53 })
  vrfgts: number | null;

  @ManyToOne(
    () => Tfps5013IdelotacaoEntity,
    (tfps5013IdelotacaoEntity) => tfps5013IdelotacaoEntity.tfps5013Baseperapurs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5013_IDELOTACAO', referencedColumnName: 'cods5013Idelotacao' },
  ])
  cods5013Idelotacao2: Tfps5013IdelotacaoEntity;
}
