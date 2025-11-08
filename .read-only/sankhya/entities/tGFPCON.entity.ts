import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcoi2Entity } from './tGFCOI2.entity';

@Index('PK_TGFPCON', ['codpcon', 'nuconf', 'seqconf'], { unique: true })
@Entity('TGFPCON', { schema: 'SANKHYA' })
export class TgfpconEntity {
  @Column('int', { primary: true, name: 'CODPCON' })
  codpcon: number;

  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('smallint', { primary: true, name: 'SEQCONF' })
  seqconf: number;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('float', { name: 'PESOLIQUIDO', nullable: true, precision: 53 })
  pesoliquido: number | null;

  @ManyToOne(() => Tgfcoi2Entity, (tgfcoi2Entity) => tgfcoi2Entity.tgfpcons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONF', referencedColumnName: 'nuconf' },
    { name: 'SEQCONF', referencedColumnName: 'seqconf' },
  ])
  tgfcoi: Tgfcoi2Entity;
}
