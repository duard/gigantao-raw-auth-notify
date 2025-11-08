import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFNPA', ['nunota'], { unique: true })
@Entity('TGFNPA', { schema: 'SANKHYA' })
export class TgfnpaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DHINCLUSAO', default: () => 'getdate()' })
  dhinclusao: Date;

  @Column('smallint', { name: 'QTDENVIO', default: () => '(0)' })
  qtdenvio: number;

  @Column('datetime', { name: 'DHULTTENTA', nullable: true })
  dhulttenta: Date | null;

  @Column('char', { name: 'COMPENSAR', nullable: true, length: 1 })
  compensar: string | null;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfnpa, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfnpas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
