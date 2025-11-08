import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfiprEntity } from './tGFIPR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFPERDA', ['codbarra'], { unique: true })
@Index('TGFPERDA_I01', ['nunota', 'sequencia'], {})
@Entity('TGFPERDA', { schema: 'SANKHYA' })
export class TgfperdaEntity {
  @Column('varchar', { primary: true, name: 'CODBARRA', length: 80 })
  codbarra: string;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @OneToOne(() => TgfiprEntity, (tgfiprEntity) => tgfiprEntity.tgfperda)
  @JoinColumn([{ name: 'CODBARRA', referencedColumnName: 'codbarra' }])
  codbarra2: TgfiprEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfperdas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfperdas)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
