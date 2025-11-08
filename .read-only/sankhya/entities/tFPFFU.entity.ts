import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpfdpEntity } from './tFPFDP.entity';

@Index('PK_TFPFFU', ['nufdp', 'codemp', 'codfunc'], { unique: true })
@Entity('TFPFFU', { schema: 'SANKHYA' })
export class TfpffuEntity {
  @Column('int', { primary: true, name: 'NUFDP' })
  nufdp: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpffus)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpfdpEntity, (tfpfdpEntity) => tfpfdpEntity.tfpffus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFDP', referencedColumnName: 'nufdp' }])
  nufdp2: TfpfdpEntity;
}
