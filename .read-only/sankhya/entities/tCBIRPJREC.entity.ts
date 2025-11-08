import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbirpjEntity } from './tCBIRPJ.entity';

@Index('PK_TCBIRPJREC', ['codemp', 'referencia', 'mespagamento'], {
  unique: true,
})
@Entity('TCBIRPJREC', { schema: 'SANKHYA' })
export class TcbirpjrecEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { primary: true, name: 'MESPAGAMENTO' })
  mespagamento: Date;

  @Column('float', { name: 'VLRIMPOSTO', nullable: true, precision: 53 })
  vlrimposto: number | null;

  @Column('float', { name: 'VLRIMPOSTO_CSLL', nullable: true, precision: 53 })
  vlrimpostoCsll: number | null;

  @Column('char', { name: 'DIGITADO', nullable: true, length: 1 })
  digitado: string | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirpjrecs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(
    () => TcbirpjEntity,
    (tcbirpjEntity) => tcbirpjEntity.tcbirpjrecs,
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
