import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIRAV', ['nurespaviso'], { unique: true })
@Index('TSIRAV_I01', ['codusu'], {})
@Entity('TSIRAV', { schema: 'SANKHYA' })
export class TsiravEntity {
  @Column('int', { primary: true, name: 'NURESPAVISO' })
  nurespaviso: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('int', { name: 'NUAVISO' })
  nuaviso: number;
}
