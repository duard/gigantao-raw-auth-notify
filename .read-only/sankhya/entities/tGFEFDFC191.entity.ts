import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC191',
  ['codemp', 'dtref', 'regniv1', 'chave', 'seqc190', 'registro'],
  {
    unique: true,
  },
)
@Entity('TGFEFDFC191', { schema: 'SANKHYA' })
export class Tgfefdfc191Entity {
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

  @Column('int', { primary: true, name: 'SEQC190' })
  seqc190: number;

  @Column('varchar', {
    primary: true,
    name: 'REGISTRO',
    length: 4,
    default: () => "'C191'",
  })
  registro: string;

  @Column('float', { name: 'VL_FCP_OP', nullable: true, precision: 53 })
  vlFcpOp: number | null;

  @Column('float', { name: 'VL_FCP_ST', nullable: true, precision: 53 })
  vlFcpSt: number | null;

  @Column('float', { name: 'VL_FCP_RET', nullable: true, precision: 53 })
  vlFcpRet: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
