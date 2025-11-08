import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbirpjEntity } from './tCBIRPJ.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBIRPJEX', ['codemp', 'referencia', 'codctactb', 'tipoimposto'], {
  unique: true,
})
@Entity('TCBIRPJEX', { schema: 'SANKHYA' })
export class TcbirpjexEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('float', { name: 'VLRLANC', nullable: true, precision: 53 })
  vlrlanc: number | null;

  @Column('char', { primary: true, name: 'TIPOIMPOSTO', length: 1 })
  tipoimposto: string;

  @Column('char', { name: 'DIGITADO', nullable: true, length: 1 })
  digitado: string | null;

  @ManyToOne(
    () => TcbirpjEntity,
    (tcbirpjEntity) => tcbirpjEntity.tcbirpjexes,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tcbirpj: TcbirpjEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbirpjexes)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirpjexes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}
