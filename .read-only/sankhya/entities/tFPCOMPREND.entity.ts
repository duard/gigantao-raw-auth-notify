import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPCOMPREND', ['codemp', 'codfunc', 'cpf', 'anobase'], {
  unique: true,
})
@Entity('TFPCOMPREND', { schema: 'SANKHYA' })
export class TfpcomprendEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('smallint', { primary: true, name: 'ANOBASE' })
  anobase: number;

  @Column('image', { name: 'DOCUMENTO', nullable: true })
  documento: Buffer | null;

  @Column('varchar', { name: 'FILETYPE', nullable: true, length: 15 })
  filetype: string | null;

  @Column('varchar', { name: 'FILENAME', nullable: true, length: 80 })
  filename: string | null;

  @Column('varchar', { name: 'EXERCICIO', nullable: true, length: 20 })
  exercicio: string | null;

  @Column('varchar', { name: 'ANOCALENDARIO', nullable: true, length: 20 })
  anocalendario: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 20 })
  cnpj: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL_DESC', nullable: true, length: 200 })
  razaosocialDesc: string | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 200 })
  razaosocial: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 200 })
  nome: string | null;

  @Column('varchar', { name: 'NATUREZA', nullable: true, length: 200 })
  natureza: string | null;

  @Column('varchar', { name: 'TOTALRENDS', nullable: true, length: 20 })
  totalrends: string | null;

  @Column('varchar', { name: 'CONTRIBPREVIDENC', nullable: true, length: 20 })
  contribprevidenc: string | null;

  @Column('varchar', {
    name: 'CONTRIBENTPREVIDENC',
    nullable: true,
    length: 20,
  })
  contribentprevidenc: string | null;

  @Column('varchar', { name: 'PENSAOALIMENTIC', nullable: true, length: 20 })
  pensaoalimentic: string | null;

  @Column('varchar', { name: 'IRRETIDO', nullable: true, length: 20 })
  irretido: string | null;

  @Column('varchar', { name: 'PARCISENTOS65', nullable: true, length: 20 })
  parcisentos65: string | null;

  @Column('varchar', { name: 'DIARIASAJUDACIST', nullable: true, length: 20 })
  diariasajudacist: string | null;

  @Column('varchar', { name: 'PENSAOPROVAPOSENT', nullable: true, length: 20 })
  pensaoprovaposent: string | null;

  @Column('varchar', { name: 'LUCROSDIVIDENDOS', nullable: true, length: 20 })
  lucrosdividendos: string | null;

  @Column('varchar', { name: 'VLRPAGTITMICRO', nullable: true, length: 20 })
  vlrpagtitmicro: string | null;

  @Column('varchar', { name: 'INDENIZRESCONTRAT', nullable: true, length: 20 })
  indenizrescontrat: string | null;

  @Column('varchar', { name: 'RIO', nullable: true, length: 20 })
  rio: string | null;

  @Column('varchar', {
    name: 'DECTERCEIROTRIBEXCLUSIV',
    nullable: true,
    length: 20,
  })
  decterceirotribexclusiv: string | null;

  @Column('varchar', { name: 'IRRETIDO13SAL', nullable: true, length: 20 })
  irretido13Sal: string | null;

  @Column('varchar', { name: 'NROPROCESSO', nullable: true, length: 20 })
  nroprocesso: string | null;

  @Column('varchar', { name: 'QTAMESES', nullable: true, length: 20 })
  qtameses: string | null;

  @Column('varchar', { name: 'TOTRENDTRIBRRA', nullable: true, length: 20 })
  totrendtribrra: string | null;

  @Column('varchar', { name: 'EXCLDESPAJ', nullable: true, length: 20 })
  excldespaj: string | null;

  @Column('varchar', { name: 'DEDUCPREVOFICIAL', nullable: true, length: 20 })
  deducprevoficial: string | null;

  @Column('varchar', { name: 'DEDUCPENSAO', nullable: true, length: 20 })
  deducpensao: string | null;

  @Column('varchar', { name: 'IRRFRRA', nullable: true, length: 20 })
  irrfrra: string | null;

  @Column('varchar', { name: 'RENDISENTOSRRA', nullable: true, length: 20 })
  rendisentosrra: string | null;

  @Column('varchar', { name: 'INF', nullable: true, length: 200 })
  inf: string | null;

  @Column('varchar', { name: 'INFOTPSE_TITULO', nullable: true, length: 200 })
  infotpseTitulo: string | null;

  @Column('varchar', {
    name: 'INFOTPSE_OPERADORA',
    nullable: true,
    length: 200,
  })
  infotpseOperadora: string | null;

  @Column('varchar', { name: 'INFOTPSE_VALOR', nullable: true, length: 200 })
  infotpseValor: string | null;

  @Column('varchar', { name: 'RESPO', nullable: true, length: 200 })
  respo: string | null;

  @Column('varchar', { name: 'DATAGER', nullable: true, length: 20 })
  datager: string | null;

  @Column('varchar', { name: 'TOTALRENDSOUTROS', nullable: true, length: 20 })
  totalrendsoutros: string | null;

  @Column('text', { name: 'CAMPOSETE', nullable: true })
  camposete: string | null;
}
