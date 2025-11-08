import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2399DmdevDrpaEntity } from './tFPS2399_DMDEV_DRPA.entity';

@Index(
  'PK_TFPS2399_DMDEV_DDRPA',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2399',
    'idedmdev',
    'codlotacao',
    'cnpjoper',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2399_DMDEV_DDRPA', { schema: 'SANKHYA' })
export class Tfps2399DmdevDdrpaEntity {
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
    () => Tfps2399DmdevDrpaEntity,
    (tfps2399DmdevDrpaEntity) => tfps2399DmdevDrpaEntity.tfps2399DmdevDdrpas,
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
    { name: 'CNPJOPER', referencedColumnName: 'chave' },
  ])
  tfps2399DmdevDrpa: Tfps2399DmdevDrpaEntity;
}
