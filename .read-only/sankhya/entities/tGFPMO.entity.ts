import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPMO', ['chave'], { unique: true })
@Entity('TGFPMO', { schema: 'SANKHYA' })
export class TgfpmoEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('text', { name: 'CONFIG' })
  config: string;
}
