import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tfps2501IdeadvEntity } from './tFPS2501_IDEADV.entity';
import { Tfps2501InfocrirrfEntity } from './tFPS2501_INFOCRIRRF.entity';

@Index(
  'PK_TFPS2501_INFORRA',
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
@Entity('TFPS2501_INFORRA', { schema: 'SANKHYA' })
export class Tfps2501InforraEntity {
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

  @Column('float', { name: 'VLRDESPADVOGADOS', nullable: true, precision: 53 })
  vlrdespadvogados: number | null;

  @Column('float', { name: 'VLRDESPCUSTAS', nullable: true, precision: 53 })
  vlrdespcustas: number | null;

  @Column('smallint', { name: 'QTDMESESRRA', nullable: true })
  qtdmesesrra: number | null;

  @Column('varchar', { name: 'DESCRRA', nullable: true, length: 50 })
  descrra: string | null;

  @OneToMany(
    () => Tfps2501IdeadvEntity,
    (tfps2501IdeadvEntity) => tfps2501IdeadvEntity.tfps2501Inforra,
  )
  tfps2501Ideadvs: Tfps2501IdeadvEntity[];

  @ManyToOne(
    () => Tfps2501InfocrirrfEntity,
    (tfps2501InfocrirrfEntity) => tfps2501InfocrirrfEntity.tfps2501Inforras,
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
