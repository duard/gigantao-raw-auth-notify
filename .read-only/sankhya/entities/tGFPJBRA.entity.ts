import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPJBRA', ['idunico'], { unique: true })
@Entity('TGFPJBRA', { schema: 'SANKHYA' })
export class TgfpjbraEntity {
  @Column('int', { primary: true, name: 'IDUNICO' })
  idunico: number;

  @Column('int', { name: 'NMPEDIDO', nullable: true })
  nmpedido: number | null;

  @Column('datetime', { name: 'DTALT', nullable: true })
  dtalt: Date | null;

  @Column('varchar', { name: 'ACAO', nullable: true, length: 2 })
  acao: string | null;
}
