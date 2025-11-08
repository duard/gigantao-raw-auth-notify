import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgftamEntity } from './tGFTAM.entity';

@Index('PK_TGFAMP', ['codprod', 'codtipamostra'], { unique: true })
@Entity('TGFAMP', { schema: 'SANKHYA' })
export class TgfampEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODTIPAMOSTRA' })
  codtipamostra: number;

  @Column('float', { name: 'QTDPORAMOSTRA', nullable: true, precision: 53 })
  qtdporamostra: number | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true, default: () => '(0)' })
  codusu: number | null;

  @Column('smallint', { name: 'REQNOTAENTPA', default: () => '(1)' })
  reqnotaentpa: number;

  @Column('char', { name: 'PERMQTDAMOZERO', length: 1, default: () => "'N'" })
  permqtdamozero: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfamps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgftamEntity, (tgftamEntity) => tgftamEntity.tgfamps)
  @JoinColumn([
    { name: 'CODTIPAMOSTRA', referencedColumnName: 'codtipamostra' },
  ])
  codtipamostra2: TgftamEntity;
}
