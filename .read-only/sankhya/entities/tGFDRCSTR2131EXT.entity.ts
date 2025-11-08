import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDRCSR2131EXT', ['codemp', 'dtinicial', 'dtfinal'], {
  unique: true,
})
@Entity('TGFDRCSTR2131EXT', { schema: 'SANKHYA' })
export class Tgfdrcstr2131ExtEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;
}
