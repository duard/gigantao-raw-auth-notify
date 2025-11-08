import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFARE', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFARE', { schema: 'SANKHYA' })
export class TgfareEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRCPA', nullable: true, precision: 53 })
  vlrcpa: number | null;

  @Column('float', { name: 'VLRCUSTO', nullable: true, precision: 53 })
  vlrcusto: number | null;

  @Column('float', { name: 'VLRCUSTO2', nullable: true, precision: 53 })
  vlrcusto2: number | null;

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfare, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
