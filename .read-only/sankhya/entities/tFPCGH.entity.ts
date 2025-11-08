import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsrslEntity } from './tCSRSL.entity';
import { TcsslaEntity } from './tCSSLA.entity';
import { TfpdpoEntity } from './tFPDPO.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphorEntity } from './tFPHOR.entity';
import { TfphrgEntity } from './tFPHRG.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TfprpoEntity } from './tFPRPO.entity';
import { TfpturEntity } from './tFPTUR.entity';
import { TrsreqEntity } from './tRSREQ.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPCGH', ['codcargahor'], { unique: true })
@Index('TFPCGH_I01', ['alternativa'], {})
@Entity('TFPCGH', { schema: 'SANKHYA' })
export class TfpcghEntity {
  @Column('smallint', { primary: true, name: 'CODCARGAHOR' })
  codcargahor: number;

  @Column('varchar', { name: 'DESCRCARGAHOR', nullable: true, length: 90 })
  descrcargahor: string | null;

  @Column('varchar', { name: 'TIPCARGAHOR', length: 1, default: () => "'J'" })
  tipcargahor: string;

  @Column('varchar', { name: 'ESCALONAR', length: 1, default: () => "'N'" })
  escalonar: string;

  @Column('smallint', { name: 'DIASTRAB', nullable: true })
  diastrab: number | null;

  @Column('smallint', { name: 'DIASFOLGA', nullable: true })
  diasfolga: number | null;

  @Column('smallint', { name: 'QTDTURNO', nullable: true })
  qtdturno: number | null;

  @Column('varchar', {
    name: 'USAROCORRENCIA',
    length: 1,
    default: () => "'I'",
  })
  usarocorrencia: string;

  @Column('varchar', {
    name: 'CONSIDERAFERIADOS',
    length: 1,
    default: () => "'N'",
  })
  consideraferiados: string;

  @Column('varchar', {
    name: 'ALTERNAJORNADA',
    length: 1,
    default: () => "'N'",
  })
  alternajornada: string;

  @Column('smallint', { name: 'ALTERNATIVA', nullable: true })
  alternativa: number | null;

  @Column('char', { name: 'NAOCONFORMAFDT', length: 1, default: () => "'S'" })
  naoconformafdt: string;

  @Column('char', { name: 'FOLGAPERCDSR', length: 1, default: () => "'N'" })
  folgapercdsr: string;

  @Column('smallint', { name: 'TIPINTERVALO', nullable: true })
  tipintervalo: number | null;

  @Column('smallint', { name: 'DURINTERVALO', nullable: true })
  durintervalo: number | null;

  @Column('char', { name: 'SUMULA444', length: 1, default: () => "'N'" })
  sumula444: string;

  @Column('char', { name: 'RECESSO', length: 1, default: () => "'N'" })
  recesso: string;

  @Column('smallint', { name: 'TPJORNADA', nullable: true })
  tpjornada: number | null;

  @Column('char', {
    name: 'PERHORFLEXIVEL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  perhorflexivel: string | null;

  @Column('char', { name: 'USAPAUSA', length: 1, default: () => "'N'" })
  usapausa: string;

  @Column('char', {
    name: 'TOLERANCIANAPAUSA',
    length: 1,
    default: () => "'N'",
  })
  tolerancianapausa: string;

  @Column('char', { name: 'USAEXTRAPAUSA', length: 1, default: () => "'N'" })
  usaextrapausa: string;

  @Column('char', { name: 'USAATRASOPAUSA', length: 1, default: () => "'N'" })
  usaatrasopausa: string;

  @Column('smallint', { name: 'INIINTERV', nullable: true })
  iniinterv: number | null;

  @Column('smallint', { name: 'TERMINTERV', nullable: true })
  terminterv: number | null;

  @Column('char', { name: 'REDHRSNOT', length: 1, default: () => "'N'" })
  redhrsnot: string;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @Column('char', {
    name: 'COMPRAVAVTFERIADO',
    length: 1,
    default: () => "'N'",
  })
  compravavtferiado: string;

  @Column('char', {
    name: 'TOLERANCIANOINTERV',
    length: 1,
    default: () => "'S'",
  })
  tolerancianointerv: string;

  @Column('char', { name: 'COMPENSASABADO', length: 1, default: () => "'N'" })
  compensasabado: string;

  @Column('char', { name: 'PREASSINALAR', length: 1, default: () => "'N'" })
  preassinalar: string;

  @Column('smallint', { name: 'PREASSSAIDA', nullable: true })
  preasssaida: number | null;

  @Column('smallint', { name: 'PREASSENTRADA', nullable: true })
  preassentrada: number | null;

  @Column('smallint', { name: 'CODHISTPREASS', nullable: true })
  codhistpreass: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'USAHRNOTURNABKP', length: 1, default: () => "'N'" })
  usahrnoturnabkp: string;

  @Column('smallint', { name: 'TIPJORNADA', nullable: true })
  tipjornada: number | null;

  @Column('char', {
    name: 'USAHRNOTURNA',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  usahrnoturna: string | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @OneToMany(() => TcsrslEntity, (tcsrslEntity) => tcsrslEntity.codcargahor)
  tcsrsls: TcsrslEntity[];

  @OneToMany(() => TcsslaEntity, (tcsslaEntity) => tcsslaEntity.codcargahor)
  tcsslas: TcsslaEntity[];

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfpcghs)
  @JoinColumn([{ name: 'ALTERNATIVA', referencedColumnName: 'codcargahor' }])
  alternativa2: TfpcghEntity;

  @OneToMany(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.alternativa2)
  tfpcghs: TfpcghEntity[];

  @OneToMany(() => TfpdpoEntity, (tfpdpoEntity) => tfpdpoEntity.codcargahor)
  tfpdpos: TfpdpoEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codcargahor)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfphorEntity, (tfphorEntity) => tfphorEntity.codcargahor2)
  tfphors: TfphorEntity[];

  @OneToMany(() => TfphrgEntity, (tfphrgEntity) => tfphrgEntity.codcargahor)
  tfphrgs: TfphrgEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codcargahor,
  )
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TfprpoEntity, (tfprpoEntity) => tfprpoEntity.codcargahor)
  tfprpos: TfprpoEntity[];

  @OneToMany(() => TfpturEntity, (tfpturEntity) => tfpturEntity.codcargahor)
  tfpturs: TfpturEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codcargahor)
  trsreqs: TrsreqEntity[];

  @OneToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.codcargaacesso)
  tsiusus: TsiusuEntity[];
}
