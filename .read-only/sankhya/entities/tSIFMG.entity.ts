import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIFMG', ['chave'], { unique: true })
@Entity('TSIFMG', { schema: 'SANKHYA' })
export class TsifmgEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 400 })
  chave: string;

  @Column('text', { name: 'CONFIG' })
  config: string;
}
