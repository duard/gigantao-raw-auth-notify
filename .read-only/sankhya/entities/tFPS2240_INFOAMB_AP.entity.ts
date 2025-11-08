import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2240InfoambEntity } from './tFPS2240_INFOAMB.entity';

@Index(
  'PK_TFPS2240_INFOAMB_AP',
  [
    'codemp',
    'dtref',
    'tpamb',
    'sequencia',
    'chave2240',
    'chaveinfoamb',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2240_INFOAMB_AP', { schema: 'SANKHYA' })
export class Tfps2240InfoambApEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFOAMB', length: 100 })
  chaveinfoamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CODATIV', nullable: true, length: 6 })
  codativ: string | null;

  @ManyToOne(
    () => Tfps2240InfoambEntity,
    (tfps2240InfoambEntity) => tfps2240InfoambEntity.tfps2240InfoambAps,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2240', referencedColumnName: 'chave2240' },
    { name: 'CHAVEINFOAMB', referencedColumnName: 'chave' },
  ])
  tfps2240Infoamb: Tfps2240InfoambEntity;
}
