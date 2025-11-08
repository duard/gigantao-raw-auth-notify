import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TpqperEntity } from './tPQPER.entity';

@Index('PK_TPQGRP', ['codgrupoperg'], { unique: true })
@Entity('TPQGRP', { schema: 'SANKHYA' })
export class TpqgrpEntity {
  @Column('int', { primary: true, name: 'CODGRUPOPERG' })
  codgrupoperg: number;

  @Column('int', { name: 'CODGRUPOPERGPAI' })
  codgrupopergpai: number;

  @Column('varchar', { name: 'DESCRGRUPOPERG', length: 60 })
  descrgrupoperg: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('varchar', {
    name: 'ANALITICO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  analitico: string | null;

  @OneToMany(() => TfpperEntity, (tfpperEntity) => tfpperEntity.codgrupoperg)
  tfppers: TfpperEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqgrps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TpqperEntity, (tpqperEntity) => tpqperEntity.codgrupoperg)
  tpqpers: TpqperEntity[];
}
