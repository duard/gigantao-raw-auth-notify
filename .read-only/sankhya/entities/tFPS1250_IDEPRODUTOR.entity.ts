import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps1250TpaquisEntity } from './tFPS1250_TPAQUIS.entity';
import { Tfps1250NfsEntity } from './tFPS1250_NFS.entity';
import { Tfps1250ProcjudEntity } from './tFPS1250_PROCJUD.entity';

@Index(
  'PK_TFPS1250_AQUIS_NFS',
  ['codemp', 'dtref', 'sequencia', 'tpamb', 'chave1250', 'indaquis', 'chave'],
  { unique: true },
)
@Entity('TFPS1250_IDEPRODUTOR', { schema: 'SANKHYA' })
export class Tfps1250IdeprodutorEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE1250', length: 100 })
  chave1250: string;

  @Column('varchar', { primary: true, name: 'INDAQUIS', length: 100 })
  indaquis: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('smallint', { name: 'TPINSCPROD', nullable: true })
  tpinscprod: number | null;

  @Column('varchar', { name: 'NRINSCPROD', nullable: true, length: 15 })
  nrinscprod: string | null;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('float', { name: 'VRCPDESCPR', nullable: true, precision: 53 })
  vrcpdescpr: number | null;

  @Column('float', { name: 'VRRATDESCPR', nullable: true, precision: 53 })
  vrratdescpr: number | null;

  @Column('float', { name: 'VRSENARDESC', nullable: true, precision: 53 })
  vrsenardesc: number | null;

  @Column('smallint', { name: 'INDOPCCP', nullable: true })
  indopccp: number | null;

  @ManyToOne(
    () => Tfps1250TpaquisEntity,
    (tfps1250TpaquisEntity) => tfps1250TpaquisEntity.tfps1250Ideprodutors,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1250', referencedColumnName: 'chave1250' },
    { name: 'INDAQUIS', referencedColumnName: 'chave' },
  ])
  tfps1250Tpaquis: Tfps1250TpaquisEntity;

  @OneToMany(
    () => Tfps1250NfsEntity,
    (tfps1250NfsEntity) => tfps1250NfsEntity.tfps1250Ideprodutor,
  )
  tfps1250Nfs: Tfps1250NfsEntity[];

  @OneToMany(
    () => Tfps1250ProcjudEntity,
    (tfps1250ProcjudEntity) => tfps1250ProcjudEntity.tfps1250Ideprodutor,
  )
  tfps1250Procjuds: Tfps1250ProcjudEntity[];
}
