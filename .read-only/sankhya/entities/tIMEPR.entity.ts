import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimclaEntity } from './tIMCLA.entity';
import { TimecrEntity } from './tIMECR.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TimedgEntity } from './tIMEDG.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TimfeaEntity } from './tIMFEA.entity';
import { TimfecEntity } from './tIMFEC.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMEPR', ['eprcodigo'], { unique: true })
@Entity('TIMEPR', { schema: 'SANKHYA' })
export class TimeprEntity {
  @Column('int', { primary: true, name: 'EPRCODIGO' })
  eprcodigo: number;

  @Column('varchar', { name: 'EPREMPREENDIMENTO', nullable: true, length: 50 })
  eprempreendimento: string | null;

  @Column('datetime', { name: 'EPRDATADELANCAMENTO', nullable: true })
  eprdatadelancamento: Date | null;

  @Column('datetime', { name: 'EPRDATADEENTREGA', nullable: true })
  eprdatadeentrega: Date | null;

  @Column('varchar', { name: 'EPRENDERECO', nullable: true, length: 50 })
  eprendereco: string | null;

  @Column('varchar', { name: 'EPRCEP', nullable: true, length: 8 })
  eprcep: string | null;

  @Column('float', { name: 'EPRAREA', nullable: true, precision: 53 })
  eprarea: number | null;

  @Column('smallint', { name: 'EPRTORRES', nullable: true })
  eprtorres: number | null;

  @Column('smallint', { name: 'EPRPAVIMENTOS', nullable: true })
  eprpavimentos: number | null;

  @Column('smallint', { name: 'EPRANDARES', nullable: true })
  eprandares: number | null;

  @Column('smallint', { name: 'EPRAPTOPORANDAR', nullable: true })
  epraptoporandar: number | null;

  @Column('smallint', { name: 'EPRSUBSOLO', nullable: true })
  eprsubsolo: number | null;

  @Column('smallint', { name: 'EPRELEVADORES', nullable: true })
  eprelevadores: number | null;

  @Column('float', { name: 'EPRCOMISSAOVENDA', nullable: true, precision: 53 })
  eprcomissaovenda: number | null;

  @Column('float', {
    name: 'EPRCOMISSAOCAPTACAO',
    nullable: true,
    precision: 53,
  })
  eprcomissaocaptacao: number | null;

  @Column('int', { name: 'EPRREFERENTEA', nullable: true })
  eprreferentea: number | null;

  @Column('varchar', { name: 'EPRRESUMIDO', nullable: true, length: 30 })
  eprresumido: string | null;

  @Column('float', { name: 'EPRIVV', nullable: true, precision: 53 })
  eprivv: number | null;

  @Column('float', { name: 'EPRSINAL', nullable: true, precision: 53 })
  eprsinal: number | null;

  @Column('smallint', { name: 'EPRSINALPARCELAS', nullable: true })
  eprsinalparcelas: number | null;

  @Column('float', { name: 'EPRBALOES', nullable: true, precision: 53 })
  eprbaloes: number | null;

  @Column('smallint', { name: 'EPRBALOESPARCELAS', nullable: true })
  eprbaloesparcelas: number | null;

  @Column('smallint', { name: 'EPRBALOESPERIODO', nullable: true })
  eprbaloesperiodo: number | null;

  @Column('smallint', { name: 'EPRMAXPARCELAS', nullable: true })
  eprmaxparcelas: number | null;

  @Column('float', { name: 'EPRUNICA', nullable: true, precision: 53 })
  eprunica: number | null;

  @Column('varchar', { name: 'EPRQDOUNICA', nullable: true, length: 20 })
  eprqdounica: string | null;

  @Column('smallint', { name: 'EPRTIPOCOMISSAO', nullable: true })
  eprtipocomissao: number | null;

  @Column('char', { name: 'EPRESTAGIO', nullable: true, length: 2 })
  eprestagio: string | null;

  @Column('smallint', { name: 'EPRUNIDADES', nullable: true })
  eprunidades: number | null;

  @Column('char', { name: 'EPRLANCAMENTO', nullable: true, length: 1 })
  eprlancamento: string | null;

  @Column('float', {
    name: 'EPRCOMISSAOGERENTE',
    nullable: true,
    precision: 53,
  })
  eprcomissaogerente: number | null;

  @Column('float', {
    name: 'EPRCOMISSAOSUPERVIS',
    nullable: true,
    precision: 53,
  })
  eprcomissaosupervis: number | null;

  @Column('int', { name: 'EPRGERENTEEMP', nullable: true })
  eprgerenteemp: number | null;

  @Column('int', { name: 'EPRCONTACORRENTE', nullable: true })
  eprcontacorrente: number | null;

  @Column('int', { name: 'EPRINDICEATECHAVES', nullable: true })
  eprindiceatechaves: number | null;

  @Column('smallint', { name: 'EPRRETROAGEATECHV', nullable: true })
  eprretroageatechv: number | null;

  @Column('int', { name: 'EPRINDICEAPOSCHAVES', nullable: true })
  eprindiceaposchaves: number | null;

  @Column('smallint', { name: 'EPRRETROAGEAPOSCHV', nullable: true })
  eprretroageaposchv: number | null;

  @Column('float', { name: 'EPRJUROSATECHAVES', nullable: true, precision: 53 })
  eprjurosatechaves: number | null;

  @Column('float', {
    name: 'EPRJUROSAPOSCHAVES',
    nullable: true,
    precision: 53,
  })
  eprjurosaposchaves: number | null;

  @Column('smallint', { name: 'EPRTABELAATECHV', nullable: true })
  eprtabelaatechv: number | null;

  @Column('smallint', { name: 'EPRTABELAAPOSCHV', nullable: true })
  eprtabelaaposchv: number | null;

  @Column('smallint', { name: 'EPRPERIODICIDADEATE', nullable: true })
  eprperiodicidadeate: number | null;

  @Column('smallint', { name: 'EPRPERIODICIDADEAPOS', nullable: true })
  eprperiodicidadeapos: number | null;

  @Column('int', { name: 'EPRSERVICO', nullable: true })
  eprservico: number | null;

  @Column('char', { name: 'EPRTIPO', nullable: true, length: 2 })
  eprtipo: string | null;

  @Column('varchar', { name: 'EPRNUMERO', nullable: true, length: 10 })
  eprnumero: string | null;

  @Column('char', { name: 'EPRLEGADO', nullable: true, length: 1 })
  eprlegado: string | null;

  @Column('int', { name: 'EPRNUFINMODCDU', nullable: true })
  eprnufinmodcdu: number | null;

  @Column('int', { name: 'EPRNUFINMODAP', nullable: true })
  eprnufinmodap: number | null;

  @Column('int', { name: 'EPRNUFINMODCE', nullable: true })
  eprnufinmodce: number | null;

  @Column('int', { name: 'EPRNUFINMODFPPP', nullable: true })
  eprnufinmodfppp: number | null;

  @Column('int', { name: 'EPRNUFINMODFPPF', nullable: true })
  eprnufinmodfppf: number | null;

  @Column('int', { name: 'EPRNUFINMODCCF', nullable: true })
  eprnufinmodccf: number | null;

  @Column('int', { name: 'EPRNUFINMODCCV', nullable: true })
  eprnufinmodccv: number | null;

  @Column('varchar', { name: 'EPRCOMPLEMENTO', nullable: true, length: 50 })
  eprcomplemento: string | null;

  @OneToMany(
    () => TimclaEntity,
    (timclaEntity) => timclaEntity.claempreendimento,
  )
  timclas: TimclaEntity[];

  @OneToMany(
    () => TimecrEntity,
    (timecrEntity) => timecrEntity.ecrempreendimento2,
  )
  timecrs: TimecrEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.timeprs)
  @JoinColumn([{ name: 'EPRCIDADE', referencedColumnName: 'codcid' }])
  eprcidade: TsicidEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.timeprs)
  @JoinColumn([{ name: 'EPRBAIRRO', referencedColumnName: 'codbai' }])
  eprbairro: TsibaiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timeprs)
  @JoinColumn([{ name: 'EPRUSUARIOALT', referencedColumnName: 'codusu' }])
  eprusuarioalt: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timeprs2)
  @JoinColumn([{ name: 'EPRUSUARIO', referencedColumnName: 'codusu' }])
  eprusuario: TsiusuEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.timeprs)
  @JoinColumn([{ name: 'EPRPROJCORBANCARIO', referencedColumnName: 'codproj' }])
  eprprojcorbancario: TcsprjEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.timeprs2)
  @JoinColumn([{ name: 'EPRPROJETO', referencedColumnName: 'codproj' }])
  eprprojeto: TcsprjEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.timeprs)
  @JoinColumn([{ name: 'EPRCODEND', referencedColumnName: 'codend' }])
  eprcodend: TsiendEntity;

  @ManyToOne(() => TimedgEntity, (timedgEntity) => timedgEntity.timeprs)
  @JoinColumn([{ name: 'EPREDIFICIO', referencedColumnName: 'edgcodigo' }])
  epredificio: TimedgEntity;

  @OneToMany(
    () => TimfacEntity,
    (timfacEntity) => timfacEntity.facempreendimento,
  )
  timfacs: TimfacEntity[];

  @OneToMany(
    () => TimfeaEntity,
    (timfeaEntity) => timfeaEntity.feaempreendimento2,
  )
  timfeas: TimfeaEntity[];

  @OneToMany(
    () => TimfecEntity,
    (timfecEntity) => timfecEntity.fecempreendimento2,
  )
  timfecs: TimfecEntity[];

  @OneToMany(
    () => TimimvEntity,
    (timimvEntity) => timimvEntity.imvempreendimento,
  )
  timimvs: TimimvEntity[];

  @OneToMany(
    () => TimsacEntity,
    (timsacEntity) => timsacEntity.sacempreendimento,
  )
  timsacs: TimsacEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdoempreendimento,
  )
  timvdos: TimvdoEntity[];
}
