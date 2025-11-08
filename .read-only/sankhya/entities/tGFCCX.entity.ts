import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFCCX', ['nunota', 'caixa', 'codprod'], { unique: true })
@Entity('TGFCCX', { schema: 'SANKHYA' })
export class TgfccxEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'CAIXA' })
  caixa: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTDPROD', precision: 53, default: () => '(0)' })
  qtdprod: number;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfccxes)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
