import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfphdeEntity } from './tFPHDE.entity';
import { TfpltrEntity } from './tFPLTR.entity';
import { TfpprtcEntity } from './tFPPRTC.entity';

@Index('PK_TFPFIS', ['codregfis'], { unique: true })
@Entity('TFPFIS', { schema: 'SANKHYA' })
export class TfpfisEntity {
  @Column('smallint', { primary: true, name: 'CODREGFIS' })
  codregfis: number;

  @Column('char', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('char', {
    name: 'CGCOUCEI',
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  cgcoucei: string | null;

  @Column('char', { name: 'CGC_CEI', nullable: true, length: 14 })
  cgcCei: string | null;

  @Column('int', { name: 'CODSAT', nullable: true })
  codsat: number | null;

  @Column('float', { name: 'PERCINSS', nullable: true, precision: 53 })
  percinss: number | null;

  @Column('int', { name: 'CODGRPS', nullable: true })
  codgrps: number | null;

  @Column('float', { name: 'TAXAGRPS', nullable: true, precision: 53 })
  taxagrps: number | null;

  @Column('float', { name: 'TAXASEG', nullable: true, precision: 53 })
  taxaseg: number | null;

  @Column('int', { name: 'ATIVIRF', nullable: true })
  ativirf: number | null;

  @Column('int', { name: 'ATIVIBGE', nullable: true })
  ativibge: number | null;

  @Column('int', { name: 'ATIVINSS', nullable: true })
  ativinss: number | null;

  @Column('float', { name: 'PERPAGTOFGTS', nullable: true, precision: 53 })
  perpagtofgts: number | null;

  @Column('int', { name: 'CODPAGGPS', default: () => '(0)' })
  codpaggps: number;

  @Column('float', { name: 'PERCISEFIL', nullable: true, precision: 53 })
  percisefil: number | null;

  @Column('char', { name: 'SIMPLES', length: 1, default: () => "'N'" })
  simples: string;

  @Column('smallint', { name: 'OPTSIMPLES', default: () => '(1)' })
  optsimples: number;

  @Column('float', {
    name: 'PERFGTSMENOR',
    precision: 53,
    default: () => '(0)',
  })
  perfgtsmenor: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'PERFGTRESCISAO', nullable: true, precision: 53 })
  perfgtrescisao: number | null;

  @Column('char', { name: 'CTAEVENTOS', nullable: true, length: 1 })
  ctaeventos: string | null;

  @Column('float', { name: 'RAT15', nullable: true, precision: 53 })
  rat15: number | null;

  @Column('float', { name: 'RAT20', nullable: true, precision: 53 })
  rat20: number | null;

  @Column('float', { name: 'RAT25', nullable: true, precision: 53 })
  rat25: number | null;

  @Column('float', { name: 'FATORFAP', nullable: true, precision: 53 })
  fatorfap: number | null;

  @Column('float', { name: 'PERENCGER', nullable: true, precision: 53 })
  perencger: number | null;

  @Column('float', { name: 'PERCRECBRUTAINSS', nullable: true, precision: 53 })
  percrecbrutainss: number | null;

  @Column('float', { name: 'VLRINSSRECBRUTA', nullable: true, precision: 53 })
  vlrinssrecbruta: number | null;

  @Column('int', { name: 'CODRECOLHIMENTO', nullable: true })
  codrecolhimento: number | null;

  @Column('float', { name: 'PERCINSSPATRONAL', nullable: true, precision: 53 })
  percinsspatronal: number | null;

  @Column('float', {
    name: 'PERCRECBRUTAINSS13',
    nullable: true,
    precision: 53,
  })
  percrecbrutainss13: number | null;

  @Column('float', { name: 'VLRINSSRECBRUTA13', nullable: true, precision: 53 })
  vlrinssrecbruta13: number | null;

  @Column('datetime', { name: 'DTENQUADRAMENTO', nullable: true })
  dtenquadramento: Date | null;

  @Column('char', { name: 'CALCINSSEMPFUNC', length: 1, default: () => "'N'" })
  calcinssempfunc: string;

  @Column('char', { name: 'CALCINSSEMPINDIV', length: 1, default: () => "'N'" })
  calcinssempindiv: string;

  @Column('char', { name: 'TPCAEPF', nullable: true, length: 1 })
  tpcaepf: string | null;

  @Column('smallint', { name: 'INDCONTSIMPLES', nullable: true })
  indcontsimples: number | null;

  @Column('smallint', { name: 'INDSUBSTPATR', nullable: true })
  indsubstpatr: number | null;

  @Column('float', { name: 'FATORMES', nullable: true, precision: 53 })
  fatormes: number | null;

  @Column('float', { name: 'FATOR13', nullable: true, precision: 53 })
  fator13: number | null;

  @Column('smallint', { name: 'ISSAUTONOMO', default: () => '(1)' })
  issautonomo: number;

  @Column('varchar', { name: 'AD_CEI', nullable: true, length: 12 })
  adCei: string | null;

  @Column('float', { name: 'PERFGTSCVA', nullable: true, precision: 53 })
  perfgtscva: number | null;

  @Column('char', {
    name: 'PROVISIONAREVENTOSMEDIA',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  provisionareventosmedia: string | null;

  @Column('char', {
    name: 'BAIXAFERIASANTECIPADAS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  baixaferiasantecipadas: string | null;

  @Column('int', { name: 'SALMINVIGE', nullable: true })
  salminvige: number | null;

  @Column('char', { name: 'ORDEMCOMPDARF', nullable: true, length: 5 })
  ordemcompdarf: string | null;

  @Column('char', {
    name: 'ISEMPRESACONTRIBUINTE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  isempresacontribuinte: string | null;

  @Column('float', { name: 'PERCPISFOLHA', nullable: true, precision: 53 })
  percpisfolha: number | null;

  @Column('int', { name: 'CODRECEITASOBFOLHA', nullable: true })
  codreceitasobfolha: number | null;

  @Column('varchar', { name: 'EMPCONTPIS', length: 1, default: () => "'N'" })
  empcontpis: string;

  @Column('int', { name: 'CODRECEITA', nullable: true, default: () => '(0)' })
  codreceita: number | null;

  @Column('datetime', { name: 'DTISENCAOLICMAT', nullable: true })
  dtisencaolicmat: Date | null;

  @Column('varchar', { name: 'CNPJRESP', nullable: true, length: 14 })
  cnpjresp: string | null;

  @Column('char', { name: 'OBRAPROPRIA', nullable: true, length: 1 })
  obrapropria: string | null;

  @OneToMany(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.codregfis)
  tfpdeps: TfpdepEntity[];

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codregfis)
  tfpemps: TfpempEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpfis)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfphdeEntity, (tfphdeEntity) => tfphdeEntity.codregfis)
  tfphdes: TfphdeEntity[];

  @OneToMany(() => TfpltrEntity, (tfpltrEntity) => tfpltrEntity.codregfis)
  tfpltrs: TfpltrEntity[];

  @OneToMany(() => TfpprtcEntity, (tfpprtcEntity) => tfpprtcEntity.codregfis2)
  tfpprtcs: TfpprtcEntity[];
}
