import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFD530', ['codemp', 'dtref', 'regniv1', 'chave', 'sequencia'], {
  unique: true,
})
@Entity('TGFEFDFD530', { schema: 'SANKHYA' })
export class Tgfefdfd530Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'D001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D530'" })
  registro: string;

  @Column('varchar', { name: 'IND_SERV', length: 1 })
  indServ: string;

  @Column('datetime', { name: 'DT_FIN_SERV' })
  dtFinServ: Date;

  @Column('int', { name: 'PER_FISCAL', nullable: true })
  perFiscal: number | null;

  @Column('varchar', { name: 'COD_AREA', nullable: true, length: 4 })
  codArea: string | null;

  @Column('varchar', { name: 'TERMINAL', nullable: true, length: 200 })
  terminal: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('datetime', { name: 'DT_INI_SERV' })
  dtIniServ: Date;
}
