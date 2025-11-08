import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfalbEntity } from './tGFALB.entity';

@Index('PK_TGFIAL', ['nualbum', 'sequencia'], { unique: true })
@Entity('TGFIAL', { schema: 'SANKHYA' })
export class TgfialEntity {
  @Column('int', { primary: true, name: 'NUALBUM' })
  nualbum: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'IDFOTO', nullable: true, length: 200 })
  idfoto: string | null;

  @Column('char', {
    name: 'TIPOFOTO',
    nullable: true,
    length: 1,
    default: () => "'O'",
  })
  tipofoto: string | null;

  @ManyToOne(() => TgfalbEntity, (tgfalbEntity) => tgfalbEntity.tgfials)
  @JoinColumn([{ name: 'NUALBUM', referencedColumnName: 'nualbum' }])
  nualbum2: TgfalbEntity;
}
