import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsimoeEntity } from './tSIMOE.entity';

@Index('PK_TSICOT', ['codmoeda', 'dtmov'], { unique: true })
@Entity('TSICOT', { schema: 'SANKHYA' })
export class TsicotEntity {
  @Column('smallint', { primary: true, name: 'CODMOEDA' })
  codmoeda: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('float', { name: 'COTACAO', nullable: true, precision: 53 })
  cotacao: number | null;

  @Column('float', { name: 'INDICE2', nullable: true, precision: 53 })
  indice2: number | null;

  @Column('float', { name: 'INDICEDESC', nullable: true, precision: 53 })
  indicedesc: number | null;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tsicots)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda2: TsimoeEntity;
}
