import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFMNT', ['codusu'], { unique: true })
@Entity('TGFMNT', { schema: 'SANKHYA' })
export class TgfmntEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTEXP', nullable: true })
  dtexp: Date | null;

  @OneToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmnt)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
