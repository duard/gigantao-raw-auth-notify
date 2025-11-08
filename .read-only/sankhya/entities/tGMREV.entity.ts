import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgmcfgEntity } from './tGMCFG.entity';

@Index('AK_TGMREV', ['codmetaant'], { unique: true })
@Index('PK_TGMREV', ['codmeta'], { unique: true })
@Entity('TGMREV', { schema: 'SANKHYA' })
export class TgmrevEntity {
  @Column('smallint', { primary: true, name: 'CODMETA' })
  codmeta: number;

  @Column('smallint', { name: 'CODMETAANT', unique: true })
  codmetaant: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmrevs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tgmrev)
  @JoinColumn([{ name: 'CODMETA', referencedColumnName: 'codmeta' }])
  codmeta2: TgmcfgEntity;

  @OneToOne(() => TgmcfgEntity, (tgmcfgEntity) => tgmcfgEntity.tgmrev2)
  @JoinColumn([{ name: 'CODMETAANT', referencedColumnName: 'codmeta' }])
  codmetaant2: TgmcfgEntity;
}
