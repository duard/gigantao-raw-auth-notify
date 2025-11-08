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

@Index('PK_TFPHTR', ['id'], { unique: true })
@Index('UX_TFPHTR_CODEMP_CODFUNC', ['codemp', 'codfunc'], { unique: true })
@Entity('TFPHTR', { schema: 'SANKHYA' })
export class TfphtrEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { name: 'AFASTFGTS', nullable: true, length: 3 })
  afastfgts: string | null;

  @Column('varchar', { name: 'AFASTRAIS', nullable: true, length: 2 })
  afastrais: string | null;

  @Column('varchar', { name: 'CAUSAAFAST', nullable: true, length: 2 })
  causaafast: string | null;

  @Column('varchar', { name: 'SITUACAO', length: 1 })
  situacao: string;

  @Column('smallint', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('int', { name: 'CODFUNCDEST' })
  codfuncdest: number;

  @Column('datetime', { name: 'DTTRANSFERENCIA', nullable: true })
  dttransferencia: Date | null;

  @OneToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfphtr)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfphtrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
