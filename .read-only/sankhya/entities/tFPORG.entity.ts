import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfppubEntity } from './tFPPUB.entity';

@Index('PK_TFPORG', ['codorgao'], { unique: true })
@Entity('TFPORG', { schema: 'SANKHYA' })
export class TfporgEntity {
  @Column('smallint', { primary: true, name: 'CODORGAO' })
  codorgao: number;

  @Column('char', { name: 'NOMEORGAO', length: 40 })
  nomeorgao: string;

  @Column('char', { name: 'CATEGORIA', nullable: true, length: 40 })
  categoria: string | null;

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.codorgao)
  tfppubs: TfppubEntity[];

  @OneToMany(() => TfppubEntity, (tfppubEntity) => tfppubEntity.codorgoriggrat)
  tfppubs2: TfppubEntity[];
}
