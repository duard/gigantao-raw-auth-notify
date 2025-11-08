import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TRSSUB', ['nurequisicao', 'codemp', 'codfunc'], { unique: true })
@Entity('TRSSUB', { schema: 'SANKHYA' })
export class TrssubEntity {
  @Column('int', { primary: true, name: 'NUREQUISICAO' })
  nurequisicao: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.trssubs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
