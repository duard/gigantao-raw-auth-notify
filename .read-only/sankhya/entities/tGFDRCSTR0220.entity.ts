import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR0220',
  ['codemp', 'dtinicial', 'dtfinal', 'regpai', 'codprod', 'reg', 'undconv'],
  { unique: true },
)
@Entity('TGFDRCSTR0220', { schema: 'SANKHYA' })
export class Tgfdrcstr0220Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'0200'",
  })
  regpai: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'0220'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'UNDCONV', length: 6 })
  undconv: string;

  @Column('float', { name: 'FATCONV', precision: 53 })
  fatconv: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
