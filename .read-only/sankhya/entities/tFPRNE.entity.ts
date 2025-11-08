import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpddeEntity } from './tFPDDE.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfppssEntity } from './tFPPSS.entity';

@Index('PK_TFPRNE', ['nurne'], { unique: true })
@Index(
  'TFPRNE_UNQ01',
  ['nuprocesso', 'codemp', 'codfunc', 'dtpagamento', 'indapuracao'],
  {
    unique: true,
  },
)
@Entity('TFPRNE', { schema: 'SANKHYA' })
export class TfprneEntity {
  @Column('smallint', { primary: true, name: 'NURNE' })
  nurne: number;

  @Column('int', { name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTPAGAMENTO' })
  dtpagamento: Date;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { name: 'INDAPURACAO', length: 1 })
  indapuracao: string;

  @Column('float', { name: 'VLRNAORETIDO', nullable: true, precision: 53 })
  vlrnaoretido: number | null;

  @Column('float', { name: 'VLRDEPJUD', nullable: true, precision: 53 })
  vlrdepjud: number | null;

  @Column('float', { name: 'VLRCMPANOCAL', nullable: true, precision: 53 })
  vlrcmpanocal: number | null;

  @Column('float', { name: 'VLRCMPANOANT', nullable: true, precision: 53 })
  vlrcmpanoant: number | null;

  @Column('float', { name: 'VLRRENDSUSP', nullable: true, precision: 53 })
  vlrrendsusp: number | null;

  @OneToMany(() => TfpddeEntity, (tfpddeEntity) => tfpddeEntity.nurne)
  tfpddes: TfpddeEntity[];

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfprnes)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfprnes)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso2: TfppssEntity;
}
