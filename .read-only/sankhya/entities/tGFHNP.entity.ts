import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdpnEntity } from './tGFDPN.entity';
import { TgftagEntity } from './tGFTAG.entity';

@Index('PK_TGFHNP', ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico'], {
  unique: true,
})
@Entity('TGFHNP', { schema: 'SANKHYA' })
export class TgfhnpEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('datetime', { name: 'DHINIEXEC' })
  dhiniexec: Date;

  @Column('datetime', { name: 'DHFIMEXEC' })
  dhfimexec: Date;

  @Column('smallint', { name: 'QTDPEDIDOS' })
  qtdpedidos: number;

  @Column('smallint', { name: 'QTDPEDPEND' })
  qtdpedpend: number;

  @Column('smallint', { name: 'QTDPEDNAOPEND' })
  qtdpednaopend: number;

  @OneToMany(() => TgfdpnEntity, (tgfdpnEntity) => tgfdpnEntity.tgfhnp)
  tgfdpns: TgfdpnEntity[];

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfhnps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
