import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';
import { Tgfdimescctb82Entity } from './tGFDIMESCCTB82.entity';

@Index('PK_TGFDIMECFG82', ['codemp', 'dtref', 'codigo'], { unique: true })
@Entity('TGFDIMESCCFG82', { schema: 'SANKHYA' })
export class Tgfdimesccfg82Entity {
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
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs5,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;

  @OneToMany(
    () => Tgfdimescctb82Entity,
    (tgfdimescctb82Entity) => tgfdimescctb82Entity.tgfdimesccfg,
  )
  tgfdimescctbs: Tgfdimescctb82Entity[];
}
