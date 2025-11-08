import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';
import { Tgfdimescctb84Entity } from './tGFDIMESCCTB84.entity';

@Index('PK_TGFDIMECFG84', ['codemp', 'dtref', 'codigo'], { unique: true })
@Entity('TGFDIMESCCFG84', { schema: 'SANKHYA' })
export class Tgfdimesccfg84Entity {
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
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs7,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;

  @OneToMany(
    () => Tgfdimescctb84Entity,
    (tgfdimescctb84Entity) => tgfdimescctb84Entity.tgfdimesccfg,
  )
  tgfdimescctbs: Tgfdimescctb84Entity[];
}
