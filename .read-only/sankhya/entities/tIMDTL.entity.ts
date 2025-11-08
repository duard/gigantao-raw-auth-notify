import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimcipEntity } from './tIMCIP.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TimlcrEntity } from './tIMLCR.entity';
import { TimhcbEntity } from './tIMHCB.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimpipEntity } from './tIMPIP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TimrcmEntity } from './tIMRCM.entity';

@Index('IDX_TIMDTL_DTLFINDESP', ['dtlfindesp'], {})
@Index('PK_TIMDTL', ['dtlparcela', 'dtlcodigo'], { unique: true })
@Index('TIMDTL_I01', ['dtlparcela'], {})
@Entity('TIMDTL', { schema: 'SANKHYA' })
export class TimdtlEntity {
  @Column('int', { primary: true, name: 'DTLCODIGO' })
  dtlcodigo: number;

  @Column('int', { primary: true, name: 'DTLPARCELA' })
  dtlparcela: number;

  @Column('char', { name: 'DTLJUROSMULTA', length: 1, default: () => "'N'" })
  dtljurosmulta: string;

  @Column('char', { name: 'DTLTAXAADM', length: 1, default: () => "'N'" })
  dtltaxaadm: string;

  @Column('smallint', { name: 'DTLESTAGIO', nullable: true })
  dtlestagio: number | null;

  @Column('smallint', { name: 'DTLRATEADO', nullable: true })
  dtlrateado: number | null;

  @Column('datetime', { name: 'DTLDTREPASSE', nullable: true })
  dtldtrepasse: Date | null;

  @Column('int', { name: 'DTLIDENTIFICADOR', nullable: true })
  dtlidentificador: number | null;

  @Column('int', { name: 'DTLDETALHAMENTO', nullable: true })
  dtldetalhamento: number | null;

  @Column('int', { name: 'DTLSERVICO', nullable: true })
  dtlservico: number | null;

  @Column('char', { name: 'DTLRECEBEDE', length: 1, default: () => "'N'" })
  dtlrecebede: string;

  @Column('char', { name: 'DTLREPASSAPARA', length: 1, default: () => "'N'" })
  dtlrepassapara: string;

  @Column('datetime', { name: 'DTLDTFIM', nullable: true })
  dtldtfim: Date | null;

  @Column('datetime', { name: 'DTLDTINIC', nullable: true })
  dtldtinic: Date | null;

  @Column('char', { name: 'DTLPROPORCIONAL', length: 1, default: () => "'N'" })
  dtlproporcional: string;

  @Column('varchar', { name: 'DTLORIGEM', nullable: true, length: 2 })
  dtlorigem: string | null;

  @Column('char', { name: 'DTLIRRF', length: 1, default: () => "'N'" })
  dtlirrf: string;

  @Column('float', { name: 'DTLVALOR', precision: 53 })
  dtlvalor: number;

  @Column('varchar', { name: 'DTLCOMPLEMENTO', nullable: true, length: 250 })
  dtlcomplemento: string | null;

  @Column('datetime', {
    name: 'DTLDATAMOV',
    nullable: true,
    default: () => 'getdate()',
  })
  dtldatamov: Date | null;

  @Column('datetime', {
    name: 'DTLDATAINCLUSAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dtldatainclusao: Date | null;

  @Column('datetime', {
    name: 'DTLDATAALTERACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dtldataalteracao: Date | null;

  @Column('char', { name: 'DLTRECALCIRRF', nullable: true, length: 1 })
  dltrecalcirrf: string | null;

  @Column('char', { name: 'DTLLEGADO', nullable: true, length: 1 })
  dtllegado: string | null;

  @Column('int', { name: 'DTLREAJUSTE', nullable: true })
  dtlreajuste: number | null;

  @Column('char', { name: 'DTLGARANTIDO', nullable: true, length: 1 })
  dtlgarantido: string | null;

  @Column('datetime', { name: 'DTLDHGERREPASSE', nullable: true })
  dtldhgerrepasse: Date | null;

  @Column('float', { name: 'DTLCOMISSAOIPTU', nullable: true, precision: 53 })
  dtlcomissaoiptu: number | null;

  @Column('int', { name: 'DTLFINDESP', nullable: true })
  dtlfindesp: number | null;

  @Column('char', { name: 'DTLCOMPADM', nullable: true, length: 1 })
  dtlcompadm: string | null;

  @Column('char', { name: 'DTLORIGRENEG', nullable: true, length: 1 })
  dtlorigreneg: string | null;

  @Column('int', { name: 'DTLPARCDESP', nullable: true })
  dtlparcdesp: number | null;

  @Column('datetime', { name: 'DTLDTVENCDESP', nullable: true })
  dtldtvencdesp: Date | null;

  @Column('int', { name: 'DTLRENEG', nullable: true })
  dtlreneg: number | null;

  @Column('int', { name: 'DTLNUFINRENEG', nullable: true })
  dtlnufinreneg: number | null;

  @Column('int', { name: 'DTLNUACERTO', nullable: true })
  dtlnuacerto: number | null;

  @OneToMany(() => TimcipEntity, (timcipEntity) => timcipEntity.timdtl)
  timcips: TimcipEntity[];

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timdtls)
  @JoinColumn([{ name: 'DTLFINDESP', referencedColumnName: 'nufin' }])
  dtlfindesp2: TgffinEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timdtls2)
  @JoinColumn([{ name: 'DTLDESVINCULADO', referencedColumnName: 'nufin' }])
  dtldesvinculado: TgffinEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timdtls)
  @JoinColumn([
    { name: 'DTLPARCEIRO', referencedColumnName: 'codparc' },
    { name: 'DTLCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TimlcrEntity, (timlcrEntity) => timlcrEntity.timdtls)
  @JoinColumn([
    { name: 'DTLCONTRATOLOC', referencedColumnName: 'lcrcontrato' },
    { name: 'DTLNEGOCIACAO', referencedColumnName: 'lcrcontador' },
  ])
  timlcr: TimlcrEntity;

  @ManyToOne(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timdtls)
  @JoinColumn([
    { name: 'DTLPARCELA', referencedColumnName: 'dtlparcela' },
    { name: 'DTLORIGCOMISSAO', referencedColumnName: 'dtlcodigo' },
  ])
  timdtl: TimdtlEntity;

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timdtl)
  timdtls: TimdtlEntity[];

  @ManyToOne(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timdtls2)
  @JoinColumn([
    { name: 'DTLPARCELA', referencedColumnName: 'dtlparcela' },
    { name: 'DTLCODORIGEM', referencedColumnName: 'dtlcodigo' },
  ])
  timdtl2: TimdtlEntity;

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timdtl2)
  timdtls2: TimdtlEntity[];

  @ManyToOne(() => TimhcbEntity, (timhcbEntity) => timhcbEntity.timdtls)
  @JoinColumn([{ name: 'DTLHISTORICO', referencedColumnName: 'hcbcodigo' }])
  dtlhistorico: TimhcbEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timdtls)
  @JoinColumn([{ name: 'DTLUSUARIO', referencedColumnName: 'codusu' }])
  dtlusuario: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timdtls2)
  @JoinColumn([{ name: 'DTLUSUARIOALT', referencedColumnName: 'codusu' }])
  dtlusuarioalt: TsiusuEntity;

  @ManyToOne(() => TimpipEntity, (timpipEntity) => timpipEntity.timdtls)
  @JoinColumn([
    { name: 'DTLCODIPTU', referencedColumnName: 'pipiptu' },
    { name: 'DTLIMOVEL', referencedColumnName: 'pipimovel' },
    { name: 'DTLPARCELAIPTU', referencedColumnName: 'pipcodigo' },
  ])
  timpip: TimpipEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timdtls)
  @JoinColumn([{ name: 'DTLPARCEIRO', referencedColumnName: 'codparc' }])
  dtlparceiro: TgfparEntity;

  @OneToMany(() => TimrcmEntity, (timrcmEntity) => timrcmEntity.timdtl)
  timrcms: TimrcmEntity[];
}
