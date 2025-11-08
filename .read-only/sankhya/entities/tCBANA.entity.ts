import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';

@Index('PK_TCBANA', ['codanalise'], { unique: true })
@Entity('TCBANA', { schema: 'SANKHYA' })
export class TcbanaEntity {
  @Column('smallint', { primary: true, name: 'CODANALISE' })
  codanalise: number;

  @Column('char', { name: 'DESCRANALISE', length: 40 })
  descranalise: string;

  @Column('image', { name: 'FORMULA', nullable: true })
  formula: Buffer | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbanas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TcbempEntity;
}
