import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFPPZ', ['codparc', 'prazo'], { unique: true })
@Entity('TGFPPZ', { schema: 'SANKHYA' })
export class TgfppzEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'PRAZO' })
  prazo: number;

  @Column('float', { name: 'PERCAUMENTO', precision: 53 })
  percaumento: number;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfppzs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
