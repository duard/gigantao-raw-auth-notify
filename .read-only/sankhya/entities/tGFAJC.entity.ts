import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfajaEntity } from './tGFAJA.entity';
import { TgfajuEntity } from './tGFAJU.entity';

@Index('PK_TGFAJC', ['nuaja', 'sequencia'], { unique: true })
@Entity('TGFAJC', { schema: 'SANKHYA' })
export class TgfajcEntity {
  @Column('int', { primary: true, name: 'NUAJA' })
  nuaja: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', {
    name: 'SALDOCREDANT',
    precision: 53,
    default: () => '(0)',
  })
  saldocredant: number;

  @Column('float', {
    name: 'CREDAPROPRIADO',
    precision: 53,
    default: () => '(0)',
  })
  credapropriado: number;

  @Column('float', {
    name: 'CREDRECEBIDO',
    precision: 53,
    default: () => '(0)',
  })
  credrecebido: number;

  @Column('float', {
    name: 'CREDUTILIZADO',
    precision: 53,
    default: () => '(0)',
  })
  credutilizado: number;

  @Column('float', {
    name: 'SALDOCREDPROX',
    precision: 53,
    default: () => '(0)',
  })
  saldocredprox: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfajaEntity, (tgfajaEntity) => tgfajaEntity.tgfajcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUAJA', referencedColumnName: 'nuaja' }])
  nuaja2: TgfajaEntity;

  @OneToMany(() => TgfajuEntity, (tgfajuEntity) => tgfajuEntity.tgfajc)
  tgfajus: TgfajuEntity[];
}
