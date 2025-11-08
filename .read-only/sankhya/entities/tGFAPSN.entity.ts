import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfarmEntity } from './tGFARM.entity';

@Index('PK_TGFAPSN', ['nuapuracao', 'tipoanexo'], { unique: true })
@Entity('TGFAPSN', { schema: 'SANKHYA' })
export class TgfapsnEntity {
  @Column('int', { primary: true, name: 'NUAPURACAO' })
  nuapuracao: number;

  @Column('int', { primary: true, name: 'TIPOANEXO' })
  tipoanexo: number;

  @Column('int', { name: 'FAIXAMERCINT', nullable: true })
  faixamercint: number | null;

  @Column('float', {
    name: 'ALIQEFETIVAMERCINT',
    nullable: true,
    precision: 53,
  })
  aliqefetivamercint: number | null;

  @Column('int', { name: 'FAIXAMERCEXT', nullable: true })
  faixamercext: number | null;

  @Column('float', {
    name: 'ALIQEFETIVAMERCEXT',
    nullable: true,
    precision: 53,
  })
  aliqefetivamercext: number | null;

  @Column('float', { name: 'VLRTOTRECMENINT', nullable: true, precision: 53 })
  vlrtotrecmenint: number | null;

  @Column('float', { name: 'VLRTOTRECMENEXT', nullable: true, precision: 53 })
  vlrtotrecmenext: number | null;

  @Column('float', { name: 'VLRTOTRECPROJINT', nullable: true, precision: 53 })
  vlrtotrecprojint: number | null;

  @Column('float', { name: 'VLRTOTRECPROJEXT', nullable: true, precision: 53 })
  vlrtotrecprojext: number | null;

  @ManyToOne(() => TgfarmEntity, (tgfarmEntity) => tgfarmEntity.tgfapsns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUAPURACAO', referencedColumnName: 'nuapuracao' }])
  nuapuracao2: TgfarmEntity;
}
