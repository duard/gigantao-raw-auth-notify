import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfhenEntity } from './tGFHEN.entity';
import { TgfhftEntity } from './tGFHFT.entity';
import { TgfhibptEntity } from './tGFHIBPT.entity';
import { TgfhiissEntity } from './tGFHIISS.entity';
import { TgfhisEntity } from './tGFHIS.entity';
import { TgfhnpEntity } from './tGFHNP.entity';
import { TgfhrfEntity } from './tGFHRF.entity';
import { TgfrfdEntity } from './tGFRFD.entity';

@Index('PK_TGFTAG', ['nuagendamento', 'tipoage', 'sequencia'], { unique: true })
@Entity('TGFTAG', { schema: 'SANKHYA' })
export class TgftagEntity {
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

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('datetime', { name: 'DHPROXEXEC', nullable: true })
  dhproxexec: Date | null;

  @Column('datetime', { name: 'DHULTEXEC', nullable: true })
  dhultexec: Date | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('varchar', { name: 'HORARIO', nullable: true, length: 200 })
  horario: string | null;

  @Column('varchar', { name: 'DIASEMANA', nullable: true, length: 20 })
  diasemana: string | null;

  @Column('varchar', { name: 'DIAMES', nullable: true, length: 100 })
  diames: string | null;

  @Column('varchar', { name: 'MES', nullable: true, length: 30 })
  mes: string | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', { name: 'TIPOEXEC', length: 1, default: () => "'A'" })
  tipoexec: string;

  @Column('datetime', { name: 'DHEXECUCAO', nullable: true })
  dhexecucao: Date | null;

  @Column('text', { name: 'INFO', nullable: true })
  info: string | null;

  @Column('char', { name: 'STATUSULTEXEC', length: 1, default: () => "'F'" })
  statusultexec: string;

  @Column('char', { name: 'GERALOTEPARA', nullable: true, length: 1 })
  geralotepara: string | null;

  @OneToMany(() => TgfhenEntity, (tgfhenEntity) => tgfhenEntity.tgftag)
  tgfhens: TgfhenEntity[];

  @OneToMany(() => TgfhftEntity, (tgfhftEntity) => tgfhftEntity.tgftag)
  tgfhfts: TgfhftEntity[];

  @OneToMany(() => TgfhibptEntity, (tgfhibptEntity) => tgfhibptEntity.tgftag)
  tgfhibpts: TgfhibptEntity[];

  @OneToMany(() => TgfhiissEntity, (tgfhiissEntity) => tgfhiissEntity.tgftag)
  tgfhiisses: TgfhiissEntity[];

  @OneToMany(() => TgfhisEntity, (tgfhisEntity) => tgfhisEntity.tgftag)
  tgfhis: TgfhisEntity[];

  @OneToMany(() => TgfhnpEntity, (tgfhnpEntity) => tgfhnpEntity.tgftag)
  tgfhnps: TgfhnpEntity[];

  @OneToMany(() => TgfhrfEntity, (tgfhrfEntity) => tgfhrfEntity.tgftag)
  tgfhrfs: TgfhrfEntity[];

  @OneToMany(() => TgfrfdEntity, (tgfrfdEntity) => tgfrfdEntity.tgftag)
  tgfrfds: TgfrfdEntity[];
}
