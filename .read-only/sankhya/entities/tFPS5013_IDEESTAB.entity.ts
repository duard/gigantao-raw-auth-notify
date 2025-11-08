import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps5013Entity } from './tFPS5013.entity';
import { Tfps5013IdelotacaoEntity } from './tFPS5013_IDELOTACAO.entity';

@Index('PK_TFPS5013_IDEESTAB', ['cods5013Ideestab'], { unique: true })
@Index('TFPS5013_IDEESTAB_I01', ['cods5013', 'tpinsc', 'nrinsc'], {})
@Entity('TFPS5013_IDEESTAB', { schema: 'SANKHYA' })
export class Tfps5013IdeestabEntity {
  @Column('int', { primary: true, name: 'CODS5013_IDEESTAB' })
  cods5013Ideestab: number;

  @Column('int', { name: 'CODS5013' })
  cods5013: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 1 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @ManyToOne(
    () => Tfps5013Entity,
    (tfps5013Entity) => tfps5013Entity.tfps5013Ideestabs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODS5013', referencedColumnName: 'cods5013' }])
  cods50: Tfps5013Entity;

  @OneToMany(
    () => Tfps5013IdelotacaoEntity,
    (tfps5013IdelotacaoEntity) => tfps5013IdelotacaoEntity.cods5013Ideestab2,
  )
  tfps5013Idelotacaos: Tfps5013IdelotacaoEntity[];
}
