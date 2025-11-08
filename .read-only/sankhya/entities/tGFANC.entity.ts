import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGFANC',
  ['numcotacao', 'codprod', 'controle', 'codlocal', 'descricao'],
  {
    unique: true,
  },
)
@Entity('TGFANC', { schema: 'SANKHYA' })
export class TgfancEntity {
  @Column('int', { primary: true, name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('char', { primary: true, name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ARQUIVO', length: 250 })
  arquivo: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;
}
