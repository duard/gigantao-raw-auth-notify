import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFIPN', ['codipi', 'ncm'], { unique: true })
@Entity('TGFIPN', { schema: 'SANKHYA' })
export class TgfipnEntity {
  @Column('int', { primary: true, name: 'CODIPI' })
  codipi: number;

  @Column('varchar', { primary: true, name: 'NCM', length: 8 })
  ncm: string;
}
