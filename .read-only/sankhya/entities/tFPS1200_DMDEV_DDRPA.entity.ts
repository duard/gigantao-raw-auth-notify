import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1200DmdevDrpaEntity } from './tFPS1200_DMDEV_DRPA.entity';

@Index(
  'PK_TFPS1200_DMDEV_DDRPA',
  [
    'codemp',
    'dtref',
    'sequencia',
    'tpamb',
    'chave1200',
    'idedmdev',
    'codlotacao',
    'matricula',
    'cnpjoper',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_DMDEV_DDRPA', { schema: 'SANKHYA' })
export class Tfps1200DmdevDdrpaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE1200', length: 100 })
  chave1200: string;

  @Column('varchar', { primary: true, name: 'IDEDMDEV', length: 100 })
  idedmdev: string;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 100 })
  codlotacao: string;

  @Column('varchar', { primary: true, name: 'MATRICULA', length: 100 })
  matricula: string;

  @Column('varchar', { primary: true, name: 'CNPJOPER', length: 100 })
  cnpjoper: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPDEP', nullable: true, length: 2 })
  tpdep: string | null;

  @Column('varchar', { name: 'CPFDEP', nullable: true, length: 11 })
  cpfdep: string | null;

  @Column('varchar', { name: 'NMDEP', nullable: true, length: 70 })
  nmdep: string | null;

  @Column('datetime', { name: 'DTNASCTO', nullable: true })
  dtnascto: Date | null;

  @Column('float', { name: 'VLRPGDEP', nullable: true, precision: 53 })
  vlrpgdep: number | null;

  @ManyToOne(
    () => Tfps1200DmdevDrpaEntity,
    (tfps1200DmdevDrpaEntity) => tfps1200DmdevDrpaEntity.tfps1200DmdevDdrpas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE1200', referencedColumnName: 'chave1200' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
    { name: 'MATRICULA', referencedColumnName: 'matricula' },
    { name: 'CNPJOPER', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevDrpa: Tfps1200DmdevDrpaEntity;
}
