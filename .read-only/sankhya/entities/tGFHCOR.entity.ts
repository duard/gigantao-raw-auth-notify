import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcon2Entity } from './tGFCON2.entity';

@Index('PK_TGFHCOR', ['nuconf', 'seqnota'], { unique: true })
@Entity('TGFHCOR', { schema: 'SANKHYA' })
export class TgfhcorEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('smallint', { primary: true, name: 'SEQNOTA' })
  seqnota: number;

  @Column('float', { name: 'QTDCORTE', nullable: true, precision: 53 })
  qtdcorte: number | null;

  @ManyToOne(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.tgfhcors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCONF', referencedColumnName: 'nuconf' }])
  nuconf2: Tgfcon2Entity;
}
