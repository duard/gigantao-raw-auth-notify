import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdrcstEntity } from './tGFDRCST.entity';

@Index(
  'PK_TGFDRCSTR9900',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'regblc'],
  { unique: true },
)
@Entity('TGFDRCSTR9900', { schema: 'SANKHYA' })
export class Tgfdrcstr9900Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'9900'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'REGBLC', length: 4 })
  regblc: string;

  @Column('int', { name: 'QTDREGBLC' })
  qtdregblc: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfdrcstEntity,
    (tgfdrcstEntity) => tgfdrcstEntity.tgfdrcstr9s2,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
  ])
  tgfdrcst: TgfdrcstEntity;
}
