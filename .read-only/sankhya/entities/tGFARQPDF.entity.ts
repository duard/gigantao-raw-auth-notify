import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFARQPDF', ['tipo', 'chave', 'sequencia'], { unique: true })
@Entity('TGFARQPDF', { schema: 'SANKHYA' })
export class TgfarqpdfEntity {
  @Column('varchar', { primary: true, name: 'TIPO', length: 2 })
  tipo: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 50 })
  chave: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('image', { name: 'PDFARQ', nullable: true })
  pdfarq: Buffer | null;
}
