import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFFAM', ['codprodpai', 'codprodfilho'], { unique: true })
@Index('TGFFAM_I01', ['codprodfilho'], { unique: true })
@Entity('TGFFAM', { schema: 'SANKHYA' })
export class TgffamEntity {
  @Column('int', { primary: true, name: 'CODPRODPAI' })
  codprodpai: number;

  @Column('int', { primary: true, name: 'CODPRODFILHO' })
  codprodfilho: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgffams)
  @JoinColumn([{ name: 'CODPRODPAI', referencedColumnName: 'codprod' }])
  codprodpai2: TgfproEntity;

  @OneToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgffam)
  @JoinColumn([{ name: 'CODPRODFILHO', referencedColumnName: 'codprod' }])
  codprodfilho2: TgfproEntity;
}
