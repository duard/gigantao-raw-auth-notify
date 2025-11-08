import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfmdcEntity } from './tGFMDC.entity';

@Index('PK_TGFADC', ['alineacheqdev'], { unique: true })
@Entity('TGFADC', { schema: 'SANKHYA' })
export class TgfadcEntity {
  @Column('char', { primary: true, name: 'ALINEACHEQDEV', length: 2 })
  alineacheqdev: string;

  @Column('char', { name: 'DESCALINEACHEQDEV', length: 80 })
  descalineacheqdev: string;

  @Column('char', {
    name: 'REAPRESENTCHEQDEV',
    length: 1,
    default: () => "'N'",
  })
  reapresentcheqdev: string;

  @OneToMany(() => TgfmdcEntity, (tgfmdcEntity) => tgfmdcEntity.alineacheqdev)
  tgfmdcs: TgfmdcEntity[];
}
