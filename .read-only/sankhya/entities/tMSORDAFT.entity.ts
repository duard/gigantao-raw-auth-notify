import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfordEntity } from './tGFORD.entity';
import { TmsordaftiteEntity } from './tMSORDAFTITE.entity';

@Index('PK_TMSORDAFT', ['codemp', 'ordemcarga', 'codaft'], { unique: true })
@Entity('TMSORDAFT', { schema: 'SANKHYA' })
export class TmsordaftEntity {
  @Column('int', { primary: true, name: 'CODAFT' })
  codaft: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA' })
  ordemcarga: number;

  @Column('float', { name: 'VLRFRTACERT', nullable: true, precision: 53 })
  vlrfrtacert: number | null;

  @Column('float', { name: 'VLRADIANT', nullable: true, precision: 53 })
  vlradiant: number | null;

  @Column('float', { name: 'VLRIRRF', nullable: true, precision: 53 })
  vlrirrf: number | null;

  @Column('float', { name: 'VLRINSS', nullable: true, precision: 53 })
  vlrinss: number | null;

  @Column('float', { name: 'VLRSESTSENAT', nullable: true, precision: 53 })
  vlrsestsenat: number | null;

  @Column('float', { name: 'VLRACRES', nullable: true, precision: 53 })
  vlracres: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'VLRLIQ', nullable: true, precision: 53 })
  vlrliq: number | null;

  @Column('int', { name: 'NUCHAVELIBADIANTAMENTO', nullable: true })
  nuchavelibadiantamento: number | null;

  @Column('varchar', {
    name: 'STATUSLIBADIANTAMENTO',
    nullable: true,
    length: 10,
  })
  statuslibadiantamento: string | null;

  @Column('float', { name: 'VLRSALDOFRETE', nullable: true, precision: 53 })
  vlrsaldofrete: number | null;

  @Column('datetime', { name: 'DHINCLUSAOAFRETAMENTO', nullable: true })
  dhinclusaoafretamento: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('float', { name: 'BASEINSS', nullable: true, precision: 53 })
  baseinss: number | null;

  @Column('float', { name: 'BASEIRRF', nullable: true, precision: 53 })
  baseirrf: number | null;

  @Column('float', { name: 'VLRFRETEMOT', nullable: true, precision: 53 })
  vlrfretemot: number | null;

  @Column('int', { name: 'NUCHAVELIBMAXFRETE', nullable: true })
  nuchavelibmaxfrete: number | null;

  @Column('varchar', { name: 'STATUSLIBMAXFRETE', nullable: true, length: 10 })
  statuslibmaxfrete: string | null;

  @Column('int', { name: 'NUMCARTAFRETE', nullable: true })
  numcartafrete: number | null;

  @Column('float', { name: 'VLRTAXASEGURO', nullable: true, precision: 53 })
  vlrtaxaseguro: number | null;

  @Column('float', { name: 'VLRPEDAGIO', nullable: true, precision: 53 })
  vlrpedagio: number | null;

  @Column('varchar', { name: 'NUCIOT', nullable: true, length: 100 })
  nuciot: string | null;

  @Column('int', { name: 'CODPGTO', nullable: true })
  codpgto: number | null;

  @Column('int', { name: 'NUCHAVELIBSEGAFT', nullable: true })
  nuchavelibsegaft: number | null;

  @Column('varchar', { name: 'STATUSLIBSEGAFT', nullable: true, length: 10 })
  statuslibsegaft: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', { name: 'FORMAPGTOPEDAGIO', nullable: true, length: 10 })
  formapgtopedagio: string | null;

  @Column('float', { name: 'VLRVALEABASTE', nullable: true, precision: 53 })
  vlrvaleabaste: number | null;

  @Column('int', { name: 'CODPGTOPED', nullable: true })
  codpgtoped: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'STATUSPGTO', nullable: true, length: 10 })
  statuspgto: string | null;

  @Column('varchar', {
    name: 'TIPOFAVORECIDOPEDAGIO',
    nullable: true,
    length: 10,
  })
  tipofavorecidopedagio: string | null;

  @Column('varchar', {
    name: 'TIPOFAVORECIDOADIANT',
    nullable: true,
    length: 10,
  })
  tipofavorecidoadiant: string | null;

  @Column('varchar', {
    name: 'TIPOFAVORECIDOSALDO',
    nullable: true,
    length: 10,
  })
  tipofavorecidosaldo: string | null;

  @Column('varchar', { name: 'NROCARTAOPEDAGIO', nullable: true, length: 100 })
  nrocartaopedagio: string | null;

  @Column('varchar', { name: 'NROCARTAOSALDO', nullable: true, length: 100 })
  nrocartaosaldo: string | null;

  @Column('varchar', { name: 'NROCARTAOADIANT', nullable: true, length: 100 })
  nrocartaoadiant: string | null;

  @Column('varchar', { name: 'FORMAPGTOADIANT', nullable: true, length: 100 })
  formapgtoadiant: string | null;

  @Column('varchar', { name: 'FORMAPGTOSALDO', nullable: true, length: 100 })
  formapgtosaldo: string | null;

  @Column('varchar', { name: 'TIPOCONTAADIANT', nullable: true, length: 100 })
  tipocontaadiant: string | null;

  @Column('varchar', { name: 'TIPOCONTASALDO', nullable: true, length: 100 })
  tipocontasaldo: string | null;

  @Column('int', { name: 'CODBCOADIANT', nullable: true })
  codbcoadiant: number | null;

  @Column('int', { name: 'CODBCOSALDO', nullable: true })
  codbcosaldo: number | null;

  @Column('varchar', { name: 'AGENCIAADIANT', nullable: true, length: 100 })
  agenciaadiant: string | null;

  @Column('varchar', { name: 'AGENCIASALDO', nullable: true, length: 100 })
  agenciasaldo: string | null;

  @Column('varchar', { name: 'CONTAADIANT', nullable: true, length: 100 })
  contaadiant: string | null;

  @Column('varchar', { name: 'CONTASALDO', nullable: true, length: 100 })
  contasaldo: string | null;

  @Column('varchar', { name: 'NRORECIBOPEDAG', nullable: true, length: 100 })
  nrorecibopedag: string | null;

  @Column('int', { name: 'CODPARCFORN', nullable: true })
  codparcforn: number | null;

  @Column('varchar', { name: 'NROTAGPEDAGIO', nullable: true, length: 100 })
  nrotagpedagio: string | null;

  @Column('varchar', { name: 'DIGITOADIANT', nullable: true, length: 1 })
  digitoadiant: string | null;

  @Column('varchar', { name: 'DIGITOSALDO', nullable: true, length: 1 })
  digitosaldo: string | null;

  @Column('varchar', { name: 'FAVORECIDOADIANT', nullable: true, length: 100 })
  favorecidoadiant: string | null;

  @Column('varchar', { name: 'FAVORECIDOSALDO', nullable: true, length: 100 })
  favorecidosaldo: string | null;

  @Column('varchar', { name: 'CGC_CPFADIANT', nullable: true, length: 100 })
  cgcCpfadiant: string | null;

  @Column('varchar', { name: 'CGC_CPFSALDO', nullable: true, length: 100 })
  cgcCpfsaldo: string | null;

  @Column('float', { name: 'PERCADIANT', nullable: true, precision: 53 })
  percadiant: number | null;

  @Column('int', { name: 'CODEMISORPED', nullable: true })
  codemisorped: number | null;

  @Column('varchar', { name: 'TIPOPESO', nullable: true, length: 10 })
  tipopeso: string | null;

  @Column('varchar', { name: 'EXIGDTENTREGANFE', nullable: true, length: 10 })
  exigdtentreganfe: string | null;

  @Column('varchar', { name: 'EXIGEPESO', nullable: true, length: 10 })
  exigepeso: string | null;

  @Column('varchar', { name: 'RECOLHERTICKET', nullable: true, length: 10 })
  recolherticket: string | null;

  @Column('varchar', { name: 'AVARIA', nullable: true, length: 10 })
  avaria: string | null;

  @Column('varchar', { name: 'CANHOTONFE', nullable: true, length: 10 })
  canhotonfe: string | null;

  @Column('varchar', { name: 'COMPROVANTEPEDAGIO', nullable: true, length: 10 })
  comprovantepedagio: string | null;

  @Column('varchar', { name: 'DACTE', nullable: true, length: 10 })
  dacte: string | null;

  @Column('varchar', { name: 'CONTRATOTRANSP', nullable: true, length: 10 })
  contratotransp: string | null;

  @Column('varchar', { name: 'TIPCOBAVARIA', nullable: true, length: 10 })
  tipcobavaria: string | null;

  @Column('varchar', { name: 'LOCALQUITACAO', nullable: true, length: 10 })
  localquitacao: string | null;

  @Column('varchar', { name: 'LOCALADIANT', nullable: true, length: 10 })
  localadiant: string | null;

  @ManyToOne(() => TgfordEntity, (tgfordEntity) => tgfordEntity.tmsordafts)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'ORDEMCARGA', referencedColumnName: 'ordemcarga' },
  ])
  tgford: TgfordEntity;

  @OneToMany(
    () => TmsordaftiteEntity,
    (tmsordaftiteEntity) => tmsordaftiteEntity.tmsordaft,
  )
  tmsordaftites: TmsordaftiteEntity[];
}
