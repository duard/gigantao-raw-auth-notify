import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsicidEntity } from './tSICID.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { AdAcertoviagemiteEntity } from './aD_ACERTOVIAGEMITE.entity';

@Index('PK_AD_ACERTOVIAGEM', ['nroadiant'], { unique: true })
@Entity('AD_ACERTOVIAGEM', { schema: 'SANKHYA' })
export class AdAcertoviagemEntity {
  @Column('int', { primary: true, name: 'NROADIANT' })
  nroadiant: number;

  @Column('float', { name: 'VLRSOLICIT', precision: 53 })
  vlrsolicit: number;

  @Column('text', { name: 'OBSADIANT', nullable: true })
  obsadiant: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('datetime', { name: 'DTPREVADIANT', nullable: true })
  dtprevadiant: Date | null;

  @Column('varchar', { name: 'TIPADIANT', nullable: true, length: 10 })
  tipadiant: string | null;

  @Column('datetime', { name: 'DATA', nullable: true })
  data: Date | null;

  @Column('datetime', { name: 'DHAPROV', nullable: true })
  dhaprov: Date | null;

  @Column('datetime', { name: 'DHAPROVDESP', nullable: true })
  dhaprovdesp: Date | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('text', { name: 'MOTREJEITO', nullable: true })
  motrejeito: string | null;

  @Column('datetime', { name: 'DTREJEITO', nullable: true })
  dtrejeito: Date | null;

  @Column('varchar', { name: 'MOTCANC', nullable: true, length: 100 })
  motcanc: string | null;

  @Column('float', { name: 'VALORAPROV', nullable: true, precision: 53 })
  valoraprov: number | null;

  @Column('image', { name: 'COMPROVANTE', nullable: true })
  comprovante: Buffer | null;

  @Column('text', { name: 'ATENCAO', nullable: true })
  atencao: string | null;

  @Column('varchar', { name: 'INTEGRAFOPAG', nullable: true, length: 10 })
  integrafopag: string | null;

  @Column('int', { name: 'CODEVENTO', nullable: true })
  codevento: number | null;

  @Column('varchar', { name: 'REENVIAWPP', nullable: true, length: 10 })
  reenviawpp: string | null;

  @Column('varchar', { name: 'STATUS_REGISTRO', nullable: true, length: 10 })
  statusRegistro: string | null;

  @Column('datetime', { name: 'DT_ALTER', nullable: true })
  dtAlter: Date | null;

  @Column('varchar', { name: 'PAGO_DINHEIRO', nullable: true, length: 10 })
  pagoDinheiro: string | null;

  @Column('varchar', { name: 'CONFERIDO_FIN', nullable: true, length: 10 })
  conferidoFin: string | null;

  @Column('int', { name: 'DOC_REF', nullable: true })
  docRef: number | null;

  @Column('varchar', { name: 'NAT_DOC_REF', nullable: true, length: 10 })
  natDocRef: string | null;

  @Column('varchar', { name: 'REF_REF', nullable: true, length: 10 })
  refRef: string | null;

  @Column('varchar', { name: 'REF_PED', nullable: true, length: 10 })
  refPed: string | null;

  @Column('varchar', { name: 'REF_TRA', nullable: true, length: 10 })
  refTra: string | null;

  @Column('varchar', { name: 'REF_OUT', nullable: true, length: 10 })
  refOut: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adAcertoviagems)
  @JoinColumn([{ name: 'CODUSUAPROV', referencedColumnName: 'codusu' }])
  codusuaprov: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAcertoviagems2,
  )
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAcertoviagems3,
  )
  @JoinColumn([{ name: 'CODUSUREJEITO', referencedColumnName: 'codusu' }])
  codusurejeito: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAcertoviagems4,
  )
  @JoinColumn([{ name: 'CODUSUAPROVDESP', referencedColumnName: 'codusu' }])
  codusuaprovdesp: TsiusuEntity;

  @ManyToOne(
    () => TsiusuEntity,
    (tsiusuEntity) => tsiusuEntity.adAcertoviagems5,
  )
  @JoinColumn([{ name: 'USU_ALTER', referencedColumnName: 'codusu' }])
  usuAlter: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.adAcertoviagems)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.adAcertoviagems)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.adAcertoviagems)
  @JoinColumn([{ name: 'NUFIN_R', referencedColumnName: 'nufin' }])
  nufinR: TgffinEntity;

  @ManyToOne(
    () => TgffinEntity,
    (tgffinEntity) => tgffinEntity.adAcertoviagems2,
  )
  @JoinColumn([{ name: 'NUFINDESP', referencedColumnName: 'nufin' }])
  nufindesp: TgffinEntity;

  @ManyToOne(
    () => TgffinEntity,
    (tgffinEntity) => tgffinEntity.adAcertoviagems3,
  )
  @JoinColumn([{ name: 'NUFIN_D', referencedColumnName: 'nufin' }])
  nufinD: TgffinEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.adAcertoviagems)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(
    () => AdAcertoviagemiteEntity,
    (adAcertoviagemiteEntity) => adAcertoviagemiteEntity.nroadiant2,
  )
  adAcertoviagemites: AdAcertoviagemiteEntity[];
}
