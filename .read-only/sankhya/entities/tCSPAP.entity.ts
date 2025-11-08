import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TcscttEntity } from './tCSCTT.entity';
import { TcseagEntity } from './tCSEAG.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgftppEntity } from './tGFTPP.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TpqpesEntity } from './tPQPES.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TCSPAP', ['codpap'], { unique: true })
@Entity('TCSPAP', { schema: 'SANKHYA' })
export class TcspapEntity {
  @Column('int', { primary: true, name: 'CODPAP' })
  codpap: number;

  @Column('char', { name: 'NOMEPAP', nullable: true, length: 40 })
  nomepap: string | null;

  @Column('char', { name: 'RAZAOSOCIAL', nullable: true, length: 40 })
  razaosocial: string | null;

  @Column('char', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('datetime', { name: 'DTCAD', nullable: true })
  dtcad: Date | null;

  @Column('char', { name: 'ENDERECO', nullable: true, length: 50 })
  endereco: string | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'NOMEBAI', nullable: true, length: 50 })
  nomebai: string | null;

  @Column('char', { name: 'NOMECID', nullable: true, length: 50 })
  nomecid: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('int', { name: 'NROANS', nullable: true })
  nroans: number | null;

  @Column('int', { name: 'NROBEN', nullable: true })
  nroben: number | null;

  @Column('varchar', { name: 'TIPPESSOA', nullable: true, length: 1 })
  tippessoa: string | null;

  @Column('varchar', { name: 'IDENTINSCESTAD', nullable: true, length: 16 })
  identinscestad: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('int', { name: 'DIAPAGTO', nullable: true })
  diapagto: number | null;

  @Column('int', { name: 'PRAZOPAG', nullable: true })
  prazopag: number | null;

  @Column('float', {
    name: 'LIMCRED',
    nullable: true,
    precision: 53,
    default: () => '(0.00)',
  })
  limcred: number | null;

  @Column('varchar', { name: 'NOMECARTAO', nullable: true, length: 22 })
  nomecartao: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('char', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('int', { name: 'CARTEIRATRAB', nullable: true })
  carteiratrab: number | null;

  @Column('varchar', { name: 'RG', nullable: true, length: 15 })
  rg: string | null;

  @Column('datetime', { name: 'DATAEMISSAORG', nullable: true })
  dataemissaorg: Date | null;

  @Column('varchar', { name: 'EMISSAORG', nullable: true, length: 6 })
  emissaorg: string | null;

  @Column('varchar', { name: 'NOMEMAE', nullable: true, length: 40 })
  nomemae: string | null;

  @Column('varchar', { name: 'NOMEPAI', nullable: true, length: 40 })
  nomepai: string | null;

  @Column('char', { name: 'ESTADOCIVIL', nullable: true, length: 1 })
  estadocivil: string | null;

  @Column('varchar', { name: 'NOMECONJUGE', nullable: true, length: 40 })
  nomeconjuge: string | null;

  @Column('varchar', { name: 'CELULARCONJUGE', nullable: true, length: 13 })
  celularconjuge: string | null;

  @Column('char', { name: 'ESCOLARIDADE', nullable: true, length: 1 })
  escolaridade: string | null;

  @Column('smallint', { name: 'QTDEDEPENDENTES', nullable: true })
  qtdedependentes: number | null;

  @Column('varchar', { name: 'TELCELULAR', nullable: true, length: 13 })
  telcelular: string | null;

  @Column('char', { name: 'POSSUICARTAOCREDITO', nullable: true, length: 1 })
  possuicartaocredito: string | null;

  @Column('varchar', { name: 'CARTAOCREDITO', nullable: true, length: 30 })
  cartaocredito: string | null;

  @Column('char', { name: 'TIPORESIDENCIA', nullable: true, length: 1 })
  tiporesidencia: string | null;

  @Column('char', { name: 'STATUSPROPOSTA', nullable: true, length: 1 })
  statusproposta: string | null;

  @Column('char', { name: 'ISPROPOSTACARTAO', length: 1, default: () => "'N'" })
  ispropostacartao: string;

  @Column('varchar', { name: 'OBSERVACOES', nullable: true, length: 3103 })
  observacoes: string | null;

  @Column('char', { name: 'SITCADSEFAZ', length: 1, default: () => "'0'" })
  sitcadsefaz: string;

  @Column('datetime', { name: 'DHCADSEFAZ', nullable: true })
  dhcadsefaz: Date | null;

  @Column('int', { name: 'INTERVANALISCRED', nullable: true })
  intervanaliscred: number | null;

  @Column('smallint', { name: 'SITCADRF', nullable: true })
  sitcadrf: number | null;

  @Column('datetime', { name: 'DHCADRF', nullable: true })
  dhcadrf: Date | null;

  @Column('varchar', { name: 'CNAE', nullable: true, length: 10 })
  cnae: string | null;

  @Column('smallint', { name: 'INDCREDNFE', nullable: true })
  indcrednfe: number | null;

  @Column('smallint', { name: 'INDCREDCTE', nullable: true })
  indcredcte: number | null;

  @Column('datetime', { name: 'DTINIATIV', nullable: true })
  dtiniativ: Date | null;

  @Column('datetime', { name: 'DTULTSIT', nullable: true })
  dtultsit: Date | null;

  @Column('datetime', { name: 'DTBAIXA', nullable: true })
  dtbaixa: Date | null;

  @Column('varchar', { name: 'REGAPUR', nullable: true, length: 50 })
  regapur: string | null;

  @OneToMany(() => TcscttEntity, (tcscttEntity) => tcscttEntity.codpap2)
  tcsctts: TcscttEntity[];

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.codpap)
  tcseags: TcseagEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codpap)
  tcsoses: TcsoseEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tcspaps)
  @JoinColumn([{ name: 'NATURALIDADE', referencedColumnName: 'codcid' }])
  naturalidade: TsicidEntity;

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tcspaps)
  @JoinColumn([{ name: 'CODTIPPARC', referencedColumnName: 'codtipparc' }])
  codtipparc: TgftppEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcspaps)
  @JoinColumn([{ name: 'CODPARCB2B', referencedColumnName: 'codparc' }])
  codparcb2B: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcspaps2)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tcspaps)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tcspaps)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf: TsiufsEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tcspaps2)
  @JoinColumn([{ name: 'UFRG', referencedColumnName: 'coduf' }])
  ufrg: TsiufsEntity;

  @ManyToMany(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tcspaps2)
  tgftpps: TgftppEntity[];

  @OneToMany(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.codpappesq)
  tpqpes: TpqpesEntity[];
}
