import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFBFD', ['nufin', 'dtbaixa'], { unique: true })
@Entity('TGFBFD', { schema: 'SANKHYA' })
export class TgfbfdEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('datetime', { primary: true, name: 'DTBAIXA' })
  dtbaixa: Date;

  @Column('float', { name: 'VLRBAIXA', precision: 53 })
  vlrbaixa: number;

  @Column('char', { name: 'RECOMPRA', length: 1, default: () => "'N'" })
  recompra: string;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfbfds)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;
}
