import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFESTBAR',
  ['codemp', 'codprod', 'codlocal', 'controle', 'codparc', 'tipo'],
  {
    unique: true,
  },
)
@Entity('TGFESTBAR', { schema: 'SANKHYA' })
export class TgfestbarEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('varchar', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'P'",
  })
  tipo: string;

  @Column('varchar', { name: 'CODBARRA', length: 25 })
  codbarra: string;
}
