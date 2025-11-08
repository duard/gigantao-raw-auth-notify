import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';

@Index('PK_TCSUMO', ['numos', 'codigo', 'tipo'], { unique: true })
@Entity('TCSUMO', { schema: 'SANKHYA' })
export class TcsumoEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsumos)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos2: TcsoseEntity;
}
