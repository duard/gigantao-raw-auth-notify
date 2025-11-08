import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1210InfoircomplemAntEntity } from './tFPS1210_INFOIRCOMPLEM_ANT.entity';

@Index(
  'PK_TFPS1210_INFODEP_ANT',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1210',
    'chaveinfoir',
    'chave',
    'dtrefret',
    'sequenciaret',
  ],
  { unique: true },
)
@Entity('TFPS1210_INFODEP_ANT', { schema: 'SANKHYA' })
export class Tfps1210InfodepAntEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIARET',
    default: () => '(0)',
  })
  sequenciaret: number;

  @Column('char', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE1210', length: 100 })
  chave1210: string;

  @Column('varchar', { primary: true, name: 'CHAVEINFOIR', length: 100 })
  chaveinfoir: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('datetime', { primary: true, name: 'DTREFRET' })
  dtrefret: Date;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 70 })
  nome: string | null;

  @Column('varchar', { name: 'DEPIRRF', nullable: true, length: 1 })
  depirrf: string | null;

  @Column('varchar', { name: 'TPDEP', nullable: true, length: 2 })
  tpdep: string | null;

  @Column('varchar', { name: 'DESCRDEP', nullable: true, length: 100 })
  descrdep: string | null;

  @ManyToOne(
    () => Tfps1210InfoircomplemAntEntity,
    (tfps1210InfoircomplemAntEntity) =>
      tfps1210InfoircomplemAntEntity.tfps1210InfodepAnts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1210', referencedColumnName: 'chave1210' },
    { name: 'CHAVEINFOIR', referencedColumnName: 'chave' },
    { name: 'DTREFRET', referencedColumnName: 'dtrefret' },
    { name: 'SEQUENCIARET', referencedColumnName: 'sequenciaret' },
  ])
  tfps1210InfoircomplemAnt: Tfps1210InfoircomplemAntEntity;
}
