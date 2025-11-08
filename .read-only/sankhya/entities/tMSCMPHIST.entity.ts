import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TmscmpEntity } from './tMSCMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMSCMPHIST', ['codveiculo', 'sequencia'], { unique: true })
@Entity('TMSCMPHIST', { schema: 'SANKHYA' })
export class TmscmphistEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('int', { name: 'KM1', nullable: true })
  km1: number | null;

  @Column('int', { name: 'KM2', nullable: true })
  km2: number | null;

  @Column('int', { name: 'KM3', nullable: true })
  km3: number | null;

  @Column('varchar', { name: 'ALTCHKLIST', nullable: true, length: 10 })
  altchklist: string | null;

  @Column('varchar', { name: 'OBSSOLIC', nullable: true, length: 3103 })
  obssolic: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmphists)
  @JoinColumn([{ name: 'CODMOTPRINC', referencedColumnName: 'codparc' }])
  codmotprinc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmphists2)
  @JoinColumn([{ name: 'CODAJUDANTE', referencedColumnName: 'codparc' }])
  codajudante: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmscmphists)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TmscmpEntity, (tmscmpEntity) => tmscmpEntity.tmscmphists)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TmscmpEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmphists3)
  @JoinColumn([{ name: 'CODPARCGESTOR', referencedColumnName: 'codparc' }])
  codparcgestor: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmphists4)
  @JoinColumn([{ name: 'CODPARCSOLIC', referencedColumnName: 'codparc' }])
  codparcsolic: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmphists5)
  @JoinColumn([{ name: 'CODMOTAUX', referencedColumnName: 'codparc' }])
  codmotaux: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmscmphists)
  @JoinColumn([{ name: 'CARRETA1', referencedColumnName: 'codveiculo' }])
  carreta: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmscmphists2)
  @JoinColumn([{ name: 'CARRETA2', referencedColumnName: 'codveiculo' }])
  carreta2: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmscmphists3)
  @JoinColumn([{ name: 'CARRETA3', referencedColumnName: 'codveiculo' }])
  carreta3: TgfveiEntity;
}
