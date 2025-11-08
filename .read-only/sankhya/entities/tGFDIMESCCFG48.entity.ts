import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';
import { Tgfdimesctpo48Entity } from './tGFDIMESCTPO48.entity';

@Index('PK_TGFDIMECFG48', ['codemp', 'dtref', 'codigo'], { unique: true })
@Entity('TGFDIMESCCFG48', { schema: 'SANKHYA' })
export class Tgfdimesccfg48Entity {
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
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs3,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;

  @OneToMany(
    () => Tgfdimesctpo48Entity,
    (tgfdimesctpo48Entity) => tgfdimesctpo48Entity.tgfdimesccfg,
  )
  tgfdimesctpos: Tgfdimesctpo48Entity[];
}
