import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2240AgnocEntity } from './tFPS2240_AGNOC.entity';

@Index(
  'PK_TFPS2240_AGNOC_EPI',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2240', 'chaveagnoc', 'chave'],
  { unique: true },
)
@Entity('TFPS2240_AGNOC_EPI', { schema: 'SANKHYA' })
export class Tfps2240AgnocEpiEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEAGNOC', length: 9 })
  chaveagnoc: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'DOCAVAL', nullable: true, length: 255 })
  docaval: string | null;

  @Column('varchar', { name: 'DSCEPI', nullable: true, length: 1000 })
  dscepi: string | null;

  @Column('varchar', { name: 'EFICEPI', nullable: true, length: 5 })
  eficepi: string | null;

  @ManyToOne(
    () => Tfps2240AgnocEntity,
    (tfps2240AgnocEntity) => tfps2240AgnocEntity.tfps2240AgnocEpis,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2240', referencedColumnName: 'chave2240' },
    { name: 'CHAVEAGNOC', referencedColumnName: 'chave' },
  ])
  tfps2240Agnoc: Tfps2240AgnocEntity;
}
