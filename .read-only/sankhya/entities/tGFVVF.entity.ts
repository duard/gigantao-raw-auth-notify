import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFVVF', ['nuvinculo', 'nufin'], { unique: true })
@Entity('TGFVVF', { schema: 'SANKHYA' })
export class TgfvvfEntity {
  @Column('int', { primary: true, name: 'NUVINCULO' })
  nuvinculo: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { name: 'GERADO' })
  gerado: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
