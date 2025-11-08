import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2501InforraEntity } from './tFPS2501_INFORRA.entity';

@Index(
  'PK_TFPS2501_IDEADV',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveinforra',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_IDEADV', { schema: 'SANKHYA' })
export class Tfps2501IdeadvEntity {
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

  @Column('varchar', { primary: true, name: 'CHAVEINFORRA', length: 100 })
  chaveinforra: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TPINSC', length: 1 })
  tpinsc: string;

  @Column('varchar', { name: 'NRINSC', length: 14 })
  nrinsc: string;

  @Column('float', { name: 'VLRADV', nullable: true, precision: 53 })
  vlradv: number | null;

  @ManyToOne(
    () => Tfps2501InforraEntity,
    (tfps2501InforraEntity) => tfps2501InforraEntity.tfps2501Ideadvs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEINFOCRIRRF', referencedColumnName: 'chaveinfocrirrf' },
    { name: 'CHAVEINFORRA', referencedColumnName: 'chave' },
  ])
  tfps2501Inforra: Tfps2501InforraEntity;
}
