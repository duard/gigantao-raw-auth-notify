import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcesEntity } from './tGFCES.entity';

@Index('PK_TGFDNE', ['nuest', 'sequencia'], { unique: true })
@Entity('TGFDNE', { schema: 'SANKHYA' })
export class TgfdneEntity {
  @Column('int', { primary: true, name: 'NUEST' })
  nuest: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('numeric', { name: 'NUINSTANCIA', precision: 10, scale: 0 })
  nuinstancia: number;

  @Column('smallint', { name: 'NIVELINICIAL', default: () => '(0)' })
  nivelinicial: number;

  @Column('smallint', { name: 'NIVELFINAL', default: () => '(0)' })
  nivelfinal: number;

  @Column('varchar', { name: 'MULTIPOCOR', length: 1, default: () => "'S'" })
  multipocor: string;

  @ManyToOne(() => TgfcesEntity, (tgfcesEntity) => tgfcesEntity.tgfdnes)
  @JoinColumn([{ name: 'NUEST', referencedColumnName: 'nuest' }])
  nuest2: TgfcesEntity;
}
