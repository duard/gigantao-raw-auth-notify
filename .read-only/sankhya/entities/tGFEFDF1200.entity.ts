import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1200', ['codemp', 'dtref', 'regniv1', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDF1200', { schema: 'SANKHYA' })
export class Tgfefdf1200Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'1001'",
  })
  regniv1: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1200'" })
  registro: string;

  @Column('varchar', { name: 'COD_AJ_APUR', nullable: true, length: 8 })
  codAjApur: string | null;

  @Column('float', { name: 'SLD_CRED', nullable: true, precision: 53 })
  sldCred: number | null;

  @Column('float', { name: 'CRED_APR', nullable: true, precision: 53 })
  credApr: number | null;

  @Column('float', { name: 'CRED_RECEB', nullable: true, precision: 53 })
  credReceb: number | null;

  @Column('float', { name: 'CRED_UTIL', nullable: true, precision: 53 })
  credUtil: number | null;

  @Column('float', { name: 'SLD_CRED_FIM', nullable: true, precision: 53 })
  sldCredFim: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
