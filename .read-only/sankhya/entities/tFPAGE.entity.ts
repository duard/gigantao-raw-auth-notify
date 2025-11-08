import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPAGE', ['codemp', 'codfunc', 'referencia', 'tipfolha'], {
  unique: true,
})
@Entity('TFPAGE', { schema: 'SANKHYA' })
export class TfpageEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'TIPFOLHA', length: 1 })
  tipfolha: string;

  @Column('image', { name: 'PARAMETROS' })
  parametros: Buffer;

  @Column('datetime', { name: 'DTAGEND' })
  dtagend: Date;

  @Column('datetime', { name: 'DTPRONTO' })
  dtpronto: Date;

  @Column('varchar', { name: 'CONCLUIDO', length: 1 })
  concluido: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpages)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpages)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpages)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
