import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFPEFC', ['nunota'], { unique: true })
@Entity('TGFPEFC', { schema: 'SANKHYA' })
export class TgfpefcEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DHINCLUSAO', default: () => 'getdate()' })
  dhinclusao: Date;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 200 })
  msgerro: string | null;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfpefc, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
