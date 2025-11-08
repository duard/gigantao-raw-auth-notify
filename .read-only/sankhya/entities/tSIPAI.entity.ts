import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcecabEntity } from './tCECAB.entity';
import { TcecabHisEntity } from './tCECAB_HIS.entity';
import { TfpfdpEntity } from './tFPFDP.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfexpEntity } from './tGFEXP.entity';
import { TgfexpdEntity } from './tGFEXPD.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiferEntity } from './tSIFER.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TSIPAI', ['codpais'], { unique: true })
@Index('TSIPAI_I01', ['descricao', 'codpaisfis', 'abreviatura'], {
  unique: true,
})
@Entity('TSIPAI', { schema: 'SANKHYA' })
export class TsipaiEntity {
  @Column('smallint', { primary: true, name: 'CODPAIS' })
  codpais: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('char', { name: 'ABREVIATURA', nullable: true, length: 10 })
  abreviatura: string | null;

  @Column('int', { name: 'CODPAISFIS', nullable: true })
  codpaisfis: number | null;

  @Column('varchar', { name: 'TIMNACIONALIDAD', nullable: true, length: 40 })
  timnacionalidad: string | null;

  @OneToMany(() => TcecabEntity, (tcecabEntity) => tcecabEntity.codpaisorig)
  tcecabs: TcecabEntity[];

  @OneToMany(
    () => TcecabHisEntity,
    (tcecabHisEntity) => tcecabHisEntity.codpaisorig,
  )
  tcecabHis: TcecabHisEntity[];

  @OneToMany(() => TfpfdpEntity, (tfpfdpEntity) => tfpfdpEntity.codpais2)
  tfpfdps: TfpfdpEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codpaisnac)
  tfpfuns: TfpfunEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codpais,
  )
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.nacionalidade)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timnacionalidad)
  tgfctts: TgfcttEntity[];

  @OneToMany(() => TgfexpEntity, (tgfexpEntity) => tgfexpEntity.codpaisdestino)
  tgfexps: TgfexpEntity[];

  @OneToMany(
    () => TgfexpdEntity,
    (tgfexpdEntity) => tgfexpdEntity.codpaisdestino,
  )
  tgfexpds: TgfexpdEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timnacionalidad)
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codpais)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TsiferEntity, (tsiferEntity) => tsiferEntity.codpais2)
  tsifers: TsiferEntity[];

  @OneToMany(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.codpais)
  tsiufs: TsiufsEntity[];
}
