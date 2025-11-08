import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TcbplaEntity } from './tCBPLA.entity';

@Index('PK_TGFENA', ['codnat', 'codemp'], { unique: true })
@Entity('TGFENA', { schema: 'SANKHYA' })
export class TgfenaEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfenas)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfenas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfenas)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;
}
