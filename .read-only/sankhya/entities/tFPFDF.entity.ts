import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfdsEntity } from './tFPFDS.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPFDF', ['nuferiado', 'codemp', 'codfunc'], { unique: true })
@Entity('TFPFDF', { schema: 'SANKHYA' })
export class TfpfdfEntity {
  @Column('int', { primary: true, name: 'NUFERIADO' })
  nuferiado: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @ManyToOne(() => TfpfdsEntity, (tfpfdsEntity) => tfpfdsEntity.tfpfdfs)
  @JoinColumn([{ name: 'NUFERIADO', referencedColumnName: 'nuferiado' }])
  nuferiado2: TfpfdsEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfdfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
