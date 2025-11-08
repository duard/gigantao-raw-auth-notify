import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfaaxnmEntity } from './tGFAAXNM.entity';

@Index('PK_TGFAAXN', ['codemp', 'codparc'], { unique: true })
@Entity('TGFAAXN', { schema: 'SANKHYA' })
export class TgfaaxnEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfaaxns)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfaaxns)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(() => TgfaaxnmEntity, (tgfaaxnmEntity) => tgfaaxnmEntity.tgfaaxn)
  tgfaaxnms: TgfaaxnmEntity[];
}
