import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCAR', ['codtexto'], { unique: true })
@Entity('TGFCAR', { schema: 'SANKHYA' })
export class TgfcarEntity {
  @Column('smallint', { primary: true, name: 'CODTEXTO' })
  codtexto: number;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;
}
