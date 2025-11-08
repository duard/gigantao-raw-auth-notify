import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFPAL', ['codprod', 'codprodalt'], { unique: true })
@Index('TGFPAL_I01', ['codprod'], {})
@Index('TGFPAL_I02', ['codprodalt'], {})
@Entity('TGFPAL', { schema: 'SANKHYA' })
export class TgfpalEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPRODALT' })
  codprodalt: number;

  @Column('int', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('int', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('char', { name: 'SUBSTITUTO', length: 1, default: () => "'N'" })
  substituto: string;

  @Column('datetime', { name: 'DTVIGENCIA', nullable: true })
  dtvigencia: Date | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpals)
  @JoinColumn([{ name: 'CODPRODALT', referencedColumnName: 'codprod' }])
  codprodalt2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpals2)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
