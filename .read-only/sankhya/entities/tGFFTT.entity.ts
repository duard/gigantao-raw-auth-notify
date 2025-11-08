import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiremEntity } from './tSIREM.entity';
import { TgftitEntity } from './tGFTIT.entity';

@Index('PK_TGFFTT', ['codformrem', 'modulo', 'codtiptit'], { unique: true })
@Entity('TGFFTT', { schema: 'SANKHYA' })
export class TgffttEntity {
  @Column('int', { primary: true, name: 'CODFORMREM' })
  codformrem: number;

  @Column('char', {
    primary: true,
    name: 'MODULO',
    length: 1,
    default: () => "'B'",
  })
  modulo: string;

  @Column('smallint', { primary: true, name: 'CODTIPTIT' })
  codtiptit: number;

  @ManyToOne(() => TsiremEntity, (tsiremEntity) => tsiremEntity.tgfftts)
  @JoinColumn([
    { name: 'MODULO', referencedColumnName: 'modulo' },
    { name: 'CODFORMREM', referencedColumnName: 'codigo' },
  ])
  tsirem: TsiremEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfftts)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit2: TgftitEntity;
}
