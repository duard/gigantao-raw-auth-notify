import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRET', ['codigo'], { unique: true })
@Entity('TGFRET', { schema: 'SANKHYA' })
export class TgfretEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('int', { name: 'CODIGOLAYOUT' })
  codigolayout: number;

  @Column('varchar', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('varchar', { name: 'DIRARQ', nullable: true, length: 260 })
  dirarq: string | null;

  @Column('varchar', { name: 'DIRARQPROC', nullable: true, length: 260 })
  dirarqproc: string | null;

  @Column('varchar', { name: 'USABCOLOCTIT', nullable: true, length: 1 })
  usabcoloctit: string | null;

  @Column('varchar', { name: 'OBTVALORPROPTIT', nullable: true, length: 1 })
  obtvalorproptit: string | null;

  @Column('varchar', { name: 'JURMULTNEGOC', nullable: true, length: 1 })
  jurmultnegoc: string | null;
}
