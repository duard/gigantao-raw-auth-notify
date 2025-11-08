import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwrecEntity } from './tGWREC.entity';

@Index('PK_TGWRXN', ['nunota', 'nurecebimento'], { unique: true })
@Index('TGWRXN_I01', ['nurecebimento', 'statusnota'], {})
@Entity('TGWRXN', { schema: 'SANKHYA' })
export class TgwrxnEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NURECEBIMENTO' })
  nurecebimento: number;

  @Column('varchar', { name: 'STATUSNOTA', length: 1, default: () => "'N'" })
  statusnota: string;

  @Column('int', { name: 'NUTAREFACAN', nullable: true })
  nutarefacan: number | null;

  @ManyToOne(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.tgwrxns)
  @JoinColumn([
    { name: 'NURECEBIMENTO', referencedColumnName: 'nurecebimento' },
  ])
  nurecebimento2: TgwrecEntity;
}
