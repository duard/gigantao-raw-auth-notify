import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfhdrfEntity } from './tGFHDRF.entity';
import { TgfhprfEntity } from './tGFHPRF.entity';
import { TgftagEntity } from './tGFTAG.entity';

@Index('PK_TGFHRF', ['nuagendamento', 'tipoage', 'sequencia', 'nuhistorico'], {
  unique: true,
})
@Entity('TGFHRF', { schema: 'SANKHYA' })
export class TgfhrfEntity {
  @Column('int', { primary: true, name: 'NUAGENDAMENTO' })
  nuagendamento: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'NUHISTORICO' })
  nuhistorico: number;

  @Column('datetime', { name: 'DHINIEXEC' })
  dhiniexec: Date;

  @Column('datetime', { name: 'DHFIMEXEC' })
  dhfimexec: Date;

  @Column('smallint', { name: 'QTDDOCSSAIDA' })
  qtddocssaida: number;

  @Column('smallint', { name: 'QTDDOCSENTRADA' })
  qtddocsentrada: number;

  @Column('smallint', { name: 'QTDPRODATEND' })
  qtdprodatend: number;

  @Column('smallint', { name: 'QTDPRODNAOATEND' })
  qtdprodnaoatend: number;

  @Column('varchar', { name: 'ERRO', nullable: true, length: 244 })
  erro: string | null;

  @OneToMany(() => TgfhdrfEntity, (tgfhdrfEntity) => tgfhdrfEntity.tgfhrf)
  tgfhdrfs: TgfhdrfEntity[];

  @OneToMany(() => TgfhprfEntity, (tgfhprfEntity) => tgfhprfEntity.tgfhrf)
  tgfhprfs: TgfhprfEntity[];

  @ManyToOne(() => TgftagEntity, (tgftagEntity) => tgftagEntity.tgfhrfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAGENDAMENTO', referencedColumnName: 'nuagendamento' },
    { name: 'TIPOAGE', referencedColumnName: 'tipoage' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgftag: TgftagEntity;
}
