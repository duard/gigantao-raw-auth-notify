import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TmsocoEntity } from './tMSOCO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TMSFVG', ['numcte', 'sequencia'], { unique: true })
@Entity('TMSFVG', { schema: 'SANKHYA' })
export class TmsfvgEntity {
  @Column('int', { primary: true, name: 'NUMCTE' })
  numcte: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('int', { name: 'NROCARTAFRETE', nullable: true })
  nrocartafrete: number | null;

  @Column('float', { name: 'VLRFRETEMOT', nullable: true, precision: 53 })
  vlrfretemot: number | null;

  @Column('float', { name: 'SALDOCARTAFRETE', nullable: true, precision: 53 })
  saldocartafrete: number | null;

  @Column('float', { name: 'VLROCO', nullable: true, precision: 53 })
  vlroco: number | null;

  @Column('varchar', { name: 'DESCRCTE', nullable: true, length: 100 })
  descrcte: string | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('varchar', { name: 'SERIE', nullable: true, length: 100 })
  serie: string | null;

  @Column('float', { name: 'PESOSAIDA', nullable: true, precision: 53 })
  pesosaida: number | null;

  @Column('float', { name: 'PESOCHEGADA', nullable: true, precision: 53 })
  pesochegada: number | null;

  @Column('datetime', { name: 'DHBAIXA', nullable: true })
  dhbaixa: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('float', { name: 'QUEBRA', nullable: true, precision: 53 })
  quebra: number | null;

  @Column('float', { name: 'QUEBRAACEITAVEL', nullable: true, precision: 53 })
  quebraaceitavel: number | null;

  @Column('varchar', { name: 'CONFIRMADO', nullable: true, length: 10 })
  confirmado: string | null;

  @Column('float', { name: 'ADIANTCARTAFRETE', nullable: true, precision: 53 })
  adiantcartafrete: number | null;

  @Column('float', { name: 'VLRTXSEG', nullable: true, precision: 53 })
  vlrtxseg: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'QTDQUEBRA', nullable: true, precision: 53 })
  qtdquebra: number | null;

  @Column('float', { name: 'VLRFRETEPPT', nullable: true, precision: 53 })
  vlrfreteppt: number | null;

  @Column('float', { name: 'VLRFRETEMOTCALC', nullable: true, precision: 53 })
  vlrfretemotcalc: number | null;

  @Column('float', {
    name: 'QTDQUEBRAACEITAVEL',
    nullable: true,
    precision: 53,
  })
  qtdquebraaceitavel: number | null;

  @Column('float', { name: 'VLRADTOCALC', nullable: true, precision: 53 })
  vlradtocalc: number | null;

  @Column('float', { name: 'VLRTAXASEGCALC', nullable: true, precision: 53 })
  vlrtaxasegcalc: number | null;

  @Column('float', { name: 'VLRDESCCALC', nullable: true, precision: 53 })
  vlrdesccalc: number | null;

  @Column('float', { name: 'VLRDESCQUEBRA', nullable: true, precision: 53 })
  vlrdescquebra: number | null;

  @Column('float', { name: 'VLRSALDOCALC', nullable: true, precision: 53 })
  vlrsaldocalc: number | null;

  @Column('float', { name: 'PRECOKGPROD', nullable: true, precision: 53 })
  precokgprod: number | null;

  @Column('varchar', { name: 'TIPOQUEBRA', nullable: true, length: 10 })
  tipoquebra: string | null;

  @Column('float', { name: 'KMINICIAL', nullable: true, precision: 53 })
  kminicial: number | null;

  @Column('float', { name: 'KMFINAL', nullable: true, precision: 53 })
  kmfinal: number | null;

  @Column('datetime', { name: 'DTCHEGADA', nullable: true })
  dtchegada: Date | null;

  @Column('float', { name: 'VLRIMPOSTOSCALC', nullable: true, precision: 53 })
  vlrimpostoscalc: number | null;

  @Column('int', { name: 'NUFINREC', nullable: true })
  nufinrec: number | null;

  @Column('int', { name: 'NUFINDESP', nullable: true })
  nufindesp: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsfvgs)
  @JoinColumn([{ name: 'CODEMPNEGOC', referencedColumnName: 'codemp' }])
  codempnegoc: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsfvgs2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsfvgs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsfvgs2)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;

  @ManyToOne(() => TmsocoEntity, (tmsocoEntity) => tmsocoEntity.tmsfvgs)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor: TmsocoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmsfvgs)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmsfvgs2)
  @JoinColumn([{ name: 'CODUSUBAIXA', referencedColumnName: 'codusu' }])
  codusubaixa: TsiusuEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tmsfvgs)
  @JoinColumn([{ name: 'CODVEICAVALO', referencedColumnName: 'codveiculo' }])
  codveicavalo: TgfveiEntity;
}
