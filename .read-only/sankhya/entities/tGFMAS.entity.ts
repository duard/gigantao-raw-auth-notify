import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMAS', ['numensagem'], { unique: true })
@Entity('TGFMAS', { schema: 'SANKHYA' })
export class TgfmasEntity {
  @Column('int', { primary: true, name: 'NUMENSAGEM' })
  numensagem: number;

  @Column('char', { name: 'ATIVA', length: 1 })
  ativa: string;

  @Column('text', { name: 'MENSAGEM' })
  mensagem: string;

  @Column('datetime', { name: 'DHINCLUSAO' })
  dhinclusao: Date;

  @Column('datetime', { name: 'DHINATIVACAO', nullable: true })
  dhinativacao: Date | null;

  @Column('text', { name: 'SQL', nullable: true })
  sql: string | null;
}
