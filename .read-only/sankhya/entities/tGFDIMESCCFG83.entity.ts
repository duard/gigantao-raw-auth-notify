import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';
import { Tgfdimescctb83Entity } from './tGFDIMESCCTB83.entity';

@Index('PK_TGFDIMECFG83', ['codemp', 'dtref', 'codigo'], { unique: true })
@Entity('TGFDIMESCCFG83', { schema: 'SANKHYA' })
export class Tgfdimesccfg83Entity {
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
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs6,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;

  @OneToMany(
    () => Tgfdimescctb83Entity,
    (tgfdimescctb83Entity) => tgfdimescctb83Entity.tgfdimesccfg,
  )
  tgfdimescctbs: Tgfdimescctb83Entity[];
}
