import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGWESTVAL',
  [
    'codemp',
    'codlocal',
    'controle',
    'codend',
    'codprod',
    'codvol',
    'codparc',
    'dtval',
  ],
  { unique: true },
)
@Entity('TGWESTVAL', { schema: 'SANKHYA' })
export class TgwestvalEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('varchar', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('float', {
    name: 'QUANTIDADEVOLPAD',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  quantidadevolpad: number | null;

  @Column('datetime', { primary: true, name: 'DTVAL' })
  dtval: Date;
}
