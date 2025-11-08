import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfplinEntity } from './tFPLIN.entity';

@Index('PK_TFPVAL', ['codemp', 'codfunc', 'codlinha', 'referencia'], {
  unique: true,
})
@Index('TFPVAL_I01', ['tipo', 'codlinha'], {})
@Entity('TFPVAL', { schema: 'SANKHYA' })
export class TfpvalEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'CODLINHA' })
  codlinha: number;

  @Column('smallint', { name: 'PASSESDIA' })
  passesdia: number;

  @Column('float', { name: 'QTDDIAS', precision: 53 })
  qtddias: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'T'" })
  tipo: string;

  @Column('datetime', {
    primary: true,
    name: 'REFERENCIA',
    default: () => 'getdate()',
  })
  referencia: Date;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('char', { name: 'MANTEMPROXIMAREF', length: 1, default: () => "'S'" })
  mantemproximaref: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpvals)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpvals)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfplinEntity, (tfplinEntity) => tfplinEntity.tfpvals)
  @JoinColumn([{ name: 'CODLINHA', referencedColumnName: 'codlinha' }])
  codlinha2: TfplinEntity;
}
