import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiimpEntity } from './tSIIMP.entity';

@Index('PK_TSIGRE', ['codgruporel'], { unique: true })
@Entity('TSIGRE', { schema: 'SANKHYA' })
export class TsigreEntity {
  @Column('int', { primary: true, name: 'CODGRUPOREL', default: () => '(0)' })
  codgruporel: number;

  @Column('char', { name: 'DESCRGRUPOREL', length: 50 })
  descrgruporel: string;

  @Column('int', { name: 'CODGRUPORELPAI' })
  codgruporelpai: number;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @OneToMany(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.codgruporel2)
  tsiimps: TsiimpEntity[];
}
