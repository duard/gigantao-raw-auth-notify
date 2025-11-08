import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC178',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc170', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC178', { schema: 'SANKHYA' })
export class Tgfefdfc178Entity {
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

  @Column('int', { primary: true, name: 'SEQC170' })
  seqc170: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C178'",
  })
  registro: string;

  @Column('varchar', { name: 'CL_ENQ', nullable: true, length: 5 })
  clEnq: string | null;

  @Column('float', { name: 'VL_UNID', nullable: true, precision: 53 })
  vlUnid: number | null;

  @Column('float', { name: 'QUANT_PAD', nullable: true, precision: 53 })
  quantPad: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
