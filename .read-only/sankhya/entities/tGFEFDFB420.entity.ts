import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFB420', ['codemp', 'dtref', 'regniv1', 'chave'], {
  unique: true,
})
@Entity('TGFEFDFB420', { schema: 'SANKHYA' })
export class Tgfefdfb420Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'B420'" })
  registro: string;

  @Column('float', { name: 'VL_CONT', nullable: true, precision: 53 })
  vlCont: number | null;

  @Column('float', { name: 'VL_BC_ISS', nullable: true, precision: 53 })
  vlBcIss: number | null;

  @Column('float', { name: 'ALIQ_ISS', nullable: true, precision: 53 })
  aliqIss: number | null;

  @Column('float', { name: 'VL_ISNT_ISS', nullable: true, precision: 53 })
  vlIsntIss: number | null;

  @Column('float', { name: 'VL_ISS', nullable: true, precision: 53 })
  vlIss: number | null;

  @Column('varchar', { name: 'COD_SERV', length: 8 })
  codServ: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
