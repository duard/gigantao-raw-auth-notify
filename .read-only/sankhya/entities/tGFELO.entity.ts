import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfetaEntity } from './tGFETA.entity';

@Index('PK_TGFELO', ['codetapa', 'codlocal'], { unique: true })
@Entity('TGFELO', { schema: 'SANKHYA' })
export class TgfeloEntity {
  @Column('int', { primary: true, name: 'CODETAPA' })
  codetapa: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfelos)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgfelos)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa2: TgfetaEntity;
}
