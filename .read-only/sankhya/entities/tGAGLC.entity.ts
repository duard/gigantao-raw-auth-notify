import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGAGLC', ['codgrupoclc'], { unique: true })
@Entity('TGAGLC', { schema: 'SANKHYA' })
export class TgaglcEntity {
  @Column('int', { primary: true, name: 'CODGRUPOCLC' })
  codgrupoclc: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('int', { name: 'CODGRUPOCLCPAI', default: () => '(-999999999)' })
  codgrupoclcpai: number;

  @Column('smallint', { name: 'GRAU', default: () => '(1)' })
  grau: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;
}
