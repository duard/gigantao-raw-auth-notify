import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps1010CpEntity } from './tFPS1010_CP.entity';
import { Tfps1010FgtsEntity } from './tFPS1010_FGTS.entity';
import { Tfps1010IrrfEntity } from './tFPS1010_IRRF.entity';
import { Tfps1010PispasepEntity } from './tFPS1010_PISPASEP.entity';
import { Tfps1010SindEntity } from './tFPS1010_SIND.entity';

@Index('PK_TFPS1010', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Index('TFPS1010_I01', ['tpamb', 'status', 'codemp', 'chave', 'nrorecibo'], {})
@Entity('TFPS1010', { schema: 'SANKHYA' })
export class Tfps1010Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'TPINSCEMPREGADOR', nullable: true })
  tpinscempregador: number | null;

  @Column('varchar', { name: 'NRINSCEMPREGADOR', nullable: true, length: 15 })
  nrinscempregador: string | null;

  @Column('varchar', { name: 'CODRUBR', nullable: true, length: 30 })
  codrubr: string | null;

  @Column('varchar', { name: 'IDETABRUBR', nullable: true, length: 10 })
  idetabrubr: string | null;

  @Column('varchar', { name: 'DSCRUBR', nullable: true, length: 100 })
  dscrubr: string | null;

  @Column('smallint', { name: 'NATRUBR', nullable: true })
  natrubr: number | null;

  @Column('smallint', { name: 'TPRUBR', nullable: true })
  tprubr: number | null;

  @Column('varchar', { name: 'CODINCCP', nullable: true, length: 2 })
  codinccp: string | null;

  @Column('varchar', { name: 'CODINCIRRF', nullable: true, length: 4 })
  codincirrf: string | null;

  @Column('varchar', { name: 'CODINCFGTS', nullable: true, length: 2 })
  codincfgts: string | null;

  @Column('varchar', { name: 'CODINCSIND', nullable: true, length: 2 })
  codincsind: string | null;

  @Column('char', { name: 'REPDSR', nullable: true, length: 1 })
  repdsr: string | null;

  @Column('char', { name: 'REP13', nullable: true, length: 1 })
  rep13: string | null;

  @Column('char', { name: 'REPFERIAS', nullable: true, length: 1 })
  repferias: string | null;

  @Column('char', { name: 'REPAVISO', nullable: true, length: 1 })
  repaviso: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('smallint', { name: 'CODEVENTO' })
  codevento: number;

  @Column('char', { name: 'STATUS', length: 1 })
  status: string;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 50 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBO_ANT', nullable: true, length: 50 })
  nroreciboAnt: string | null;

  @Column('char', { name: 'ACAO', nullable: true, length: 1 })
  acao: string | null;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTREF_ANT', nullable: true })
  dtrefAnt: Date | null;

  @Column('smallint', { name: 'SEQUENCIA_ANT', nullable: true })
  sequenciaAnt: number | null;

  @Column('varchar', { name: 'DESCREVT', nullable: true, length: 255 })
  descrevt: string | null;

  @Column('varchar', { name: 'CODINCPISPASEP', nullable: true, length: 2 })
  codincpispasep: string | null;

  @Column('datetime', { name: 'DTINIVALID', nullable: true })
  dtinivalid: Date | null;

  @OneToMany(
    () => Tfps1010CpEntity,
    (tfps1010CpEntity) => tfps1010CpEntity.tfps1,
  )
  tfps1010Cps: Tfps1010CpEntity[];

  @OneToMany(
    () => Tfps1010FgtsEntity,
    (tfps1010FgtsEntity) => tfps1010FgtsEntity.tfps1,
  )
  tfps1010Fgts: Tfps1010FgtsEntity[];

  @OneToMany(
    () => Tfps1010IrrfEntity,
    (tfps1010IrrfEntity) => tfps1010IrrfEntity.tfps1,
  )
  tfps1010Irrfs: Tfps1010IrrfEntity[];

  @OneToMany(
    () => Tfps1010PispasepEntity,
    (tfps1010PispasepEntity) => tfps1010PispasepEntity.tfps1,
  )
  tfps1010Pispaseps: Tfps1010PispasepEntity[];

  @OneToMany(
    () => Tfps1010SindEntity,
    (tfps1010SindEntity) => tfps1010SindEntity.tfps1,
  )
  tfps1010Sinds: Tfps1010SindEntity[];
}
