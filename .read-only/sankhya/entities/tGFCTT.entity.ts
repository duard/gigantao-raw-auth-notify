import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcfcptEntity } from './tCFCPT.entity';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcsoccEntity } from './tCSOCC.entity';
import { TgfacoEntity } from './tGFACO.entity';
import { TgfagdEntity } from './tGFAGD.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TimprfEntity } from './tIMPRF.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfgvpEntity } from './tGFGVP.entity';
import { TgfplacEntity } from './tGFPLAC.entity';
import { TgfpliEntity } from './tGFPLI.entity';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimirbEntity } from './tIMIRB.entity';
import { TimlvcEntity } from './tIMLVC.entity';
import { TimtnpEntity } from './tIMTNP.entity';
import { TimtvpEntity } from './tIMTVP.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFCTT', ['codparc', 'codcontato'], { unique: true })
@Entity('TGFCTT', { schema: 'SANKHYA' })
export class TgfcttEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODCONTATO' })
  codcontato: number;

  @Column('char', { name: 'NOMECONTATO', nullable: true, length: 40 })
  nomecontato: string | null;

  @Column('char', { name: 'APELIDO', nullable: true, length: 15 })
  apelido: string | null;

  @Column('char', { name: 'CARGO', nullable: true, length: 20 })
  cargo: string | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEMENTO', nullable: true, length: 10 })
  complemento: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('smallint', { name: 'RAMAL', nullable: true })
  ramal: number | null;

  @Column('varchar', { name: 'FAX', nullable: true, length: 13 })
  fax: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('char', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTCAD', nullable: true })
  dtcad: Date | null;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 13 })
  celular: string | null;

  @Column('char', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'TELRESID', nullable: true, length: 13 })
  telresid: string | null;

  @Column('char', { name: 'POSSUIACESSOBT', length: 1, default: () => "'N'" })
  possuiacessobt: string;

  @Column('char', { name: 'SENHABT', nullable: true, length: 50 })
  senhabt: string | null;

  @Column('char', { name: 'SENHAACESSO', nullable: true, length: 32 })
  senhaacesso: string | null;

  @Column('smallint', { name: 'NIVELCOB', default: () => '(0)' })
  nivelcob: number;

  @Column('varchar', {
    name: 'RECEBEBOLETOEMAIL',
    length: 1,
    default: () => "'N'",
  })
  recebeboletoemail: string;

  @Column('varchar', {
    name: 'RECEBENOTAEMAIL',
    length: 1,
    default: () => "'N'",
  })
  recebenotaemail: string;

  @Column('varchar', { name: 'SOCIO', length: 1, default: () => "'N'" })
  socio: string;

  @Column('varchar', { name: 'LATITUDE', nullable: true, length: 60 })
  latitude: string | null;

  @Column('varchar', { name: 'LONGITUDE', nullable: true, length: 60 })
  longitude: string | null;

  @Column('char', { name: 'RECEMAILIMPPED', length: 1, default: () => "'N'" })
  recemailimpped: string;

  @Column('char', { name: 'EMAILRECBOL', length: 1, default: () => "'N'" })
  emailrecbol: string;

  @Column('char', { name: 'HABPLANENTCESTAS', nullable: true, length: 1 })
  habplanentcestas: string | null;

  @Column('int', { name: 'QTDENTREGACESTAS', nullable: true })
  qtdentregacestas: number | null;

  @Column('char', { name: 'ENVIANOTIFCOTA', length: 1, default: () => "'N'" })
  envianotifcota: string;

  @Column('char', { name: 'RESPCOBRANCA', nullable: true, length: 1 })
  respcobranca: string | null;

  @Column('varchar', { name: 'INSCESTAD', nullable: true, length: 16 })
  inscestad: string | null;

  @Column('varchar', { name: 'TIMAGENCIA', nullable: true, length: 10 })
  timagencia: string | null;

  @Column('varchar', { name: 'TIMCONTA', nullable: true, length: 20 })
  timconta: string | null;

  @Column('float', { name: 'TIMTIPO', nullable: true, precision: 53 })
  timtipo: number | null;

  @Column('varchar', { name: 'TIMRG', nullable: true, length: 30 })
  timrg: string | null;

  @Column('char', { name: 'TIMBENEFICIARIO', nullable: true, length: 1 })
  timbeneficiario: string | null;

  @Column('int', { name: 'TIMPROCURADOR', nullable: true })
  timprocurador: number | null;

  @Column('char', { name: 'TIMREPRESENTANTE', nullable: true, length: 1 })
  timrepresentante: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @OneToMany(() => TcfcptEntity, (tcfcptEntity) => tcfcptEntity.tgfctt)
  tcfcpts: TcfcptEntity[];

  @OneToMany(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tgfctt)
  tcsfaps: TcsfapEntity[];

  @OneToMany(() => TcsoccEntity, (tcsoccEntity) => tcsoccEntity.tgfctt)
  tcsoccs: TcsoccEntity[];

  @OneToMany(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.tgfctt)
  tgfacos: TgfacoEntity[];

  @OneToMany(() => TgfagdEntity, (tgfagdEntity) => tgfagdEntity.tgfctt)
  tgfagds: TgfagdEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfctts)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgfctts)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfctts)
  @JoinColumn([{ name: 'TIMBANCO', referencedColumnName: 'codbco' }])
  timbanco: TsibcoEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tgfctts)
  @JoinColumn([{ name: 'TIMNACIONALIDAD', referencedColumnName: 'codpais' }])
  timnacionalidad: TsipaiEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgfctts)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TimprfEntity, (timprfEntity) => timprfEntity.tgfctts)
  @JoinColumn([{ name: 'TIMPROFISSAO', referencedColumnName: 'prfcodigo' }])
  timprofissao: TimprfEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgfctts)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfctts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfctts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfctts2)
  @JoinColumn([{ name: 'CODPARCCAD', referencedColumnName: 'codparc' }])
  codparccad: TgfparEntity;

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfctt)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfgvpEntity, (tgfgvpEntity) => tgfgvpEntity.tgfctt)
  tgfgvps: TgfgvpEntity[];

  @OneToMany(() => TgfplacEntity, (tgfplacEntity) => tgfplacEntity.tgfctt)
  tgfplacs: TgfplacEntity[];

  @OneToMany(() => TgfpliEntity, (tgfpliEntity) => tgfpliEntity.tgfctt)
  tgfplis: TgfpliEntity[];

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.tgfctt)
  timdtls: TimdtlEntity[];

  @OneToMany(() => TimirbEntity, (timirbEntity) => timirbEntity.tgfctt)
  timirbs: TimirbEntity[];

  @OneToMany(() => TimlvcEntity, (timlvcEntity) => timlvcEntity.tgfctt)
  timlvcs: TimlvcEntity[];

  @OneToMany(() => TimtnpEntity, (timtnpEntity) => timtnpEntity.tgfctt)
  timtnps: TimtnpEntity[];

  @OneToMany(() => TimtvpEntity, (timtvpEntity) => timtvpEntity.tgfctt)
  timtvps: TimtvpEntity[];

  @OneToMany(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfctt)
  tsiemps: TsiempEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfctt)
  tsiusus: TsiusuEntity[];
}
