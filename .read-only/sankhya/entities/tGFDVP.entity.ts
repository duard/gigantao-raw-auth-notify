import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDVP', ['nudestinacao', 'nupromocao'], { unique: true })
@Entity('TGFDVP', { schema: 'SANKHYA' })
export class TgfdvpEntity {
  @Column('int', { primary: true, name: 'NUDESTINACAO' })
  nudestinacao: number;

  @Column('int', { primary: true, name: 'NUPROMOCAO' })
  nupromocao: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
