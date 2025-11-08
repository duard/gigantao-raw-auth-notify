import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFB025', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFB025', { schema: 'SANKHYA' })
export class Tgfefdfb025Entity {
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

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'B025'" })
  registro: string;

  @Column('float', { name: 'VL_CONT_P', nullable: true, precision: 53 })
  vlContP: number | null;

  @Column('float', { name: 'VL_BC_ISS_P', nullable: true, precision: 53 })
  vlBcIssP: number | null;

  @Column('float', { name: 'ALIQ_ISS', precision: 53 })
  aliqIss: number;

  @Column('float', { name: 'VL_ISS_P', nullable: true, precision: 53 })
  vlIssP: number | null;

  @Column('float', { name: 'VL_ISNT_ISS_P', nullable: true, precision: 53 })
  vlIsntIssP: number | null;

  @Column('varchar', { name: 'COD_SERV', nullable: true, length: 4 })
  codServ: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
