import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1400', ['codemp', 'dtref', 'regniv1', 'codItemIpm', 'mun'], {
  unique: true,
})
@Entity('TGFEFDF1400', { schema: 'SANKHYA' })
export class Tgfefdf1400Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'1400'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_ITEM_IPM', length: 60 })
  codItemIpm: string;

  @Column('int', { primary: true, name: 'MUN' })
  mun: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
