import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TGFGNT', ['codgruponat'], { unique: true })
@Entity('TGFGNT', { schema: 'SANKHYA' })
export class TgfgntEntity {
  @Column('int', { primary: true, name: 'CODGRUPONAT', default: () => '(0)' })
  codgruponat: number;

  @Column('varchar', { name: 'DESCRGRUPONAT', nullable: true, length: 40 })
  descrgruponat: string | null;

  @Column('int', { name: 'CODGRUPONATPAI', nullable: true })
  codgruponatpai: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('char', { name: 'TIPNAT', nullable: true, length: 1 })
  tipnat: string | null;

  @OneToMany(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.codgruponat)
  tgfnats: TgfnatEntity[];
}
