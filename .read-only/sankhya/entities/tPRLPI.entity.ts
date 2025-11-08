import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprprcEntity } from './tPRPRC.entity';

@Index(
  'PK_TPRLPI',
  ['idproc', 'codprodpa', 'controlepa', 'codprodpi', 'controlepi'],
  {
    unique: true,
  },
)
@Index('TPRLPI_IDPROC_IDX', ['idproc', 'codprodpa', 'controlepa', 'tipopi'], {})
@Entity('TPRLPI', { schema: 'SANKHYA' })
export class TprlpiEntity {
  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('int', { primary: true, name: 'CODPRODPI' })
  codprodpi: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLEPI',
    length: 11,
    default: () => "' '",
  })
  controlepi: string;

  @Column('char', { name: 'TIPOPI', length: 1, default: () => "'E'" })
  tipopi: string;

  @Column('char', { name: 'TIPOSUBOP', length: 1, default: () => "'I'" })
  tiposubop: string;

  @Column('char', { name: 'AGUARDARSUBOP', length: 1, default: () => "'S'" })
  aguardarsubop: string;

  @Column('char', { name: 'TIPONROLOTE', length: 1, default: () => "'I'" })
  tiponrolote: string;

  @Column('char', { name: 'CONSIDERAQTDEST', length: 1, default: () => "'N'" })
  consideraqtdest: string;

  @Column('char', { name: 'REDIMENSIONAPA', length: 1, default: () => "'U'" })
  redimensionapa: string;

  @Column('char', {
    name: 'REDIMENSIONAPAPERDA',
    length: 1,
    default: () => "'U'",
  })
  redimensionapaperda: string;

  @Column('char', { name: 'CONSIDERALOTEPI', nullable: true, length: 1 })
  consideralotepi: string | null;

  @Column('char', { name: 'BLOQINITPA', nullable: true, length: 1 })
  bloqinitpa: string | null;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprlpis)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc2: TprprcEntity;
}
