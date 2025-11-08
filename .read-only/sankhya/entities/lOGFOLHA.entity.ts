import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpanaEntity } from './tFPANA.entity';

@Index('OPTIMIZE_LOGFOLHA', ['referencia', 'codemp', 'codfunc', 'tipfolha'], {})
@Index(
  'PK_LOGFOLHA',
  [
    'referencia',
    'tipfolha',
    'codemp',
    'codfunc',
    'coderro',
    'tiperro',
    'sequencia',
  ],
  { unique: true },
)
@Entity('LOGFOLHA', { schema: 'SANKHYA' })
export class LogfolhaEntity {
  @Column('datetime', { name: 'DTHR', default: () => 'getdate()' })
  dthr: Date;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('char', { primary: true, name: 'TIPFOLHA', length: 1 })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('text', { name: 'PROBLEMA', nullable: true })
  problema: string | null;

  @Column('int', { primary: true, name: 'CODERRO' })
  coderro: number;

  @Column('int', { primary: true, name: 'TIPERRO' })
  tiperro: number;

  @Column('text', { name: 'STRACE', nullable: true })
  strace: string | null;

  @Column('char', { name: 'DISMISS', nullable: true, length: 1 })
  dismiss: string | null;

  @Column('text', { name: 'PARAMS', nullable: true })
  params: string | null;

  @Column('int', { name: 'CODUSUDISMISS', nullable: true })
  codusudismiss: number | null;

  @Column('char', { name: 'TABELATESTE', length: 1, default: () => "'S'" })
  tabelateste: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @ManyToOne(() => TfpanaEntity, (tfpanaEntity) => tfpanaEntity.logfolhas)
  @JoinColumn([{ name: 'CODANA', referencedColumnName: 'codana' }])
  codana: TfpanaEntity;
}
