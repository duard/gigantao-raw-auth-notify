import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDVV', ['nudestinacao', 'nuverba'], { unique: true })
@Entity('TGFDVV', { schema: 'SANKHYA' })
export class TgfdvvEntity {
  @Column('int', { primary: true, name: 'NUDESTINACAO' })
  nudestinacao: number;

  @Column('int', { primary: true, name: 'NUVERBA' })
  nuverba: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
