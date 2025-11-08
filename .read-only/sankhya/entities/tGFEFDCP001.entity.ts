import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCP001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDCP001', { schema: 'SANKHYA' })
export class Tgfefdcp001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'P001'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_MOV', length: 1 })
  indMov: string;

  @Column('int', { name: 'QTD_LIN_P', nullable: true })
  qtdLinP: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
