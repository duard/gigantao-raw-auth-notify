import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';

@Index('PK_TPRICOP', ['idiproc', 'idicop', 'idcop'], { unique: true })
@Entity('TPRICOP', { schema: 'SANKHYA' })
export class TpricopEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'IDICOP' })
  idicop: number;

  @Column('int', { primary: true, name: 'IDCOP' })
  idcop: number;

  @Column('float', {
    name: 'QTDCONSUMIDA',
    precision: 53,
    default: () => '(0)',
  })
  qtdconsumida: number;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tpricops)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;
}
