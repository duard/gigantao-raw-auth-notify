import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_TGFTBR', ['id'], { unique: true })
@Entity('TGFTBR', { schema: 'SANKHYA' })
export class TgftbrEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'FISCAL', nullable: true, length: 30 })
  fiscal: string | null;

  @Column('varchar', { name: 'VARIACAO', nullable: true, length: 30 })
  variacao: string | null;
}
