import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIAAG', ['nuaag'], { unique: true })
@Entity('TSIAAG', { schema: 'SANKHYA' })
export class TsiaagEntity {
  @Column('int', { primary: true, name: 'NUAAG' })
  nuaag: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 250 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPOACAO', length: 1 })
  tipoacao: string;

  @Column('varchar', { name: 'ACAO', length: 250 })
  acao: string;

  @Column('int', { name: 'CODMODULO', nullable: true })
  codmodulo: number | null;

  @Column('varchar', { name: 'TIPOGATILHO', length: 1 })
  tipogatilho: string;

  @Column('varchar', { name: 'EXPGATILHO', length: 100 })
  expgatilho: string;

  @Column('smallint', { name: 'CODUSULOGIN', nullable: true })
  codusulogin: number | null;

  @Column('varchar', { name: 'FONTEDADOS', nullable: true, length: 50 })
  fontedados: string | null;

  @Column('varchar', { name: 'AUTOTRAN', length: 1, default: () => "'S'" })
  autotran: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;
}
