import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfnesEntity } from './tGFNES.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRSVNE', ['nuno'], { unique: true })
@Entity('TRSVNE', { schema: 'SANKHYA' })
export class TrsvneEntity {
  @Column('int', { primary: true, name: 'NUNO' })
  nuno: number;

  @Column('smallint', { name: 'QTDVAGAS', default: () => '(0)' })
  qtdvagas: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.trsvnes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToOne(() => TgfnesEntity, (tgfnesEntity) => tgfnesEntity.trsvne)
  @JoinColumn([{ name: 'NUNO', referencedColumnName: 'nuno' }])
  nuno2: TgfnesEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsvnes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
