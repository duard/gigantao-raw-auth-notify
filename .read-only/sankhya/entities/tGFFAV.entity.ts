import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfavrEntity } from './tGFAVR.entity';

@Index('PK_TGFFAV', ['nuavaria', 'seqfoto'], { unique: true })
@Entity('TGFFAV', { schema: 'SANKHYA' })
export class TgffavEntity {
  @Column('int', { primary: true, name: 'NUAVARIA' })
  nuavaria: number;

  @Column('int', { primary: true, name: 'SEQFOTO' })
  seqfoto: number;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;

  @Column('varchar', { name: 'OBSFOTO', nullable: true, length: 500 })
  obsfoto: string | null;

  @ManyToOne(() => TgfavrEntity, (tgfavrEntity) => tgfavrEntity.tgffavs)
  @JoinColumn([{ name: 'NUAVARIA', referencedColumnName: 'nuavaria' }])
  nuavaria2: TgfavrEntity;
}
