import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwttrEntity } from './tGWTTR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWUSU', ['codusu', 'codtarefa'], { unique: true })
@Entity('TGWUSU', { schema: 'SANKHYA' })
export class TgwusuEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'CODTAREFA' })
  codtarefa: number;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @ManyToOne(() => TgwttrEntity, (tgwttrEntity) => tgwttrEntity.tgwusus)
  @JoinColumn([{ name: 'CODTAREFA', referencedColumnName: 'codtarefa' }])
  codtarefa2: TgwttrEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwusus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
