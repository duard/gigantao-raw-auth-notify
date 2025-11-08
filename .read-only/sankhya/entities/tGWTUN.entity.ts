import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWTUN', ['nutun'], { unique: true })
@Entity('TGWTUN', { schema: 'SANKHYA' })
export class TgwtunEntity {
  @Column('int', { primary: true, name: 'NUTUN' })
  nutun: number;

  @Column('varchar', { name: 'DESCRICAO', length: 200 })
  descricao: string;

  @Column('varchar', { name: 'DESCRABREV', length: 100 })
  descrabrev: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('float', { name: 'ALTURA', precision: 53 })
  altura: number;

  @Column('float', { name: 'LARGURA', precision: 53 })
  largura: number;

  @Column('float', { name: 'COMPRIMENTO', precision: 53 })
  comprimento: number;

  @Column('float', { name: 'PESOMAX', precision: 53 })
  pesomax: number;

  @Column('float', { name: 'M3', nullable: true, precision: 53 })
  m3: number | null;

  @Column('varchar', { name: 'UNIDADE', length: 2 })
  unidade: string;
}
