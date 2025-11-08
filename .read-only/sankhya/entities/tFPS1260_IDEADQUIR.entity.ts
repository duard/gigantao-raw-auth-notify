import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1260TpcomercEntity } from './tFPS1260_TPCOMERC.entity';
import { Tfps1260NfsEntity } from './tFPS1260_NFS.entity';
import { Tfps1260ProcjudEntity } from './tFPS1260_PROCJUD.entity';

@Index(
  'PK_TFPS1260_AQUIS_NFS',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1260', 'indcomerc', 'chave'],
  { unique: true },
)
@Entity('TFPS1260_IDEADQUIR', { schema: 'SANKHYA' })
export class Tfps1260IdeadquirEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE1260', length: 100 })
  chave1260: string;

  @Column('varchar', { primary: true, name: 'INDCOMERC', length: 100 })
  indcomerc: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPINSCADQUIR', nullable: true })
  tpinscadquir: number | null;

  @Column('varchar', { name: 'NRINSCADQUIR', nullable: true, length: 15 })
  nrinscadquir: string | null;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @ManyToOne(
    () => Tfps1260TpcomercEntity,
    (tfps1260TpcomercEntity) => tfps1260TpcomercEntity.tfps1260Ideadquirs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1260', referencedColumnName: 'chave1260' },
    { name: 'INDCOMERC', referencedColumnName: 'chave' },
  ])
  tfps1260Tpcomerc: Tfps1260TpcomercEntity;

  @OneToMany(
    () => Tfps1260NfsEntity,
    (tfps1260NfsEntity) => tfps1260NfsEntity.tfps1260Ideadquir,
  )
  tfps1260Nfs: Tfps1260NfsEntity[];

  @OneToMany(
    () => Tfps1260ProcjudEntity,
    (tfps1260ProcjudEntity) => tfps1260ProcjudEntity.tfps1260Ideadquir,
  )
  tfps1260Procjuds: Tfps1260ProcjudEntity[];
}
