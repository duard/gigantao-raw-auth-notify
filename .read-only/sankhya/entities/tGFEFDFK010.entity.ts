import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFK010', ['codemp', 'dtref', 'regniv1', 'indtiplayout'], {
  unique: true,
})
@Entity('TGFEFDFK010', { schema: 'SANKHYA' })
export class Tgfefdfk010Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'K001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'K010'" })
  registro: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('char', {
    primary: true,
    name: 'INDTIPLAYOUT',
    length: 1,
    default: () => '(1)',
  })
  indtiplayout: string;
}
