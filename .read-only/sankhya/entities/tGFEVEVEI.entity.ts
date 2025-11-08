import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEVEVEI', ['codveiculo', 'dtref', 'codevento'], { unique: true })
@Entity('TGFEVEVEI', { schema: 'SANKHYA' })
export class TgfeveveiEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('money', { name: 'VALOR', nullable: true })
  valor: number | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;
}
