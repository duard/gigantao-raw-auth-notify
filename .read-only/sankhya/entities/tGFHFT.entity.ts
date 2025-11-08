import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdftEntity } from './tGFDFT.entity';
import { TgftagEntity } from './tGFTAG.entity';

@Index('PK_TGFHFT', ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico'], {
  unique: true,
})
@Entity('TGFHFT', { schema: 'SANKHYA' })
export class TgfhftEntity {
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

  @Column('datetime', { name: 'DHREFERENCIA' })
  dhreferencia: Date;

  @Column('int', { name: 'QTDCONTRATOS' })
  qtdcontratos: number;

  @Column('int', { name: 'QTDFATURASGERADAS' })
  qtdfaturasgeradas: number;

  @Column('int', { name: 'QTDCOMIMPEDIMENTO' })
  qtdcomimpedimento: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 1000 })
  observacao: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @OneToMany(() => TgfdftEntity, (tgfdftEntity) => tgfdftEntity.tgfhft)
  tgfdfts: TgfdftEntity[];

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfhfts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
