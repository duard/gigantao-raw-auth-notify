import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgiastEntity } from './tGFGIAST.entity';

@Index(
  'PK_TGFGIASTA2',
  ['codemp', 'dtref', 'uf', 'reg', 'numnota', 'serienota'],
  { unique: true },
)
@Entity('TGFGIASTA2', { schema: 'SANKHYA' })
export class Tgfgiasta2Entity {
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
    default: () => "'A2'",
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

  @Column('varchar', { name: 'IE', length: 16 })
  ie: string;

  @Column('datetime', { name: 'DTEMISSAODOC' })
  dtemissaodoc: Date;

  @Column('float', {
    name: 'VLRICMSSTRES',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsstres: number;

  @ManyToOne(
    () => TgfgiastEntity,
    (tgfgiastEntity) => tgfgiastEntity.tgfgiastas3,
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
