import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRSU', ['codsaz'], { unique: true })
@Entity('TGFRSU', { schema: 'SANKHYA' })
export class TgfrsuEntity {
  @Column('int', { primary: true, name: 'CODSAZ' })
  codsaz: number;

  @Column('int', { name: 'NUAGENDAMENTOID' })
  nuagendamentoid: number;

  @Column('datetime', { name: 'DTFIMPER', nullable: true })
  dtfimper: Date | null;

  @Column('datetime', { name: 'DTINIPER', nullable: true })
  dtiniper: Date | null;

  @Column('float', { name: 'QTDACRES', nullable: true, precision: 53 })
  qtdacres: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('varchar', { name: 'TIPOAGE', nullable: true, length: 3 })
  tipoage: string | null;
}
