import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsvpcEntity } from './tCSVPC.entity';

@Index(
  'PK_TCSCCF',
  ['nunota', 'numcontrato', 'codprod', 'codvend', 'sequencia'],
  { unique: true },
)
@Entity('TCSCCF', { schema: 'SANKHYA' })
export class TcsccfEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TcsvpcEntity, (tcsvpcEntity) => tcsvpcEntity.tcsccfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODVEND', referencedColumnName: 'codvend' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcsvpc: TcsvpcEntity;
}
