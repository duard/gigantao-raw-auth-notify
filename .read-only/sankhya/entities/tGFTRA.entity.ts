import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFTRA', ['codprod', 'sequencia'], { unique: true })
@Entity('TGFTRA', { schema: 'SANKHYA' })
export class TgftraEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'TEMPGASTO', precision: 53 })
  tempgasto: number;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgftras)
  @JoinColumn([{ name: 'CODMATPRIMA', referencedColumnName: 'codprod' }])
  codmatprima: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgftras2, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
