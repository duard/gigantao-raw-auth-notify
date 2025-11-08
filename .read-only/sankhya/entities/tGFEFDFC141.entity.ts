import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC141',
  ['codemp', 'dtref', 'regniv1', 'chave', 'regniv3', 'numParc'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC141', { schema: 'SANKHYA' })
export class Tgfefdfc141Entity {
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
    name: 'REGNIV3',
    length: 4,
    default: () => "'C140'",
  })
  regniv3: string;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C141'" })
  registro: string;

  @Column('int', { primary: true, name: 'NUM_PARC' })
  numParc: number;

  @Column('datetime', { name: 'DT_VCTO', nullable: true })
  dtVcto: Date | null;

  @Column('float', { name: 'VL_PARC', nullable: true, precision: 53 })
  vlParc: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
