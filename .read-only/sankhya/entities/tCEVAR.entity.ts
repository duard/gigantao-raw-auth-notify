import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TCEVAR',
  ['nunotaorig', 'sequenciaorig', 'nunotadest', 'sequenciadest', 'tipvinculo'],
  {
    unique: true,
  },
)
@Index('TCEVAR_I01', ['nunotaorig'], {})
@Entity('TCEVAR', { schema: 'SANKHYA' })
export class TcevarEntity {
  @Column('int', { primary: true, name: 'NUNOTAORIG' })
  nunotaorig: number;

  @Column('int', { primary: true, name: 'NUNOTADEST' })
  nunotadest: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIAORIG',
    default: () => '(0)',
  })
  sequenciaorig: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIADEST',
    default: () => '(0)',
  })
  sequenciadest: number;

  @Column('float', { name: 'QTDATENDIDA', precision: 53, default: () => '(0)' })
  qtdatendida: number;

  @Column('varchar', { name: 'TABORIG', length: 30, default: () => "'TCECAB'" })
  taborig: string;

  @Column('varchar', { name: 'TABDEST', length: 30, default: () => "'TGFCAB'" })
  tabdest: string;

  @Column('char', {
    primary: true,
    name: 'TIPVINCULO',
    length: 1,
    default: () => "'C'",
  })
  tipvinculo: string;
}
