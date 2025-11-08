import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDC0035', ['codemp', 'dtref', 'regniv1', 'codScp'], {
  unique: true,
})
@Entity('TGFEFDC0035', { schema: 'SANKHYA' })
export class Tgfefdc0035Entity {
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

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'0035'" })
  registro: string;

  @Column('varchar', { primary: true, name: 'COD_SCP', length: 14 })
  codScp: string;

  @Column('varchar', { name: 'DESC_SCP', nullable: true, length: 40 })
  descScp: string | null;

  @Column('varchar', { name: 'INF_COMP', nullable: true, length: 40 })
  infComp: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
