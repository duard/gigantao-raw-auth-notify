import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPERRFER', ['codemp', 'codfunc'], { unique: true })
@Entity('TFPERRFER', { schema: 'SANKHYA' })
export class TfperrferEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { name: 'ERRO', nullable: true, length: 3103 })
  erro: string | null;

  @Column('datetime', {
    name: 'DTCRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dtcriacao: Date | null;

  @OneToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfperrfer)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
