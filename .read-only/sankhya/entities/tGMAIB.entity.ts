import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgmaiEntity } from './tGMAI.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGMAIB', ['nuautinv', 'dtini'], { unique: true })
@Entity('TGMAIB', { schema: 'SANKHYA' })
export class TgmaibEntity {
  @Column('int', { primary: true, name: 'NUAUTINV' })
  nuautinv: number;

  @Column('datetime', { primary: true, name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TgmaiEntity, (tgmaiEntity) => tgmaiEntity.tgmaibs)
  @JoinColumn([{ name: 'NUAUTINV', referencedColumnName: 'nuautinv' }])
  nuautinv2: TgmaiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgmaibs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
