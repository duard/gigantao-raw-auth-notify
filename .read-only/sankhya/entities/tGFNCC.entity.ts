import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcbplaEntity } from './tCBPLA.entity';

@Index('PK_TGFNCC', ['codnat', 'codcencus'], { unique: true })
@Entity('TGFNCC', { schema: 'SANKHYA' })
export class TgfnccEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfnccs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfnccs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfnccs)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;
}
