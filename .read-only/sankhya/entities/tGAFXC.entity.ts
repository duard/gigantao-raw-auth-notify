import { Column, Entity, Index } from 'typeorm';

@Index('PK__TGAFXC__DB05F69F94E32D55', ['nufxc'], { unique: true })
@Entity('TGAFXC', { schema: 'SANKHYA' })
export class TgafxcEntity {
  @Column('int', { primary: true, name: 'NUFXC' })
  nufxc: number;

  @Column('datetime', { name: 'DTFIXACAO', default: () => 'getdate()' })
  dtfixacao: Date;

  @Column('datetime', { name: 'DHMOV', default: () => 'getdate()' })
  dhmov: Date;

  @Column('int', { name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('float', { name: 'VLRCOTACAO', precision: 53 })
  vlrcotacao: number;

  @Column('float', { name: 'VLRABONO', precision: 53, default: () => '(0)' })
  vlrabono: number;

  @Column('float', { name: 'QTDFIXACAO', precision: 53 })
  qtdfixacao: number;

  @Column('float', { name: 'VLRFIXACAO', precision: 53 })
  vlrfixacao: number;

  @Column('int', { name: 'NUACERTO', nullable: true })
  nuacerto: number | null;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('int', { name: 'NUNOTADC', nullable: true })
  nunotadc: number | null;
}
