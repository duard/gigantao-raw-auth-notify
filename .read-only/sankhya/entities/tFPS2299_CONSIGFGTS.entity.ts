import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2299Entity } from './tFPS2299.entity';

@Index(
  'PK_TFPS2299_CONSIGFGTS',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2299', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2299_CONSIGFGTS', { schema: 'SANKHYA' })
export class Tfps2299ConsigfgtsEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'INSCONSIG', nullable: true, length: 5 })
  insconsig: string | null;

  @Column('varchar', { name: 'NRCONTR', nullable: true, length: 40 })
  nrcontr: string | null;

  @ManyToOne(
    () => Tfps2299Entity,
    (tfps2299Entity) => tfps2299Entity.tfps2299Consigfgts,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2299', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2299Entity;
}
