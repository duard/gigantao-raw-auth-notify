import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfixnEntity } from './tGFIXN.entity';

@Index('PK_TGFDFPI', ['nuarquivo', 'chaveref'], { unique: true })
@Entity('TGFDFPI', { schema: 'SANKHYA' })
export class TgfdfpiEntity {
  @Column('int', { primary: true, name: 'NUARQUIVO' })
  nuarquivo: number;

  @Column('varchar', { primary: true, name: 'CHAVEREF', length: 44 })
  chaveref: string;

  @ManyToOne(() => TgfixnEntity, (tgfixnEntity) => tgfixnEntity.tgfdfpis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUARQUIVO', referencedColumnName: 'nuarquivo' }])
  nuarquivo2: TgfixnEntity;
}
