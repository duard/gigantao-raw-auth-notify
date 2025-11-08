import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFDRCSTQTDESTINS', ['codemp', 'dtinicial', 'dtfinal', 'codprod'], {
  unique: true,
})
@Entity('TGFDRCSTQTDESTINS', { schema: 'SANKHYA' })
export class TgfdrcstqtdestinsEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', {
    name: 'QTDNESC',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdnesc: number | null;

  @Column('float', {
    name: 'QTDGER',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdger: number | null;
}
