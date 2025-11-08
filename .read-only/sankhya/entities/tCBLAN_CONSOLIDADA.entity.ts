import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TcbconsolidadaEntity } from './tCBCONSOLIDADA.entity';
import { TcbintConsolidadaEntity } from './tCBINT_CONSOLIDADA.entity';

@Index(
  'PK_TCBLAN_CONSOLIDADA',
  [
    'idconsolid',
    'codemp',
    'referencia',
    'numlote',
    'numlanc',
    'tiplanc',
    'sequencia',
  ],
  { unique: true },
)
@Entity('TCBLAN_CONSOLIDADA', { schema: 'SANKHYA' })
export class TcblanConsolidadaEntity {
  @Column('smallint', { primary: true, name: 'IDCONSOLID' })
  idconsolid: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('int', { primary: true, name: 'NUMLANC' })
  numlanc: number;

  @Column('varchar', { primary: true, name: 'TIPLANC', length: 1 })
  tiplanc: string;

  @Column('int', { name: 'CODCTACTB' })
  codctactb: number;

  @Column('int', { name: 'CODCONPAR', nullable: true })
  codconpar: number | null;

  @Column('int', { name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('decimal', { name: 'VLRLANC', precision: 15, scale: 2 })
  vlrlanc: number;

  @Column('smallint', { name: 'CODHISTCTB', nullable: true })
  codhistctb: number | null;

  @Column('varchar', { name: 'COMPLHIST', nullable: true, length: 3103 })
  complhist: string | null;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('datetime', { name: 'VENCIMENTO', nullable: true })
  vencimento: Date | null;

  @Column('varchar', { name: 'LIBERADO', length: 1 })
  liberado: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('varchar', { name: 'PARTLALUR_A', nullable: true, length: 1 })
  partlalurA: string | null;

  @Column('varchar', { name: 'EXTEMPORANEO', nullable: true, length: 1 })
  extemporaneo: string | null;

  @Column('datetime', { name: 'DTEXTEMPORANEO', nullable: true })
  dtextemporaneo: Date | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @OneToMany(
    () => TcbintConsolidadaEntity,
    (tcbintConsolidadaEntity) => tcbintConsolidadaEntity.tcblanConsolidada,
  )
  tcbintConsolidadas: TcbintConsolidadaEntity[];

  @ManyToOne(
    () => TcbconsolidadaEntity,
    (tcbconsolidadaEntity) => tcbconsolidadaEntity.tcblanConsolidadas,
  )
  @JoinColumn([{ name: 'IDCONSOLID', referencedColumnName: 'idconsolid' }])
  idconsol: TcbconsolidadaEntity;
}
