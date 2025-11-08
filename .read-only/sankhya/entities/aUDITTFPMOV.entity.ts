import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index(
  'PK_AUDITTFPMOV',
  [
    'referencia',
    'codemp',
    'codfunc',
    'tipmov',
    'codevento',
    'sequencia',
    'tipfolha',
    'codusu',
    'dhalter',
  ],
  { unique: true },
)
@Entity('AUDITTFPMOV', { schema: 'SANKHYA' })
export class AudittfpmovEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('char', { primary: true, name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'VLRANT', nullable: true })
  vlrant: string | null;

  @Column('text', { name: 'VLRNOVO', nullable: true })
  vlrnovo: string | null;

  @Column('varchar', { name: 'CAMPO', nullable: true, length: 120 })
  campo: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 120 })
  status: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('bigint', { name: 'ID' })
  id: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.audittfpmovs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.audittfpmovs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
