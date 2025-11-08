import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFLTARE', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFLTARE', { schema: 'SANKHYA' })
export class TgfltareEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'NUMITEM', length: 2 })
  numitem: string;

  @Column('money', { name: 'BASE', default: () => '(0)' })
  base: number;

  @Column('float', { name: 'ALIQUOTA', precision: 53, default: () => '(0)' })
  aliquota: number;

  @Column('money', { name: 'VALOR', default: () => '(0)' })
  valor: number;

  @Column('money', { name: 'TARE', default: () => '(0)' })
  tare: number;

  @Column('money', { name: 'REDUCAO', default: () => '(0)' })
  reducao: number;

  @Column('float', { name: 'VLRCTB', precision: 53, default: () => '(0)' })
  vlrctb: number;
}
