import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFSUB', ['nunota'], { unique: true })
@Entity('TGFSUB', { schema: 'SANKHYA' })
export class TgfsubEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'CODIGO', nullable: true, length: 10 })
  codigo: string | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 80 })
  motivo: string | null;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfsub, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
