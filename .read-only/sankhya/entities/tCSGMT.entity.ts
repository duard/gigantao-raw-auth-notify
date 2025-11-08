import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcsmetEntity } from './tCSMET.entity';

@Index('PK_TCSGMT', ['codmetod', 'codnat'], { unique: true })
@Entity('TCSGMT', { schema: 'SANKHYA' })
export class TcsgmtEntity {
  @Column('smallint', { primary: true, name: 'CODMETOD' })
  codmetod: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('char', { name: 'NOMEGMETOD', length: 40 })
  nomegmetod: string;

  @Column('text', { name: 'DESCRGMETOD' })
  descrgmetod: string;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcsgmts)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TcsmetEntity, (tcsmetEntity) => tcsmetEntity.tcsgmts)
  @JoinColumn([{ name: 'CODMETOD', referencedColumnName: 'codmetod' }])
  codmetod2: TcsmetEntity;
}
