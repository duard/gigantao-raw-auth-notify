import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDEXP', ['nuexpressao'], { unique: true })
@Entity('TDDEXP', { schema: 'SANKHYA' })
export class TddexpEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUEXPRESSAO',
    precision: 10,
    scale: 0,
  })
  nuexpressao: number;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;
}
