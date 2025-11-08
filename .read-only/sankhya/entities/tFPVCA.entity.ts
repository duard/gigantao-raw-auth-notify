import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpbasEntity } from './tFPBAS.entity';

@Index('PK_TFPVCA', ['referencia', 'codemp', 'codfunc', 'tipfolha'], {
  unique: true,
})
@Index('TFPVCA_I01', ['codemp'], {})
@Entity('TFPVCA', { schema: 'SANKHYA' })
export class TfpvcaEntity {
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

  @Column('text', { name: 'VARIAVEIS', nullable: true })
  variaveis: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpvcas)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpvcas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @OneToOne(() => TfpbasEntity, (tfpbasEntity) => tfpbasEntity.tfpvca, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'TIPFOLHA', referencedColumnName: 'tipfolha' },
  ])
  tfpbas: TfpbasEntity;
}
