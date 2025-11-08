import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDFC130', ['codemp', 'dtref', 'regniv1', 'chave', 'registro'], {
  unique: true,
})
@Entity('TGFEFDFC130', { schema: 'SANKHYA' })
export class Tgfefdfc130Entity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGNIV1',
    length: 4,
    default: () => "'C001'",
  })
  regniv1: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C130'",
  })
  registro: string;

  @Column('float', { name: 'VL_SERV_NT', nullable: true, precision: 53 })
  vlServNt: number | null;

  @Column('float', { name: 'VL_BC_ISSQN', nullable: true, precision: 53 })
  vlBcIssqn: number | null;

  @Column('float', { name: 'VL_ISSQN', nullable: true, precision: 53 })
  vlIssqn: number | null;

  @Column('float', { name: 'VL_BC_IRRF', nullable: true, precision: 53 })
  vlBcIrrf: number | null;

  @Column('float', { name: 'VL_IRRF', nullable: true, precision: 53 })
  vlIrrf: number | null;

  @Column('float', { name: 'VL_BC_PREV', nullable: true, precision: 53 })
  vlBcPrev: number | null;

  @Column('float', { name: 'VL_PREV', nullable: true, precision: 53 })
  vlPrev: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
