import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfplpEntity } from './tGFPLP.entity';

@Index('PK_TGFEPL', ['numplan', 'etapa', 'cql'], { unique: true })
@Entity('TGFEPL', { schema: 'SANKHYA' })
export class TgfeplEntity {
  @Column('smallint', { primary: true, name: 'ETAPA' })
  etapa: number;

  @Column('char', { primary: true, name: 'CQL', length: 1 })
  cql: string;

  @Column('varchar', { name: 'ABRVETAPA', nullable: true, length: 20 })
  abrvetapa: string | null;

  @Column('char', {
    name: 'GERAPROD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  geraprod: string | null;

  @Column('smallint', { name: 'TOPPROD', nullable: true })
  topprod: number | null;

  @Column('int', { name: 'LEADTIME', nullable: true })
  leadtime: number | null;

  @Column('int', { name: 'LEADTIMETOT', nullable: true })
  leadtimetot: number | null;

  @Column('int', { name: 'LEADTIMEFIM', nullable: true })
  leadtimefim: number | null;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { primary: true, name: 'NUMPLAN' })
  numplan: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @ManyToOne(() => TgfplpEntity, (tgfplpEntity) => tgfplpEntity.tgfepls)
  @JoinColumn([{ name: 'NUMPLAN', referencedColumnName: 'numplan' }])
  numplan2: TgfplpEntity;
}
