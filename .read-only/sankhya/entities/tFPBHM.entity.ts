import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index(
  'PK_TFPBHM',
  ['codemp', 'codfunc', 'referencia', 'sequencia', 'autorizado'],
  {
    unique: true,
  },
)
@Entity('TFPBHM', { schema: 'SANKHYA' })
export class TfpbhmEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'HORAS' })
  horas: number;

  @Column('int', { name: 'MINUTOS', nullable: true })
  minutos: number | null;

  @Column('smallint', { name: 'CREDDEBBCH', nullable: true })
  creddebbch: number | null;

  @Column('float', { name: 'PERCACRESCBH', nullable: true, precision: 53 })
  percacrescbh: number | null;

  @Column('smallint', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;

  @Column('varchar', {
    primary: true,
    name: 'AUTORIZADO',
    length: 1,
    default: () => "'N'",
  })
  autorizado: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpbhms)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
