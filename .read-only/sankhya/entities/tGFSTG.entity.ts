import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSTG', ['chave', 'codigo'], { unique: true })
@Entity('TGFSTG', { schema: 'SANKHYA' })
export class TgfstgEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('char', { name: 'DESCRICAO', length: 250 })
  descricao: string;
}
