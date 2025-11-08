import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAPAAP', ['descricao', 'nuaponta', 'numitem'], { unique: true })
@Entity('TAPAAP', { schema: 'SANKHYA' })
export class TapaapEntity {
  @Column('char', { primary: true, name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('int', { primary: true, name: 'NUAPONTA' })
  nuaponta: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('char', { name: 'ARQUIVO', nullable: true, length: 250 })
  arquivo: string | null;

  @Column('text', { name: 'CONTEUDO', nullable: true })
  conteudo: string | null;
}
