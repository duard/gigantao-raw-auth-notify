import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwivlEntity } from './tGWIVL.entity';

@Index('PK_CODCAIXA', ['codcaixa'], { unique: true })
@Entity('TGWTCX', { schema: 'SANKHYA' })
export class TgwtcxEntity {
  @Column('int', { primary: true, name: 'CODCAIXA' })
  codcaixa: number;

  @Column('varchar', { name: 'DESCRICAO', length: 20 })
  descricao: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('float', { name: 'ALTURA', precision: 53 })
  altura: number;

  @Column('float', { name: 'LARGURA', precision: 53 })
  largura: number;

  @Column('float', { name: 'COMPRIMENTO', precision: 53 })
  comprimento: number;

  @Column('float', { name: 'M3', nullable: true, precision: 53 })
  m3: number | null;

  @Column('float', { name: 'PESOCXVAZIO', precision: 53 })
  pesocxvazio: number;

  @Column('varchar', { name: 'CODBARRA', length: 25 })
  codbarra: string;

  @Column('varchar', { name: 'NOMEABREV', length: 5 })
  nomeabrev: string;

  @Column('varchar', { name: 'UNIDADE', length: 2, default: () => "'MM'" })
  unidade: string;

  @OneToMany(() => TgwivlEntity, (tgwivlEntity) => tgwivlEntity.codcaixa)
  tgwivls: TgwivlEntity[];
}
