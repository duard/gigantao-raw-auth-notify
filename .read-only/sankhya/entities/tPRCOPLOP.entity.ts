import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprlopEntity } from './tPRLOP.entity';

@Index('PK_TPRCOPLOP', ['nulop', 'seqcop', 'idcop'], { unique: true })
@Entity('TPRCOPLOP', { schema: 'SANKHYA' })
export class TprcoplopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('int', { primary: true, name: 'SEQCOP' })
  seqcop: number;

  @Column('int', { primary: true, name: 'IDCOP' })
  idcop: number;

  @Column('float', {
    name: 'QTDCONSUMIDA',
    precision: 53,
    default: () => '(0)',
  })
  qtdconsumida: number;

  @ManyToOne(() => TprlopEntity, (tprlopEntity) => tprlopEntity.tprcoplops)
  @JoinColumn([{ name: 'NULOP', referencedColumnName: 'nulop' }])
  nulop2: TprlopEntity;
}
