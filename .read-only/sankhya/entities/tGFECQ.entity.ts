import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfchqEntity } from './tGFCHQ.entity';

@Index('PK_TGFECQ', ['nuchq', 'nuevento'], { unique: true })
@Entity('TGFECQ', { schema: 'SANKHYA' })
export class TgfecqEntity {
  @Column('int', { primary: true, name: 'NUCHQ' })
  nuchq: number;

  @Column('smallint', { primary: true, name: 'NUEVENTO' })
  nuevento: number;

  @Column('datetime', { name: 'DHEVENTO' })
  dhevento: Date;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'DETALHE', nullable: true })
  detalhe: string | null;

  @ManyToOne(() => TgfchqEntity, (tgfchqEntity) => tgfchqEntity.tgfecqs)
  @JoinColumn([{ name: 'NUCHQ', referencedColumnName: 'nuchq' }])
  nuchq2: TgfchqEntity;
}
