import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcbirpjEntity } from './tCBIRPJ.entity';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBIRPJAD', ['codemp', 'referencia', 'codctactb', 'tipoimposto'], {
  unique: true,
})
@Entity('TCBIRPJAD', { schema: 'SANKHYA' })
export class TcbirpjadEntity {
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

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbirpjads)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TcbirpjEntity, (tcbirpjEntity) => tcbirpjEntity.tcbirpjads, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tcbirpj: TcbirpjEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirpjads)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}
