import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2399DmdevIrpaEntity } from './tFPS2399_DMDEV_IRPA.entity';

@Index(
  'PK_TFPS2399_ECONSIGNADO',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2399',
    'idedmdev',
    'codlotacao',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2399_ECONSIGNADO', { schema: 'SANKHYA' })
export class Tfps2399EconsignadoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE2399', length: 100 })
  chave2399: string;

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
    () => Tfps2399DmdevIrpaEntity,
    (tfps2399DmdevIrpaEntity) => tfps2399DmdevIrpaEntity.tfps2399Econsignados,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2399', referencedColumnName: 'chave2399' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
    { name: 'CHAVEIRPA', referencedColumnName: 'chave' },
  ])
  tfps2399DmdevIrpa: Tfps2399DmdevIrpaEntity;
}
