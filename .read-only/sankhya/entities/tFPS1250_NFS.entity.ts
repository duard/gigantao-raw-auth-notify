import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1250IdeprodutorEntity } from './tFPS1250_IDEPRODUTOR.entity';

@Index(
  'PK_TFPS1250_NFS',
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
@Entity('TFPS1250_NFS', { schema: 'SANKHYA' })
export class Tfps1250NfsEntity {
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

  @Column('varchar', { name: 'SERIE', nullable: true, length: 5 })
  serie: string | null;

  @Column('varchar', { name: 'NRDOCTO', nullable: true, length: 20 })
  nrdocto: string | null;

  @Column('datetime', { name: 'DTEMISNF', nullable: true })
  dtemisnf: Date | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('float', { name: 'VLRBRUTO', nullable: true, precision: 53 })
  vlrbruto: number | null;

  @Column('float', { name: 'VRCPDESCPR', nullable: true, precision: 53 })
  vrcpdescpr: number | null;

  @Column('float', { name: 'VRRATDESCPR', nullable: true, precision: 53 })
  vrratdescpr: number | null;

  @Column('float', { name: 'VRSENARDESC', nullable: true, precision: 53 })
  vrsenardesc: number | null;

  @ManyToOne(
    () => Tfps1250IdeprodutorEntity,
    (tfps1250IdeprodutorEntity) => tfps1250IdeprodutorEntity.tfps1250Nfs,
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
