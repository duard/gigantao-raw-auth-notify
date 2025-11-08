import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfplpEntity } from './tGFPLP.entity';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFLPP', ['numplan', 'codmp'], { unique: true })
@Entity('TGFLPP', { schema: 'SANKHYA' })
export class TgflppEntity {
  @Column('int', { primary: true, name: 'CODMP' })
  codmp: number;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('int', { primary: true, name: 'NUMPLAN' })
  numplan: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @ManyToOne(() => TgfplpEntity, (tgfplpEntity) => tgfplpEntity.tgflpps)
  @JoinColumn([{ name: 'NUMPLAN', referencedColumnName: 'numplan' }])
  numplan2: TgfplpEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgflpps)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
