import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { AdGeraoscomiteEntity } from './aD_GERAOSCOMITE.entity';

@Index('PK_AD_GERAOSCOM', ['id'], { unique: true })
@Entity('AD_GERAOSCOM', { schema: 'SANKHYA' })
export class AdGeraoscomEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DTINISERV', nullable: true })
  dtiniserv: Date | null;

  @Column('datetime', { name: 'DTFINSERV', nullable: true })
  dtfinserv: Date | null;

  @Column('smallint', { name: 'INITURNO1', nullable: true })
  initurno1: number | null;

  @Column('smallint', { name: 'FIMTURNO1', nullable: true })
  fimturno1: number | null;

  @Column('smallint', { name: 'INITURNO2', nullable: true })
  initurno2: number | null;

  @Column('smallint', { name: 'FIMTURNO2', nullable: true })
  fimturno2: number | null;

  @Column('smallint', { name: 'INITURNO3', nullable: true })
  initurno3: number | null;

  @Column('smallint', { name: 'FIMTURNO3', nullable: true })
  fimturno3: number | null;

  @Column('int', { name: 'INTERVALO', nullable: true })
  intervalo: number | null;

  @Column('datetime', { name: 'DTCREATED', nullable: true })
  dtcreated: Date | null;

  @Column('datetime', { name: 'DTUPDATED', nullable: true })
  dtupdated: Date | null;

  @Column('datetime', { name: 'DTDELETED', nullable: true })
  dtdeleted: Date | null;

  @Column('int', { name: 'USU_CREATED', nullable: true })
  usuCreated: number | null;

  @Column('int', { name: 'USU_UPDATED', nullable: true })
  usuUpdated: number | null;

  @Column('varchar', { name: 'CONSAB', nullable: true, length: 10 })
  consab: string | null;

  @Column('varchar', { name: 'CONDOM', nullable: true, length: 10 })
  condom: string | null;

  @Column('varchar', { name: 'CONFER', nullable: true, length: 10 })
  confer: string | null;

  @Column('int', { name: 'QTD_DIAS', nullable: true })
  qtdDias: number | null;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('datetime', { name: 'DT_GERAR', nullable: true })
  dtGerar: Date | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.adGeraoscoms)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.adGeraoscoms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(
    () => AdGeraoscomiteEntity,
    (adGeraoscomiteEntity) => adGeraoscomiteEntity.adGeraoscom,
  )
  adGeraoscomites: AdGeraoscomiteEntity[];
}
