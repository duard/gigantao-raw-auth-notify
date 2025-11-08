import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfegtvEntity } from './tGFEGTV.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfgtvEntity } from './tGFGTV.entity';

@Index('PK_TGFIGTV', ['nunota', 'numinfgtv', 'idinfgtv'], { unique: true })
@Entity('TGFIGTV', { schema: 'SANKHYA' })
export class TgfigtvEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { primary: true, name: 'NUMINFGTV', length: 20 })
  numinfgtv: string;

  @Column('varchar', { primary: true, name: 'IDINFGTV', length: 20 })
  idinfgtv: string;

  @Column('varchar', { name: 'SERINFGTV', nullable: true, length: 3 })
  serinfgtv: string | null;

  @Column('varchar', { name: 'SUBSERINFGTV', nullable: true, length: 3 })
  subserinfgtv: string | null;

  @Column('smallint', { name: 'DIGVERINFGTV' })
  digverinfgtv: number;

  @Column('float', { name: 'CARGAINFGTV', precision: 53 })
  cargainfgtv: number;

  @OneToMany(() => TgfegtvEntity, (tgfegtvEntity) => tgfegtvEntity.tgfigtv)
  tgfegtvs: TgfegtvEntity[];

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfigtvs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgfgtvEntity, (tgfgtvEntity) => tgfgtvEntity.tgfigtvs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfgtvEntity;
}
