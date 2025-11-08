import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TFPNEWMED',
  [
    'codemp',
    'codfunc',
    'referencia',
    'origem',
    'tipomedia',
    'melhor',
    'codevento',
    'sequencia',
    'categoria',
  ],
  { unique: true },
)
@Entity('TFPNEWMED', { schema: 'SANKHYA' })
export class TfpnewmedEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('varchar', { primary: true, name: 'TIPOMEDIA', length: 3 })
  tipomedia: string;

  @Column('float', {
    name: 'SALBASEMEDIA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  salbasemedia: number | null;

  @Column('float', {
    name: 'VLR01',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr01: number | null;

  @Column('float', {
    name: 'VLR02',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr02: number | null;

  @Column('float', {
    name: 'VLR03',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr03: number | null;

  @Column('float', {
    name: 'VLR04',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr04: number | null;

  @Column('float', {
    name: 'VLR05',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr05: number | null;

  @Column('float', {
    name: 'VLR06',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr06: number | null;

  @Column('float', {
    name: 'VLR07',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr07: number | null;

  @Column('float', {
    name: 'VLR08',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr08: number | null;

  @Column('float', {
    name: 'VLR09',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr09: number | null;

  @Column('float', {
    name: 'VLR10',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr10: number | null;

  @Column('float', {
    name: 'VLR11',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr11: number | null;

  @Column('float', {
    name: 'VLR12',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlr12: number | null;

  @Column('varchar', { name: 'MESANO01', nullable: true, length: 8 })
  mesano01: string | null;

  @Column('varchar', { name: 'MESANO02', nullable: true, length: 8 })
  mesano02: string | null;

  @Column('varchar', { name: 'MESANO03', nullable: true, length: 8 })
  mesano03: string | null;

  @Column('varchar', { name: 'MESANO04', nullable: true, length: 8 })
  mesano04: string | null;

  @Column('varchar', { name: 'MESANO05', nullable: true, length: 8 })
  mesano05: string | null;

  @Column('varchar', { name: 'MESANO06', nullable: true, length: 8 })
  mesano06: string | null;

  @Column('varchar', { name: 'MESANO07', nullable: true, length: 8 })
  mesano07: string | null;

  @Column('varchar', { name: 'MESANO08', nullable: true, length: 8 })
  mesano08: string | null;

  @Column('varchar', { name: 'MESANO09', nullable: true, length: 8 })
  mesano09: string | null;

  @Column('varchar', { name: 'MESANO10', nullable: true, length: 8 })
  mesano10: string | null;

  @Column('varchar', { name: 'MESANO11', nullable: true, length: 8 })
  mesano11: string | null;

  @Column('varchar', { name: 'MESANO12', nullable: true, length: 8 })
  mesano12: string | null;

  @Column('float', {
    name: 'IND01',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind01: number | null;

  @Column('float', {
    name: 'IND02',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind02: number | null;

  @Column('float', {
    name: 'IND03',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind03: number | null;

  @Column('float', {
    name: 'IND04',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind04: number | null;

  @Column('float', {
    name: 'IND05',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind05: number | null;

  @Column('float', {
    name: 'IND06',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind06: number | null;

  @Column('float', {
    name: 'IND07',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind07: number | null;

  @Column('float', {
    name: 'IND08',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind08: number | null;

  @Column('float', {
    name: 'IND09',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind09: number | null;

  @Column('float', {
    name: 'IND10',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind10: number | null;

  @Column('float', {
    name: 'IND11',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind11: number | null;

  @Column('float', {
    name: 'IND12',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  ind12: number | null;

  @Column('float', {
    name: 'TOTAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  total: number | null;

  @Column('float', {
    name: 'MEDIA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  media: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'DOISPERIODOS', length: 1, default: () => "'N'" })
  doisperiodos: string;

  @Column('char', {
    primary: true,
    name: 'MELHOR',
    length: 1,
    default: () => "'N'",
  })
  melhor: string;

  @Column('char', { name: 'REFLEXIVOS', nullable: true, length: 100 })
  reflexivos: string | null;

  @Column('datetime', { name: 'DTINIAQUISITIVO', nullable: true })
  dtiniaquisitivo: Date | null;

  @Column('datetime', { name: 'DTFIMAQUISITIVO', nullable: true })
  dtfimaquisitivo: Date | null;

  @Column('char', { name: 'TRESPERIODOS', length: 1, default: () => "'N'" })
  tresperiodos: string;

  @Column('varchar', { name: 'INPC', nullable: true, length: 400 })
  inpc: string | null;

  @Column('varchar', { name: 'IGPM', nullable: true, length: 400 })
  igpm: string | null;

  @Column('varchar', {
    name: 'MESPARTICIPA',
    nullable: true,
    length: 23,
    default: () => "'S,S,S,S,S,S,S,S,S,S,S,S'",
  })
  mesparticipa: string | null;

  @Column('varchar', { name: 'EHMEDIAESPECIAL', nullable: true, length: 1 })
  ehmediaespecial: string | null;

  @Column('int', { name: 'MESFERIAS', nullable: true })
  mesferias: number | null;

  @Column('varchar', {
    primary: true,
    name: 'CATEGORIA',
    length: 1,
    default: () => "'C'",
  })
  categoria: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpnewmeds)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpnewmeds)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento2: TfpeveEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpnewmeds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
