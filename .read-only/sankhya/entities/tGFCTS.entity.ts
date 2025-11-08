import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFCTS',
  ['dtcontagem', 'tipcontagem', 'codprod', 'serie', 'codemp', 'codlocal'],
  {
    unique: true,
  },
)
@Entity('TGFCTS', { schema: 'SANKHYA' })
export class TgfctsEntity {
  @Column('datetime', { primary: true, name: 'DTCONTAGEM' })
  dtcontagem: Date;

  @Column('varchar', {
    primary: true,
    name: 'TIPCONTAGEM',
    length: 1,
    default: () => "'C'",
  })
  tipcontagem: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'SERIE', length: 25 })
  serie: string;

  @Column('smallint', { name: 'ESTOQUE', default: () => '(1)' })
  estoque: number;
}
