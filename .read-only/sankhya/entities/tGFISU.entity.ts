import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgfipiEntity } from './tGFIPI.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFISU', ['codipi', 'codparc', 'codprod', 'codtipoper'], {
  unique: true,
})
@Entity('TGFISU', { schema: 'SANKHYA' })
export class TgfisuEntity {
  @Column('smallint', { primary: true, name: 'CODIPI' })
  codipi: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfisus)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgftopEntity, (tgftopEntity) => tgftopEntity.tgfisus)
  @JoinColumn([
    { name: 'CODTIPOPER', referencedColumnName: 'codtipoper' },
    { name: 'DHTIPOPER', referencedColumnName: 'dhalter' },
  ])
  tgftop: TgftopEntity;

  @ManyToOne(() => TgfipiEntity, (tgfipiEntity) => tgfipiEntity.tgfisus)
  @JoinColumn([{ name: 'CODIPI', referencedColumnName: 'codipi' }])
  codipi2: TgfipiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfisus)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
