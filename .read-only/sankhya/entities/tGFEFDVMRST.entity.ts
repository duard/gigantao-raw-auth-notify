import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDVMRST', ['codemp', 'dtref'], { unique: true })
@Entity('TGFEFDVMRST', { schema: 'SANKHYA' })
export class TgfefdvmrstEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { name: 'USOU', length: 1 })
  usou: string;

  @Column('datetime', { name: 'DTFORMULA' })
  dtformula: Date;

  @Column('char', { name: 'TIPINVENT', nullable: true, length: 1 })
  tipinvent: string | null;
}
