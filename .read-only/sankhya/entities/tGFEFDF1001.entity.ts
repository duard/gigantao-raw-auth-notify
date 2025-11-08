import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDF1001', { schema: 'SANKHYA' })
export class Tgfefdf1001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'1001'",
  })
  registro: string;

  @Column('char', { name: 'IND_MOV', nullable: true, length: 1 })
  indMov: string | null;

  @Column('int', { name: 'QTD_LIN_1', nullable: true })
  qtdLin_1: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
