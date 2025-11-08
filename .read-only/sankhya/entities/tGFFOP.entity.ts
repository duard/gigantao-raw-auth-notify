import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfbenEntity } from './tGFBEN.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcajaEntity } from './tGFCAJA.entity';
import { TgfcrestcomstEntity } from './tGFCRESTCOMST.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgftopEntity } from './tGFTOP.entity';

@Index('PK_TGFFOP', ['nufop'], { unique: true })
@Entity('TGFFOP', { schema: 'SANKHYA' })
export class TgffopEntity {
  @Column('smallint', { primary: true, name: 'NUFOP' })
  nufop: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('varchar', { name: 'SIGLA', nullable: true, length: 10 })
  sigla: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TgfbenEntity, (tgfbenEntity) => tgfbenEntity.nufop)
  tgfbens: TgfbenEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.nufop)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcajaEntity, (tgfcajaEntity) => tgfcajaEntity.filnufop)
  tgfcajas: TgfcajaEntity[];

  @OneToMany(
    () => TgfcrestcomstEntity,
    (tgfcrestcomstEntity) => tgfcrestcomstEntity.nufop,
  )
  tgfcrestcomsts: TgfcrestcomstEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgffops)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.nufop)
  tgfites: TgfiteEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.nufop)
  tgftops: TgftopEntity[];
}
