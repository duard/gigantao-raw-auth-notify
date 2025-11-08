import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC9900', ['codemp', 'dtref', 'regniv1', 'regBlc'], {
  unique: true,
})
@Entity('TGFEFDC9900', { schema: 'SANKHYA' })
export class Tgfefdc9900Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'9001'",
  })
  regniv1: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'9900'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'REG_BLC', length: 4 })
  regBlc: string;

  @Column('int', { name: 'QTD_REG_BLC', nullable: true })
  qtdRegBlc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
