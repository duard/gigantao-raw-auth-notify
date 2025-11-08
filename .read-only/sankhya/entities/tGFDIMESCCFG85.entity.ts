import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';
import { Tgfdimescctb85Entity } from './tGFDIMESCCTB85.entity';

@Index('PK_TGFDIMESCCFG85', ['codemp', 'dtref', 'codigo'], { unique: true })
@Entity('TGFDIMESCCFG85', { schema: 'SANKHYA' })
export class Tgfdimesccfg85Entity {
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
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs8,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;

  @OneToMany(
    () => Tgfdimescctb85Entity,
    (tgfdimescctb85Entity) => tgfdimescctb85Entity.tgfdimesccfg,
  )
  tgfdimescctbs: Tgfdimescctb85Entity[];
}
