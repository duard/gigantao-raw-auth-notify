import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TcbirpjEntity } from './tCBIRPJ.entity';

@Index('PK_TCBIRPJPCOMP', ['codemp', 'referencia', 'numperd'], { unique: true })
@Entity('TCBIRPJPCOMP', { schema: 'SANKHYA' })
export class TcbirpjpcompEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'NUMPERD', length: 100 })
  numperd: string;

  @Column('float', { name: 'VLRPERDCOMP', nullable: true, precision: 53 })
  vlrperdcomp: number | null;

  @Column('char', { name: 'TIPPERDCOMP', nullable: true, length: 1 })
  tipperdcomp: string | null;

  @Column('datetime', { name: 'REFORIGEM', nullable: true })
  reforigem: Date | null;

  @Column('int', { name: 'CODDARF', nullable: true })
  coddarf: number | null;

  @Column('char', { name: 'TIPOIMPOSTO', nullable: true, length: 1 })
  tipoimposto: string | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirpjpcomps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(
    () => TcbirpjEntity,
    (tcbirpjEntity) => tcbirpjEntity.tcbirpjpcomps,
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
