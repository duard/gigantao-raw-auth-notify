import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFREJNFE', ['nunota', 'codrejeicao'], { unique: true })
@Entity('TGFREJNFE', { schema: 'SANKHYA' })
export class TgfrejnfeEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODREJEICAO' })
  codrejeicao: number;

  @Column('smallint', { name: 'QTDREJEICOES', default: () => '(1)' })
  qtdrejeicoes: number;

  @Column('varchar', { name: 'HASHUTLREJEICAO', length: 28 })
  hashutlrejeicao: string;
}
