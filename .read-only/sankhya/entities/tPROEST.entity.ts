import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';
import { TprropeEntity } from './tPRROPE.entity';

@Index('PK_TPROEST', ['idefx', 'seqoper'], { unique: true })
@Entity('TPROEST', { schema: 'SANKHYA' })
export class TproestEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('smallint', { primary: true, name: 'SEQOPER' })
  seqoper: number;

  @Column('int', { name: 'IDEFXBASE', nullable: true })
  idefxbase: number | null;

  @Column('smallint', { name: 'ORDEM', default: () => '(1)' })
  ordem: number;

  @Column('varchar', { name: 'QUANDO', length: 2 })
  quando: string;

  @Column('int', { name: 'NUNOTAMODELO' })
  nunotamodelo: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('int', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('int', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('int', { name: 'CODLOCALORIG', default: () => '(0)' })
  codlocalorig: number;

  @Column('int', { name: 'CODLOCALDEST', default: () => '(0)' })
  codlocaldest: number;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('smallint', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('varchar', { name: 'TIPOITENS', length: 2 })
  tipoitens: string;

  @Column('char', { name: 'SELIMPRESSORA', length: 1, default: () => "'T'" })
  selimpressora: string;

  @Column('varchar', { name: 'NOMEIMPRESSORA', nullable: true, length: 100 })
  nomeimpressora: string | null;

  @Column('char', { name: 'STATUSEXEC', length: 1, default: () => "'T'" })
  statusexec: string;

  @Column('int', { name: 'IDFORM', nullable: true })
  idform: number | null;

  @Column('char', { name: 'CONFIRMAR', length: 1, default: () => "'S'" })
  confirmar: string;

  @Column('int', { name: 'CODLOCALBAIXAMP', default: () => '(0)' })
  codlocalbaixamp: number;

  @Column('char', { name: 'BAIXARESERVAEST', length: 1, default: () => "'N'" })
  baixareservaest: string;

  @Column('char', { name: 'TIPOEXEC', length: 1, default: () => "'P'" })
  tipoexec: string;

  @Column('char', { name: 'USARPARCTERC', length: 1, default: () => "'N'" })
  usarparcterc: string;

  @Column('varchar', { name: 'TIPOMATERIAL', length: 2, default: () => "'AB'" })
  tipomaterial: string;

  @Column('char', { name: 'ANULAOPEREST', length: 1, default: () => "'N'" })
  anulaoperest: string;

  @Column('varchar', {
    name: 'UTILIZALOCALORIG',
    length: 1,
    default: () => "'N'",
  })
  utilizalocalorig: string;

  @Column('smallint', { name: 'CODTIPOPERPERDA', nullable: true })
  codtipoperperda: number | null;

  @Column('int', { name: 'CODLOCALDESTPERDA', default: () => '(0)' })
  codlocaldestperda: number;

  @Column('varchar', {
    name: 'CONSUMIRESTOQUE',
    nullable: true,
    length: 20,
    default: () => "'T'",
  })
  consumirestoque: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPOOPER', length: 1, default: () => "'A'" })
  tipooper: string;

  @Column('varchar', {
    name: 'OBRIGATORIO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  obrigatorio: string | null;

  @Column('char', { name: 'TIPOOPERENCAD', length: 1, default: () => "'A'" })
  tipooperencad: string;

  @Column('char', { name: 'OBRIGENCAD', length: 1, default: () => "'N'" })
  obrigencad: string;

  @Column('char', { name: 'CONFIRMENCAD', length: 1, default: () => "'S'" })
  confirmencad: string;

  @Column('int', { name: 'NUMODELOENCAD', nullable: true })
  numodeloencad: number | null;

  @Column('int', { name: 'CODTIPOPERENCAD', nullable: true })
  codtipoperencad: number | null;

  @Column('int', { name: 'CODPARCENCAD', nullable: true })
  codparcencad: number | null;

  @Column('smallint', { name: 'CODEMPDESTENCAD', nullable: true })
  codempdestencad: number | null;

  @Column('int', { name: 'CODLOCALDESTENCAD', default: () => '(0)' })
  codlocaldestencad: number;

  @Column('char', { name: 'TIPOPRODUCAO', length: 1, default: () => "'A'" })
  tipoproducao: string;

  @Column('char', {
    name: 'USARPARCTERCENCAD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usarparctercencad: string | null;

  @Column('char', { name: 'KANBAN', length: 1, default: () => "'N'" })
  kanban: string;

  @Column('int', { name: 'NUNOTAMODELOKANBAN', nullable: true })
  nunotamodelokanban: number | null;

  @Column('int', { name: 'CODTIPOPERKANBAN', nullable: true })
  codtipoperkanban: number | null;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tproests, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;

  @OneToMany(() => TprropeEntity, (tprropeEntity) => tprropeEntity.tproest)
  tprropes: TprropeEntity[];
}
