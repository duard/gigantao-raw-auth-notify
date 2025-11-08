import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfacprbEntity } from './tGFACPRB.entity';
import { TgfncprbEntity } from './tGFNCPRB.entity';

@Index(
  'PK_TGFDACPRB',
  ['codemp', 'dtref', 'codcprb', 'codobra', 'tipoajuste', 'codajuste'],
  {
    unique: true,
  },
)
@Entity('TGFDACPRB', { schema: 'SANKHYA' })
export class TgfdacprbEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'CODCPRB', length: 8 })
  codcprb: string;

  @Column('varchar', { primary: true, name: 'CODOBRA', length: 15 })
  codobra: string;

  @Column('smallint', { primary: true, name: 'TIPOAJUSTE' })
  tipoajuste: number;

  @Column('smallint', { primary: true, name: 'CODAJUSTE' })
  codajuste: number;

  @Column('float', { name: 'VLRAJUSTE', precision: 53 })
  vlrajuste: number;

  @Column('varchar', { name: 'DESCRAJUSTE', length: 20 })
  descrajuste: string;

  @ManyToOne(
    () => TgfacprbEntity,
    (tgfacprbEntity) => tgfacprbEntity.tgfdacprbs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'CODCPRB', referencedColumnName: 'codcprb' },
    { name: 'CODOBRA', referencedColumnName: 'codobra' },
  ])
  tgfacprb: TgfacprbEntity;

  @OneToMany(() => TgfncprbEntity, (tgfncprbEntity) => tgfncprbEntity.tgfdacprb)
  tgfncprbs: TgfncprbEntity[];
}
