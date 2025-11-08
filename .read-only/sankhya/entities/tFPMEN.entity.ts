import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPMEN', ['codmens'], { unique: true })
@Entity('TFPMEN', { schema: 'SANKHYA' })
export class TfpmenEntity {
  @Column('smallint', { primary: true, name: 'CODMENS' })
  codmens: number;

  @Column('text', { name: 'DESCRMENS' })
  descrmens: string;

  @Column('char', { name: 'MENSWGE', length: 1, default: () => "'N'" })
  menswge: string;
}
