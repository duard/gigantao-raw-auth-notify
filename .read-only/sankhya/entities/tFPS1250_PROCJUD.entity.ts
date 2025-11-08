import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1250IdeprodutorEntity } from './tFPS1250_IDEPRODUTOR.entity';

@Index(
  'PK_TFPS1250_PROCJUD',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1250',
    'indaquis',
    'chaveideprod',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1250_PROCJUD', { schema: 'SANKHYA' })
export class Tfps1250ProcjudEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEIDEPROD', length: 100 })
  chaveideprod: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('int', { name: 'NUPROCESSO', nullable: true })
  nuprocesso: number | null;

  @Column('varchar', { name: 'NRPROCJUD', nullable: true, length: 21 })
  nrprocjud: string | null;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('float', { name: 'VRCPNRET', nullable: true, precision: 53 })
  vrcpnret: number | null;

  @Column('float', { name: 'VRRATNRET', nullable: true, precision: 53 })
  vrratnret: number | null;

  @Column('float', { name: 'VRSENARNRET', nullable: true, precision: 53 })
  vrsenarnret: number | null;

  @ManyToOne(
    () => Tfps1250IdeprodutorEntity,
    (tfps1250IdeprodutorEntity) => tfps1250IdeprodutorEntity.tfps1250Procjuds,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1250', referencedColumnName: 'chave1250' },
    { name: 'INDAQUIS', referencedColumnName: 'indaquis' },
    { name: 'CHAVEIDEPROD', referencedColumnName: 'chave' },
  ])
  tfps1250Ideprodutor: Tfps1250IdeprodutorEntity;
}
