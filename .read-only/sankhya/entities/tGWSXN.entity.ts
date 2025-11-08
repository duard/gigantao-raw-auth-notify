import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwsepEntity } from './tGWSEP.entity';

@Index('PK_TGWSXN', ['nunota', 'nuseparacao'], { unique: true })
@Index('TGWSXN_I01', ['nuseparacao'], {})
@Entity('TGWSXN', { schema: 'SANKHYA' })
export class TgwsxnEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('varchar', { name: 'STATUSNOTA', length: 1, default: () => "'N'" })
  statusnota: string;

  @Column('int', { name: 'NUTAREFACAN', nullable: true })
  nutarefacan: number | null;

  @ManyToOne(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.tgwsxns)
  @JoinColumn([{ name: 'NUSEPARACAO', referencedColumnName: 'nuseparacao' }])
  nuseparacao2: TgwsepEntity;
}
