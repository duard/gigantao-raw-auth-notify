import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAPTPA', ['codpar'], { unique: true })
@Entity('TAPTPA', { schema: 'SANKHYA' })
export class TaptpaEntity {
  @Column('smallint', { primary: true, name: 'CODPAR' })
  codpar: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'CAUSA', length: 1 })
  causa: string;
}
