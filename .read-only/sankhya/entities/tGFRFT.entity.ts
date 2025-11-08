import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFRFT', ['numlote', 'nunota'], { unique: true })
@Entity('TGFRFT', { schema: 'SANKHYA' })
export class TgfrftEntity {
  @Column('int', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('smallint', {
    name: 'QTDTENTFAT',
    nullable: true,
    default: () => '(0)',
  })
  qtdtentfat: number | null;

  @Column('datetime', {
    name: 'DHINCLUSAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dhinclusao: Date | null;

  @Column('datetime', { name: 'DHULTTENTA', nullable: true })
  dhulttenta: Date | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfrfts)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
