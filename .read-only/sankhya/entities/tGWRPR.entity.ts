import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwmprEntity } from './tGWMPR.entity';
import { TgweqpEntity } from './tGWEQP.entity';

@Index('PK_TGWRPR', ['codequip', 'codmotpar', 'dhinicio'], { unique: true })
@Entity('TGWRPR', { schema: 'SANKHYA' })
export class TgwrprEntity {
  @Column('int', { primary: true, name: 'CODEQUIP' })
  codequip: number;

  @Column('int', { primary: true, name: 'CODMOTPAR' })
  codmotpar: number;

  @Column('datetime', { primary: true, name: 'DHINICIO' })
  dhinicio: Date;

  @Column('datetime', { name: 'DHFIM', nullable: true })
  dhfim: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 400 })
  observacao: string | null;

  @ManyToOne(() => TgwmprEntity, (tgwmprEntity) => tgwmprEntity.tgwrprs)
  @JoinColumn([{ name: 'CODMOTPAR', referencedColumnName: 'codmotpar' }])
  codmotpar2: TgwmprEntity;

  @ManyToOne(() => TgweqpEntity, (tgweqpEntity) => tgweqpEntity.tgwrprs)
  @JoinColumn([{ name: 'CODEQUIP', referencedColumnName: 'codequip' }])
  codequip2: TgweqpEntity;
}
