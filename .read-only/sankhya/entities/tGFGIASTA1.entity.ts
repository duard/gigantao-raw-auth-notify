import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgiastEntity } from './tGFGIAST.entity';

@Index(
  'PK_TGFGIASTA1',
  ['codemp', 'dtref', 'uf', 'reg', 'numnota', 'serienota', 'ie'],
  {
    unique: true,
  },
)
@Entity('TGFGIASTA1', { schema: 'SANKHYA' })
export class Tgfgiasta1Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'UF', length: 2 })
  uf: string;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'A1'",
  })
  reg: string;

  @Column('int', { primary: true, name: 'NUMNOTA' })
  numnota: number;

  @Column('varchar', {
    primary: true,
    name: 'SERIENOTA',
    length: 3,
    default: () => "''",
  })
  serienota: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', {
    primary: true,
    name: 'IE',
    length: 16,
    default: () => "' '",
  })
  ie: string;

  @Column('datetime', { name: 'DTEMISSAODOC' })
  dtemissaodoc: Date;

  @Column('float', {
    name: 'VLRICMSSTDEV',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsstdev: number;

  @ManyToOne(
    () => TgfgiastEntity,
    (tgfgiastEntity) => tgfgiastEntity.tgfgiastas2,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'UF', referencedColumnName: 'uf' },
  ])
  tgfgiast: TgfgiastEntity;
}
