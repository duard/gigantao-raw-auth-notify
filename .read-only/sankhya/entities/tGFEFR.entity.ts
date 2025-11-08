import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfefbEntity } from './tGFEFB.entity';

@Index('PK_TGFEFR', ['codemp', 'bloco', 'registro', 'tipo'], { unique: true })
@Entity('TGFEFR', { schema: 'SANKHYA' })
export class TgfefrEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('char', { primary: true, name: 'REGISTRO', length: 4 })
  registro: string;

  @Column('char', { name: 'DESCRICAO', length: 250 })
  descricao: string;

  @Column('char', { name: 'GERARREGISTRO', length: 1, default: () => "'N'" })
  gerarregistro: string;

  @Column('char', { name: 'GERARENTRADA', length: 1, default: () => "'N'" })
  gerarentrada: string;

  @Column('char', { name: 'GERARSAIDA', length: 1, default: () => "'N'" })
  gerarsaida: string;

  @Column('smallint', { primary: true, name: 'TIPO', default: () => '(0)' })
  tipo: number;

  @ManyToOne(() => TgfefbEntity, (tgfefbEntity) => tgfefbEntity.tgfefrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'BLOCO', referencedColumnName: 'bloco' },
    { name: 'TIPO', referencedColumnName: 'tipo' },
  ])
  tgfefb: TgfefbEntity;
}
