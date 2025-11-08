import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimchkEntity } from './tIMCHK.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TimclaEntity } from './tIMCLA.entity';
import { TimimpEntity } from './tIMIMP.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimmfdEntity } from './tIMMFD.entity';

@Index('PK_TIMADM', ['admnucontrato'], { unique: true })
@Index('TIMADM_I01', ['admimovel'], {})
@Entity('TIMADM', { schema: 'SANKHYA' })
export class TimadmEntity {
  @Column('smallint', { primary: true, name: 'ADMNUCONTRATO' })
  admnucontrato: number;

  @Column('int', { name: 'ADMIMOVEL' })
  admimovel: number;

  @Column('datetime', {
    name: 'ADMDATA',
    nullable: true,
    default: () => 'getdate()',
  })
  admdata: Date | null;

  @Column('char', { name: 'ADMVENDA', length: 1, default: () => "'N'" })
  admvenda: string;

  @Column('char', { name: 'ADMLOCACAO', length: 1, default: () => "'N'" })
  admlocacao: string;

  @Column('float', { name: 'ADMLCTAXAMIN', nullable: true, precision: 53 })
  admlctaxamin: number | null;

  @Column('char', { name: 'ADMLCTIPRILOC', length: 1, default: () => "'N'" })
  admlctipriloc: string;

  @Column('smallint', { name: 'ADMLCTIPRIPARC', nullable: true })
  admlctipriparc: number | null;

  @Column('varchar', { name: 'ADMLCTIMOTIVO', nullable: true, length: 120 })
  admlctimotivo: string | null;

  @Column('char', { name: 'ADMLCGARANTIA', length: 1, default: () => "'0'" })
  admlcgarantia: string;

  @Column('smallint', { name: 'ADMLCQTGARANTE', nullable: true })
  admlcqtgarante: number | null;

  @Column('smallint', { name: 'ADMLCRPTIPDIAS', nullable: true })
  admlcrptipdias: number | null;

  @Column('char', { name: 'ADMDESTINACAO', length: 1, default: () => "'3'" })
  admdestinacao: string;

  @Column('char', { name: 'ADMVISITAS', length: 1, default: () => "'3'" })
  admvisitas: string;

  @Column('text', { name: 'ADMOBSVISITAS', nullable: true })
  admobsvisitas: string | null;

  @Column('char', { name: 'ADMDFQUITADO', length: 1, default: () => "'S'" })
  admdfquitado: string;

  @Column('int', { name: 'ADMDFAGENTEFINANCEIRO', nullable: true })
  admdfagentefinanceiro: number | null;

  @Column('varchar', {
    name: 'ADMDFFINANCIAMENTO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  admdffinanciamento: string | null;

  @Column('smallint', { name: 'ADMDFTRANSFERENCIA', nullable: true })
  admdftransferencia: number | null;

  @Column('float', {
    name: 'ADMDFPRECODEVENDA',
    precision: 53,
    default: () => '(0)',
  })
  admdfprecodevenda: number;

  @Column('float', {
    name: 'ADMDFPRECOALUGUEL',
    precision: 53,
    default: () => '(0)',
  })
  admdfprecoaluguel: number;

  @Column('float', {
    name: 'ADMDFPOUPANCA',
    precision: 53,
    default: () => '(0)',
  })
  admdfpoupanca: number;

  @Column('float', {
    name: 'ADMDFSALDODEVEDOR',
    precision: 53,
    default: () => '(0)',
  })
  admdfsaldodevedor: number;

  @Column('float', {
    name: 'ADMDFPRESTACAO',
    precision: 53,
    default: () => '(0)',
  })
  admdfprestacao: number;

  @Column('float', {
    name: 'ADMDFCOMISSAO',
    precision: 53,
    default: () => '(0)',
  })
  admdfcomissao: number;

  @Column('datetime', { name: 'ADMDATALIBERACAO', nullable: true })
  admdataliberacao: Date | null;

  @Column('datetime', { name: 'ADMDATACADASTRO', nullable: true })
  admdatacadastro: Date | null;

  @Column('float', {
    name: 'ADMDFCOMISSAOADM',
    precision: 53,
    default: () => '(0)',
  })
  admdfcomissaoadm: number;

  @Column('int', { name: 'ADMQUANTIDADEANUNCIO', nullable: true })
  admquantidadeanuncio: number | null;

  @Column('datetime', { name: 'ADMDATADESOCUPADO', nullable: true })
  admdatadesocupado: Date | null;

  @Column('varchar', {
    name: 'ADMPORQUEDESOCUPOU',
    length: 2,
    default: () => "'0'",
  })
  admporquedesocupou: string;

  @Column('int', { name: 'ADMDIASOPCAO', nullable: true })
  admdiasopcao: number | null;

  @Column('char', { name: 'ADMDESTAQUE', length: 1, default: () => "'N'" })
  admdestaque: string;

  @Column('char', {
    name: 'ADMPRIMEIROALUGUEL',
    length: 1,
    default: () => "'N'",
  })
  admprimeiroaluguel: string;

  @Column('datetime', { name: 'ADMDATAFIMOPCAO', nullable: true })
  admdatafimopcao: Date | null;

  @Column('float', {
    name: 'ADMTAXADIFERENTE',
    precision: 53,
    default: () => '(0)',
  })
  admtaxadiferente: number;

  @Column('smallint', { name: 'ADMPRIPARPRI', default: () => '(0)' })
  admpriparpri: number;

  @Column('smallint', { name: 'ADMQTDPARPRI', default: () => '(0)' })
  admqtdparpri: number;

  @Column('char', { name: 'ADMPRILOCACAO', length: 1, default: () => "'S'" })
  admprilocacao: string;

  @Column('float', {
    name: 'ADMTXADMMINIMA',
    precision: 53,
    default: () => '(1)',
  })
  admtxadmminima: number;

  @Column('varchar', { name: 'ADMJUSTIFADMINTER', nullable: true, length: 50 })
  admjustifadminter: string | null;

  @Column('char', { name: 'ADMTIPOALUGUEL', length: 1, default: () => "'S'" })
  admtipoaluguel: string;

  @Column('char', { name: 'ADMDIASUTEIS', length: 2, default: () => "'UT'" })
  admdiasuteis: string;

  @Column('char', { name: 'ADMREPASSEMULTA', length: 1, default: () => "'1'" })
  admrepassemulta: string;

  @Column('char', { name: 'ADMSEMCHAVES', length: 1, default: () => "'N'" })
  admsemchaves: string;

  @Column('char', { name: 'ADMVAISITE', length: 1, default: () => "'N'" })
  admvaisite: string;

  @Column('char', { name: 'ADMSEMANUNCIOS', length: 1, default: () => "'N'" })
  admsemanuncios: string;

  @Column('char', { name: 'ADMSEMPLACA', length: 1, default: () => "'N'" })
  admsemplaca: string;

  @Column('datetime', { name: 'ADMFIMOPCAOLOCA', nullable: true })
  admfimopcaoloca: Date | null;

  @Column('varchar', {
    name: 'ADMPQDESOCUPOU',
    length: 2,
    default: () => "'0'",
  })
  admpqdesocupou: string;

  @Column('int', { name: 'ADMCONTABANCO', default: () => '(0)' })
  admcontabanco: number;

  @Column('char', { name: 'ADMVAIJURIDICO', length: 1, default: () => "'N'" })
  admvaijuridico: string;

  @Column('text', { name: 'ADMCONDICOESDAVENDA', nullable: true })
  admcondicoesdavenda: string | null;

  @Column('nvarchar', {
    name: 'ADMCORRESPBANCARIO',
    length: 1,
    default: () => "'N'",
  })
  admcorrespbancario: string;

  @Column('int', { name: 'ADMFINANCIAMENTOBCO', nullable: true })
  admfinanciamentobco: number | null;

  @Column('char', { name: 'ADMEXCLUSIVOLOC', length: 1, default: () => "'N'" })
  admexclusivoloc: string;

  @Column('char', { name: 'ADMEXCLUSIVO', length: 1, default: () => "'N'" })
  admexclusivo: string;

  @Column('char', { name: 'ADMESTAGIO', length: 1, default: () => "'C'" })
  admestagio: string;

  @Column('text', { name: 'ADMJUSTIFICAINTER', nullable: true })
  admjustificainter: string | null;

  @Column('smallint', { name: 'ADMDIASREPASSE', nullable: true })
  admdiasrepasse: number | null;

  @Column('char', { name: 'ADMDATABASEREP', length: 2, default: () => "'VE'" })
  admdatabaserep: string;

  @Column('datetime', { name: 'ADMDATADESOCUPADOVENDA', nullable: true })
  admdatadesocupadovenda: Date | null;

  @Column('varchar', { name: 'ADMGARANTIDO', length: 1, default: () => "'N'" })
  admgarantido: string;

  @Column('varchar', { name: 'ADMCHAVES', nullable: true, length: 50 })
  admchaves: string | null;

  @Column('float', {
    name: 'ADMAVLPRECODEVENDA',
    nullable: true,
    precision: 53,
  })
  admavlprecodevenda: number | null;

  @Column('char', { name: 'ADMLEGADO', nullable: true, length: 1 })
  admlegado: string | null;

  @Column('int', { name: 'ADMPRAZOLOC', nullable: true })
  admprazoloc: number | null;

  @Column('datetime', { name: 'ADMDHALTER', nullable: true })
  admdhalter: Date | null;

  @Column('text', { name: 'ADMCONDLOC', nullable: true })
  admcondloc: string | null;

  @Column('smallint', { name: 'ADMPRAZOADM', nullable: true })
  admprazoadm: number | null;

  @Column('varchar', {
    name: 'ADMTIPOTXADM',
    nullable: true,
    length: 2,
    default: () => "'PC'",
  })
  admtipotxadm: string | null;

  @Column('float', { name: 'ADMTXADMVLR', nullable: true, precision: 53 })
  admtxadmvlr: number | null;

  @Column('varchar', {
    name: 'ADMQTDEGARANTIDA',
    nullable: true,
    length: 2,
    default: () => "'S'",
  })
  admqtdegarantida: string | null;

  @Column('float', { name: 'ADMAVLPRECOALUG', nullable: true, precision: 53 })
  admavlprecoalug: number | null;

  @Column('int', { name: 'ADMGARANTIDOPOR', nullable: true })
  admgarantidopor: number | null;

  @Column('varchar', { name: 'ADMSEMTXMINADM', nullable: true, length: 1 })
  admsemtxminadm: string | null;

  @Column('char', {
    name: 'ADMCOMPIMOVELDIFF',
    length: 1,
    default: () => "'S'",
  })
  admcompimoveldiff: string;

  @Column('float', {
    name: 'ADMPERCREPMULTAPROPRIE',
    nullable: true,
    precision: 53,
  })
  admpercrepmultaproprie: number | null;

  @Column('char', { name: 'ADMDIASUTEISCALCPROP', nullable: true, length: 2 })
  admdiasuteiscalcprop: string | null;

  @Column('smallint', { name: 'ADMCARENCIALOC', nullable: true })
  admcarencialoc: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timadms)
  @JoinColumn([{ name: 'ADMUSUARIO', referencedColumnName: 'codusu' }])
  admusuario: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timadms2)
  @JoinColumn([{ name: 'ADMCODUSUINC', referencedColumnName: 'codusu' }])
  admcodusuinc: TsiusuEntity;

  @ManyToOne(() => TimchkEntity, (timchkEntity) => timchkEntity.timadms)
  @JoinColumn([{ name: 'ADMNUCHECKLIST', referencedColumnName: 'chknucheck' }])
  admnuchecklist: TimchkEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timadms)
  @JoinColumn([{ name: 'ADMIMOVEL', referencedColumnName: 'imvcodigo' }])
  admimovel2: TimimvEntity;

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timadms)
  @JoinColumn([{ name: 'ADMIMOB2', referencedColumnName: 'imbcodigo' }])
  admimob: TimimbEntity;

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timadms2)
  @JoinColumn([{ name: 'ADMIMOBILIARIA', referencedColumnName: 'imbcodigo' }])
  admimobiliaria: TimimbEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timadms)
  @JoinColumn([{ name: 'ADMCAPTADOR', referencedColumnName: 'corcodigo' }])
  admcaptador: TimcorEntity;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.timadms)
  @JoinColumn([{ name: 'ADMINDICETXADM', referencedColumnName: 'codmoeda' }])
  admindicetxadm: TsimoeEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.timadms)
  @JoinColumn([{ name: 'ADMEMPRESANF', referencedColumnName: 'codemp' }])
  admempresanf: TsiempEntity;

  @OneToMany(() => TimchkEntity, (timchkEntity) => timchkEntity.chkcontratoadm)
  timchks: TimchkEntity[];

  @OneToMany(() => TimclaEntity, (timclaEntity) => timclaEntity.clacontratoadm)
  timclas: TimclaEntity[];

  @OneToMany(() => TimimpEntity, (timimpEntity) => timimpEntity.impcontrato2)
  timimps: TimimpEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvultadm)
  timimvs: TimimvEntity[];

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.imvultadmvenda)
  timimvs2: TimimvEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.loccontratoadm2)
  timlocs: TimlocEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdcontratoadm)
  timmfds: TimmfdEntity[];
}
