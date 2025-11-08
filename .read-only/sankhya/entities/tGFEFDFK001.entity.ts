import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFK001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDFK001', { schema: 'SANKHYA' })
export class Tgfefdfk001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'K001'",
  })
  registro: string;

  @Column('char', { name: 'IND_MOV', nullable: true, length: 1 })
  indMov: string | null;

  @Column('int', { name: 'QTD_LIN_K', nullable: true })
  qtdLinK: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
