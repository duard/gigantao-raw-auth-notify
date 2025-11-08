import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_AUDITTFPFOL',
  [
    'referencia',
    'codemp',
    'codfunc',
    'tipfolha',
    'codusu',
    'dhalter',
    'codevento',
    'sequencia',
    'tipevento',
  ],
  { unique: true },
)
@Entity('AUDITTFPFOL', { schema: 'SANKHYA' })
export class AudittfpfolEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('char', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'TIPEVENTO' })
  tipevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'VLRANT', nullable: true })
  vlrant: string | null;

  @Column('text', { name: 'VLRNOVO', nullable: true })
  vlrnovo: string | null;

  @Column('varchar', { name: 'CAMPO', length: 120 })
  campo: string;

  @Column('char', {
    name: 'TIPO',
    nullable: true,
    length: 1,
    default: () => "'E'",
  })
  tipo: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('bigint', { name: 'ID' })
  id: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.audittfpfols)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.audittfpfols)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.audittfpfols)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.audittfpfols)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
