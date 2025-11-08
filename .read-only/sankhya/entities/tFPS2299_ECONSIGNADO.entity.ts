import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2299DmdevIrpaEntity } from './tFPS2299_DMDEV_IRPA.entity';

@Index(
  'PK_TFPS2299_ECONSIGNADO',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2299',
    'idedmdev',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2299_ECONSIGNADO', { schema: 'SANKHYA' })
export class Tfps2299EconsignadoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE2299', length: 100 })
  chave2299: string;

  @Column('varchar', { primary: true, name: 'IDEDMDEV', length: 100 })
  idedmdev: string;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 100 })
  codlotacao: string;

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
    () => Tfps2299DmdevIrpaEntity,
    (tfps2299DmdevIrpaEntity) => tfps2299DmdevIrpaEntity.tfps2299Econsignados,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
    { name: 'CHAVEIRPA', referencedColumnName: 'chave' },
  ])
  tfps2299DmdevIrpa: Tfps2299DmdevIrpaEntity;
}
