import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIFORG', ['chave', 'coluna'], { unique: true })
@Entity('TSIFORG', { schema: 'SANKHYA' })
export class TsiforgEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 15 })
  chave: string;

  @Column('varchar', { primary: true, name: 'COLUNA', length: 15 })
  coluna: string;

  @Column('text', { name: 'FORMULA' })
  formula: string;
}
