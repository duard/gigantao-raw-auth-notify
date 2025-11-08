import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TmspedEntity } from './tMSPED.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMSORDCARREG', ['nuordem'], { unique: true })
@Entity('TMSORDCARREG', { schema: 'SANKHYA' })
export class TmsordcarregEntity {
  @Column('int', { primary: true, name: 'NUORDEM' })
  nuordem: number;

  @Column('int', { name: 'SEQROTEIRO', nullable: true })
  seqroteiro: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('float', { name: 'PESOSAIDA', nullable: true, precision: 53 })
  pesosaida: number | null;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'OBSCANCEL', nullable: true, length: 3103 })
  obscancel: string | null;

  @Column('float', { name: 'QUANTIDADESAIDA', nullable: true, precision: 53 })
  quantidadesaida: number | null;

  @Column('datetime', { name: 'DHCOLETA', nullable: true })
  dhcoleta: Date | null;

  @Column('smallint', { name: 'CODUSUINCLUSAO', nullable: true })
  codusuinclusao: number | null;

  @Column('varchar', { name: 'CLASSIFICACAO', nullable: true, length: 10 })
  classificacao: string | null;

  @Column('int', { name: 'DISTANCIA', nullable: true })
  distancia: number | null;

  @Column('int', { name: 'CODTIPVEI', nullable: true })
  codtipvei: number | null;

  @Column('int', { name: 'NUCHAVELIBTIPVEI', nullable: true })
  nuchavelibtipvei: number | null;

  @Column('int', { name: 'NUCHAVELIBMAXFRETE', nullable: true })
  nuchavelibmaxfrete: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmsordcarregs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tmsordcarregs)
  @JoinColumn([{ name: 'CODVOLMERC', referencedColumnName: 'codvol' }])
  codvolmerc: TgfvolEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsordcarregs)
  @JoinColumn([{ name: 'CODEMPNEGOC', referencedColumnName: 'codemp' }])
  codempnegoc: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsordcarregs2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsordcarregs)
  @JoinColumn([{ name: 'CODPARCCLI', referencedColumnName: 'codparc' }])
  codparccli: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsordcarregs2)
  @JoinColumn([{ name: 'CODPARCDEST', referencedColumnName: 'codparc' }])
  codparcdest: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsordcarregs3)
  @JoinColumn([{ name: 'CODPARCMOT', referencedColumnName: 'codparc' }])
  codparcmot: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsordcarregs4)
  @JoinColumn([{ name: 'CODPARCENT', referencedColumnName: 'codparc' }])
  codparcent: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsordcarregs5)
  @JoinColumn([{ name: 'CODPARCCOL', referencedColumnName: 'codparc' }])
  codparccol: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsordcarregs6)
  @JoinColumn([{ name: 'CODPARCREM', referencedColumnName: 'codparc' }])
  codparcrem: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmsordcarregs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmsordcarregs2)
  @JoinColumn([{ name: 'CODVEI3', referencedColumnName: 'codveiculo' }])
  codvei: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmsordcarregs3)
  @JoinColumn([{ name: 'CODVEI2', referencedColumnName: 'codveiculo' }])
  codvei2: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmsordcarregs4)
  @JoinColumn([{ name: 'CODVEI1', referencedColumnName: 'codveiculo' }])
  codvei3: TgfveiEntity;

  @ManyToOne(() => TmspedEntity, (tmspedEntity) => tmspedEntity.tmsordcarregs)
  @JoinColumn([{ name: 'NUPED', referencedColumnName: 'nuped' }])
  nuped: TmspedEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tmsordcarregs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tmsordcarregs)
  @JoinColumn([{ name: 'CODCIDORIGEM', referencedColumnName: 'codcid' }])
  codcidorigem: TsicidEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tmsordcarregs2)
  @JoinColumn([{ name: 'CODCIDDESTINO', referencedColumnName: 'codcid' }])
  codciddestino: TsicidEntity;
}
