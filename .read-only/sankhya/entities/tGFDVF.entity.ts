import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDVF', ['nudestinacao', 'nufin'], { unique: true })
@Entity('TGFDVF', { schema: 'SANKHYA' })
export class TgfdvfEntity {
  @Column('int', { primary: true, name: 'NUDESTINACAO' })
  nudestinacao: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;
}
