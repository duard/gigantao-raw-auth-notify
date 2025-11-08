import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcsfetEntity } from './tCSFET.entity';
import { TcsiteEntity } from './tCSITE.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcspapEntity } from './tCSPAP.entity';
import { TfcbcoEntity } from './tFCBCO.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TrsetaEntity } from './tRSETA.entity';
import { TrsselEntity } from './tRSSEL.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSEAG', ['nuevento'], { unique: true })
@Index('TCSEAG_I01', ['idsinc'], {})
@Index('TCSEAG_I02', ['nueventopai'], {})
@Index('TCSEAG_I03', ['nuselecao'], {})
@Entity('TCSEAG', { schema: 'SANKHYA' })
export class TcseagEntity {
  @Column('int', { primary: true, name: 'NUEVENTO' })
  nuevento: number;

  @Column('datetime', { name: 'DHINICIO', nullable: true })
  dhinicio: Date | null;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @Column('char', { name: 'CONFIRMADO', length: 1, default: () => "'N'" })
  confirmado: string;

  @Column('varchar', { name: 'DESCRABREV', nullable: true, length: 400 })
  descrabrev: string | null;

  @Column('text', { name: 'DESCRLONGA', nullable: true })
  descrlonga: string | null;

  @Column('text', { name: 'ICALEXP', nullable: true })
  icalexp: string | null;

  @Column('int', { name: 'NUEVENTOPAI', nullable: true })
  nueventopai: number | null;

  @Column('varchar', { name: 'IDSINC', nullable: true, length: 300 })
  idsinc: string | null;

  @Column('datetime', { name: 'DHALTERSINC', nullable: true })
  dhaltersinc: Date | null;

  @Column('char', { name: 'SINCRONIZAR', length: 1, default: () => "'N'" })
  sincronizar: string;

  @Column('datetime', { name: 'DHINICIOPAI', nullable: true })
  dhiniciopai: Date | null;

  @Column('char', { name: 'CANCELADO', length: 1, default: () => "'N'" })
  cancelado: string;

  @Column('char', { name: 'DIATODO', length: 1, default: () => "'N'" })
  diatodo: string;

  @Column('datetime', { name: 'DHLCTO', nullable: true })
  dhlcto: Date | null;

  @Column('smallint', { name: 'CODUSULANCADOR', nullable: true })
  codusulancador: number | null;

  @Column('varchar', { name: 'LOCALEVENTO', nullable: true, length: 400 })
  localevento: string | null;

  @Column('int', { name: 'NUSELECAO', nullable: true })
  nuselecao: number | null;

  @Column('varchar', { name: 'CHANGEKEY', nullable: true, length: 32 })
  changekey: string | null;

  @Column('varchar', { name: 'IDOFFICE', nullable: true, length: 300 })
  idoffice: string | null;

  @Column('int', { name: 'FALHASINC', nullable: true, default: () => '(0)' })
  falhasinc: number | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 3103 })
  motivo: string | null;

  @Column('datetime', { name: 'DHCANCELAMENTO', nullable: true })
  dhcancelamento: Date | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcseags)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TrsetaEntity, (trsetaEntity) => trsetaEntity.tcseags)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa: TrsetaEntity;

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcseags)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap: TcsfapEntity;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcseags)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPA', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcseags)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcseags)
  @JoinColumn([{ name: 'NUMOS', referencedColumnName: 'numos' }])
  numos: TcsoseEntity;

  @ManyToOne(() => TcspapEntity, (tcspapEntity) => tcspapEntity.tcseags)
  @JoinColumn([{ name: 'CODPAP', referencedColumnName: 'codpap' }])
  codpap: TcspapEntity;

  @ManyToOne(() => TfcbcoEntity, (tfcbcoEntity) => tfcbcoEntity.tcseags)
  @JoinColumn([{ name: 'NUCURRICULO', referencedColumnName: 'nucurriculo' }])
  nucurriculo: TfcbcoEntity;

  @ManyToOne(() => TrsselEntity, (trsselEntity) => trsselEntity.tcseags)
  @JoinColumn([{ name: 'NUSELECAO', referencedColumnName: 'nuselecao' }])
  nuselecao2: TrsselEntity;

  @ManyToOne(() => TcsiteEntity, (tcsiteEntity) => tcsiteEntity.tcseags)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'SUBOS', referencedColumnName: 'numitem' },
  ])
  tcsite: TcsiteEntity;
}
