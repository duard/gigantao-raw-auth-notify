import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFEFDFC310',
  ['codemp', 'dtref', 'regniv1', 'seqc300', 'sequencia'],
  { unique: true },
)
@Entity('TGFEFDFC310', { schema: 'SANKHYA' })
export class Tgfefdfc310Entity {
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

  @Column('int', { primary: true, name: 'SEQC300' })
  seqc300: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'REGISTRO', length: 4, default: () => "'C310'" })
  registro: string;

  @Column('varchar', { name: 'NUM_DOC_CANC', length: 10 })
  numDocCanc: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;
}
