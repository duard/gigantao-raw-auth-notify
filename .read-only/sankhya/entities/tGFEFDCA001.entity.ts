import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCA001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDCA001', { schema: 'SANKHYA' })
export class Tgfefdca001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'A001'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_MOV', length: 1 })
  indMov: string;

  @Column('int', { name: 'QTD_LIN_A', nullable: true })
  qtdLinA: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
