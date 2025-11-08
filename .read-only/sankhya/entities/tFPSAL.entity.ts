import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index(
  'PK_TFPSAL',
  ['referencia', 'codemp', 'codfunc', 'codctactb', 'codcencus', 'codproj'],
  {
    unique: true,
  },
)
@Entity('TFPSAL', { schema: 'SANKHYA' })
export class TfpsalEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'CODCTACTB' })
  codctactb: number;

  @Column('money', { name: 'CREDITO', nullable: true })
  credito: number | null;

  @Column('money', { name: 'DEBITO', nullable: true })
  debito: number | null;

  @Column('money', { name: 'SALDO', nullable: true })
  saldo: number | null;

  @Column('float', { name: 'BAIXA', nullable: true, precision: 53 })
  baixa: number | null;

  @Column('float', { name: 'VLRBASE', nullable: true, precision: 53 })
  vlrbase: number | null;

  @Column('float', { name: 'VLRPARCELA', nullable: true, precision: 53 })
  vlrparcela: number | null;

  @Column('smallint', { name: 'MESDIREITO', nullable: true })
  mesdireito: number | null;

  @Column('float', { name: 'DIASFERIAS', nullable: true, precision: 53 })
  diasferias: number | null;

  @Column('float', { name: 'VLRMEDIA', nullable: true, precision: 53 })
  vlrmedia: number | null;

  @Column('float', { name: 'VLRINCORPORACAO', nullable: true, precision: 53 })
  vlrincorporacao: number | null;

  @Column('float', { name: 'VLRSALARIO', nullable: true, precision: 53 })
  vlrsalario: number | null;

  @Column('char', { name: 'TIPPROVISAO', nullable: true, length: 1 })
  tipprovisao: string | null;

  @Column('int', { primary: true, name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('float', { name: 'SALDOMP927', nullable: true, precision: 53 })
  saldomp927: number | null;

  @Column('smallint', { name: 'NUMLOTE', nullable: true })
  numlote: number | null;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpsals)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpsals)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
