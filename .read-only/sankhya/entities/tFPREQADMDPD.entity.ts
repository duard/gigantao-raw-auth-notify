import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPREQADMDPD', ['idreqadm', 'sequencia'], { unique: true })
@Entity('TFPREQADMDPD', { schema: 'SANKHYA' })
export class TfpreqadmdpdEntity {
  @Column('int', { primary: true, name: 'IDREQADM' })
  idreqadm: number;

  @Column('varchar', { name: 'CPFFUNCRESPONSAVEL', length: 11 })
  cpffuncresponsavel: string;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('smallint', { name: 'GRAUPARENT', nullable: true })
  grauparent: number | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('char', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('char', { name: 'DEPENDIRF', nullable: true, length: 1 })
  dependirf: string | null;

  @Column('varchar', { name: 'NOMEMAE', nullable: true, length: 100 })
  nomemae: string | null;

  @Column('char', { name: 'CONVENIO', nullable: true, length: 1 })
  convenio: string | null;

  @Column('char', { name: 'SALFAM', nullable: true, length: 1 })
  salfam: string | null;

  @Column('char', { name: 'PENSIONISTA', nullable: true, length: 1 })
  pensionista: string | null;

  @Column('float', { name: 'PERCPENSAO', nullable: true, precision: 53 })
  percpensao: number | null;

  @Column('float', { name: 'VLRPENSAO', nullable: true, precision: 53 })
  vlrpensao: number | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', {
    name: 'PERCREPASSEPENSIONISTA',
    nullable: true,
    precision: 53,
  })
  percrepassepensionista: number | null;

  @Column('float', { name: 'PERCHNETFGTS', nullable: true, precision: 53 })
  perchnetfgts: number | null;

  @Column('float', { name: 'PERCHOMOLOGNET', nullable: true, precision: 53 })
  perchomolognet: number | null;

  @Column('char', { name: 'REPSALPENSIONISTA', nullable: true, length: 1 })
  repsalpensionista: string | null;

  @Column('char', { name: 'INCTRAB', nullable: true, length: 1 })
  inctrab: string | null;

  @Column('smallint', { name: 'NACIONALIDADE', nullable: true })
  nacionalidade: number | null;

  @Column('char', { name: 'ADOTIVO', nullable: true, length: 1 })
  adotivo: string | null;

  @Column('varchar', { name: 'DNV', nullable: true, length: 11 })
  dnv: string | null;

  @Column('datetime', { name: 'DTLIMIRF', nullable: true })
  dtlimirf: Date | null;

  @Column('datetime', { name: 'DTLIMSALFAM', nullable: true })
  dtlimsalfam: Date | null;

  @Column('char', { name: 'IDADEESCOLAR', nullable: true, length: 1 })
  idadeescolar: string | null;

  @Column('varchar', { name: 'SEMATESTADO', length: 1, default: () => "'N'" })
  sematestado: string;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('varchar', { name: 'CARTORIO', nullable: true, length: 50 })
  cartorio: string | null;

  @Column('varchar', { name: 'NROREG', nullable: true, length: 50 })
  nroreg: string | null;

  @Column('varchar', { name: 'NROLIVROREG', nullable: true, length: 10 })
  nrolivroreg: string | null;

  @Column('smallint', { name: 'NROFOLHAREG', nullable: true })
  nrofolhareg: number | null;

  @Column('datetime', { name: 'DTINICDEPEND', nullable: true })
  dtinicdepend: Date | null;

  @Column('datetime', { name: 'DTFIMDEPEND', nullable: true })
  dtfimdepend: Date | null;

  @Column('smallint', { name: 'MOTIVOINICIO', nullable: true })
  motivoinicio: number | null;

  @Column('smallint', { name: 'MOTIVOFIM', nullable: true })
  motivofim: number | null;

  @Column('int', { name: 'CODFUNCPENS', nullable: true })
  codfuncpens: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('char', { name: 'TIPOPENSAO', nullable: true, length: 1 })
  tipopensao: string | null;

  @Column('char', { name: 'AUXCRE', nullable: true, length: 1 })
  auxcre: string | null;

  @Column('char', { name: 'SEMATESTCRECHE', nullable: true, length: 1 })
  sematestcreche: string | null;

  @Column('datetime', { name: 'DTLIMAUXCRE', nullable: true })
  dtlimauxcre: Date | null;

  @Column('smallint', {
    name: 'RACAETNIA',
    nullable: true,
    default: () => '(60)',
  })
  racaetnia: number | null;

  @Column('varchar', { name: 'DESCRDPD', nullable: true, length: 99 })
  descrdpd: string | null;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpreqadmdpds)
  @JoinColumn([
    { name: 'CODEMPFUNCRESPONSAVEL', referencedColumnName: 'codemp' },
  ])
  codempfuncresponsavel: TfpempEntity;
}
