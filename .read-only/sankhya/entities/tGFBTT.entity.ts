import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFBTT', ['codtiptit', 'codusu'], { unique: true })
@Entity('TGFBTT', { schema: 'SANKHYA' })
export class TgfbttEntity {
  @Column('smallint', { primary: true, name: 'CODTIPTIT' })
  codtiptit: number;

  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfbtts)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfbtts)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfbtts)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit2: TgftitEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfbtts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
