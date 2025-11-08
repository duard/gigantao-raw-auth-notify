import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFAI', ['codtab', 'referencia', 'limfaixa', 'tipotab'], {
  unique: true,
})
@Index('TFPFAI_I01', ['referencia', 'codtab', 'tipotab'], {})
@Entity('TFPFAI', { schema: 'SANKHYA' })
export class TfpfaiEntity {
  @Column('smallint', { primary: true, name: 'CODTAB' })
  codtab: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('money', { primary: true, name: 'LIMFAIXA', default: () => '(0)' })
  limfaixa: number;

  @Column('varchar', {
    primary: true,
    name: 'TIPOTAB',
    length: 2,
    default: () => "' '",
  })
  tipotab: string;

  @Column('char', { name: 'DESCRTAB', length: 15 })
  descrtab: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'VALOR1', precision: 53 })
  valor1: number;

  @Column('float', { name: 'VALOR2', nullable: true, precision: 53 })
  valor2: number | null;

  @Column('float', { name: 'VALOR3', nullable: true, precision: 53 })
  valor3: number | null;

  @Column('float', { name: 'VALOR4', nullable: true, precision: 53 })
  valor4: number | null;

  @Column('float', { name: 'VALOR5', nullable: true, precision: 53 })
  valor5: number | null;

  @Column('float', { name: 'VALOR6', nullable: true, precision: 53 })
  valor6: number | null;

  @Column('float', { name: 'VALOR7', nullable: true, precision: 53 })
  valor7: number | null;

  @Column('float', { name: 'VALOR8', nullable: true, precision: 53 })
  valor8: number | null;

  @Column('float', { name: 'VALOR9', nullable: true, precision: 53 })
  valor9: number | null;

  @Column('float', { name: 'VALOR10', nullable: true, precision: 53 })
  valor10: number | null;

  @Column('float', { name: 'VALOR11', nullable: true, precision: 53 })
  valor11: number | null;

  @Column('char', { name: 'REFINSS', length: 1, default: () => "'N'" })
  refinss: string;
}
