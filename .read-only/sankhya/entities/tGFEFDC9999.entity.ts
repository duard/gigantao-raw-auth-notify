import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC9999', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDC9999', { schema: 'SANKHYA' })
export class Tgfefdc9999Entity {
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

  @Column('int', { name: 'QTD_LIN' })
  qtdLin: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
