import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';

@Index('PK_TPRECD', ['idefx', 'seqecd'], { unique: true })
@Entity('TPRECD', { schema: 'SANKHYA' })
export class TprecdEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('smallint', { primary: true, name: 'SEQECD' })
  seqecd: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'G'" })
  tipo: string;

  @Column('smallint', { name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'FORMULA', length: 3103 })
  formula: string;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprecds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TpratvEntity;
}
