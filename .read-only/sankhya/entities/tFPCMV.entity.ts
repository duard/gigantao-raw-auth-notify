import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpcbeEntity } from './tFPCBE.entity';

@Index('PK_TFPCMV', ['codcmv'], { unique: true })
@Entity('TFPCMV', { schema: 'SANKHYA' })
export class TfpcmvEntity {
  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRBEN', nullable: true, precision: 53 })
  vlrben: number | null;

  @Column('float', { name: 'VLREMP', nullable: true, precision: 53 })
  vlremp: number | null;

  @Column('int', { primary: true, name: 'CODCMV' })
  codcmv: number;

  @Column('char', {
    name: 'MANUAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  manual: string | null;

  @Column('int', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;

  @Column('float', { name: 'VLREXTRAEMP', nullable: true, precision: 53 })
  vlrextraemp: number | null;

  @Column('float', { name: 'VLREXTRABEN', nullable: true, precision: 53 })
  vlrextraben: number | null;

  @Column('int', { name: 'QTDITE', nullable: true })
  qtdite: number | null;

  @Column('float', { name: 'INDBEN', nullable: true, precision: 53 })
  indben: number | null;

  @Column('float', { name: 'INDEMP', nullable: true, precision: 53 })
  indemp: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpcmvs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpcbeEntity, (tfpcbeEntity) => tfpcbeEntity.tfpcmvs)
  @JoinColumn([{ name: 'CODCBE', referencedColumnName: 'codcbe' }])
  codcbe: TfpcbeEntity;
}
