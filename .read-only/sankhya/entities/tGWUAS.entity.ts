import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwarsEntity } from './tGWARS.entity';

@Index('PK_TGWUAS', ['codareasep', 'codususep'], { unique: true })
@Entity('TGWUAS', { schema: 'SANKHYA' })
export class TgwuasEntity {
  @Column('int', { primary: true, name: 'CODAREASEP' })
  codareasep: number;

  @Column('smallint', { primary: true, name: 'CODUSUSEP' })
  codususep: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.tgwuas)
  @JoinColumn([{ name: 'CODAREASEP', referencedColumnName: 'codareasep' }])
  codareasep2: TgwarsEntity;
}
