import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfpraEntity } from './tGFPRA.entity';

@Index('PK_TGFTAU', ['codtipautor'], { unique: true })
@Entity('TGFTAU', { schema: 'SANKHYA' })
export class TgftauEntity {
  @Column('int', { primary: true, name: 'CODTIPAUTOR' })
  codtipautor: number;

  @Column('char', { name: 'DESCRTIPAUTOR', length: 40 })
  descrtipautor: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('int', { name: 'GRAU' })
  grau: number;

  @Column('int', { name: 'CODTIPAUTORPAI' })
  codtipautorpai: number;

  @OneToMany(() => TgfpraEntity, (tgfpraEntity) => tgfpraEntity.codtipautor2)
  tgfpras: TgfpraEntity[];
}
