import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index(
  'PK_AUDITTFPBAS',
  ['referencia', 'codemp', 'codfunc', 'tipfolha', 'codusu', 'dhalter'],
  {
    unique: true,
  },
)
@Entity('AUDITTFPBAS', { schema: 'SANKHYA' })
export class AudittfpbasEntity {
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

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'F'" })
  tipo: string;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 120 })
  status: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('bigint', { name: 'ID' })
  id: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.audittfpbas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.audittfpbas)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.audittfpbas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
