import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFB440', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFB440', { schema: 'SANKHYA' })
export class Tgfefdfb440Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'B001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'B440'" })
  registro: string;

  @Column('int', { name: 'IND_OPER' })
  indOper: number;

  @Column('varchar', { name: 'COD_PART', nullable: true, length: 10 })
  codPart: string | null;

  @Column('float', { name: 'VL_CONT_RT', nullable: true, precision: 53 })
  vlContRt: number | null;

  @Column('float', { name: 'VL_BC_ISS_RT', nullable: true, precision: 53 })
  vlBcIssRt: number | null;

  @Column('float', { name: 'VL_ISS_RT', nullable: true, precision: 53 })
  vlIssRt: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
