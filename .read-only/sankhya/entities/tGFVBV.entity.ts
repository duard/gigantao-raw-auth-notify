import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFVBV', ['nuvinculo', 'nunota'], { unique: true })
@Entity('TGFVBV', { schema: 'SANKHYA' })
export class TgfvbvEntity {
  @Column('int', { primary: true, name: 'NUVINCULO' })
  nuvinculo: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
