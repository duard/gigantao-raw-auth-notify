import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSPRN', ['numos', 'codprod'], { unique: true })
@Entity('TCSPRN', { schema: 'SANKHYA' })
export class TcsprnEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsprns)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsprns)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
