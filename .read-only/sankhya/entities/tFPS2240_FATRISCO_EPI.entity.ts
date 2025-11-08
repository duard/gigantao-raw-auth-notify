import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2240FatriscoEntity } from './tFPS2240_FATRISCO.entity';

@Index(
  'PK_TFPS2240_FATRISCO_EPI',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2240', 'chaverisco', 'chave'],
  { unique: true },
)
@Entity('TFPS2240_FATRISCO_EPI', { schema: 'SANKHYA' })
export class Tfps2240FatriscoEpiEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2240', length: 100 })
  chave2240: string;

  @Column('varchar', { primary: true, name: 'CHAVERISCO', length: 100 })
  chaverisco: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CAEPI', nullable: true, length: 20 })
  caepi: string | null;

  @Column('varchar', { name: 'DSCEPI', nullable: true, length: 999 })
  dscepi: string | null;

  @Column('char', { name: 'EFICEPI', nullable: true, length: 1 })
  eficepi: string | null;

  @Column('char', { name: 'MEDPROTECAO', nullable: true, length: 1 })
  medprotecao: string | null;

  @Column('char', { name: 'CONDFUNCTO', nullable: true, length: 1 })
  condfuncto: string | null;

  @Column('char', { name: 'PRZVALID', nullable: true, length: 1 })
  przvalid: string | null;

  @Column('char', { name: 'PERIODICTROCA', nullable: true, length: 1 })
  periodictroca: string | null;

  @Column('char', { name: 'HIGIENIZACAO', nullable: true, length: 1 })
  higienizacao: string | null;

  @Column('char', { name: 'USOININT', nullable: true, length: 1 })
  usoinint: string | null;

  @ManyToOne(
    () => Tfps2240FatriscoEntity,
    (tfps2240FatriscoEntity) => tfps2240FatriscoEntity.tfps2240FatriscoEpis,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2240', referencedColumnName: 'chave2240' },
    { name: 'CHAVERISCO', referencedColumnName: 'chave' },
  ])
  tfps2240Fatrisco: Tfps2240FatriscoEntity;
}
