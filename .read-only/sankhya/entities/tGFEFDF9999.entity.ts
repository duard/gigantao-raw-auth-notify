import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF9999', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDF9999', { schema: 'SANKHYA' })
export class Tgfefdf9999Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'9999'",
  })
  registro: string;

  @Column('int', { name: 'QTD_LIN', nullable: true })
  qtdLin: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
