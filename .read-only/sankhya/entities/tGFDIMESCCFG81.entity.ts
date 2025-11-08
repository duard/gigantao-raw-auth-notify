import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';
import { Tgfdimescctb81Entity } from './tGFDIMESCCTB81.entity';

@Index('PK_TGFDIMECFG81', ['codemp', 'dtref', 'codigo'], { unique: true })
@Entity('TGFDIMESCCFG81', { schema: 'SANKHYA' })
export class Tgfdimesccfg81Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs4,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;

  @OneToMany(
    () => Tgfdimescctb81Entity,
    (tgfdimescctb81Entity) => tgfdimescctb81Entity.tgfdimesccfg,
  )
  tgfdimescctbs: Tgfdimescctb81Entity[];
}
