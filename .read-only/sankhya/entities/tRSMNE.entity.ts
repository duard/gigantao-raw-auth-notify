import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRSMNE', ['codmotnegacao'], { unique: true })
@Entity('TRSMNE', { schema: 'SANKHYA' })
export class TrsmneEntity {
  @Column('int', { primary: true, name: 'CODMOTNEGACAO' })
  codmotnegacao: number;

  @Column('varchar', { name: 'DESCRMOTNEGACAO', nullable: true, length: 50 })
  descrmotnegacao: string | null;
}
