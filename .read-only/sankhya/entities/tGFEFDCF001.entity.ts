import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDCF001', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDCF001', { schema: 'SANKHYA' })
export class Tgfefdcf001Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'F001'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_MOV', length: 1 })
  indMov: string;

  @Column('int', { name: 'QTD_LIN_F', nullable: true })
  qtdLinF: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('char', { name: 'OST_SEMDADOS', nullable: true, length: 1 })
  ostSemdados: string | null;
}
