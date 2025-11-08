import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0600', ['codemp', 'dtref', 'regniv1', 'dtAlt', 'codCcus'], {
  unique: true,
})
@Entity('TGFEFDC0600', { schema: 'SANKHYA' })
export class Tgfefdc0600Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'0001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0600'" })
  registro: string;

  @Column('datetime', { primary: true, name: 'DT_ALT' })
  dtAlt: Date;

  @Column('varchar', { primary: true, name: 'COD_CCUS', length: 255 })
  codCcus: string;

  @Column('varchar', { name: 'CCUS', nullable: true, length: 60 })
  ccus: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
