import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimadmEntity } from './tIMADM.entity';
import { TimanuEntity } from './tIMANU.entity';
import { TimcfiEntity } from './tIMCFI.entity';
import { TimchvEntity } from './tIMCHV.entity';
import { TimcilEntity } from './tIMCIL.entity';
import { TimcimEntity } from './tIMCIM.entity';
import { TimclaEntity } from './tIMCLA.entity';
import { TimilcEntity } from './tIMILC.entity';
import { TimimpEntity } from './tIMIMP.entity';
import { TimimrEntity } from './tIMIMR.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TgfpevEntity } from './tGFPEV.entity';
import { TimtpiEntity } from './tIMTPI.entity';
import { TimedgEntity } from './tIMEDG.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TsiendEntity } from './tSIEND.entity';
import { TimiprEntity } from './tIMIPR.entity';
import { TimiptEntity } from './tIMIPT.entity';
import { TimirbEntity } from './tIMIRB.entity';
import { TimiviEntity } from './tIMIVI.entity';
import { TimlfiEntity } from './tIMLFI.entity';
import { TimlicEntity } from './tIMLIC.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimpeiEntity } from './tIMPEI.entity';
import { TimpipEntity } from './tIMPIP.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimtplEntity } from './tIMTPL.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('NI_IMVBAIRRO', ['imvbairro'], {})
@Index('NI_IMVCIDADE', ['imvcidade'], {})
@Index('PK_TIMIMV', ['imvcodigo'], { unique: true })
@Entity('TIMIMV', { schema: 'SANKHYA' })
export class TimimvEntity {
  @Column('int', { primary: true, name: 'IMVCODIGO' })
  imvcodigo: number;

  @Column('varchar', { name: 'IMVDESCRICAO', nullable: true, length: 200 })
  imvdescricao: string | null;

  @Column('varchar', { name: 'IMVCOMPLEMENTO', nullable: true, length: 50 })
  imvcomplemento: string | null;

  @Column('int', { name: 'IMVBAIRRO', nullable: true, default: () => '(0)' })
  imvbairro: number | null;

  @Column('varchar', { name: 'IMVCEP', nullable: true, length: 8 })
  imvcep: string | null;

  @Column('int', { name: 'IMVCIDADE', nullable: true, default: () => '(0)' })
  imvcidade: number | null;

  @Column('smallint', {
    name: 'IMVOCUPACAO',
    nullable: true,
    default: () => '(3)',
  })
  imvocupacao: number | null;

  @Column('varchar', { name: 'IMVIFEASFALTO', length: 1, default: () => "'N'" })
  imvifeasfalto: string;

  @Column('varchar', { name: 'IMVIFEMURO', length: 1, default: () => "'N'" })
  imvifemuro: string;

  @Column('varchar', { name: 'IMVIFEGRADE', length: 1, default: () => "'N'" })
  imvifegrade: string;

  @Column('varchar', { name: 'IMVIFEPORTAO', length: 1, default: () => "'N'" })
  imvifeportao: string;

  @Column('varchar', { name: 'IMVIFEPISOS', length: 1, default: () => "'N'" })
  imvifepisos: string;

  @Column('varchar', { name: 'IMVIFEESGOTO', length: 1, default: () => "'N'" })
  imvifeesgoto: string;

  @Column('varchar', {
    name: 'IMVIFEGABARITO',
    length: 1,
    default: () => "'N'",
  })
  imvifegabarito: string;

  @Column('varchar', { name: 'IMVIFEESQUINA', length: 1, default: () => "'N'" })
  imvifeesquina: string;

  @Column('varchar', { name: 'IMVIFEFRENTE', length: 1, default: () => "'N'" })
  imvifefrente: string;

  @Column('varchar', { name: 'IMVIFESOL', length: 1, default: () => "'S'" })
  imvifesol: string;

  @Column('varchar', { name: 'IMVIFELADO', length: 1, default: () => "'N'" })
  imvifelado: string;

  @Column('varchar', {
    name: 'IMVIFEDIVARMCOZINHA',
    length: 1,
    default: () => "'N'",
  })
  imvifedivarmcozinha: string;

  @Column('varchar', {
    name: 'IMVIFEDIVSALATV',
    length: 1,
    default: () => "'N'",
  })
  imvifedivsalatv: string;

  @Column('varchar', {
    name: 'IMVIFEDIVPISCINA',
    length: 1,
    default: () => "'N'",
  })
  imvifedivpiscina: string;

  @Column('varchar', {
    name: 'IMVIFEDIVCHURRASQEIRA',
    length: 1,
    default: () => "'N'",
  })
  imvifedivchurrasqeira: string;

  @Column('varchar', {
    name: 'IMVIFEDIVBOXGARAGEM',
    nullable: true,
    length: 20,
  })
  imvifedivboxgaragem: string | null;

  @Column('char', { name: 'IMVATIVO', length: 1, default: () => "'S'" })
  imvativo: string;

  @Column('varchar', { name: 'IMVIFEDIVESCANINHO', nullable: true, length: 20 })
  imvifedivescaninho: string | null;

  @Column('varchar', {
    name: 'IMVIFEDIVESTADO',
    length: 2,
    default: () => "'NI'",
  })
  imvifedivestado: string;

  @Column('int', { name: 'IMVDFTABELADEPRECOS', nullable: true })
  imvdftabeladeprecos: number | null;

  @Column('text', { name: 'IMVOBSERVACAO', nullable: true })
  imvobservacao: string | null;

  @Column('text', { name: 'IMVDESCRICAOATUAL', nullable: true })
  imvdescricaoatual: string | null;

  @Column('int', { name: 'IMVPASTA', nullable: true })
  imvpasta: number | null;

  @Column('varchar', { name: 'IMVCHAVES', nullable: true, length: 50 })
  imvchaves: string | null;

  @Column('varchar', { name: 'IMVIFEFORRO', length: 2, default: () => "'NI'" })
  imvifeforro: string;

  @Column('int', { name: 'IMVIFEANO', nullable: true })
  imvifeano: number | null;

  @Column('varchar', { name: 'IMVFRACAOIDEAL', nullable: true, length: 10 })
  imvfracaoideal: string | null;

  @Column('varchar', {
    name: 'IMVESTATISTICA',
    length: 1,
    default: () => "'N'",
  })
  imvestatistica: string;

  @Column('smallint', { name: 'IMVAPTO', nullable: true })
  imvapto: number | null;

  @Column('varchar', { name: 'IMVLOCALIZACAO', nullable: true, length: 10 })
  imvlocalizacao: string | null;

  @Column('varchar', { name: 'IMVREGISTROIPTU', nullable: true, length: 30 })
  imvregistroiptu: string | null;

  @Column('text', { name: 'IMVURLGOOGLEMAP', nullable: true })
  imvurlgooglemap: string | null;

  @Column('datetime', { name: 'IMVDATAENVREDE', nullable: true })
  imvdataenvrede: Date | null;

  @Column('datetime', { name: 'IMVDTFIMRESERVA', nullable: true })
  imvdtfimreserva: Date | null;

  @Column('varchar', { name: 'IMVNUMERO', nullable: true, length: 10 })
  imvnumero: string | null;

  @Column('smallint', { name: 'IMVGARPARQTD', default: () => '(0)' })
  imvgarparqtd: number;

  @Column('varchar', {
    name: 'IMVMOBILIADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  imvmobiliado: string | null;

  @Column('datetime', { name: 'IMVDTPROXCONTATO', nullable: true })
  imvdtproxcontato: Date | null;

  @Column('datetime', { name: 'IMVDTASSCONTATO', nullable: true })
  imvdtasscontato: Date | null;

  @Column('smallint', { name: 'IMVDOCUMENTACAO', default: () => '(0)' })
  imvdocumentacao: number;

  @Column('datetime', { name: 'IMVDTVISITA', nullable: true })
  imvdtvisita: Date | null;

  @Column('char', { name: 'IMVESTADO', nullable: true, length: 2 })
  imvestado: string | null;

  @Column('smallint', { name: 'IMVANDAR', default: () => '(0)' })
  imvandar: number;

  @Column('char', { name: 'IMVEDICULA', length: 1, default: () => "'N'" })
  imvedicula: string;

  @Column('int', { name: 'IMVUSUARIO', default: () => '(0)' })
  imvusuario: number;

  @Column('smallint', { name: 'IMVIFEDIVQTCOMARMARIO', default: () => '(0)' })
  imvifedivqtcomarmario: number;

  @Column('int', { name: 'IMVCARTORIO', nullable: true })
  imvcartorio: number | null;

  @Column('varchar', {
    name: 'IMVVISIVELSITE',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  imvvisivelsite: string | null;

  @Column('datetime', { name: 'IMVDATAALTERACAO', nullable: true })
  imvdataalteracao: Date | null;

  @Column('smallint', { name: 'IMVUNIDADEMEDIDA', nullable: true })
  imvunidademedida: number | null;

  @Column('varchar', { name: 'IMVENDERECO', nullable: true, length: 50 })
  imvendereco: string | null;

  @Column('char', { name: 'IMVESTAGIO', length: 2, default: () => "'NA'" })
  imvestagio: string;

  @Column('float', { name: 'IMVDFPRECODEVENDA', nullable: true, precision: 53 })
  imvdfprecodevenda: number | null;

  @Column('float', { name: 'IMVDFPRECOALUGUEL', nullable: true, precision: 53 })
  imvdfprecoaluguel: number | null;

  @Column('text', { name: 'IMVANUNCIOJORNAL', nullable: true })
  imvanunciojornal: string | null;

  @Column('float', { name: 'IMVIFEAREATERRENO', nullable: true, precision: 53 })
  imvifeareaterreno: number | null;

  @Column('float', {
    name: 'IMVIFEAREAPRIVATIVA',
    nullable: true,
    precision: 53,
  })
  imvifeareaprivativa: number | null;

  @Column('float', { name: 'IMVDFVLCONDOMINIO', nullable: true, precision: 53 })
  imvdfvlcondominio: number | null;

  @Column('float', {
    name: 'IMVIFEAREACONSTRUIDA',
    nullable: true,
    precision: 53,
  })
  imvifeareaconstruida: number | null;

  @Column('float', { name: 'IMVAREACONSTRUIDA', nullable: true, precision: 53 })
  imvareaconstruida: number | null;

  @Column('float', { name: 'IMVAREAPRIVTOTAL', nullable: true, precision: 53 })
  imvareaprivtotal: number | null;

  @Column('float', { name: 'IMVAREAINTERNA', nullable: true, precision: 53 })
  imvareainterna: number | null;

  @Column('smallint', { name: 'IMVIFEDIVSUITES', nullable: true })
  imvifedivsuites: number | null;

  @Column('smallint', { name: 'IMVIFEDIVQUARTOS', nullable: true })
  imvifedivquartos: number | null;

  @Column('varchar', {
    name: 'IMVIFEDIVEMPREGADA',
    length: 1,
    default: () => "'N'",
  })
  imvifedivempregada: string;

  @Column('int', { name: 'IMVIFEDIVREVERSIVEL', nullable: true })
  imvifedivreversivel: number | null;

  @Column('int', { name: 'IMVIFEDIVSALAS', nullable: true })
  imvifedivsalas: number | null;

  @Column('int', { name: 'IMVIFEDIVQTCOMARMARIOS', nullable: true })
  imvifedivqtcomarmarios: number | null;

  @Column('int', { name: 'IMVIFEDIVBANHEIROS', nullable: true })
  imvifedivbanheiros: number | null;

  @Column('int', { name: 'IMVIFEDIVMASTER', nullable: true })
  imvifedivmaster: number | null;

  @Column('varchar', { name: 'IMVASSINATURA', nullable: true, length: 50 })
  imvassinatura: string | null;

  @Column('int', { name: 'IMVIFEDIVVAGASGARAGEM', nullable: true })
  imvifedivvagasgaragem: number | null;

  @Column('char', { name: 'IMVEXIBEPRECOSITE', nullable: true, length: 1 })
  imvexibeprecosite: string | null;

  @Column('float', { name: 'IMVAREAGARAGEM', nullable: true, precision: 53 })
  imvareagaragem: number | null;

  @Column('int', { name: 'IMVFACCHAVE', nullable: true })
  imvfacchave: number | null;

  @Column('char', { name: 'IMVLEGADO', nullable: true, length: 1 })
  imvlegado: string | null;

  @Column('char', { name: 'IMVLOCALCHAVES', nullable: true, length: 2 })
  imvlocalchaves: string | null;

  @Column('char', { name: 'IMVQUINTAL', nullable: true, length: 1 })
  imvquintal: string | null;

  @Column('smallint', { name: 'IMVGARAGEMDESCOBERTA', nullable: true })
  imvgaragemdescoberta: number | null;

  @Column('smallint', { name: 'IMVGARAGEMCOBERTA', nullable: true })
  imvgaragemcoberta: number | null;

  @Column('varchar', { name: 'IMVPORTARIA', nullable: true, length: 200 })
  imvportaria: string | null;

  @Column('varchar', { name: 'IMVCOZINHA', nullable: true, length: 200 })
  imvcozinha: string | null;

  @Column('char', { name: 'IMVCONDFECHADO', nullable: true, length: 1 })
  imvcondfechado: string | null;

  @Column('char', { name: 'IMVESTAGIOOLD', nullable: true, length: 2 })
  imvestagioold: string | null;

  @Column('datetime', { name: 'IMVDHINC', nullable: true })
  imvdhinc: Date | null;

  @Column('char', { name: 'IMVEXIBECOMDOMINIOSITE', nullable: true, length: 1 })
  imvexibecomdominiosite: string | null;

  @Column('smallint', { name: 'IMVULTANU', nullable: true })
  imvultanu: number | null;

  @Column('varchar', { name: 'IMVINTMAPA', nullable: true, length: 1 })
  imvintmapa: string | null;

  @Column('varchar', { name: 'IMVINTENDERECO', nullable: true, length: 1 })
  imvintendereco: string | null;

  @Column('varchar', { name: 'IMVLEMBRETE', nullable: true, length: 2000 })
  imvlembrete: string | null;

  @Column('float', { name: 'IMVVLRIPTU', nullable: true, precision: 53 })
  imvvlriptu: number | null;

  @Column('float', { name: 'IMVAVLCONSTRUCAO', nullable: true, precision: 53 })
  imvavlconstrucao: number | null;

  @Column('varchar', { name: 'IMVCARTLIVRO', nullable: true, length: 40 })
  imvcartlivro: string | null;

  @Column('datetime', { name: 'IMVCARTDTREGISTRO', nullable: true })
  imvcartdtregistro: Date | null;

  @Column('varchar', { name: 'IMVCARTFOLHA', nullable: true, length: 40 })
  imvcartfolha: string | null;

  @Column('varchar', { name: 'IMVCARTMATRICULA', nullable: true, length: 40 })
  imvcartmatricula: string | null;

  @Column('varchar', { name: 'IMVCARTREGISTRO', nullable: true, length: 40 })
  imvcartregistro: string | null;

  @Column('float', {
    name: 'IMVLATITUDEGPS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  imvlatitudegps: number | null;

  @Column('float', {
    name: 'IMVLONGITUDEGPS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  imvlongitudegps: number | null;

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admimovel2)
  timadms: TimadmEntity[];

  @OneToMany(() => TimanuEntity, (timanuEntity) => timanuEntity.anuimovel2)
  timanus: TimanuEntity[];

  @OneToMany(() => TimcfiEntity, (timcfiEntity) => timcfiEntity.cfiimovel2)
  timcfis: TimcfiEntity[];

  @OneToMany(() => TimchvEntity, (timchvEntity) => timchvEntity.imvcodigo)
  timchvs: TimchvEntity[];

  @OneToMany(() => TimcilEntity, (timcilEntity) => timcilEntity.cilimovel2)
  timcils: TimcilEntity[];

  @OneToMany(() => TimcimEntity, (timcimEntity) => timcimEntity.cimimovel2)
  timcims: TimcimEntity[];

  @OneToMany(() => TimclaEntity, (timclaEntity) => timclaEntity.claimovel)
  timclas: TimclaEntity[];

  @OneToMany(() => TimilcEntity, (timilcEntity) => timilcEntity.ilcimovel2)
  timilcs: TimilcEntity[];

  @OneToMany(() => TimimpEntity, (timimpEntity) => timimpEntity.impimovel)
  timimps: TimimpEntity[];

  @OneToMany(() => TimimrEntity, (timimrEntity) => timimrEntity.imrimovel2)
  timimrs: TimimrEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.timimvs)
  @JoinColumn([{ name: 'IMVCIDADE', referencedColumnName: 'codcid' }])
  imvcidade2: TsicidEntity;

  @ManyToOne(() => TimadmEntity, (timadmEntity) => timadmEntity.timimvs)
  @JoinColumn([{ name: 'IMVULTADM', referencedColumnName: 'admnucontrato' }])
  imvultadm: TimadmEntity;

  @ManyToOne(() => TimadmEntity, (timadmEntity) => timadmEntity.timimvs2)
  @JoinColumn([
    { name: 'IMVULTADMVENDA', referencedColumnName: 'admnucontrato' },
  ])
  imvultadmvenda: TimadmEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.timimvs)
  @JoinColumn([{ name: 'IMVBAIRRO', referencedColumnName: 'codbai' }])
  imvbairro2: TsibaiEntity;

  @ManyToOne(() => TgfpevEntity, (tgfpevEntity) => tgfpevEntity.timimvs)
  @JoinColumn([{ name: 'NUPEV', referencedColumnName: 'nupev' }])
  nupev: TgfpevEntity;

  @ManyToOne(() => TimtpiEntity, (timtpiEntity) => timtpiEntity.timimvs)
  @JoinColumn([{ name: 'IMVTIPODOIMOVEL', referencedColumnName: 'tpicodigo' }])
  imvtipodoimovel: TimtpiEntity;

  @ManyToOne(() => TimedgEntity, (timedgEntity) => timedgEntity.timimvs)
  @JoinColumn([{ name: 'IMVEDIFICIO', referencedColumnName: 'edgcodigo' }])
  imvedificio: TimedgEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timimvs)
  @JoinColumn([{ name: 'IMVCODUSUINC', referencedColumnName: 'codusu' }])
  imvcodusuinc: TsiusuEntity;

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timimvs)
  @JoinColumn([
    { name: 'IMVEMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  imvempreendimento: TimeprEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.timimvs)
  @JoinColumn([{ name: 'IMVCODEND', referencedColumnName: 'codend' }])
  imvcodend: TsiendEntity;

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprimovel2)
  timiprs: TimiprEntity[];

  @OneToMany(() => TimiptEntity, (timiptEntity) => timiptEntity.iptimovel)
  timipts: TimiptEntity[];

  @OneToMany(() => TimirbEntity, (timirbEntity) => timirbEntity.irbimovel)
  timirbs: TimirbEntity[];

  @OneToMany(() => TimiviEntity, (timiviEntity) => timiviEntity.iviimovel2)
  timivis: TimiviEntity[];

  @OneToMany(() => TimlfiEntity, (timlfiEntity) => timlfiEntity.lfiimovel2)
  timlfis: TimlfiEntity[];

  @OneToMany(() => TimlicEntity, (timlicEntity) => timlicEntity.licimovel)
  timlics: TimlicEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.locimovel)
  timlocs: TimlocEntity[];

  @OneToMany(() => TimpeiEntity, (timpeiEntity) => timpeiEntity.peiimovel2)
  timpeis: TimpeiEntity[];

  @OneToMany(() => TimpipEntity, (timpipEntity) => timpipEntity.pipimovel2)
  timpips: TimpipEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.sacimovel)
  timsacs: TimsacEntity[];

  @ManyToMany(() => TimtplEntity, (timtplEntity) => timtplEntity.timimvs)
  timtpls: TimtplEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdoimovel)
  timvdos: TimvdoEntity[];
}
