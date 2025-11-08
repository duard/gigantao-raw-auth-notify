import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprcopEntity } from './tPRCOP.entity';

@Index('PK_TPRITECOP', ['idcop', 'codprodpa', 'controlepa'], { unique: true })
@Entity('TPRITECOP', { schema: 'SANKHYA' })
export class TpritecopEntity {
  @Column('int', { primary: true, name: 'IDCOP' })
  idcop: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 10,
    default: () => "' '",
  })
  controlepa: string;

  @Column('float', { name: 'PERCQTDREND', precision: 53, default: () => '(0)' })
  percqtdrend: number;

  @Column('float', { name: 'PERCDESVIOINF', nullable: true, precision: 53 })
  percdesvioinf: number | null;

  @Column('float', { name: 'PERCDESVIOSUP', nullable: true, precision: 53 })
  percdesviosup: number | null;

  @ManyToOne(() => TprcopEntity, (tprcopEntity) => tprcopEntity.tpritecops, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDCOP', referencedColumnName: 'idcop' }])
  idcop2: TprcopEntity;
}
