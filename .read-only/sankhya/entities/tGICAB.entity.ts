import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TsimoeEntity } from './tSIMOE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgicipEntity } from './tGICIP.entity';
import { TgifinEntity } from './tGIFIN.entity';
import { TgikitEntity } from './tGIKIT.entity';
import { TgiratEntity } from './tGIRAT.entity';

@Index('PK_TGICAB', ['nuprojeto', 'versaoprojeto'], { unique: true })
@Entity('TGICAB', { schema: 'SANKHYA' })
export class TgicabEntity {
  @Column('int', { primary: true, name: 'NUPROJETO' })
  nuprojeto: number;

  @Column('char', {
    primary: true,
    name: 'VERSAOPROJETO',
    length: 15,
    default: () => "' '",
  })
  versaoprojeto: string;

  @Column('varchar', { name: 'NOMEPROJ', length: 50 })
  nomeproj: string;

  @Column('datetime', { name: 'DTPROJETO', default: () => 'getdate()' })
  dtprojeto: Date;

  @Column('float', { name: 'VLRMOEDA', precision: 53, default: () => '(0)' })
  vlrmoeda: number;

  @Column('float', {
    name: 'PERCCOMISSAO1',
    precision: 53,
    default: () => '(0)',
  })
  perccomissao1: number;

  @Column('float', {
    name: 'PERCCOMISSAO2',
    precision: 53,
    default: () => '(0)',
  })
  perccomissao2: number;

  @Column('float', {
    name: 'PERCCOMISSAO3',
    precision: 53,
    default: () => '(0)',
  })
  perccomissao3: number;

  @Column('float', {
    name: 'PERCCOMISSAO4',
    precision: 53,
    default: () => '(0)',
  })
  perccomissao4: number;

  @Column('float', {
    name: 'PERCCOMISSAO5',
    precision: 53,
    default: () => '(0)',
  })
  perccomissao5: number;

  @Column('float', {
    name: 'PERCDESCONTO',
    precision: 53,
    default: () => '(0)',
  })
  percdesconto: number;

  @Column('float', {
    name: 'PERCMARGEMPROP',
    precision: 53,
    default: () => '(0)',
  })
  percmargemprop: number;

  @Column('float', {
    name: 'PERCIMPOSTOSVEN',
    precision: 53,
    default: () => '(0)',
  })
  percimpostosven: number;

  @Column('float', {
    name: 'PERCINTERNACAO',
    precision: 53,
    default: () => '(0)',
  })
  percinternacao: number;

  @Column('float', { name: 'VLRDESCONTO', precision: 53, default: () => '(0)' })
  vlrdesconto: number;

  @Column('float', {
    name: 'VLRMARGEMPROP',
    precision: 53,
    default: () => '(0)',
  })
  vlrmargemprop: number;

  @Column('float', {
    name: 'VLRINTERNACAO',
    precision: 53,
    default: () => '(0)',
  })
  vlrinternacao: number;

  @Column('float', {
    name: 'VLRIMPOSTOSVEN',
    precision: 53,
    default: () => '(0)',
  })
  vlrimpostosven: number;

  @Column('float', {
    name: 'VLRTREINAMENTO',
    precision: 53,
    default: () => '(0)',
  })
  vlrtreinamento: number;

  @Column('float', {
    name: 'VLRINSTALACAO',
    precision: 53,
    default: () => '(0)',
  })
  vlrinstalacao: number;

  @Column('float', {
    name: 'VLRVIAGEMNAC',
    precision: 53,
    default: () => '(0)',
  })
  vlrviagemnac: number;

  @Column('float', {
    name: 'VLRVIAGEMINT',
    precision: 53,
    default: () => '(0)',
  })
  vlrviagemint: number;

  @Column('float', {
    name: 'VLRCUSEQUIPFOB',
    precision: 53,
    default: () => '(0)',
  })
  vlrcusequipfob: number;

  @Column('float', {
    name: 'VLRGARHARDFOB',
    precision: 53,
    default: () => '(0)',
  })
  vlrgarhardfob: number;

  @Column('float', {
    name: 'VLRGARSOFTFOB',
    precision: 53,
    default: () => '(0)',
  })
  vlrgarsoftfob: number;

  @Column('float', {
    name: 'VLRCUSEQUIPCIF',
    precision: 53,
    default: () => '(0)',
  })
  vlrcusequipcif: number;

  @Column('float', {
    name: 'VLRGARHARDCIF',
    precision: 53,
    default: () => '(0)',
  })
  vlrgarhardcif: number;

  @Column('float', {
    name: 'VLRGARSOFTCIF',
    precision: 53,
    default: () => '(0)',
  })
  vlrgarsoftcif: number;

  @Column('float', {
    name: 'VLRCUSEQUIPMARGEM',
    precision: 53,
    default: () => '(0)',
  })
  vlrcusequipmargem: number;

  @Column('float', {
    name: 'VLRGARHARDMARGEM',
    precision: 53,
    default: () => '(0)',
  })
  vlrgarhardmargem: number;

  @Column('float', {
    name: 'VLRGARSOFTMARGEM',
    precision: 53,
    default: () => '(0)',
  })
  vlrgarsoftmargem: number;

  @Column('float', {
    name: 'VLRGARANTIATECNICO',
    precision: 53,
    default: () => '(0)',
  })
  vlrgarantiatecnico: number;

  @Column('float', { name: 'VLRTOTAL', precision: 53, default: () => '(0)' })
  vlrtotal: number;

  @Column('float', {
    name: 'VLRTOTALREAL',
    precision: 53,
    default: () => '(0)',
  })
  vlrtotalreal: number;

  @Column('float', {
    name: 'VLRLUCROLIQUIDOREAL',
    precision: 53,
    default: () => '(0)',
  })
  vlrlucroliquidoreal: number;

  @Column('float', {
    name: 'PERCLUCROLIQUIDO',
    precision: 53,
    default: () => '(0)',
  })
  perclucroliquido: number;

  @Column('float', { name: 'VLRTOTALFOB', precision: 53, default: () => '(0)' })
  vlrtotalfob: number;

  @Column('float', { name: 'VLRTOTALCIF', precision: 53, default: () => '(0)' })
  vlrtotalcif: number;

  @Column('float', {
    name: 'VLROUTROSCUSCIF',
    precision: 53,
    default: () => '(0)',
  })
  vlroutroscuscif: number;

  @Column('float', {
    name: 'VLROUTROSCUSMARGEM',
    precision: 53,
    default: () => '(0)',
  })
  vlroutroscusmargem: number;

  @Column('float', { name: 'VLRTOTALCUS', precision: 53, default: () => '(0)' })
  vlrtotalcus: number;

  @Column('float', {
    name: 'VLRTOTALCOMSPARE',
    precision: 53,
    default: () => '(0)',
  })
  vlrtotalcomspare: number;

  @Column('float', {
    name: 'VLRTOTALARREDONDADO',
    precision: 53,
    default: () => '(0)',
  })
  vlrtotalarredondado: number;

  @Column('float', {
    name: 'VLRTOTALCOMISSAO',
    precision: 53,
    default: () => '(0)',
  })
  vlrtotalcomissao: number;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('char', { name: 'DUPNOVAVERSAO', length: 1, default: () => "'N'" })
  dupnovaversao: string;

  @Column('float', {
    name: 'PERCMARGEMPROD',
    precision: 53,
    default: () => '(0)',
  })
  percmargemprod: number;

  @Column('float', {
    name: 'PERCINTERNACAOPROD',
    precision: 53,
    default: () => '(0)',
  })
  percinternacaoprod: number;

  @Column('float', {
    name: 'PERCIMPOSTOPROD',
    precision: 53,
    default: () => '(0)',
  })
  percimpostoprod: number;

  @Column('float', {
    name: 'PERCMARGEMSERV',
    precision: 53,
    default: () => '(0)',
  })
  percmargemserv: number;

  @Column('float', {
    name: 'PERCINTERNACAOSERV',
    precision: 53,
    default: () => '(0)',
  })
  percinternacaoserv: number;

  @Column('float', {
    name: 'PERCIMPOSTOSERV',
    precision: 53,
    default: () => '(0)',
  })
  percimpostoserv: number;

  @Column('float', { name: 'PERCFRETE', precision: 53, default: () => '(0)' })
  percfrete: number;

  @Column('float', {
    name: 'PERCDESCPROD',
    precision: 53,
    default: () => '(0)',
  })
  percdescprod: number;

  @Column('float', {
    name: 'PERCDESCSERV',
    precision: 53,
    default: () => '(0)',
  })
  percdescserv: number;

  @ManyToOne(() => TsimoeEntity, (tsimoeEntity) => tsimoeEntity.tgicabs)
  @JoinColumn([{ name: 'CODMOEDA', referencedColumnName: 'codmoeda' }])
  codmoeda: TsimoeEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgicabs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgicabs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToOne(() => TgicipEntity, (tgicipEntity) => tgicipEntity.tgicab)
  tgicip: TgicipEntity;

  @OneToMany(() => TgifinEntity, (tgifinEntity) => tgifinEntity.tgicab)
  tgifins: TgifinEntity[];

  @OneToMany(() => TgikitEntity, (tgikitEntity) => tgikitEntity.tgicab)
  tgikits: TgikitEntity[];

  @OneToMany(() => TgiratEntity, (tgiratEntity) => tgiratEntity.tgicab)
  tgirats: TgiratEntity[];
}
