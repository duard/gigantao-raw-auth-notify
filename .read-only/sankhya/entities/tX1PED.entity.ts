import { Column, Entity, Index } from 'typeorm';

@Index('PK_TX1PED', ['nunota', 'codemp', 'codprod', 'codlocal', 'controle'], {
  unique: true,
})
@Entity('TX1PED', { schema: 'SANKHYA' })
export class Tx1PedEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', { name: 'QTD', precision: 53 })
  qtd: number;

  @Column('float', { name: 'CORTE', precision: 53 })
  corte: number;

  @Column('float', { name: 'VLRTOT', precision: 53 })
  vlrtot: number;

  @Column('char', { name: 'TPATENDE', length: 1, default: () => "'P'" })
  tpatende: string;

  @Column('float', { name: 'QTDATEND', precision: 53, default: () => '(0)' })
  qtdatend: number;

  @Column('int', { name: 'IDPRODUTO' })
  idproduto: number;
}
