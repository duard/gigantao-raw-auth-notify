import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1260IdeadquirEntity } from './tFPS1260_IDEADQUIR.entity';

@Index(
  'PK_TFPS1260_NFS',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1260',
    'indcomerc',
    'chaveideadquir',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1260_NFS', { schema: 'SANKHYA' })
export class Tfps1260NfsEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEIDEADQUIR', length: 100 })
  chaveideadquir: string;

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
    () => Tfps1260IdeadquirEntity,
    (tfps1260IdeadquirEntity) => tfps1260IdeadquirEntity.tfps1260Nfs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1260', referencedColumnName: 'chave1260' },
    { name: 'INDCOMERC', referencedColumnName: 'indcomerc' },
    { name: 'CHAVEIDEADQUIR', referencedColumnName: 'chave' },
  ])
  tfps1260Ideadquir: Tfps1260IdeadquirEntity;
}
