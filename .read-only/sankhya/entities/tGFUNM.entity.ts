import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFUNM', ['nunota', 'seqmed'], { unique: true })
@Entity('TGFUNM', { schema: 'SANKHYA' })
export class TgfunmEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQMED' })
  seqmed: number;

  @Column('varchar', { name: 'UNMED', length: 2 })
  unmed: string;

  @Column('varchar', { name: 'TIPMED', length: 20 })
  tipmed: string;

  @Column('float', { name: 'QTDMED', precision: 53 })
  qtdmed: number;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfunms)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
