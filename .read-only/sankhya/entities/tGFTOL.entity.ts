import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFTOL', ['codtipoper', 'evento'], { unique: true })
@Entity('TGFTOL', { schema: 'SANKHYA' })
export class TgftolEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'EVENTO' })
  evento: number;

  @Column('varchar', { name: 'COPIARLIBER', length: 1, default: () => "'S'" })
  copiarliber: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftols)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
