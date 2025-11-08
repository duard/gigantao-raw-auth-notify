import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfeventpneuEntity } from './tCFEVENTPNEU.entity';
import { TcfmotpneuEntity } from './tCFMOTPNEU.entity';
import { TcfpnuEntity } from './tCFPNU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCFPNUHIST', ['nupneu', 'sequencia'], { unique: true })
@Entity('TCFPNUHIST', { schema: 'SANKHYA' })
export class TcfpnuhistEntity {
  @Column('int', { primary: true, name: 'NUPNEU' })
  nupneu: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('float', { name: 'SULCO', nullable: true, precision: 53 })
  sulco: number | null;

  @Column('varchar', { name: 'NUMEIXO', nullable: true, length: 100 })
  numeixo: string | null;

  @Column('varchar', { name: 'POSEIXO', nullable: true, length: 100 })
  poseixo: string | null;

  @Column('int', { name: 'KMRODADO', nullable: true })
  kmrodado: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUNOTAMOV', nullable: true })
  nunotamov: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODLOCAL', nullable: true })
  codlocal: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 100 })
  status: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcfpnuhists)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcfpnuhists)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcfpnuhists)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;

  @ManyToOne(() => TcfpnuEntity, (tcfpnuEntity) => tcfpnuEntity.tcfpnuhists)
  @JoinColumn([{ name: 'NUPNEU', referencedColumnName: 'nupneu' }])
  nupneu2: TcfpnuEntity;

  @ManyToOne(
    () => TcfeventpneuEntity,
    (tcfeventpneuEntity) => tcfeventpneuEntity.tcfpnuhists,
  )
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TcfeventpneuEntity;

  @ManyToOne(
    () => TcfmotpneuEntity,
    (tcfmotpneuEntity) => tcfmotpneuEntity.tcfpnuhists,
  )
  @JoinColumn([{ name: 'CODMOTIVO', referencedColumnName: 'codmot' }])
  codmotivo: TcfmotpneuEntity;
}
