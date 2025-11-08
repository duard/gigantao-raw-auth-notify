import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TGMMSG',
  [
    'dtref',
    'codemp',
    'codvend',
    'codprod',
    'codgrupoprod',
    'codlocal',
    'codproj',
    'codcencus',
    'codnat',
    'codreg',
    'codmeta',
    'controle',
    'codparc',
    'marca',
    'codger',
  ],
  { unique: true },
)
@Entity('TGMMSG', { schema: 'SANKHYA' })
export class TgmmsgEntity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(1)' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODVEND', default: () => '(0)' })
  codvend: number;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODGRUPOPROD', default: () => '(0)' })
  codgrupoprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('int', { primary: true, name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODREG', default: () => '(0)' })
  codreg: number;

  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('char', {
    primary: true,
    name: 'MARCA',
    length: 10,
    default: () => "' '",
  })
  marca: string;

  @Column('smallint', { primary: true, name: 'CODGER', default: () => '(0)' })
  codger: number;

  @Column('char', { name: 'TIPOMSG', length: 1, default: () => "'I'" })
  tipomsg: string;

  @Column('char', { name: 'PODESUPLEMENTAR', length: 1, default: () => "'N'" })
  podesuplementar: string;

  @Column('char', { name: 'PODEANTECIPAR', length: 1, default: () => "'N'" })
  podeantecipar: string;

  @Column('char', { name: 'PODETRANSFSALDO', length: 1, default: () => "'N'" })
  podetransfsaldo: string;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('float', { name: 'PERCAVISO', nullable: true, precision: 53 })
  percaviso: number | null;

  @Column('text', { name: 'MSGAVISO', nullable: true })
  msgaviso: string | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmmsgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
