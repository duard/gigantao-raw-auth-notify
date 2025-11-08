import { Column, Entity, Index } from 'typeorm';

@Index('PK_TX1EST', ['codemp', 'codprod', 'codlocal', 'controle'], {
  unique: true,
})
@Index('TX1EST_I01', ['idproduto'], { unique: true })
@Entity('TX1EST', { schema: 'SANKHYA' })
export class Tx1EstEntity {
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

  @Column('float', { name: 'ESTOQUE', precision: 53 })
  estoque: number;

  @Column('int', { name: 'IDPRODUTO' })
  idproduto: number;
}
