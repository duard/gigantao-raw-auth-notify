import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGMLPR', ['nufinprov', 'nufinreal'], { unique: true })
@Entity('TGMLPR', { schema: 'SANKHYA' })
export class TgmlprEntity {
  @Column('int', { primary: true, name: 'NUFINPROV' })
  nufinprov: number;

  @Column('int', { primary: true, name: 'NUFINREAL' })
  nufinreal: number;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgmlprs)
  @JoinColumn([{ name: 'NUFINPROV', referencedColumnName: 'nufin' }])
  nufinprov2: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgmlprs2)
  @JoinColumn([{ name: 'NUFINREAL', referencedColumnName: 'nufin' }])
  nufinreal2: TgffinEntity;
}
