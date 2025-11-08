import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgwrplEntity } from './tGWRPL.entity';

@Index('PK_TGWPXN', ['idpalete', 'nunota', 'sequencia'], { unique: true })
@Entity('TGWPXN', { schema: 'SANKHYA' })
export class TgwpxnEntity {
  @Column('int', { primary: true, name: 'IDPALETE' })
  idpalete: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgwpxns)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.tgwpxns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDPALETE', referencedColumnName: 'idpalete' }])
  idpalete2: TgwrplEntity;
}
