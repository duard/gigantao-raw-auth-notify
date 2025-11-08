import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfmanEntity } from './tCFMAN.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TCFMANVEI', ['nuplano', 'codveiculo'], { unique: true })
@Entity('TCFMANVEI', { schema: 'SANKHYA' })
export class TcfmanveiEntity {
  @Column('int', { primary: true, name: 'NUPLANO' })
  nuplano: number;

  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('datetime', { name: 'DTINCLUSAO', nullable: true })
  dtinclusao: Date | null;

  @ManyToOne(() => TcfmanEntity, (tcfmanEntity) => tcfmanEntity.tcfmanveis)
  @JoinColumn([{ name: 'NUPLANO', referencedColumnName: 'nuplano' }])
  nuplano2: TcfmanEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfmanveis)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
