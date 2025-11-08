import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPCHQ', ['codemp', 'codfunc', 'numcheq'], { unique: true })
@Entity('TFPCHQ', { schema: 'SANKHYA' })
export class TfpchqEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'NUMCHEQ' })
  numcheq: number;

  @Column('money', { name: 'VLRCHEQ' })
  vlrcheq: number;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpchqs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tfpchqs)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpchqs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
