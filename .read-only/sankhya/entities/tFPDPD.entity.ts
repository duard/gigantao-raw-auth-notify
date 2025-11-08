import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpdbeEntity } from './tFPDBE.entity';
import { TfpfbeEntity } from './tFPFBE.entity';
import { TsicidEntity } from './tSICID.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphdpEntity } from './tFPHDP.entity';
import { TfpincEntity } from './tFPINC.entity';

@Index('PK_TFPDPD', ['codemp', 'codfunc', 'sequencia'], { unique: true })
@Index('TFPDPD_I01', ['codfuncpens'], {})
@Entity('TFPDPD', { schema: 'SANKHYA' })
export class TfpdpdEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'NOMEDEPEND', length: 70 })
  nomedepend: string;

  @Column('smallint', { name: 'GRAUPARENTESCO' })
  grauparentesco: number;

  @Column('char', { name: 'DEPENDIRF', length: 1, default: () => "'N'" })
  dependirf: string;

  @Column('char', { name: 'SALFAM', length: 1, default: () => "'N'" })
  salfam: string;

  @Column('char', { name: 'PENSIONISTA', length: 1, default: () => "'N'" })
  pensionista: string;

  @Column('datetime', { name: 'DTNASC' })
  dtnasc: Date;

  @Column('smallint', { name: 'MESDIA', nullable: true })
  mesdia: number | null;

  @Column('datetime', { name: 'DTLIMIRF', nullable: true })
  dtlimirf: Date | null;

  @Column('datetime', { name: 'DTLIMSALFAM', nullable: true })
  dtlimsalfam: Date | null;

  @Column('float', { name: 'PERCPENSAO', nullable: true, precision: 53 })
  percpensao: number | null;

  @Column('int', { name: 'CODFUNCPENS', nullable: true })
  codfuncpens: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'CARTORIO', nullable: true, length: 50 })
  cartorio: string | null;

  @Column('char', { name: 'NROLIVROREG', nullable: true, length: 10 })
  nrolivroreg: string | null;

  @Column('smallint', { name: 'NROFOLHAREG', nullable: true })
  nrofolhareg: number | null;

  @Column('char', { name: 'SEMATESTADO', length: 1, default: () => "'N'" })
  sematestado: string;

  @Column('char', { name: 'CONVENIO', length: 1, default: () => "'N'" })
  convenio: string;

  @Column('varchar', { name: 'IDADEESCOLAR', length: 1, default: () => "'N'" })
  idadeescolar: string;

  @Column('varchar', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('varchar', { name: 'NOMEMAE', nullable: true, length: 100 })
  nomemae: string | null;

  @Column('datetime', { name: 'DTINICDEPEND', nullable: true })
  dtinicdepend: Date | null;

  @Column('smallint', { name: 'MOTIVOINICIO', nullable: true })
  motivoinicio: number | null;

  @Column('smallint', { name: 'MOTIVOFIM', nullable: true })
  motivofim: number | null;

  @Column('datetime', { name: 'DTFIMDEPEND', nullable: true })
  dtfimdepend: Date | null;

  @Column('varchar', { name: 'NROREG', nullable: true, length: 50 })
  nroreg: string | null;

  @Column('float', { name: 'PERCHOMOLOGNET', nullable: true, precision: 53 })
  perchomolognet: number | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('float', { name: 'PERCHNETFGTS', nullable: true, precision: 53 })
  perchnetfgts: number | null;

  @Column('char', { name: 'ADOTIVO', length: 1, default: () => "'N'" })
  adotivo: string;

  @Column('float', { name: 'VLRPENSAO', nullable: true, precision: 53 })
  vlrpensao: number | null;

  @Column('char', { name: 'DEPRPPS', length: 1, default: () => "'N'" })
  deprpps: string;

  @Column('char', { name: 'INCTRAB', length: 1, default: () => "'N'" })
  inctrab: string;

  @Column('varchar', { name: 'DNV', nullable: true, length: 11 })
  dnv: string | null;

  @Column('char', {
    name: 'REPSALPENSIONISTA',
    length: 1,
    default: () => "'N'",
  })
  repsalpensionista: string;

  @Column('float', {
    name: 'PERCREPASSEPENSIONISTA',
    nullable: true,
    precision: 53,
  })
  percrepassepensionista: number | null;

  @Column('smallint', { name: 'NACIONALIDADE', nullable: true })
  nacionalidade: number | null;

  @Column('varchar', { name: 'OBSDEFICIENCIA', nullable: true, length: 250 })
  obsdeficiencia: string | null;

  @Column('datetime', { name: 'DTLIMAUXCRE', nullable: true })
  dtlimauxcre: Date | null;

  @Column('char', { name: 'AUXCRE', length: 1, default: () => "'N'" })
  auxcre: string;

  @Column('char', { name: 'SEMATESTCRECHE', length: 1, default: () => "'N'" })
  sematestcreche: string;

  @Column('char', { name: 'TIPOPENSAO', nullable: true, length: 1 })
  tipopensao: string | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODEVEDESCM', nullable: true })
  codevedescm: number | null;

  @Column('int', { name: 'CODEVEDESCD', nullable: true })
  codevedescd: number | null;

  @Column('int', { name: 'CODEVEDESCF', nullable: true })
  codevedescf: number | null;

  @Column('int', { name: 'CODEVEDESCI', nullable: true })
  codevedesci: number | null;

  @Column('int', { name: 'CODEVEDESCU', nullable: true })
  codevedescu: number | null;

  @Column('smallint', {
    name: 'RACAETNIA',
    nullable: true,
    default: () => '(60)',
  })
  racaetnia: number | null;

  @Column('varchar', { name: 'DESCRDPD', nullable: true, length: 99 })
  descrdpd: string | null;

  @Column('float', { name: 'VLRPENSAOFGTS', nullable: true, precision: 53 })
  vlrpensaofgts: number | null;

  @Column('datetime', { name: 'DTALTESOCIAL', nullable: true })
  dtaltesocial: Date | null;

  @OneToMany(() => TfpdbeEntity, (tfpdbeEntity) => tfpdbeEntity.tfpdpd)
  tfpdbes: TfpdbeEntity[];

  @ManyToMany(() => TfpfbeEntity, (tfpfbeEntity) => tfpfbeEntity.tfpdpds)
  tfpfbes: TfpfbeEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfpdpds)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpdpds)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @OneToMany(() => TfphdpEntity, (tfphdpEntity) => tfphdpEntity.tfpdpd)
  tfphdps: TfphdpEntity[];

  @OneToMany(() => TfpincEntity, (tfpincEntity) => tfpincEntity.tfpdpd)
  tfpincs: TfpincEntity[];
}
