import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpctbEntity } from './tFPCTB.entity';

@Index('PK_TFPCTBFOR', ['formid'], { unique: true })
@Entity('TFPCTBFOR', { schema: 'SANKHYA' })
export class TfpctbforEntity {
  @Column('int', { primary: true, name: 'FORMID' })
  formid: number;

  @Column('varchar', { name: 'DESCR', length: 30 })
  descr: string;

  @Column('varchar', { name: 'INCORPORACAO', length: 1, default: () => "'N'" })
  incorporacao: string;

  @Column('varchar', { name: 'TERCOFERIAS', length: 1, default: () => "'S'" })
  tercoferias: string;

  @Column('float', { name: 'MULTIPLICADOR', nullable: true, precision: 53 })
  multiplicador: number | null;

  @Column('varchar', { name: 'PERFGTS', length: 1, default: () => "'N'" })
  perfgts: string;

  @Column('varchar', { name: 'PERINSS', length: 1, default: () => "'N'" })
  perinss: string;

  @Column('varchar', { name: 'PERINSS13', length: 1, default: () => "'N'" })
  perinss13: string;

  @Column('varchar', { name: 'PERGRPS', length: 1, default: () => "'N'" })
  pergrps: string;

  @Column('varchar', { name: 'PERSEGU', length: 1, default: () => "'N'" })
  persegu: string;

  @Column('varchar', { name: 'PERFAP', length: 1, default: () => "'N'" })
  perfap: string;

  @Column('varchar', { name: 'PERRAT', length: 1, default: () => "'N'" })
  perrat: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('char', { name: 'USACONDICAO', length: 1, default: () => "'N'" })
  usacondicao: string;

  @Column('varchar', {
    name: 'INCORPORACAO_2',
    length: 1,
    default: () => "'N'",
  })
  incorporacao_2: string;

  @Column('varchar', { name: 'TERCOFERIAS_2', length: 1, default: () => "'S'" })
  tercoferias_2: string;

  @Column('smallint', { name: 'MULTIPLICADOR_2', default: () => '(0)' })
  multiplicador_2: number;

  @Column('varchar', { name: 'PERFGTS_2', length: 1, default: () => "'N'" })
  perfgts_2: string;

  @Column('varchar', { name: 'PERINSS_2', length: 1, default: () => "'N'" })
  perinss_2: string;

  @Column('varchar', { name: 'PERINSS13_2', length: 1, default: () => "'N'" })
  perinss13_2: string;

  @Column('varchar', { name: 'PERGRPS_2', length: 1, default: () => "'N'" })
  pergrps_2: string;

  @Column('varchar', { name: 'PERSEGU_2', length: 1, default: () => "'N'" })
  persegu_2: string;

  @Column('varchar', { name: 'PERFAP_2', length: 1, default: () => "'N'" })
  perfap_2: string;

  @Column('varchar', { name: 'PERRAT_2', length: 1, default: () => "'N'" })
  perrat_2: string;

  @Column('varchar', { name: 'LICGEST', length: 1, default: () => "'N'" })
  licgest: string;

  @Column('varchar', { name: 'LICGEST_2', length: 1, default: () => "'N'" })
  licgest_2: string;

  @Column('varchar', { name: 'LICGEST13', length: 1, default: () => "'N'" })
  licgest13: string;

  @Column('varchar', { name: 'LICGEST13_2', length: 1, default: () => "'N'" })
  licgest13_2: string;

  @Column('varchar', { name: 'AFASTPARTEMP', length: 1, default: () => "'N'" })
  afastpartemp: string;

  @Column('varchar', {
    name: 'AFASTPARTEMP_2',
    length: 1,
    default: () => "'N'",
  })
  afastpartemp_2: string;

  @Column('varchar', { name: 'PERPIS', length: 1, default: () => "'N'" })
  perpis: string;

  @Column('varchar', { name: 'PERPIS_2', length: 1, default: () => "'N'" })
  perpis_2: string;

  @OneToMany(() => TfpctbEntity, (tfpctbEntity) => tfpctbEntity.formula2)
  tfpctbs: TfpctbEntity[];
}
