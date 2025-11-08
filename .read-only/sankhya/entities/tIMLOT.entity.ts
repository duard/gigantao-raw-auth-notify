import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimapsEntity } from './tIMAPS.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiregEntity } from './tSIREG.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TimcarEntity } from './tIMCAR.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TimlteEntity } from './tIMLTE.entity';
import { TimltpEntity } from './tIMLTP.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimtxcEntity } from './tIMTXC.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMLOT', ['lotcodigo'], { unique: true })
@Entity('TIMLOT', { schema: 'SANKHYA' })
export class TimlotEntity {
  @Column('int', { primary: true, name: 'LOTCODIGO' })
  lotcodigo: number;

  @Column('varchar', { name: 'LOTAVULSO', length: 2 })
  lotavulso: string;

  @Column('varchar', { name: 'LOTPROPRIO', length: 2 })
  lotproprio: string;

  @Column('varchar', { name: 'LOTESTAGIO', length: 2 })
  lotestagio: string;

  @Column('varchar', { name: 'LOTLOTEAMENTE', length: 50 })
  lotloteamente: string;

  @Column('varchar', { name: 'LOTABREVIADO', length: 30 })
  lotabreviado: string;

  @Column('varchar', { name: 'LOTLOCALIZACAO', nullable: true, length: 250 })
  lotlocalizacao: string | null;

  @Column('int', { name: 'LOTARQARQUIVO', nullable: true })
  lotarqarquivo: number | null;

  @Column('int', { name: 'LOTARQGAVETA', nullable: true })
  lotarqgaveta: number | null;

  @Column('varchar', { name: 'LOTARQPASTA', nullable: true, length: 20 })
  lotarqpasta: string | null;

  @Column('smallint', { name: 'LOTQUANTIDADEDELOTES', nullable: true })
  lotquantidadedelotes: number | null;

  @Column('float', { name: 'LOTTOTALDAAREA', nullable: true, precision: 53 })
  lottotaldaarea: number | null;

  @Column('varchar', { name: 'LOTMDREGISTRO', nullable: true, length: 20 })
  lotmdregistro: string | null;

  @Column('char', {
    name: 'LOTPODEESCRITURAR',
    length: 1,
    default: () => "'N'",
  })
  lotpodeescriturar: string;

  @Column('varchar', { name: 'LOTMDLIVRO', nullable: true, length: 20 })
  lotmdlivro: string | null;

  @Column('varchar', { name: 'LOTMDFOLHA', nullable: true, length: 20 })
  lotmdfolha: string | null;

  @Column('datetime', { name: 'LOTMDDATA', nullable: true })
  lotmddata: Date | null;

  @Column('varchar', { name: 'LOTDECRETO', nullable: true, length: 20 })
  lotdecreto: string | null;

  @Column('datetime', { name: 'LOTDATADECRETO', nullable: true })
  lotdatadecreto: Date | null;

  @Column('char', { name: 'LOTGERARECA', length: 1, default: () => "'N'" })
  lotgerareca: string;

  @Column('datetime', { name: 'LOTDATADELANCAMENTO', nullable: true })
  lotdatadelancamento: Date | null;

  @Column('datetime', { name: 'LOTDATADECADASTRO', default: () => 'getdate()' })
  lotdatadecadastro: Date;

  @Column('char', { name: 'LOTIPTUNAPARCELA', length: 1, default: () => "'S'" })
  lotiptunaparcela: string;

  @Column('char', { name: 'LOTNAOCOBRAR', length: 1, default: () => "'N'" })
  lotnaocobrar: string;

  @Column('varchar', { name: 'LOTPQNAOCOBRAR', nullable: true, length: 240 })
  lotpqnaocobrar: string | null;

  @Column('datetime', { name: 'LOTDTNAOCOBRAR', nullable: true })
  lotdtnaocobrar: Date | null;

  @Column('char', { name: 'LOTSEMBOLETO', length: 1, default: () => "'N'" })
  lotsemboleto: string;

  @Column('char', { name: 'LOTDATABASE', length: 2, default: () => "'DV'" })
  lotdatabase: string;

  @Column('float', {
    name: 'LOTJUROSDOFINANCIAMENTO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotjurosdofinanciamento: number | null;

  @Column('float', {
    name: 'LOTPREVISAODEINFLACAO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotprevisaodeinflacao: number | null;

  @Column('smallint', {
    name: 'LOTMINIMODEPARCELAS',
    nullable: true,
    default: () => '(0)',
  })
  lotminimodeparcelas: number | null;

  @Column('smallint', { name: 'LOTMAXIMODEPARCELAS', nullable: true })
  lotmaximodeparcelas: number | null;

  @Column('char', { name: 'LOTPLANOS', nullable: true, length: 30 })
  lotplanos: string | null;

  @Column('float', {
    name: 'LOTATRASOMULTA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotatrasomulta: number | null;

  @Column('float', {
    name: 'LOTATRASOJUROS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotatrasojuros: number | null;

  @Column('float', {
    name: 'LOTDESCONTO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotdesconto: number | null;

  @Column('float', {
    name: 'LOTENTRADA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotentrada: number | null;

  @Column('char', { name: 'LOTENTRADACOMPOE', length: 1, default: () => "'N'" })
  lotentradacompoe: string;

  @Column('float', {
    name: 'LOTRECAPARCEIRO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotrecaparceiro: number | null;

  @Column('float', {
    name: 'LOTSINAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotsinal: number | null;

  @Column('float', {
    name: 'LOTRECAADM',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotrecaadm: number | null;

  @Column('float', {
    name: 'LOTPREMIO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotpremio: number | null;

  @Column('float', {
    name: 'LOTARRAS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotarras: number | null;

  @Column('float', {
    name: 'LOTTAXAADM',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lottaxaadm: number | null;

  @Column('float', {
    name: 'LOTTAXAPARTIC',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lottaxapartic: number | null;

  @Column('float', {
    name: 'LOTTAXALIMITADO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lottaxalimitado: number | null;

  @Column('char', {
    name: 'LOTCONTACOMP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  lotcontacomp: string | null;

  @Column('float', {
    name: 'LOTDESCPARCELA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  lotdescparcela: number | null;

  @Column('text', { name: 'LOTRECPARCELAS', nullable: true })
  lotrecparcelas: string | null;

  @Column('smallint', {
    name: 'LOTPERIODICIDADE',
    nullable: true,
    default: () => '(0)',
  })
  lotperiodicidade: number | null;

  @Column('char', { name: 'LOTLEGADO', nullable: true, length: 1 })
  lotlegado: string | null;

  @Column('float', { name: 'LOTPERCFRUICAO', nullable: true, precision: 53 })
  lotpercfruicao: number | null;

  @Column('int', { name: 'LOTCIRCLESIZE', nullable: true })
  lotcirclesize: number | null;

  @Column('char', { name: 'LOTBASEPRIJUROS', length: 2, default: () => "'PP'" })
  lotbaseprijuros: string;

  @Column('char', { name: 'LOTBASEPRICORR', length: 2, default: () => "'DV'" })
  lotbasepricorr: string;

  @Column('char', { name: 'LOTTABELAPRICE', nullable: true, length: 1 })
  lottabelaprice: string | null;

  @Column('char', { name: 'LOTESTAGIOAPRES', length: 2, default: () => "'RL'" })
  lotestagioapres: string;

  @Column('char', {
    name: 'LOTAPLICARFRUICAO',
    length: 1,
    default: () => "'N'",
  })
  lotaplicarfruicao: string;

  @Column('smallint', { name: 'LOTCARENCIA', nullable: true })
  lotcarencia: number | null;

  @OneToMany(() => TimapsEntity, (timapsEntity) => timapsEntity.apsloteamento)
  timaps: TimapsEntity[];

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timlots)
  @JoinColumn([{ name: 'LOTIMOBILIARIA', referencedColumnName: 'imbcodigo' }])
  lotimobiliaria: TimimbEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.timlots)
  @JoinColumn([{ name: 'LOTCIDADE', referencedColumnName: 'codcid' }])
  lotcidade: TsicidEntity;

  @ManyToOne(() => TsiregEntity, (tsiregEntity) => tsiregEntity.timlots)
  @JoinColumn([{ name: 'LOTREGIAO', referencedColumnName: 'codreg' }])
  lotregiao: TsiregEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timlots)
  @JoinColumn([{ name: 'LOTMODFINPARC', referencedColumnName: 'nufin' }])
  lotmodfinparc: TgffinEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.timlots)
  @JoinColumn([{ name: 'LOTBAIRRO', referencedColumnName: 'codbai' }])
  lotbairro: TsibaiEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timlots)
  @JoinColumn([{ name: 'LOTGERENTE', referencedColumnName: 'corcodigo' }])
  lotgerente: TimcorEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timlots)
  @JoinColumn([{ name: 'LOTINDEXADOR', referencedColumnName: 'codmoeda' }])
  lotindexador: TsimoeEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.timlots)
  @JoinColumn([{ name: 'LOTPROJETO', referencedColumnName: 'codproj' }])
  lotprojeto: TcsprjEntity;

  @ManyToOne(() => TimcarEntity, (timcarEntity) => timcarEntity.timlots)
  @JoinColumn([{ name: 'LOTMDCARTORIO', referencedColumnName: 'carcodigo' }])
  lotmdcartorio: TimcarEntity;

  @ManyToOne(() => TimcarEntity, (timcarEntity) => timcarEntity.timlots2)
  @JoinColumn([{ name: 'LOTCARTORIOSUGE', referencedColumnName: 'carcodigo' }])
  lotcartoriosuge: TimcarEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timlots2)
  @JoinColumn([{ name: 'LOTMODFINRENEGPARC', referencedColumnName: 'nufin' }])
  lotmodfinrenegparc: TgffinEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.timlots)
  @JoinColumn([
    { name: 'LOTCONTACORRENTE', referencedColumnName: 'codctabcoint' },
  ])
  lotcontacorrente: TsictaEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.timlots2)
  @JoinColumn([{ name: 'LOTCCENTRADA', referencedColumnName: 'codctabcoint' }])
  lotccentrada: TsictaEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.timlots)
  @JoinColumn([{ name: 'LOTEMPRESA', referencedColumnName: 'codemp' }])
  lotempresa: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.timlots2)
  @JoinColumn([{ name: 'LOTEMPPARCERIA', referencedColumnName: 'codemp' }])
  lotempparceria: TsiempEntity;

  @OneToMany(() => TimlteEntity, (timlteEntity) => timlteEntity.lteloteamento)
  timltes: TimlteEntity[];

  @OneToMany(() => TimltpEntity, (timltpEntity) => timltpEntity.ltploteamento2)
  timltps: TimltpEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.sacloteamento)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimtxcEntity, (timtxcEntity) => timtxcEntity.txcloteamento)
  timtxcs: TimtxcEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdoloteamento)
  timvdos: TimvdoEntity[];
}
