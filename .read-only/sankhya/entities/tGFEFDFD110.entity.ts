import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFD110', ['codemp', 'dtref', 'regniv1', 'chave', 'numItem'], {
  unique: true,
})
@Entity('TGFEFDFD110', { schema: 'SANKHYA' })
export class Tgfefdfd110Entity {
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

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'D110'" })
  registro: string;

  @Column('int', { primary: true, name: 'NUM_ITEM' })
  numItem: number;

  @Column('varchar', { name: 'COD_ITEM', nullable: true, length: 60 })
  codItem: string | null;

  @Column('float', { name: 'VL_SERV', nullable: true, precision: 53 })
  vlServ: number | null;

  @Column('float', { name: 'VL_OUT', nullable: true, precision: 53 })
  vlOut: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
