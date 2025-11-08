import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFPRI', ['prioridade'], { unique: true })
@Entity('TGFPRI', { schema: 'SANKHYA' })
export class TgfpriEntity {
  @Column('smallint', { primary: true, name: 'PRIORIDADE' })
  prioridade: number;

  @Column('char', { name: 'TIPRESTRICAO1', nullable: true, length: 1 })
  tiprestricao1: string | null;

  @Column('char', { name: 'TIPRESTRICAO2', nullable: true, length: 1 })
  tiprestricao2: string | null;
}
