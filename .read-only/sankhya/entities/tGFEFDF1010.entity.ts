import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFEFDF1010', ['codemp', 'dtref', 'regniv1', 'registro'], {
  unique: true,
})
@Entity('TGFEFDF1010', { schema: 'SANKHYA' })
export class Tgfefdf1010Entity {
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

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'1010'",
  })
  registro: string;

  @Column('varchar', { name: 'IND_EXP', length: 1, default: () => "'N'" })
  indExp: string;

  @Column('varchar', { name: 'IND_CCRF', length: 1, default: () => "'N'" })
  indCcrf: string;

  @Column('varchar', { name: 'IND_COMB', length: 1, default: () => "'N'" })
  indComb: string;

  @Column('varchar', { name: 'IND_USINA', length: 1, default: () => "'N'" })
  indUsina: string;

  @Column('varchar', { name: 'IND_VA', length: 1, default: () => "'N'" })
  indVa: string;

  @Column('varchar', { name: 'IND_EE', length: 1, default: () => "'N'" })
  indEe: string;

  @Column('varchar', { name: 'IND_CART', length: 1, default: () => "'N'" })
  indCart: string;

  @Column('varchar', { name: 'IND_FORM', length: 1, default: () => "'N'" })
  indForm: string;

  @Column('varchar', { name: 'IND_AER', length: 1, default: () => "'N'" })
  indAer: string;

  @Column('varchar', { name: 'IND_GIAF1', length: 1, default: () => "'N'" })
  indGiaf1: string;

  @Column('varchar', { name: 'IND_GIAF3', length: 1, default: () => "'N'" })
  indGiaf3: string;

  @Column('varchar', { name: 'IND_GIAF4', length: 1, default: () => "'N'" })
  indGiaf4: string;

  @Column('varchar', {
    name: 'IND_REST_RESSAR_COMPL_ICMS',
    length: 1,
    default: () => "'N'",
  })
  indRestRessarComplIcms: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
