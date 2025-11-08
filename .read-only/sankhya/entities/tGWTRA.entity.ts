import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgwitrEntity } from './tGWITR.entity';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgwrecEntity } from './tGWREC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWTRA', ['nutransferencia'], { unique: true })
@Index('TGWTRA_I01', ['nutarefa'], {})
@Entity('TGWTRA', { schema: 'SANKHYA' })
export class TgwtraEntity {
  @Column('int', { primary: true, name: 'NUTRANSFERENCIA' })
  nutransferencia: number;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @Column('int', { name: 'NUTAREFA', nullable: true })
  nutarefa: number | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @OneToMany(
    () => TgwitrEntity,
    (tgwitrEntity) => tgwitrEntity.nutransferencia2,
  )
  tgwitrs: TgwitrEntity[];

  @ManyToOne(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwtras)
  @JoinColumn([{ name: 'NUTAREFA', referencedColumnName: 'nutarefa' }])
  nutarefa2: TgwtarEntity;

  @ManyToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwtras)
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento: TgwrecEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwtras)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
