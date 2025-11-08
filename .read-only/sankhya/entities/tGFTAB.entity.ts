import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfexcEntity } from './tGFEXC.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TgfntaEntity } from './tGFNTA.entity';

@Index('PK_TGFTAB', ['nutab'], { unique: true })
@Index('TGFTAB_I01', ['codtab', 'dtvigor', 'nutab'], {})
@Entity('TGFTAB', { schema: 'SANKHYA' })
export class TgftabEntity {
  @Column('smallint', { name: 'CODTAB' })
  codtab: number;

  @Column('datetime', { name: 'DTVIGOR' })
  dtvigor: Date;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('varchar', { name: 'JAPE_ID', nullable: true, length: 50 })
  japeId: string | null;

  @Column('int', { primary: true, name: 'NUTAB', default: () => '(0)' })
  nutab: number;

  @Column('char', { name: 'UTILIZADECCUSTO', nullable: true, length: 1 })
  utilizadeccusto: string | null;

  @OneToMany(() => TgfexcEntity, (tgfexcEntity) => tgfexcEntity.nutab2)
  tgfexcs: TgfexcEntity[];

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.nutab2)
  tgfites: TgfiteEntity[];

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.tgftabs)
  @JoinColumn([{ name: 'CODREG', referencedColumnName: 'codreg' }])
  codreg: TsiregEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgftabs)
  @JoinColumn([{ name: 'CODTABORIG', referencedColumnName: 'codtab' }])
  codtaborig: TgfntaEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgftabs2)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab2: TgfntaEntity;
}
