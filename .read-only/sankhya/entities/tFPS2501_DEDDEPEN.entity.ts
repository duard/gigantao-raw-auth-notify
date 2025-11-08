import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2501InfocrirrfEntity } from './tFPS2501_INFOCRIRRF.entity';

@Index(
  'PK_TFPS2501_DEDDEPEN',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveinfocrirrf',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_DEDDEPEN', { schema: 'SANKHYA' })
export class Tfps2501DeddepenEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2501', length: 100 })
  chave2501: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVEINFOCRIRRF', length: 100 })
  chaveinfocrirrf: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFDEP', length: 11 })
  cpfdep: string;

  @Column('varchar', { name: 'TPREND', length: 2 })
  tprend: string;

  @Column('float', { name: 'VLRDEDUCAO', precision: 53 })
  vlrdeducao: number;

  @ManyToOne(
    () => Tfps2501InfocrirrfEntity,
    (tfps2501InfocrirrfEntity) => tfps2501InfocrirrfEntity.tfps2501Deddepens,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEIDETRAB', referencedColumnName: 'chaveidetrab' },
    { name: 'CHAVEINFOCRIRRF', referencedColumnName: 'chave' },
  ])
  tfps2501Infocrirrf: Tfps2501InfocrirrfEntity;
}
