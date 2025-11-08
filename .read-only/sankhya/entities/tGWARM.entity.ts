import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgwrecEntity } from './tGWREC.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWARM', ['nurecebimento'], { unique: true })
@Entity('TGWARM', { schema: 'SANKHYA' })
export class TgwarmEntity {
  @Column('int', { primary: true, name: 'NURECEBIMENTO' })
  nurecebimento: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @OneToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwarm)
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento2: TgwrecEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwarms)
  @JoinColumn([{ name: 'CODENDORIG', referencedColumnName: 'codend' }])
  codendorig: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwarms2)
  @JoinColumn([{ name: 'CODENDDEST', referencedColumnName: 'codend' }])
  codenddest: TgwendEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwarms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
