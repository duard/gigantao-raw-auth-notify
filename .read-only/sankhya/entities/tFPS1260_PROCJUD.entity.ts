import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1260IdeadquirEntity } from './tFPS1260_IDEADQUIR.entity';

@Index(
  'PK_TFPS1260_PROCJUD',
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
@Entity('TFPS1260_PROCJUD', { schema: 'SANKHYA' })
export class Tfps1260ProcjudEntity {
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

  @Column('int', { name: 'NUPROCESSO', nullable: true })
  nuprocesso: number | null;

  @Column('smallint', { name: 'TPPROCJUD', nullable: true })
  tpprocjud: number | null;

  @Column('varchar', { name: 'NRPROCJUD', nullable: true, length: 21 })
  nrprocjud: string | null;

  @Column('varchar', { name: 'CODSUSP', nullable: true, length: 14 })
  codsusp: string | null;

  @Column('float', { name: 'VRCPSUSP', nullable: true, precision: 53 })
  vrcpsusp: number | null;

  @Column('float', { name: 'VRRATSUSP', nullable: true, precision: 53 })
  vrratsusp: number | null;

  @Column('float', { name: 'VRSENARSUSP', nullable: true, precision: 53 })
  vrsenarsusp: number | null;

  @ManyToOne(
    () => Tfps1260IdeadquirEntity,
    (tfps1260IdeadquirEntity) => tfps1260IdeadquirEntity.tfps1260Procjuds,
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
