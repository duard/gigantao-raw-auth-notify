import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdscEntity } from './tGFDSC.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgftdocstaEntity } from './tGFTDOCSTA.entity';

@Index('PK_TGFDVCAB', ['codemp', 'referencia'], { unique: true })
@Entity('TGFDVCAB', { schema: 'SANKHYA' })
export class TgfdvcabEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @OneToMany(() => TgfdscEntity, (tgfdscEntity) => tgfdscEntity.tgfdvcab)
  tgfdscs: TgfdscEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdvcabs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => TgftdocstaEntity,
    (tgftdocstaEntity) => tgftdocstaEntity.tgfdvcab,
  )
  tgftdocstas: TgftdocstaEntity[];
}
