import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFB001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDFB001', { schema: 'SANKHYA' })
export class Tgfefdfb001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'B001'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_DAD', nullable: true, length: 1 })
  indDad: string | null;

  @Column('int', { name: 'QTD_LIN_B', nullable: true })
  qtdLinB: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
