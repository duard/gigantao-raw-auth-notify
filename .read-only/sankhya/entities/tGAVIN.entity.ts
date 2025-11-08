import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGAVIN', ['nunota'], { unique: true })
@Index('TGAVIN_I01', ['numcontrato'], {})
@Entity('TGAVIN', { schema: 'SANKHYA' })
export class TgavinEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'QTDVINCULO', precision: 53, default: () => '(0)' })
  qtdvinculo: number;

  @Column('smallint', { name: 'ATUALEST', default: () => '(1)' })
  atualest: number;

  @Column('int', { name: 'NUMCONTRATO', default: () => '(0)' })
  numcontrato: number;
}
