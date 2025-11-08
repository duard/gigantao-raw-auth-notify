import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwcaiEntity } from './tGWCAI.entity';

@Index('PK_TGWCXU', ['codcxu'], { unique: true })
@Entity('TGWCXU', { schema: 'SANKHYA' })
export class TgwcxuEntity {
  @Column('varchar', { primary: true, name: 'CODCXU', length: 2 })
  codcxu: string;

  @Column('varchar', { name: 'DESCRCXU', length: 40 })
  descrcxu: string;

  @Column('float', { name: 'ALTURA', precision: 53, default: () => '(0)' })
  altura: number;

  @Column('float', { name: 'LARGURA', precision: 53, default: () => '(0)' })
  largura: number;

  @Column('float', { name: 'COMPRIMENTO', precision: 53, default: () => '(0)' })
  comprimento: number;

  @Column('float', { name: 'M3', precision: 53, default: () => '(0)' })
  m3: number;

  @Column('varchar', { name: 'DISPONIVEL', length: 1, default: () => "'S'" })
  disponivel: string;

  @Column('float', {
    name: 'PERCAJUSTECXU',
    precision: 53,
    default: () => '(0)',
  })
  percajustecxu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @OneToMany(() => TgwcaiEntity, (tgwcaiEntity) => tgwcaiEntity.codcxu2)
  tgwcais: TgwcaiEntity[];
}
