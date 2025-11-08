import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfigtvEntity } from './tGFIGTV.entity';

@Index('PK_TGFEGTV', ['nunota', 'numinfgtv', 'idinfgtv', 'tipoespecie'], {
  unique: true,
})
@Entity('TGFEGTV', { schema: 'SANKHYA' })
export class TgfegtvEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { primary: true, name: 'NUMINFGTV', length: 20 })
  numinfgtv: string;

  @Column('varchar', { primary: true, name: 'IDINFGTV', length: 20 })
  idinfgtv: string;

  @Column('smallint', { primary: true, name: 'TIPOESPECIE' })
  tipoespecie: number;

  @Column('float', { name: 'VLRESPECIE', nullable: true, precision: 53 })
  vlrespecie: number | null;

  @ManyToOne(() => TgfigtvEntity, (tgfigtvEntity) => tgfigtvEntity.tgfegtvs)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'NUMINFGTV', referencedColumnName: 'numinfgtv' },
    { name: 'IDINFGTV', referencedColumnName: 'idinfgtv' },
  ])
  tgfigtv: TgfigtvEntity;
}
