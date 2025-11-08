import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgatdcEntity } from './tGATDC.entity';

@Index('PK_TGARDC', ['codtdc', 'vlrobtido'], { unique: true })
@Entity('TGARDC', { schema: 'SANKHYA' })
export class TgardcEntity {
  @Column('smallint', { primary: true, name: 'CODTDC' })
  codtdc: number;

  @Column('float', { primary: true, name: 'VLROBTIDO', precision: 53 })
  vlrobtido: number;

  @Column('float', { name: 'DESCONTAR', nullable: true, precision: 53 })
  descontar: number | null;

  @Column('money', { name: 'PRECO', default: () => '(0)' })
  preco: number;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @ManyToOne(() => TgatdcEntity, (tgatdcEntity) => tgatdcEntity.tgardcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODTDC', referencedColumnName: 'codtdc' }])
  codtdc2: TgatdcEntity;
}
