import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index(
  'PK_TFPACU',
  ['codemp', 'codfunc', 'codevento', 'tipevento', 'sequencia', 'ano'],
  {
    unique: true,
  },
)
@Entity('TFPACU', { schema: 'SANKHYA' })
export class TfpacuEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', { primary: true, name: 'TIPEVENTO' })
  tipevento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'ANO' })
  ano: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('money', { name: 'VLRJANEIRO', nullable: true })
  vlrjaneiro: number | null;

  @Column('money', { name: 'VLRFEVEREIRO', nullable: true })
  vlrfevereiro: number | null;

  @Column('money', { name: 'VLRMARCO', nullable: true })
  vlrmarco: number | null;

  @Column('money', { name: 'VLRABRIL', nullable: true })
  vlrabril: number | null;

  @Column('money', { name: 'VLRMAIO', nullable: true })
  vlrmaio: number | null;

  @Column('money', { name: 'VLRJUNHO', nullable: true })
  vlrjunho: number | null;

  @Column('money', { name: 'VLRJULHO', nullable: true })
  vlrjulho: number | null;

  @Column('money', { name: 'VLRAGOSTO', nullable: true })
  vlragosto: number | null;

  @Column('money', { name: 'VLRSETEMBRO', nullable: true })
  vlrsetembro: number | null;

  @Column('money', { name: 'VLROUTUBRO', nullable: true })
  vlroutubro: number | null;

  @Column('money', { name: 'VLRNOVEMBRO', nullable: true })
  vlrnovembro: number | null;

  @Column('money', { name: 'VLRDEZEMBRO', nullable: true })
  vlrdezembro: number | null;

  @Column('float', { name: 'INDJANEIRO', nullable: true, precision: 53 })
  indjaneiro: number | null;

  @Column('float', { name: 'INDFEVEREIRO', nullable: true, precision: 53 })
  indfevereiro: number | null;

  @Column('float', { name: 'INDMARCO', nullable: true, precision: 53 })
  indmarco: number | null;

  @Column('float', { name: 'INDABRIL', nullable: true, precision: 53 })
  indabril: number | null;

  @Column('float', { name: 'INDMAIO', nullable: true, precision: 53 })
  indmaio: number | null;

  @Column('float', { name: 'INDJUNHO', nullable: true, precision: 53 })
  indjunho: number | null;

  @Column('float', { name: 'INDJULHO', nullable: true, precision: 53 })
  indjulho: number | null;

  @Column('float', { name: 'INDAGOSTO', nullable: true, precision: 53 })
  indagosto: number | null;

  @Column('float', { name: 'INDSETEMBRO', nullable: true, precision: 53 })
  indsetembro: number | null;

  @Column('float', { name: 'INDOUTUBRO', nullable: true, precision: 53 })
  indoutubro: number | null;

  @Column('float', { name: 'INDNOVEMBRO', nullable: true, precision: 53 })
  indnovembro: number | null;

  @Column('float', { name: 'INDDEZEMBRO', nullable: true, precision: 53 })
  inddezembro: number | null;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpacus)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpacus)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpacus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpacus)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
