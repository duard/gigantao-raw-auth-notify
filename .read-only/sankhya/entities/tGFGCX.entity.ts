import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgftitEntity } from './tGFTIT.entity';

@Index('PK_TGFGCX', ['nuconf'], { unique: true })
@Entity('TGFGCX', { schema: 'SANKHYA' })
export class TgfgcxEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('float', { name: 'VLRTITULO', nullable: true, precision: 53 })
  vlrtitulo: number | null;

  @Column('float', { name: 'VLRDIGITADO', nullable: true, precision: 53 })
  vlrdigitado: number | null;

  @Column('float', { name: 'VLRDIFERENCA', nullable: true, precision: 53 })
  vlrdiferenca: number | null;

  @Column('int', { name: 'NUCAIXA', nullable: true })
  nucaixa: number | null;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfgcxes)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;
}
