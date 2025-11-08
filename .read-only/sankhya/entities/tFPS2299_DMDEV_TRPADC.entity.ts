import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2299DmdevRpadcEntity } from './tFPS2299_DMDEV_RPADC.entity';

@Index(
  'PK_TFPS2299_DMDEV_TRPADC',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2299',
    'idedmdev',
    'chave2299PaAdc',
    'perref',
    'codlotacao',
    'matricula',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2299_DMDEV_TRPADC', { schema: 'SANKHYA' })
export class Tfps2299DmdevTrpadcEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE2299_PA_ADC', length: 100 })
  chave2299PaAdc: string;

  @Column('varchar', { primary: true, name: 'PERREF', length: 100 })
  perref: string;

  @Column('varchar', { primary: true, name: 'CODLOTACAO', length: 100 })
  codlotacao: string;

  @Column('varchar', { primary: true, name: 'MATRICULA', length: 100 })
  matricula: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CODCONV', nullable: true, length: 30 })
  codconv: string | null;

  @ManyToOne(
    () => Tfps2299DmdevRpadcEntity,
    (tfps2299DmdevRpadcEntity) => tfps2299DmdevRpadcEntity.tfps2299DmdevTrpadcs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave2299' },
    { name: 'IDEDMDEV', referencedColumnName: 'idedmdev' },
    { name: 'CHAVE2299_PA_ADC', referencedColumnName: 'chave2299PaAdc' },
    { name: 'PERREF', referencedColumnName: 'perref' },
    { name: 'CODLOTACAO', referencedColumnName: 'codlotacao' },
    { name: 'MATRICULA', referencedColumnName: 'chave' },
  ])
  tfps2299DmdevRpadc: Tfps2299DmdevRpadcEntity;
}
