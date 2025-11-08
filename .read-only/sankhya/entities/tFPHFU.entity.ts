import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpsinEntity } from './tFPSIN.entity';
import { TfpcrrEntity } from './tFPCRR.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpcatEntity } from './tFPCAT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPHFU', ['codemp', 'codfunc', 'referencia'], { unique: true })
@Entity('TFPHFU', { schema: 'SANKHYA' })
export class TfphfuEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { name: 'TIPSAL', nullable: true, length: 1 })
  tipsal: string | null;

  @Column('float', { name: 'SALBASE', nullable: true, precision: 53 })
  salbase: number | null;

  @Column('float', { name: 'REMUMINIMA', nullable: true, precision: 53 })
  remuminima: number | null;

  @Column('varchar', { name: 'SITSIND', nullable: true, length: 1 })
  sitsind: string | null;

  @Column('float', { name: 'HORASSEM', nullable: true, precision: 53 })
  horassem: number | null;

  @Column('varchar', { name: 'CODADMFGTS', nullable: true, length: 2 })
  codadmfgts: string | null;

  @Column('varchar', { name: 'CODADMFGTSII', nullable: true, length: 2 })
  codadmfgtsii: string | null;

  @Column('varchar', { name: 'TRABOUTRAEMP', nullable: true, length: 1 })
  traboutraemp: string | null;

  @Column('varchar', { name: 'PARTPAT', nullable: true, length: 1 })
  partpat: string | null;

  @Column('int', { name: 'CODCBO', nullable: true })
  codcbo: number | null;

  @Column('smallint', { name: 'NIVESC', nullable: true })
  nivesc: number | null;

  @Column('smallint', { name: 'ESTADOCIVIL', nullable: true })
  estadocivil: number | null;

  @Column('smallint', { name: 'TIPDEFICIENCIA', nullable: true })
  tipdeficiencia: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('smallint', { name: 'VINCULO', nullable: true })
  vinculo: number | null;

  @Column('int', { name: 'CODGRUPOCTBZ', nullable: true })
  codgrupoctbz: number | null;

  @Column('float', { name: 'REMUNBASE', nullable: true, precision: 53 })
  remunbase: number | null;

  @Column('float', { name: 'SALPROFESSOR', nullable: true, precision: 53 })
  salprofessor: number | null;

  @Column('varchar', { name: 'OBJDET', nullable: true, length: 255 })
  objdet: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('numeric', {
    name: 'MATRICULA',
    nullable: true,
    precision: 12,
    scale: 0,
  })
  matricula: number | null;

  @Column('varchar', { name: 'CPFANT', nullable: true, length: 11 })
  cpfant: string | null;

  @Column('int', { name: 'MATRICANT', nullable: true })
  matricant: number | null;

  @Column('datetime', { name: 'DTALTCPF', nullable: true })
  dtaltcpf: Date | null;

  @Column('varchar', { name: 'OBSALTCPF', nullable: true, length: 255 })
  obsaltcpf: string | null;

  @Column('varchar', { name: 'MATRICULAOLD', nullable: true, length: 30 })
  matriculaold: string | null;

  @Column('char', { name: 'AFASTAMENTO', nullable: true, length: 1 })
  afastamento: string | null;

  @Column('int', { name: 'CODCATEGESOCIAL', nullable: true })
  codcategesocial: number | null;

  @Column('int', { name: 'CODLTR', nullable: true })
  codltr: number | null;

  @Column('char', {
    name: 'ADERIMP927',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  aderimp927: string | null;

  @Column('float', { name: 'HORASSEMCPU', nullable: true, precision: 53 })
  horassemcpu: number | null;

  @Column('float', { name: 'PERREDCPU', nullable: true, precision: 53 })
  perredcpu: number | null;

  @Column('char', { name: 'AJUDACOMP', nullable: true, length: 1 })
  ajudacomp: string | null;

  @Column('char', { name: 'SUSPCONTRATO', nullable: true, length: 1 })
  suspcontrato: string | null;

  @Column('varchar', { name: 'OBSERVACAOMP', nullable: true, length: 255 })
  observacaomp: string | null;

  @Column('int', { name: 'SEQCPU', nullable: true })
  seqcpu: number | null;

  @Column('datetime', { name: 'DTINICIORED', nullable: true })
  dtiniciored: Date | null;

  @Column('datetime', { name: 'DTFIMRED', nullable: true })
  dtfimred: Date | null;

  @Column('float', { name: 'SALBASERED', nullable: true, precision: 53 })
  salbasered: number | null;

  @Column('float', { name: 'HORASSEMRED', nullable: true, precision: 53 })
  horassemred: number | null;

  @Column('float', { name: 'SALBASECPU', nullable: true, precision: 53 })
  salbasecpu: number | null;

  @Column('smallint', { name: 'INDRETIFESOCIAL2206', nullable: true })
  indretifesocial2206: number | null;

  @Column('varchar', { name: 'DSCALT', nullable: true, length: 150 })
  dscalt: string | null;

  @Column('varchar', { name: 'TMPRESIDTRABESTRANG', nullable: true, length: 1 })
  tmpresidtrabestrang: string | null;

  @Column('varchar', { name: 'CONDINGESTRANG', nullable: true, length: 1 })
  condingestrang: string | null;

  @Column('float', { name: 'PERCINSAL', precision: 53, default: () => '(0)' })
  percinsal: number;

  @Column('float', { name: 'PERCPERIC', precision: 53, default: () => '(0)' })
  percperic: number;

  @Column('datetime', { name: 'DTESOCIAL2205', nullable: true })
  dtesocial2205: Date | null;

  @Column('datetime', { name: 'DTESOCIAL2206', nullable: true })
  dtesocial2206: Date | null;

  @Column('char', { name: 'APRENDCONTRIND', nullable: true, length: 1 })
  aprendcontrind: string | null;

  @Column('varchar', { name: 'CNPJPRAT', nullable: true, length: 14 })
  cnpjprat: string | null;

  @Column('varchar', { name: 'NRINSCAPREND', nullable: true, length: 14 })
  nrinscaprend: string | null;

  @Column('smallint', { name: 'TPINSCAPREND', nullable: true })
  tpinscaprend: number | null;

  @Column('varchar', { name: 'OBSVARIAVEL', nullable: true, length: 999 })
  obsvariavel: string | null;

  @Column('smallint', { name: 'REGIMEJOR', nullable: true })
  regimejor: number | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('varchar', { name: 'CNPJENTQUAL', nullable: true, length: 14 })
  cnpjentqual: string | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfphfus)
  @JoinColumn([{ name: 'CODCIDTRAB', referencedColumnName: 'codcid' }])
  codcidtrab: TsicidEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfphfus)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfphfus)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpsinEntity, (tfpsinEntity) => tfpsinEntity.tfphfus)
  @JoinColumn([{ name: 'CODSIND', referencedColumnName: 'codsind' }])
  codsind: TfpsinEntity;

  @ManyToOne(() => TfpcrrEntity, (tfpcrrEntity) => tfpcrrEntity.tfphfus)
  @JoinColumn([{ name: 'CODCARREIRA', referencedColumnName: 'codcarreira' }])
  codcarreira: TfpcrrEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfphfus)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfphfus)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfphfus)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo: TfpcarEntity;

  @ManyToOne(() => TfpcatEntity, (tfpcatEntity) => tfpcatEntity.tfphfus)
  @JoinColumn([{ name: 'CODCATEG', referencedColumnName: 'codcateg' }])
  codcateg: TfpcatEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphfus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
