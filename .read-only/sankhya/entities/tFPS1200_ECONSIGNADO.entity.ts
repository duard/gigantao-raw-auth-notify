import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps1200DmdevIrpaEntity } from './tFPS1200_DMDEV_IRPA.entity';

@Index(
  'PK_TFPS1200_ECONSIGNADO',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave1200',
    'idedmdev',
    'codlotacao',
    'matricula',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS1200_ECONSIGNADO', { schema: 'SANKHYA' })
export class Tfps1200EconsignadoEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TIPODESCONTO', nullable: true, length: 1 })
  tipodesconto: string | null;

  @Column('varchar', { name: 'CODBCO', nullable: true, length: 3 })
  codbco: string | null;

  @Column('varchar', { name: 'NROCONTRATO', nullable: true, length: 15 })
  nrocontrato: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @ManyToOne(
    () => Tfps1200DmdevIrpaEntity,
    (tfps1200DmdevIrpaEntity) => tfps1200DmdevIrpaEntity.tfps1200Econsignados,
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
    { name: 'CHAVEIRPA', referencedColumnName: 'chave' },
  ])
  tfps1200DmdevIrpa: Tfps1200DmdevIrpaEntity;
}
