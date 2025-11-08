import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFVVV', ['nuvinculo', 'nuverba'], { unique: true })
@Entity('TGFVVV', { schema: 'SANKHYA' })
export class TgfvvvEntity {
  @Column('int', { primary: true, name: 'NUVINCULO' })
  nuvinculo: number;

  @Column('int', { primary: true, name: 'NUVERBA' })
  nuverba: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
