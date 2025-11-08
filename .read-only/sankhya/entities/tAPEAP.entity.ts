import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsmeqEntity } from './tCSMEQ.entity';

@Index('PK_TAPEAP', ['nuaponta', 'numitem', 'nuequipe', 'sequencia'], {
  unique: true,
})
@Entity('TAPEAP', { schema: 'SANKHYA' })
export class TapeapEntity {
  @Column('int', { primary: true, name: 'NUAPONTA' })
  nuaponta: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('int', { primary: true, name: 'NUEQUIPE' })
  nuequipe: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TcsmeqEntity, (tcsmeqEntity) => tcsmeqEntity.tapeaps)
  @JoinColumn([
    { name: 'NUEQUIPE', referencedColumnName: 'nuequipe' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcsmeq: TcsmeqEntity;
}
