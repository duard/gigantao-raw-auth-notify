import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TgfocrEntity } from './tGFOCR.entity';

@Index('PK_TCAIXA', ['nuconf'], { unique: true })
@Entity('TGFCCAI', { schema: 'SANKHYA' })
export class TgfccaiEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('int', { name: 'CODPDV', nullable: true })
  codpdv: number | null;

  @Column('datetime', { name: 'DHFECHAMENTO', nullable: true })
  dhfechamento: Date | null;

  @Column('float', {
    name: 'VLRQUEBRA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrquebra: number | null;

  @Column('float', {
    name: 'VLRSUPRIMENTO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrsuprimento: number | null;

  @Column('float', {
    name: 'VLRSUPRIMENTOCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrsuprimentocx: number | null;

  @Column('float', {
    name: 'VLRSANGRIA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrsangria: number | null;

  @Column('float', {
    name: 'VLRSANGRIACX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrsangriacx: number | null;

  @Column('float', {
    name: 'VLRSANGRIAAUT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrsangriaaut: number | null;

  @Column('float', {
    name: 'VLRAVISTA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlravista: number | null;

  @Column('float', {
    name: 'VLRAVISTACX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlravistacx: number | null;

  @Column('float', { name: 'VLRAPRAZO', nullable: true, precision: 53 })
  vlraprazo: number | null;

  @Column('float', {
    name: 'VLRAPRAZOCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlraprazocx: number | null;

  @Column('float', {
    name: 'VLRPARCELADO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrparcelado: number | null;

  @Column('float', {
    name: 'VLRPARCELADOCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrparceladocx: number | null;

  @Column('float', {
    name: 'VLRCHEQUEPRE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrchequepre: number | null;

  @Column('float', {
    name: 'VLRCHEQUEPRECX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrchequeprecx: number | null;

  @Column('float', {
    name: 'VLRCARTAOCRE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcartaocre: number | null;

  @Column('float', {
    name: 'VLRCARTAOCRECX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcartaocrecx: number | null;

  @Column('float', {
    name: 'VLRCARTAODEB',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcartaodeb: number | null;

  @Column('float', {
    name: 'VLRCARTAODEBCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcartaodebcx: number | null;

  @Column('float', {
    name: 'VLRDEVOLUCAOTROCA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdevolucaotroca: number | null;

  @Column('float', {
    name: 'VLRFINAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrfinal: number | null;

  @Column('float', {
    name: 'VLRFINALCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrfinalcx: number | null;

  @Column('varchar', { name: 'OBSFECHAMENTO', nullable: true, length: 1000 })
  obsfechamento: string | null;

  @Column('float', {
    name: 'VLRCREDITO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcredito: number | null;

  @Column('float', {
    name: 'VLRCREDITOCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrcreditocx: number | null;

  @Column('float', {
    name: 'VLRDEBITO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdebito: number | null;

  @Column('float', {
    name: 'VLRDEBITOCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrdebitocx: number | null;

  @Column('float', {
    name: 'VLRVOUCHERCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrvouchercx: number | null;

  @Column('float', {
    name: 'VLRVOUCHER',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrvoucher: number | null;

  @Column('float', {
    name: 'VLRPIX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrpix: number | null;

  @Column('float', {
    name: 'VLRPIXCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrpixcx: number | null;

  @Column('float', {
    name: 'VLRPIXPOS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrpixpos: number | null;

  @Column('float', {
    name: 'VLRPIXPOSCX',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  vlrpixposcx: number | null;

  @Column('char', { name: 'STATUSCX', nullable: true, length: 1 })
  statuscx: string | null;

  @Column('money', { name: 'VLRFINALOCO', nullable: true })
  vlrfinaloco: number | null;

  @Column('float', { name: 'VLRTRANSFER', precision: 53, default: () => '(0)' })
  vlrtransfer: number;

  @Column('datetime', { name: 'DTABERTURA', nullable: true })
  dtabertura: Date | null;

  @Column('char', { name: 'SANGAUTO', nullable: true, length: 1 })
  sangauto: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfccais)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfccais2)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfccais)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfccais)
  @JoinColumn([{ name: 'CODCONTAPDV', referencedColumnName: 'codctabcoint' }])
  codcontapdv: TsictaEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfccais2)
  @JoinColumn([{ name: 'CODCONTATES', referencedColumnName: 'codctabcoint' }])
  codcontates: TsictaEntity;

  @ManyToOne(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.tgfccais)
  @JoinColumn([{ name: 'NUCAIXA', referencedColumnName: 'nucaixa' }])
  nucaixa: TgfcaiEntity;

  @OneToMany(() => TgfocrEntity, (tgfocrEntity) => tgfocrEntity.nuconf)
  tgfocrs: TgfocrEntity[];
}
