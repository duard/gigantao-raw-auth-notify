import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFH001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDFH001', { schema: 'SANKHYA' })
export class Tgfefdfh001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'H001'",
  })
  registro: string;

  @Column('char', { name: 'IND_MOV', nullable: true, length: 1 })
  indMov: string | null;

  @Column('int', { name: 'QTD_LIN_H', nullable: true })
  qtdLinH: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
