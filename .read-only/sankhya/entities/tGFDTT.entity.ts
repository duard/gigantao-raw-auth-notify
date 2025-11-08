import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfattEntity } from './tGFATT.entity';

@Index('PK_TGFDTT', ['codatt', 'codtiptitrec', 'codtiptitdesp'], {
  unique: true,
})
@Entity('TGFDTT', { schema: 'SANKHYA' })
export class TgfdttEntity {
  @Column('int', { primary: true, name: 'CODATT' })
  codatt: number;

  @Column('smallint', { primary: true, name: 'CODTIPTITREC' })
  codtiptitrec: number;

  @Column('smallint', { primary: true, name: 'CODTIPTITDESP' })
  codtiptitdesp: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfdtts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfattEntity, (tgfattEntity) => tgfattEntity.tgfdtts)
  @JoinColumn([{ name: 'CODATT', referencedColumnName: 'codatt' }])
  codatt2: TgfattEntity;
}
