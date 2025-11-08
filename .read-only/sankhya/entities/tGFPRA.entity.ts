import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfautEntity } from './tGFAUT.entity';
import { TgftauEntity } from './tGFTAU.entity';

@Index('PK_TGFPRA', ['codprod', 'codautor', 'codtipautor'], { unique: true })
@Entity('TGFPRA', { schema: 'SANKHYA' })
export class TgfpraEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODAUTOR' })
  codautor: number;

  @Column('int', { primary: true, name: 'CODTIPAUTOR' })
  codtipautor: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpras)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfautEntity, (tgfautEntity) => tgfautEntity.tgfpras)
  @JoinColumn([{ name: 'CODAUTOR', referencedColumnName: 'codautor' }])
  codautor2: TgfautEntity;

  @ManyToOne(() => TgftauEntity, (tgftauEntity) => tgftauEntity.tgfpras)
  @JoinColumn([{ name: 'CODTIPAUTOR', referencedColumnName: 'codtipautor' }])
  codtipautor2: TgftauEntity;
}
