import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfajcEntity } from './tGFAJC.entity';

@Index('PK_TGFAJU', ['nuaja', 'sequencia', 'seqaju'], { unique: true })
@Entity('TGFAJU', { schema: 'SANKHYA' })
export class TgfajuEntity {
  @Column('int', { primary: true, name: 'NUAJA' })
  nuaja: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'SEQAJU' })
  seqaju: number;

  @Column('int', { name: 'TIPUTIL' })
  tiputil: number;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('float', { name: 'TOTALCRED', precision: 53, default: () => '(0)' })
  totalcred: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfajcEntity, (tgfajcEntity) => tgfajcEntity.tgfajus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAJA', referencedColumnName: 'nuaja' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfajc: TgfajcEntity;
}
