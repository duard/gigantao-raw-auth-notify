import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSFPR', ['nufap', 'codprod'], { unique: true })
@Entity('TCSFPR', { schema: 'SANKHYA' })
export class TcsfprEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsfprs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
