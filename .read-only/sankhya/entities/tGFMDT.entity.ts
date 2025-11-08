import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfixnEntity } from './tGFIXN.entity';

@Index('PK_TGFMDT', ['numail'], { unique: true })
@Entity('TGFMDT', { schema: 'SANKHYA' })
export class TgfmdtEntity {
  @Column('int', { primary: true, name: 'NUMAIL' })
  numail: number;

  @Column('datetime', { name: 'DTDOWNLOAD' })
  dtdownload: Date;

  @Column('varchar', { name: 'TIPONOTA', length: 3 })
  tiponota: string;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('varchar', { name: 'CHAVEDOC', length: 44 })
  chavedoc: string;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;

  @Column('char', { name: 'SITUACAONFE', length: 1, default: () => "'1'" })
  situacaonfe: string;

  @ManyToOne(() => TgfixnEntity, (tgfixnEntity) => tgfixnEntity.tgfmdts, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUARQUIVO', referencedColumnName: 'nuarquivo' }])
  nuarquivo: TgfixnEntity;
}
