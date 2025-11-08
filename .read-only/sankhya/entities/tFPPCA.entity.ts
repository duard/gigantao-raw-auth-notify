import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsibaiEntity } from './tSIBAI.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TsiageEntity } from './tSIAGE.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsicidEntity } from './tSICID.entity';

@Index('PK_TFPPCA', ['nupadrao'], { unique: true })
@Entity('TFPPCA', { schema: 'SANKHYA' })
export class TfppcaEntity {
  @Column('int', { primary: true, name: 'NUPADRAO' })
  nupadrao: number;

  @Column('varchar', { name: 'DESCRPADRAO', length: 40 })
  descrpadrao: string;

  @Column('varchar', {
    name: 'SEXO',
    nullable: true,
    length: 1,
    default: () => "'M'",
  })
  sexo: string | null;

  @Column('smallint', { name: 'ESTADOCIVIL', nullable: true })
  estadocivil: number | null;

  @Column('smallint', { name: 'NIVESC', nullable: true })
  nivesc: number | null;

  @Column('smallint', { name: 'VINCULO', nullable: true })
  vinculo: number | null;

  @Column('varchar', {
    name: 'TIPTAB',
    nullable: true,
    length: 2,
    default: () => "'C'",
  })
  tiptab: string | null;

  @Column('float', { name: 'SALBASE', nullable: true, precision: 53 })
  salbase: number | null;

  @Column('int', { name: 'CODCARGO', nullable: true })
  codcargo: number | null;

  @Column('smallint', { name: 'CODCARGAHOR', nullable: true })
  codcargahor: number | null;

  @Column('float', { name: 'HORASSEM', nullable: true, precision: 53 })
  horassem: number | null;

  @Column('varchar', { name: 'CONVMED', length: 1, default: () => "'N'" })
  convmed: string;

  @Column('float', { name: 'PERCCONV', nullable: true, precision: 53 })
  percconv: number | null;

  @Column('varchar', { name: 'CODADMFGTS', nullable: true, length: 2 })
  codadmfgts: string | null;

  @Column('varchar', { name: 'CODADMFGTSII', nullable: true, length: 2 })
  codadmfgtsii: string | null;

  @Column('smallint', { name: 'CODCATEG', nullable: true })
  codcateg: number | null;

  @Column('smallint', { name: 'RACAFUNCIONARIO', default: () => '(2)' })
  racafuncionario: number;

  @Column('varchar', { name: 'PARTPAT', length: 1, default: () => "'2'" })
  partpat: string;

  @Column('float', {
    name: 'PERCADIANTAMENTO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  percadiantamento: number | null;

  @Column('smallint', { name: 'DIASEXPER1', nullable: true })
  diasexper1: number | null;

  @Column('smallint', { name: 'DIASEXPER2', nullable: true })
  diasexper2: number | null;

  @Column('float', {
    name: 'REMUMINIMA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  remuminima: number | null;

  @Column('smallint', { name: 'TIPDEFICIENCIA', default: () => '(0)' })
  tipdeficiencia: number;

  @Column('int', { name: 'CODCIDTRAB', nullable: true })
  codcidtrab: number | null;

  @Column('varchar', { name: 'SINDICALIZADO', length: 1, default: () => "'N'" })
  sindicalizado: string;

  @Column('smallint', { name: 'REGIME', nullable: true })
  regime: number | null;

  @Column('smallint', { name: 'NACIONALIDADE', nullable: true })
  nacionalidade: number | null;

  @Column('varchar', { name: 'TIPPONTO', length: 1, default: () => "'S'" })
  tipponto: string;

  @Column('smallint', {
    name: 'DIAAPURAPONTO',
    nullable: true,
    default: () => 'NULL',
  })
  diaapuraponto: number | null;

  @Column('float', { name: 'PERCINSAL', nullable: true, precision: 53 })
  percinsal: number | null;

  @Column('float', { name: 'PERCPERIC', nullable: true, precision: 53 })
  percperic: number | null;

  @Column('varchar', { name: 'TIPCONTA', nullable: true, length: 8 })
  tipconta: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'REGIMEJOR', nullable: true })
  regimejor: number | null;

  @Column('smallint', { name: 'OPTFGTS', nullable: true })
  optfgts: number | null;

  @Column('smallint', { name: 'REGIMETRAB', nullable: true })
  regimetrab: number | null;

  @Column('varchar', { name: 'SANKHYA', nullable: true, length: 1 })
  sankhya: string | null;

  @Column('char', { name: 'SITESOCIAL', nullable: true, length: 1 })
  sitesocial: string | null;

  @Column('char', { name: 'PROVISAOFERIAS', nullable: true, length: 1 })
  provisaoferias: string | null;

  @Column('char', { name: 'TIPRECEB', nullable: true, length: 1 })
  tipreceb: string | null;

  @Column('varchar', { name: 'TIPSAL', nullable: true, length: 1 })
  tipsal: string | null;

  @Column('smallint', { name: 'COMPSALARIO', nullable: true })
  compsalario: number | null;

  @Column('int', { name: 'CODCATEGESOCIAL', nullable: true })
  codcategesocial: number | null;

  @Column('float', { name: 'REMUNBASE', nullable: true, precision: 53 })
  remunbase: number | null;

  @Column('char', { name: 'PROVISAO13', nullable: true, length: 1 })
  provisao13: string | null;

  @Column('smallint', { name: 'INDADMISSAO', nullable: true })
  indadmissao: number | null;

  @Column('smallint', { name: 'DIASFERIAS', nullable: true })
  diasferias: number | null;

  @Column('varchar', { name: 'TIPOCAD', nullable: true, length: 1 })
  tipocad: string | null;

  @Column('int', { name: 'CODLOCALPONTO', nullable: true })
  codlocalponto: number | null;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tfppcas)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfppcas)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfppcas)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;

  @ManyToOne(() => TsiageEntity, (tsiageEntity) => tsiageEntity.tfppcas)
  @JoinColumn([
    { name: 'CODAGE', referencedColumnName: 'codage' },
    { name: 'CODBCO', referencedColumnName: 'codbco' },
  ])
  tsiage: TsiageEntity;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tfppcas)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind: TfpsinEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppcas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfppcas)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;
}
