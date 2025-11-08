import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdprEntity } from './tGFDPR.entity';
import { TgftagEntity } from './tGFTAG.entity';

@Index('PK_TGFHIS', ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico'], {
  unique: true,
})
@Entity('TGFHIS', { schema: 'SANKHYA' })
export class TgfhisEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('datetime', { name: 'DHINIEXEC' })
  dhiniexec: Date;

  @Column('datetime', { name: 'DHFIMEXEC' })
  dhfimexec: Date;

  @Column('int', { name: 'QTDCONTRATOS' })
  qtdcontratos: number;

  @Column('int', { name: 'QTDPRODUTOS' })
  qtdprodutos: number;

  @Column('int', { name: 'QTDREAJUSTADOS' })
  qtdreajustados: number;

  @Column('int', { name: 'QTDNAOREAJUSTADOS' })
  qtdnaoreajustados: number;

  @OneToMany(() => TgfdprEntity, (tgfdprEntity) => tgfdprEntity.tgfhis)
  tgfdprs: TgfdprEntity[];

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfhis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
