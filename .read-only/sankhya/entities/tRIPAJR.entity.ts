import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TricabEntity } from './tRICAB.entity';
import { TriprisetEntity } from './tRIPRISET.entity';

@Index(
  'PK_TRIPAJR',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave', 'nuprocesso'],
  {
    unique: true,
  },
)
@Entity('TRIPAJR', { schema: 'SANKHYA' })
export class TripajrEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 20 })
  chave: string;

  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('char', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

  @Column('varchar', { name: 'IDEVENTO', nullable: true, length: 36 })
  idevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 52 })
  nroreciboant: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPPROC', nullable: true })
  tpproc: number | null;

  @Column('varchar', { name: 'NRPROC', nullable: true, length: 21 })
  nrproc: string | null;

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @Column('smallint', { name: 'INDAUTORIA', nullable: true })
  indautoria: number | null;

  @Column('varchar', { name: 'UFVARA', nullable: true, length: 2 })
  ufvara: string | null;

  @Column('int', { name: 'CODMUNIC', nullable: true })
  codmunic: number | null;

  @Column('varchar', { name: 'IDVARA', nullable: true, length: 4 })
  idvara: string | null;

  @Column('datetime', { name: 'INIVALIDNOVO', nullable: true })
  inivalidnovo: Date | null;

  @Column('datetime', { name: 'FIMVALIDNOVO', nullable: true })
  fimvalidnovo: Date | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.tripajrs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;

  @OneToMany(
    () => TriprisetEntity,
    (triprisetEntity) => triprisetEntity.tripajr,
  )
  triprisets: TriprisetEntity[];
}
