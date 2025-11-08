import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFGXE', ['codprod', 'codprodesp'], { unique: true })
@Entity('TGFGXE', { schema: 'SANKHYA' })
export class TgfgxeEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPRODESP' })
  codprodesp: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfgxes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfgxes2)
  @JoinColumn([{ name: 'CODPRODESP', referencedColumnName: 'codprod' }])
  codprodesp2: TgfproEntity;
}
