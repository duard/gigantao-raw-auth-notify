import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index(
  'PK_AUDITTFPAGE',
  ['referencia', 'codemp', 'codfunc', 'tipfolha', 'codusu', 'dhalter'],
  {
    unique: true,
  },
)
@Entity('AUDITTFPAGE', { schema: 'SANKHYA' })
export class AudittfpageEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'N'",
  })
  tipfolha: string;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'VLRANT', length: 2048 })
  vlrant: string;

  @Column('varchar', { name: 'VLRNOVO', length: 2048 })
  vlrnovo: string;

  @Column('varchar', { name: 'CAMPO', length: 120 })
  campo: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.audittfpages)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.audittfpages)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.audittfpages)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
