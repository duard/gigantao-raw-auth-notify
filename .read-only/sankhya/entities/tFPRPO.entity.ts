import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpcghEntity } from './tFPCGH.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPRPO', ['codemp', 'codfunc', 'dtmov'], { unique: true })
@Entity('TFPRPO', { schema: 'SANKHYA' })
export class TfprpoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('smallint', { name: 'ENTRADA1', nullable: true })
  entrada1: number | null;

  @Column('smallint', { name: 'SAIDA1', nullable: true })
  saida1: number | null;

  @Column('smallint', { name: 'ENTRADA2', nullable: true })
  entrada2: number | null;

  @Column('smallint', { name: 'SAIDA2', nullable: true })
  saida2: number | null;

  @Column('smallint', { name: 'ENTRADA3', nullable: true })
  entrada3: number | null;

  @Column('smallint', { name: 'SAIDA3', nullable: true })
  saida3: number | null;

  @Column('smallint', { name: 'ENTRADA4', nullable: true })
  entrada4: number | null;

  @Column('smallint', { name: 'SAIDA4', nullable: true })
  saida4: number | null;

  @Column('smallint', { name: 'NORMAL', nullable: true })
  normal: number | null;

  @Column('smallint', { name: 'FALTAS', nullable: true })
  faltas: number | null;

  @Column('smallint', { name: 'ATRASOS', nullable: true })
  atrasos: number | null;

  @Column('smallint', { name: 'EXTRA', nullable: true })
  extra: number | null;

  @Column('smallint', { name: 'EXCEDENTE', nullable: true })
  excedente: number | null;

  @Column('smallint', { name: 'DOMFER', nullable: true })
  domfer: number | null;

  @Column('smallint', { name: 'NOTURNA', nullable: true })
  noturna: number | null;

  @Column('smallint', { name: 'EXTRANOT', nullable: true })
  extranot: number | null;

  @Column('smallint', { name: 'EXCEDENTENOT', nullable: true })
  excedentenot: number | null;

  @Column('smallint', { name: 'DOMFERNOT', nullable: true })
  domfernot: number | null;

  @Column('smallint', { name: 'ATESTADO', nullable: true })
  atestado: number | null;

  @Column('smallint', { name: 'LICENCA', nullable: true })
  licenca: number | null;

  @Column('smallint', { name: 'COMPENSACAO', nullable: true })
  compensacao: number | null;

  @Column('smallint', { name: 'FERIAS', nullable: true })
  ferias: number | null;

  @Column('smallint', { name: 'FERIADO', nullable: true })
  feriado: number | null;

  @Column('smallint', { name: 'AFASTAMENTO', nullable: true })
  afastamento: number | null;

  @Column('smallint', { name: 'BONIFICADO', nullable: true })
  bonificado: number | null;

  @Column('smallint', { name: 'TRABALHADO', nullable: true })
  trabalhado: number | null;

  @Column('smallint', { name: 'ABSENTEISMO', nullable: true })
  absenteismo: number | null;

  @Column('smallint', { name: 'TOTAL', nullable: true })
  total: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'PREVISTO', nullable: true })
  previsto: number | null;

  @Column('smallint', { name: 'MOVFOLHA', nullable: true })
  movfolha: number | null;

  @Column('varchar', { name: 'APONTAMENTOS', nullable: true, length: 120 })
  apontamentos: string | null;

  @Column('smallint', { name: 'SUMULA444', nullable: true })
  sumula444: number | null;

  @Column('char', { name: 'ATUALIZADO', length: 1, default: () => "'N'" })
  atualizado: string;

  @Column('smallint', { name: 'SEQCARGAHORARIA', nullable: true })
  seqcargahoraria: number | null;

  @Column('char', { name: 'EHFERIADO', length: 1, default: () => "'N'" })
  ehferiado: string;

  @Column('char', { name: 'DESCANSOSEM', length: 1, default: () => "'N'" })
  descansosem: string;

  @Column('varchar', { name: 'BHFALTA', nullable: true, length: 1 })
  bhfalta: string | null;

  @Column('smallint', { name: 'BHATRASOS', nullable: true })
  bhatrasos: number | null;

  @Column('smallint', { name: 'ENTRADA5', nullable: true })
  entrada5: number | null;

  @Column('smallint', { name: 'SAIDA5', nullable: true })
  saida5: number | null;

  @Column('smallint', { name: 'ENTRADA6', nullable: true })
  entrada6: number | null;

  @Column('smallint', { name: 'SAIDA6', nullable: true })
  saida6: number | null;

  @Column('smallint', { name: 'ENTRADA7', nullable: true })
  entrada7: number | null;

  @Column('smallint', { name: 'SAIDA7', nullable: true })
  saida7: number | null;

  @Column('smallint', { name: 'ENTRADA8', nullable: true })
  entrada8: number | null;

  @Column('smallint', { name: 'SAIDA8', nullable: true })
  saida8: number | null;

  @Column('int', { name: 'NUOCOR1', nullable: true })
  nuocor1: number | null;

  @Column('int', { name: 'NUOCOR2', nullable: true })
  nuocor2: number | null;

  @Column('int', { name: 'NUOCOR3', nullable: true })
  nuocor3: number | null;

  @Column('int', { name: 'NUOCOR4', nullable: true })
  nuocor4: number | null;

  @Column('int', { name: 'NUOCOR5', nullable: true })
  nuocor5: number | null;

  @Column('int', { name: 'NUOCOR6', nullable: true })
  nuocor6: number | null;

  @Column('int', { name: 'NUOCOR7', nullable: true })
  nuocor7: number | null;

  @Column('int', { name: 'NUOCOR8', nullable: true })
  nuocor8: number | null;

  @Column('int', { name: 'NUOCOR9', nullable: true })
  nuocor9: number | null;

  @Column('int', { name: 'NUOCOR10', nullable: true })
  nuocor10: number | null;

  @Column('int', { name: 'NUOCOR11', nullable: true })
  nuocor11: number | null;

  @Column('int', { name: 'NUOCOR12', nullable: true })
  nuocor12: number | null;

  @Column('int', { name: 'NUOCOR13', nullable: true })
  nuocor13: number | null;

  @Column('int', { name: 'NUOCOR14', nullable: true })
  nuocor14: number | null;

  @Column('int', { name: 'NUOCOR15', nullable: true })
  nuocor15: number | null;

  @Column('int', { name: 'NUOCOR16', nullable: true })
  nuocor16: number | null;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('varchar', { name: 'PORTALRH', nullable: true, length: 1 })
  portalrh: string | null;

  @Column('smallint', { name: 'QTDPREV', nullable: true })
  qtdprev: number | null;

  @Column('smallint', { name: 'QTDPBAT', nullable: true })
  qtdpbat: number | null;

  @Column('varchar', { name: 'BATIDAS', nullable: true, length: 3103 })
  batidas: string | null;

  @Column('smallint', { name: 'SOBREAVISO', nullable: true })
  sobreaviso: number | null;

  @Column('char', { name: 'TEMSOBREAVISO', length: 1, default: () => "'N'" })
  temsobreaviso: string;

  @Column('smallint', { name: 'INTRAJORNADA', nullable: true })
  intrajornada: number | null;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfprpos, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuoco: TfpocoEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfprpos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprpos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfprpos)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;
}
