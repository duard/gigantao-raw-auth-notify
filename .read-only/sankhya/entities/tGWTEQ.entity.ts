import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TgweqpEntity } from './tGWEQP.entity';
import { TgwttrEntity } from './tGWTTR.entity';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TGWTEQ', ['codtipequip'], { unique: true })
@Entity('TGWTEQ', { schema: 'SANKHYA' })
export class TgwteqEntity {
  @Column('int', { primary: true, name: 'CODTIPEQUIP' })
  codtipequip: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('float', { name: 'PESOMIN', precision: 53, default: () => '(0)' })
  pesomin: number;

  @Column('float', { name: 'PESOMAX', precision: 53, default: () => '(0)' })
  pesomax: number;

  @Column('float', { name: 'M3MAX', precision: 53, default: () => '(0)' })
  m3Max: number;

  @Column('smallint', { name: 'NIVELMAX', default: () => '(0)' })
  nivelmax: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'M'" })
  tipo: string;

  @Column('smallint', { name: 'NIVELMIN', default: () => '(0)' })
  nivelmin: number;

  @OneToMany(() => TgweqpEntity, (tgweqpEntity) => tgweqpEntity.codtipequip)
  tgweqps: TgweqpEntity[];

  @ManyToMany(() => TgwttrEntity, (tgwttrEntity) => tgwttrEntity.tgwteqs)
  @JoinTable({
    name: 'TGWTTE',
    joinColumns: [{ name: 'CODTIPEQUIP', referencedColumnName: 'codtipequip' }],
    inverseJoinColumns: [
      { name: 'CODTAREFA', referencedColumnName: 'codtarefa' },
    ],
    schema: 'SANKHYA',
  })
  tgwttrs: TgwttrEntity[];

  @ManyToMany(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwteqs)
  @JoinTable({
    name: 'TGWUTE',
    joinColumns: [{ name: 'CODTIPEQUIP', referencedColumnName: 'codtipequip' }],
    inverseJoinColumns: [{ name: 'CODVOL', referencedColumnName: 'codvol' }],
    schema: 'SANKHYA',
  })
  tgfvols: TgfvolEntity[];
}
