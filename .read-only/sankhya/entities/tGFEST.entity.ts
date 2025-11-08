import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index(
  'PK_TGFEST',
  ['codemp', 'codprod', 'codlocal', 'controle', 'codparc', 'tipo'],
  {
    unique: true,
  },
)
@Index('TGFEST_I01', ['codprod', 'codparc'], {})
@Index('TGFEST_I02', ['codprod', 'controle', 'codbarra'], {})
@Entity('TGFEST', { schema: 'SANKHYA' })
export class TgfestEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', {
    name: 'RESERVADO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  reservado: number | null;

  @Column('float', { name: 'ESTMIN', precision: 53, default: () => '(0)' })
  estmin: number;

  @Column('float', { name: 'ESTMAX', precision: 53, default: () => '(0)' })
  estmax: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('char', {
    primary: true,
    name: 'TIPO',
    length: 1,
    default: () => "'P'",
  })
  tipo: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('float', { name: 'PERCPUREZA', nullable: true, precision: 53 })
  percpureza: number | null;

  @Column('float', { name: 'PERCGERMIN', nullable: true, precision: 53 })
  percgermin: number | null;

  @Column('float', {
    name: 'ESTOQUE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  estoque: number | null;

  @Column('datetime', { name: 'DTFABRICACAO', nullable: true })
  dtfabricacao: Date | null;

  @Column('varchar', { name: 'STATUSLOTE', length: 1, default: () => "'N'" })
  statuslote: string;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('datetime', { name: 'DTENTRADA', nullable: true })
  dtentrada: Date | null;

  @Column('float', { name: 'QTDPEDPENDEST', nullable: true, precision: 53 })
  qtdpedpendest: number | null;

  @Column('float', { name: 'WMSBLOQUEADO', nullable: true, precision: 53 })
  wmsbloqueado: number | null;

  @Column('float', { name: 'PERCVC', nullable: true, precision: 53 })
  percvc: number | null;

  @Column('varchar', { name: 'CODAGREGACAO', nullable: true, length: 20 })
  codagregacao: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfests)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfests)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfests)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfests)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
