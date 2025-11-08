import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCD001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDCD001', { schema: 'SANKHYA' })
export class Tgfefdcd001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'D001'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_MOV', length: 1 })
  indMov: string;

  @Column('int', { name: 'QTD_LIN_D', nullable: true })
  qtdLinD: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
