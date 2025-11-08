import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBABE', ['codemp', 'tiptermo'], { unique: true })
@Entity('TCBABE', { schema: 'SANKHYA' })
export class TcbabeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { primary: true, name: 'TIPTERMO', length: 1 })
  tiptermo: string;

  @Column('text', { name: 'TERMO', nullable: true })
  termo: string | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbabes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;
}
