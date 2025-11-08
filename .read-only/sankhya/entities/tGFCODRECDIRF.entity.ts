import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfdirfidrecEntity } from './tGFDIRFIDREC.entity';

@Index('PK_TGFCODRECDIRF', ['codrec'], { unique: true })
@Entity('TGFCODRECDIRF', { schema: 'SANKHYA' })
export class TgfcodrecdirfEntity {
  @Column('varchar', { primary: true, name: 'CODREC', length: 4 })
  codrec: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 150 })
  descricao: string | null;

  @Column('char', { name: 'PIS', length: 1, default: () => "'N'" })
  pis: string;

  @Column('char', { name: 'COFINS', length: 1, default: () => "'N'" })
  cofins: string;

  @Column('char', { name: 'CSLL', length: 1, default: () => "'N'" })
  csll: string;

  @Column('char', { name: 'IRF', length: 1, default: () => "'N'" })
  irf: string;

  @Column('char', { name: 'ESTOQUE', length: 1, default: () => "'N'" })
  estoque: string;

  @Column('char', { name: 'FINANCEIRO', length: 1, default: () => "'N'" })
  financeiro: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'IMPINCLUSO', length: 1, default: () => "'N'" })
  impincluso: string;

  @Column('char', { name: 'IMPRETIDO', length: 1, default: () => "'N'" })
  impretido: string;

  @Column('char', { name: 'TIPOPESSOA', nullable: true, length: 1 })
  tipopessoa: string | null;

  @Column('char', { name: 'IMPNAORETIDO', nullable: true, length: 1 })
  impnaoretido: string | null;

  @OneToMany(
    () => TgfdirfidrecEntity,
    (tgfdirfidrecEntity) => tgfdirfidrecEntity.codrec2,
  )
  tgfdirfidrecs: TgfdirfidrecEntity[];
}
