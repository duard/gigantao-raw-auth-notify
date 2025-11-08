import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgiastEntity } from './tGFGIAST.entity';

@Index('PK_TGFGIASTA3', ['codemp', 'dtref', 'uf', 'reg', 'ie'], {
  unique: true,
})
@Entity('TGFGIASTA3', { schema: 'SANKHYA' })
export class Tgfgiasta3Entity {
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
    default: () => "'A3'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'IE', length: 16 })
  ie: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', {
    name: 'VLRBASEICMSPROP',
    precision: 53,
    default: () => '(0)',
  })
  vlrbaseicmsprop: number;

  @Column('float', {
    name: 'VLRICMSPROPDEST',
    precision: 53,
    default: () => '(0)',
  })
  vlricmspropdest: number;

  @ManyToOne(
    () => TgfgiastEntity,
    (tgfgiastEntity) => tgfgiastEntity.tgfgiastas4,
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
