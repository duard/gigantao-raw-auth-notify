import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsirhiEntity } from './tSIRHI.entity';
import { TsiimpEntity } from './tSIIMP.entity';

@Index('PK_TSIIM1C', ['codrel', 'sequencia'], { unique: true })
@Entity('TSIIMC', { schema: 'SANKHYA' })
export class TsiimcEntity {
  @Column('int', { primary: true, name: 'CODREL' })
  codrel: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'DESCRICAO', length: 30 })
  descricao: string;

  @Column('int', { name: 'TAMANHO' })
  tamanho: number;

  @Column('smallint', { name: 'ALINHAMENTO' })
  alinhamento: number;

  @Column('char', { name: 'TOTALIZA', length: 1, default: () => "'N'" })
  totaliza: string;

  @Column('char', { name: 'MASCARA', nullable: true, length: 60 })
  mascara: string | null;

  @Column('char', { name: 'EXPRESAO', nullable: true, length: 255 })
  expresao: string | null;

  @Column('text', { name: 'TABELAS', nullable: true })
  tabelas: string | null;

  @Column('text', { name: 'LIGACAO', nullable: true })
  ligacao: string | null;

  @Column('int', { name: 'LINHA', nullable: true })
  linha: number | null;

  @Column('int', { name: 'COLUNA', nullable: true })
  coluna: number | null;

  @Column('int', { name: 'LARGURA', nullable: true })
  largura: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('char', { name: 'SUBLINHADO_BAIXO', length: 1, default: () => "'N'" })
  sublinhadoBaixo: string;

  @Column('char', { name: 'SUBLINHADO_ALTO', length: 1, default: () => "'N'" })
  sublinhadoAlto: string;

  @Column('char', {
    name: 'SUBLINHADO_ESQUERDA',
    length: 1,
    default: () => "'N'",
  })
  sublinhadoEsquerda: string;

  @Column('char', {
    name: 'SUBLINHADO_DIREITA',
    length: 1,
    default: () => "'N'",
  })
  sublinhadoDireita: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('int', { name: 'NROQUEBRA', nullable: true })
  nroquebra: number | null;

  @Column('int', { name: 'NROQUERY', default: () => '(0)' })
  nroquery: number;

  @ManyToOne(() => TsirhiEntity, (tsirhiEntity) => tsirhiEntity.tsiimcs)
  @JoinColumn([{ name: 'CODUNI', referencedColumnName: 'coduni' }])
  coduni: TsirhiEntity;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tsiimcs)
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel2: TsiimpEntity;
}
