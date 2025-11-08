import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrsselEntity } from './tRSSEL.entity';

@Index('PK_TRSRQS', ['nuselecao', 'nurequisicao'], { unique: true })
@Entity('TRSRQS', { schema: 'SANKHYA' })
export class TrsrqsEntity {
  @Column('int', { primary: true, name: 'NUSELECAO' })
  nuselecao: number;

  @Column('int', { primary: true, name: 'NUREQUISICAO' })
  nurequisicao: number;

  @ManyToOne(() => TrsselEntity, (trsselEntity) => trsselEntity.trsrqs)
  @JoinColumn([{ name: 'NUSELECAO', referencedColumnName: 'nuselecao' }])
  nuselecao2: TrsselEntity;
}
