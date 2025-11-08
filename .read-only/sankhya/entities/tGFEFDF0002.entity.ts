import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF0002', ['codemp', 'dtref', 'regniv1', 'registro'], {
  unique: true,
})
@Entity('TGFEFDF0002', { schema: 'SANKHYA' })
export class Tgfefdf0002Entity {
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

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'0002'",
  })
  registro: string;

  @Column('int', { name: 'CLAS_ESTAB_IND', nullable: true })
  clasEstabInd: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
