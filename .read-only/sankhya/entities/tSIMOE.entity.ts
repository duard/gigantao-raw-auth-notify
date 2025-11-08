import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TccconEntity } from './tCCCON.entity';
import { TcchtfEntity } from './tCCHTF.entity';
import { TccnegEntity } from './tCCNEG.entity';
import { TcedespEntity } from './tCEDESP.entity';
import { TcedespHisEntity } from './tCEDESP_HIS.entity';
import { TceiteEntity } from './tCEITE.entity';
import { TceiteHisEntity } from './tCEITE_HIS.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfppreEntity } from './tFPPRE.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfjumEntity } from './tGFJUM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TgicabEntity } from './tGICAB.entity';
import { TimadmEntity } from './tIMADM.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimqpvEntity } from './tIMQPV.entity';
import { TimrcvEntity } from './tIMRCV.entity';
import { TimrlcEntity } from './tIMRLC.entity';
import { TsicotEntity } from './tSICOT.entity';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TSIMOE', ['codmoeda'], { unique: true })
@Entity('TSIMOE', { schema: 'SANKHYA' })
export class TsimoeEntity {
  @Column('smallint', { primary: true, name: 'CODMOEDA' })
  codmoeda: number;

  @Column('char', { name: 'NOMEMOEDA', length: 20 })
  nomemoeda: string;

  @Column('char', { name: 'TIPMOEDA', length: 1, default: () => "'V'" })
  tipmoeda: string;

  @Column('int', { name: 'CODINTMOEDA', nullable: true })
  codintmoeda: number | null;

  @Column('smallint', { name: 'CODTABBCB', nullable: true })
  codtabbcb: number | null;

  @Column('char', { name: 'TIPOTAXA', nullable: true, length: 1 })
  tipotaxa: string | null;

  @Column('char', {
    name: 'TIPCALC',
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  tipcalc: string | null;

  @OneToMany(() => TccconEntity, (tccconEntity) => tccconEntity.codmoeda)
  tcccons: TccconEntity[];

  @OneToMany(() => TcchtfEntity, (tcchtfEntity) => tcchtfEntity.codmoeda2)
  tcchtfs: TcchtfEntity[];

  @OneToMany(() => TccnegEntity, (tccnegEntity) => tccnegEntity.codmoeda)
  tccnegs: TccnegEntity[];

  @OneToMany(() => TcedespEntity, (tcedespEntity) => tcedespEntity.codmoeda)
  tcedesps: TcedespEntity[];

  @OneToMany(
    () => TcedespHisEntity,
    (tcedespHisEntity) => tcedespHisEntity.codmoeda,
  )
  tcedespHis: TcedespHisEntity[];

  @OneToMany(() => TceiteEntity, (tceiteEntity) => tceiteEntity.codmoeda)
  tceites: TceiteEntity[];

  @OneToMany(
    () => TceiteHisEntity,
    (tceiteHisEntity) => tceiteHisEntity.codmoeda,
  )
  tceiteHis: TceiteHisEntity[];

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codmoeda)
  tcscons: TcsconEntity[];

  @OneToMany(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.codmoeda)
  tfpeves: TfpeveEntity[];

  @OneToMany(() => TfppreEntity, (tfppreEntity) => tfppreEntity.codmoeda)
  tfppres: TfppreEntity[];

  @OneToMany(() => TgagarEntity, (tgagarEntity) => tgagarEntity.codmoeda)
  tgagars: TgagarEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codmoeda)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codmoedalim)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codmoeda2)
  tgffins: TgffinEntity[];

  @OneToMany(() => TgfjumEntity, (tgfjumEntity) => tgfjumEntity.codmoeda)
  tgfjums: TgfjumEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codmoeda)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgftitEntity, (tgftitEntity) => tgftitEntity.codmoeda)
  tgftits: TgftitEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codmoedavp)
  tgftops: TgftopEntity[];

  @OneToMany(() => TgicabEntity, (tgicabEntity) => tgicabEntity.codmoeda)
  tgicabs: TgicabEntity[];

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admindicetxadm)
  timadms: TimadmEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.locindicetxadm)
  timlocs: TimlocEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.locindexador)
  timlocs2: TimlocEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.loccodmoedacdu)
  timlocs3: TimlocEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotindexador)
  timlots: TimlotEntity[];

  @OneToMany(
    () => TimltvEntity,
    (timltvEntity) => timltvEntity.ltvindicecorrecao,
  )
  timltvs: TimltvEntity[];

  @OneToMany(() => TimqpvEntity, (timqpvEntity) => timqpvEntity.qpvindiceapchv)
  timqpvs: TimqpvEntity[];

  @OneToMany(() => TimqpvEntity, (timqpvEntity) => timqpvEntity.qpvindice)
  timqpvs2: TimqpvEntity[];

  @OneToMany(() => TimrcvEntity, (timrcvEntity) => timrcvEntity.rcvindice)
  timrcvs: TimrcvEntity[];

  @OneToMany(() => TimrlcEntity, (timrlcEntity) => timrlcEntity.rlcindice)
  timrlcs: TimrlcEntity[];

  @OneToMany(() => TsicotEntity, (tsicotEntity) => tsicotEntity.codmoeda2)
  tsicots: TsicotEntity[];

  @OneToMany(() => TsictaEntity, (tsictaEntity) => tsictaEntity.codmoeda)
  tsictas: TsictaEntity[];
}
