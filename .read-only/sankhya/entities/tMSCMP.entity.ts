import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TmscmphistEntity } from './tMSCMPHIST.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMSCMP', ['codveiculo'], { unique: true })
@Entity('TMSCMP', { schema: 'SANKHYA' })
export class TmscmpEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;

  @Column('int', { name: 'KMALTER1', nullable: true })
  kmalter1: number | null;

  @Column('int', { name: 'KMALTER2', nullable: true })
  kmalter2: number | null;

  @Column('int', { name: 'KMALTER3', nullable: true })
  kmalter3: number | null;

  @Column('datetime', { name: 'DHCAR1', nullable: true })
  dhcar1: Date | null;

  @Column('datetime', { name: 'DHCAR2', nullable: true })
  dhcar2: Date | null;

  @Column('datetime', { name: 'DHCAR3', nullable: true })
  dhcar3: Date | null;

  @Column('datetime', { name: 'DHGESTOR', nullable: true })
  dhgestor: Date | null;

  @Column('datetime', { name: 'DHMOTPRINC', nullable: true })
  dhmotprinc: Date | null;

  @Column('datetime', { name: 'DHMOTAUX', nullable: true })
  dhmotaux: Date | null;

  @Column('varchar', { name: 'OBS', nullable: true, length: 3103 })
  obs: string | null;

  @Column('varchar', { name: 'ALTCHKLIST', nullable: true, length: 10 })
  altchklist: string | null;

  @Column('varchar', { name: 'OBSSOLIC', nullable: true, length: 3103 })
  obssolic: string | null;

  @Column('varchar', { name: 'CODCATEGTARGET', nullable: true, length: 100 })
  codcategtarget: string | null;

  @Column('int', { name: 'CODPROPANTT', nullable: true })
  codpropantt: number | null;

  @Column('varchar', { name: 'CODCATEGPAMCARD', nullable: true, length: 100 })
  codcategpamcard: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmps)
  @JoinColumn([{ name: 'CODPARCSOLIC', referencedColumnName: 'codparc' }])
  codparcsolic: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmps2)
  @JoinColumn([{ name: 'CODMOTAUX', referencedColumnName: 'codparc' }])
  codmotaux: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmps3)
  @JoinColumn([{ name: 'CODPARCGESTOR', referencedColumnName: 'codparc' }])
  codparcgestor: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmscmps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmscmps4)
  @JoinColumn([{ name: 'CODMOTPRINC', referencedColumnName: 'codparc' }])
  codmotprinc: TgfparEntity;

  @OneToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmscmp)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmscmps)
  @JoinColumn([{ name: 'CARRETA1', referencedColumnName: 'codveiculo' }])
  carreta: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmscmps2)
  @JoinColumn([{ name: 'CARRETA2', referencedColumnName: 'codveiculo' }])
  carreta2: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmscmps3)
  @JoinColumn([{ name: 'CARRETA3', referencedColumnName: 'codveiculo' }])
  carreta3: TgfveiEntity;

  @OneToMany(
    () => TmscmphistEntity,
    (tmscmphistEntity) => tmscmphistEntity.codveiculo2,
  )
  tmscmphists: TmscmphistEntity[];
}
