import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFFAE', ['nunota', 'dhinclusao'], { unique: true })
@Index('TGFFAE_I01', ['status', 'dhinclusao'], {})
@Entity('TGFFAE', { schema: 'SANKHYA' })
export class TgffaeEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'QTDATENDIDA', nullable: true, precision: 53 })
  qtdatendida: number | null;

  @Column('varchar', { name: 'STATUS', length: 1 })
  status: string;

  @Column('datetime', {
    primary: true,
    name: 'DHINCLUSAO',
    default: () => 'getdate()',
  })
  dhinclusao: Date;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgffaes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
