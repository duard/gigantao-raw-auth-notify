import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimacmEntity } from './tIMACM.entity';
import { TimapoEntity } from './tIMAPO.entity';
import { TimaprEntity } from './tIMAPR.entity';
import { TimbalEntity } from './tIMBAL.entity';
import { TimdlvEntity } from './tIMDLV.entity';
import { TimintEntity } from './tIMINT.entity';
import { TimlbfEntity } from './tIMLBF.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TimlteEntity } from './tIMLTE.entity';
import { TimlvcEntity } from './tIMLVC.entity';
import { TimlvrEntity } from './tIMLVR.entity';
import { TimmfdEntity } from './tIMMFD.entity';
import { TimrcvEntity } from './tIMRCV.entity';
import { TimrenEntity } from './tIMREN.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimtlvEntity } from './tIMTLV.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMLTV', ['ltvcodigo'], { unique: true })
@Entity('TIMLTV', { schema: 'SANKHYA' })
export class TimltvEntity {
  @Column('int', { primary: true, name: 'LTVCODIGO' })
  ltvcodigo: number;

  @Column('int', { name: 'LTVCODIGOSISLOTE', nullable: true })
  ltvcodigosislote: number | null;

  @Column('int', { name: 'LTVCONTRATO', nullable: true })
  ltvcontrato: number | null;

  @Column('char', { name: 'LTVESTAGIO', length: 2, default: () => "'PR'" })
  ltvestagio: string;

  @Column('char', { name: 'LTVIMVESTIMENTO', nullable: true, length: 2 })
  ltvimvestimento: string | null;

  @Column('char', { name: 'LTVSITUACAO', nullable: true, length: 2 })
  ltvsituacao: string | null;

  @Column('float', { name: 'LTVPRECODOLOTE', nullable: true, precision: 53 })
  ltvprecodolote: number | null;

  @Column('char', { name: 'LTVCOREXTERNO', nullable: true, length: 1 })
  ltvcorexterno: string | null;

  @Column('char', {
    name: 'LTVPRAZOESCRITURA',
    length: 2,
    default: () => "'3M'",
  })
  ltvprazoescritura: string;

  @Column('float', { name: 'LTVRECAFRANQUIA', nullable: true, precision: 53 })
  ltvrecafranquia: number | null;

  @Column('float', { name: 'LTVRECACORRETOR', nullable: true, precision: 53 })
  ltvrecacorretor: number | null;

  @Column('float', { name: 'LTVRECAADM', nullable: true, precision: 53 })
  ltvrecaadm: number | null;

  @Column('char', { name: 'LTVTIPORECA', nullable: true, length: 2 })
  ltvtiporeca: string | null;

  @Column('float', { name: 'LTVDESCONTO', nullable: true, precision: 53 })
  ltvdesconto: number | null;

  @Column('float', { name: 'LTVPRECOVENDIDO', nullable: true, precision: 53 })
  ltvprecovendido: number | null;

  @Column('varchar', { name: 'LTVPQDESCONTO', nullable: true, length: 250 })
  ltvpqdesconto: string | null;

  @Column('float', {
    name: 'LTVVALORFECHAMENTO',
    nullable: true,
    precision: 53,
  })
  ltvvalorfechamento: number | null;

  @Column('float', { name: 'LTVADIANTAMENTO', nullable: true, precision: 53 })
  ltvadiantamento: number | null;

  @Column('smallint', { name: 'LTVPARCARRAS', nullable: true })
  ltvparcarras: number | null;

  @Column('datetime', { name: 'LTVPRIPARARRAS', nullable: true })
  ltvpripararras: Date | null;

  @Column('char', { name: 'LTVURGENCIA', nullable: true, length: 1 })
  ltvurgencia: string | null;

  @Column('float', { name: 'LTVENTRADA', nullable: true, precision: 53 })
  ltventrada: number | null;

  @Column('smallint', { name: 'LTVQTPPARENTRADA', nullable: true })
  ltvqtpparentrada: number | null;

  @Column('datetime', { name: 'LTVVENCPARENTRADA', nullable: true })
  ltvvencparentrada: Date | null;

  @Column('float', { name: 'LTVPOUPANCA', nullable: true, precision: 53 })
  ltvpoupanca: number | null;

  @Column('char', { name: 'LTVPOUPPRICE', nullable: true, length: 1 })
  ltvpoupprice: string | null;

  @Column('int', { name: 'LTVPOUPPARCELAS', nullable: true })
  ltvpoupparcelas: number | null;

  @Column('float', { name: 'LTVPOUPPARCELASVL', nullable: true, precision: 53 })
  ltvpoupparcelasvl: number | null;

  @Column('float', { name: 'LTVMAISJUROS', precision: 53 })
  ltvmaisjuros: number;

  @Column('char', { name: 'LTVTABELAPRICE', nullable: true, length: 1 })
  ltvtabelaprice: string | null;

  @Column('smallint', { name: 'LTVPARCELAS' })
  ltvparcelas: number;

  @Column('smallint', { name: 'LTVPERIODICIDADE', default: () => '(12)' })
  ltvperiodicidade: number;

  @Column('smallint', { name: 'LTVQTPPARDIF', nullable: true })
  ltvqtppardif: number | null;

  @Column('datetime', {
    name: 'LTVDATACADASTRO',
    default: () => 'CONVERT([datetime],getdate(),0)',
  })
  ltvdatacadastro: Date;

  @Column('datetime', { name: 'LTVDATADAVENDA' })
  ltvdatadavenda: Date;

  @Column('datetime', { name: 'LTVPRIMEIRAPARCELA' })
  ltvprimeiraparcela: Date;

  @Column('char', { name: 'LTVDATABASE', nullable: true, length: 2 })
  ltvdatabase: string | null;

  @Column('datetime', { name: 'LTVPROXREAJUSTE', nullable: true })
  ltvproxreajuste: Date | null;

  @Column('datetime', { name: 'LTVEMISSAOCONTRATO', nullable: true })
  ltvemissaocontrato: Date | null;

  @Column('datetime', { name: 'LTVASSINADOPROPRIETARIO', nullable: true })
  ltvassinadoproprietario: Date | null;

  @Column('datetime', { name: 'LTVDATANOTIFICACAO', nullable: true })
  ltvdatanotificacao: Date | null;

  @Column('char', { name: 'LTVNAOCOBRAR', nullable: true, length: 1 })
  ltvnaocobrar: string | null;

  @Column('char', { name: 'LTVNC', nullable: true, length: 1 })
  ltvnc: string | null;

  @Column('char', { name: 'LTVPE', nullable: true, length: 1 })
  ltvpe: string | null;

  @Column('char', { name: 'LTVCCA', nullable: true, length: 2 })
  ltvcca: string | null;

  @Column('varchar', { name: 'LTVPROTOCOLO', nullable: true, length: 20 })
  ltvprotocolo: string | null;

  @Column('char', { name: 'LTVVISTORIA', nullable: true, length: 1 })
  ltvvistoria: string | null;

  @Column('char', { name: 'LTVGERAARRAS', nullable: true, length: 1 })
  ltvgeraarras: string | null;

  @Column('char', {
    name: 'LTVGERAFINANC',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ltvgerafinanc: string | null;

  @Column('char', { name: 'LTVGERAFINANCENT', nullable: true, length: 1 })
  ltvgerafinancent: string | null;

  @Column('char', { name: 'LTVGEROUPARCS', nullable: true, length: 1 })
  ltvgerouparcs: string | null;

  @Column('char', { name: 'LTVLEGADO', nullable: true, length: 1 })
  ltvlegado: string | null;

  @Column('float', { name: 'LTVPERCDESCONTO', nullable: true, precision: 53 })
  ltvpercdesconto: number | null;

  @Column('datetime', { name: 'LTVDTOCUPADO', nullable: true })
  ltvdtocupado: Date | null;

  @Column('float', { name: 'LTVVALORPARCELA', nullable: true, precision: 53 })
  ltvvalorparcela: number | null;

  @Column('float', { name: 'LTVVLRFINANC', nullable: true, precision: 53 })
  ltvvlrfinanc: number | null;

  @Column('float', { name: 'LTVTOTALDIFER', nullable: true, precision: 53 })
  ltvtotaldifer: number | null;

  @Column('int', { name: 'LTVUSUALTERACAO', nullable: true })
  ltvusualteracao: number | null;

  @Column('int', { name: 'LTVUSUINCLUSAO', nullable: true })
  ltvusuinclusao: number | null;

  @Column('datetime', { name: 'LTVDHALTERACAO', nullable: true })
  ltvdhalteracao: Date | null;

  @Column('datetime', { name: 'LTVDHINCLUSAO', nullable: true })
  ltvdhinclusao: Date | null;

  @Column('char', { name: 'LTVJUSTICACOMUM', nullable: true, length: 1 })
  ltvjusticacomum: string | null;

  @Column('datetime', { name: 'LTVDTULTREAJUSTE', nullable: true })
  ltvdtultreajuste: Date | null;

  @Column('datetime', { name: 'LTVDTINICFINANC', nullable: true })
  ltvdtinicfinanc: Date | null;

  @Column('float', { name: 'LTVVLRFINANCBANCO', nullable: true, precision: 53 })
  ltvvlrfinancbanco: number | null;

  @Column('datetime', { name: 'LTVDTFINANCBANCO', nullable: true })
  ltvdtfinancbanco: Date | null;

  @Column('float', {
    name: 'LTVVLRTOTALINTERMED',
    nullable: true,
    precision: 53,
  })
  ltvvlrtotalintermed: number | null;

  @Column('float', { name: 'LTVVLRTOTALBALAO', nullable: true, precision: 53 })
  ltvvlrtotalbalao: number | null;

  @Column('char', { name: 'LTVAPLICARFRUICAO', nullable: true, length: 1 })
  ltvaplicarfruicao: string | null;

  @Column('float', { name: 'LTVOLDJUROS', nullable: true, precision: 53 })
  ltvoldjuros: number | null;

  @Column('char', { name: 'LTVTXCOMMANUAL', nullable: true, length: 1 })
  ltvtxcommanual: string | null;

  @Column('smallint', { name: 'LTVCARENCIA', nullable: true })
  ltvcarencia: number | null;

  @OneToMany(() => TimacmEntity, (timacmEntity) => timacmEntity.acmcontrato2)
  timacms: TimacmEntity[];

  @OneToMany(() => TimapoEntity, (timapoEntity) => timapoEntity.apocontrato2)
  timapos: TimapoEntity[];

  @OneToMany(() => TimaprEntity, (timaprEntity) => timaprEntity.aprcontrato2)
  timaprs: TimaprEntity[];

  @OneToMany(() => TimbalEntity, (timbalEntity) => timbalEntity.balcontrato2)
  timbals: TimbalEntity[];

  @OneToMany(() => TimdlvEntity, (timdlvEntity) => timdlvEntity.dlvcontrato2)
  timdlvs: TimdlvEntity[];

  @OneToMany(() => TimintEntity, (timintEntity) => timintEntity.intcontrato2)
  timints: TimintEntity[];

  @OneToMany(() => TimlbfEntity, (timlbfEntity) => timlbfEntity.lbfcontrato2)
  timlbfs: TimlbfEntity[];

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timltvs)
  @JoinColumn([{ name: 'LTVIMOBILIARIA', referencedColumnName: 'imbcodigo' }])
  ltvimobiliaria: TimimbEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timltvs)
  @JoinColumn([{ name: 'LTVCORRETOR', referencedColumnName: 'corcodigo' }])
  ltvcorretor: TimcorEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timltvs2)
  @JoinColumn([{ name: 'LTVSUPERVISORCOR', referencedColumnName: 'corcodigo' }])
  ltvsupervisorcor: TimcorEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timltvs3)
  @JoinColumn([{ name: 'LTVGERENTECOR', referencedColumnName: 'corcodigo' }])
  ltvgerentecor: TimcorEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timltvs)
  @JoinColumn([{ name: 'LTVINDICECORRECAO', referencedColumnName: 'codmoeda' }])
  ltvindicecorrecao: TsimoeEntity;

  @ManyToOne(() => TimlteEntity, (timlteEntity) => timlteEntity.timltvs)
  @JoinColumn([{ name: 'LTVLOTE', referencedColumnName: 'ltecodigo' }])
  ltvlote: TimlteEntity;

  @OneToMany(() => TimlvcEntity, (timlvcEntity) => timlvcEntity.lvccontrato2)
  timlvcs: TimlvcEntity[];

  @OneToMany(() => TimlvrEntity, (timlvrEntity) => timlvrEntity.lvrcontrato2)
  timlvrs: TimlvrEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdcontratoltv)
  timmfds: TimmfdEntity[];

  @OneToMany(() => TimrcvEntity, (timrcvEntity) => timrcvEntity.rcvcontrato2)
  timrcvs: TimrcvEntity[];

  @OneToMany(() => TimrenEntity, (timrenEntity) => timrenEntity.rencontrato)
  timrens: TimrenEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.sacvendalote)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimtlvEntity, (timtlvEntity) => timtlvEntity.tlvcontrato2)
  timtlvs: TimtlvEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdocontratoltv)
  timvdos: TimvdoEntity[];
}
