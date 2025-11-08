import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFDRCSTR0206',
  ['codemp', 'dtinicial', 'dtfinal', 'regpai', 'codprod', 'reg', 'codcomb'],
  { unique: true },
)
@Entity('TGFDRCSTR0206', { schema: 'SANKHYA' })
export class Tgfdrcstr0206Entity {
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
    default: () => "'0206'",
  })
  reg: string;

  @Column('int', { primary: true, name: 'CODCOMB' })
  codcomb: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
