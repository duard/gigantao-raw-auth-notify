import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpreqEntity } from './tFPREQ.entity';

@Index('PK_TFPFER', ['codemp', 'codfunc', 'dtiniaqui', 'sequencia'], {
  unique: true,
})
@Index('TFPFER_I01', ['codemp', 'codfunc', 'referencia'], {})
@Index('TFPFER_I02', ['codemp', 'codfunc', 'dtsaida'], {})
@Entity('TFPFER', { schema: 'SANKHYA' })
export class TfpferEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTINIAQUI' })
  dtiniaqui: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTFINAQUI' })
  dtfinaqui: Date;

  @Column('datetime', { name: 'DTPREVISTA', nullable: true })
  dtprevista: Date | null;

  @Column('datetime', { name: 'DTSAIDA', nullable: true })
  dtsaida: Date | null;

  @Column('smallint', { name: 'FALTPER', nullable: true })
  faltper: number | null;

  @Column('smallint', { name: 'ABONOPEC', nullable: true })
  abonopec: number | null;

  @Column('smallint', { name: 'NUMDIASFER', nullable: true })
  numdiasfer: number | null;

  @Column('char', {
    name: 'ADIANTA13SAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adianta13Sal: string | null;

  @Column('char', {
    name: 'ATUALFERGOZ',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  atualfergoz: string | null;

  @Column('char', {
    name: 'ABONOINICIO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  abonoinicio: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'QTDPARCELAS', default: () => '(0)' })
  qtdparcelas: number;

  @Column('smallint', {
    name: 'NUMDIASLICREM',
    nullable: true,
    default: () => '(0)',
  })
  numdiaslicrem: number | null;

  @Column('smallint', {
    name: 'NUMDIASFERCOL',
    nullable: true,
    default: () => '(0)',
  })
  numdiasfercol: number | null;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'S'" })
  digitado: string;

  @Column('char', { name: 'APROVADO', nullable: true, length: 1 })
  aprovado: string | null;

  @Column('smallint', { name: 'QTDDIASSOLFERIAS', nullable: true })
  qtddiassolferias: number | null;

  @Column('varchar', {
    name: 'MODIFPRE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  modifpre: string | null;

  @Column('varchar', {
    name: 'MODIFPERFER',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  modifperfer: string | null;

  @Column('datetime', { name: 'DTINTERROMPEFER', nullable: true })
  dtinterrompefer: Date | null;

  @Column('int', { name: 'NUOCORORIGQUITACAO', nullable: true })
  nuocororigquitacao: number | null;

  @Column('datetime', { name: 'DTLIMGOZFER', nullable: true })
  dtlimgozfer: Date | null;

  @Column('varchar', { name: 'PERQUITADO', nullable: true, length: 1 })
  perquitado: string | null;

  @Column('smallint', { name: 'CODFERVINC', nullable: true })
  codfervinc: number | null;

  @Column('float', { name: 'NUMDIASFERREAL', nullable: true, precision: 53 })
  numdiasferreal: number | null;

  @Column('float', { name: 'NUMDIASLICREMREAL', nullable: true, precision: 53 })
  numdiaslicremreal: number | null;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpfers, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUOCORLICGEST', referencedColumnName: 'nuocor' }])
  nuocorlicgest: TfpocoEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfers)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpreqEntity, (tfpreqEntity) => tfpreqEntity.ferias)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  req: TfpreqEntity;
}
