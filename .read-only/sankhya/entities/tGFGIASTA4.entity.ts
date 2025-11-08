import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfgiastEntity } from './tGFGIAST.entity';

@Index('PK_TGFGIASTA4', ['codemp', 'dtref', 'uf', 'reg', 'dtvenc'], {
  unique: true,
})
@Entity('TGFGIASTA4', { schema: 'SANKHYA' })
export class Tgfgiasta4Entity {
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
    default: () => "'A4'",
  })
  reg: string;

  @Column('datetime', { primary: true, name: 'DTVENC' })
  dtvenc: Date;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('float', {
    name: 'VLRICMSSTUFDEST',
    precision: 53,
    default: () => '(0)',
  })
  vlricmsstufdest: number;

  @Column('float', { name: 'VLRICMSFCP', precision: 53, default: () => '(0)' })
  vlricmsfcp: number;

  @ManyToOne(
    () => TgfgiastEntity,
    (tgfgiastEntity) => tgfgiastEntity.tgfgiastas5,
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
