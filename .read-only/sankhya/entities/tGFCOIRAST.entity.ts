import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCOIRAST', ['codemp', 'tipmov'], { unique: true })
@Entity('TGFCOIRAST', { schema: 'SANKHYA' })
export class TgfcoirastEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('varchar', {
    name: 'OPERPROPRIA',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  operpropria: string | null;

  @Column('varchar', {
    name: 'OPERANT',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  operant: string | null;
}
