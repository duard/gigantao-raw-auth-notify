import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMEQH', ['numeq', 'dtinicio'], { unique: true })
@Entity('TGFMEQH', { schema: 'SANKHYA' })
export class TgfmeqhEntity {
  @Column('int', { primary: true, name: 'NUMEQ' })
  numeq: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('smallint', {
    name: 'CODCARGAHOR',
    nullable: true,
    default: () => '(0)',
  })
  codcargahor: number | null;
}
