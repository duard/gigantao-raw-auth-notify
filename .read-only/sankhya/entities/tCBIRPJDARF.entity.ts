import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbirpjEntity } from './tCBIRPJ.entity';

@Index('PK_TCBIRPJDARF', ['codemp', 'referencia', 'codrec'], { unique: true })
@Entity('TCBIRPJDARF', { schema: 'SANKHYA' })
export class TcbirpjdarfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODREC' })
  codrec: number;

  @Column('datetime', { name: 'DTAPURACAO', nullable: true })
  dtapuracao: Date | null;

  @Column('datetime', { name: 'DTVENCIMENTO', nullable: true })
  dtvencimento: Date | null;

  @Column('datetime', { name: 'DTRECOLHIMENTO', nullable: true })
  dtrecolhimento: Date | null;

  @Column('float', { name: 'VLRPRINCIPAL', nullable: true, precision: 53 })
  vlrprincipal: number | null;

  @Column('float', { name: 'VLRMULTA', nullable: true, precision: 53 })
  vlrmulta: number | null;

  @Column('float', { name: 'VLRJUROS', nullable: true, precision: 53 })
  vlrjuros: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirpjdarves)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(
    () => TcbirpjEntity,
    (tcbirpjEntity) => tcbirpjEntity.tcbirpjdarves,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tcbirpj: TcbirpjEntity;
}
