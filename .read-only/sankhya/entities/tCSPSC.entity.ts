import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsoccEntity } from './tCSOCC.entity';
import { TcsppfEntity } from './tCSPPF.entity';
import { TcspreEntity } from './tCSPRE.entity';
import { TcspreqtdEntity } from './tCSPREQTD.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcspssEntity } from './tCSPSS.entity';
import { TcssdEntity } from './tCSSD.entity';
import { TgfbilEntity } from './tGFBIL.entity';

@Index('PK_TCSPSC', ['numcontrato', 'codprod'], { unique: true })
@Index('TCSPSC_I01', ['sitprod', 'numcontrato'], {})
@Entity('TCSPSC', { schema: 'SANKHYA' })
export class TcspscEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'CODPRODPACOTE', nullable: true })
  codprodpacote: number | null;

  @Column('char', { name: 'SITPROD', length: 1, default: () => "'A'" })
  sitprod: string;

  @Column('char', { name: 'NUMSERIE', nullable: true, length: 10 })
  numserie: string | null;

  @Column('char', { name: 'VERSAO', nullable: true, length: 5 })
  versao: string | null;

  @Column('datetime', { name: 'DTVERSAO', nullable: true })
  dtversao: Date | null;

  @Column('float', { name: 'NUMUSUARIOS', nullable: true, precision: 53 })
  numusuarios: number | null;

  @Column('char', { name: 'IMPRNOTA', length: 1, default: () => "'S'" })
  imprnota: string;

  @Column('smallint', { name: 'GRUPIMPRESSAO', nullable: true })
  grupimpressao: number | null;

  @Column('char', {
    name: 'LIMITANTE',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  limitante: string | null;

  @Column('money', { name: 'QTDEPREVISTA', nullable: true })
  qtdeprevista: number | null;

  @Column('smallint', { name: 'FREQUENCIA', nullable: true })
  frequencia: number | null;

  @Column('float', { name: 'VLRUNIT', precision: 53, default: () => '(0)' })
  vlrunit: number;

  @Column('char', { name: 'IMPROS', length: 1, default: () => "'N'" })
  impros: string;

  @Column('int', { name: 'QTDMESES', default: () => '(0)' })
  qtdmeses: number;

  @Column('char', { name: 'PRODPRINC', length: 1, default: () => "'N'" })
  prodprinc: string;

  @Column('char', { name: 'RESPQUEBRATEC', length: 1, default: () => "'P'" })
  respquebratec: string;

  @Column('float', { name: 'UNIDCONVERSAO', nullable: true, precision: 53 })
  unidconversao: number | null;

  @Column('smallint', { name: 'QTDISENCAO', nullable: true })
  qtdisencao: number | null;

  @Column('datetime', { name: 'DTULTCOB', nullable: true })
  dtultcob: Date | null;

  @Column('char', { name: 'KITSERVICOS', length: 1, default: () => "'N'" })
  kitservicos: string;

  @Column('char', { name: 'TIPCOBKIT', length: 1, default: () => "'V'" })
  tipcobkit: string;

  @Column('char', { name: 'RESPKITSERV', length: 1, default: () => "'P'" })
  respkitserv: string;

  @Column('char', { name: 'RESPARMAZ', length: 1, default: () => "'P'" })
  resparmaz: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('datetime', { name: 'DTULTQUEBRA', nullable: true })
  dtultquebra: Date | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('char', { name: 'TIPOAREA', length: 1, default: () => "'P'" })
  tipoarea: string;

  @Column('int', { name: 'AREATOTAL', nullable: true })
  areatotal: number | null;

  @Column('int', { name: 'AREAPLANT', nullable: true })
  areaplant: number | null;

  @Column('datetime', { name: 'DTINICIOISENCAO', nullable: true })
  dtinicioisencao: Date | null;

  @Column('datetime', { name: 'DTFIMISENCAO', nullable: true })
  dtfimisencao: Date | null;

  @Column('smallint', { name: 'TOPFATURCON', nullable: true })
  topfaturcon: number | null;

  @Column('varchar', { name: 'SERFATURCON', nullable: true, length: 3 })
  serfaturcon: string | null;

  @Column('int', { name: 'QTDUSU', nullable: true })
  qtdusu: number | null;

  @OneToMany(() => TcsoccEntity, (tcsoccEntity) => tcsoccEntity.tcspsc)
  tcsoccs: TcsoccEntity[];

  @OneToMany(() => TcsppfEntity, (tcsppfEntity) => tcsppfEntity.tcspsc)
  tcsppfs: TcsppfEntity[];

  @OneToMany(() => TcspreEntity, (tcspreEntity) => tcspreEntity.tcspsc)
  tcspres: TcspreEntity[];

  @OneToMany(() => TcspreqtdEntity, (tcspreqtdEntity) => tcspreqtdEntity.tcspsc)
  tcspreqtds: TcspreqtdEntity[];

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcspscs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcspscs)
  @JoinColumn([{ name: 'CODPARCPREF', referencedColumnName: 'codparc' }])
  codparcpref: TgfparEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcspscs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @OneToMany(() => TcspssEntity, (tcspssEntity) => tcspssEntity.tcspsc)
  tcspsses: TcspssEntity[];

  @OneToMany(() => TcssdEntity, (tcssdEntity) => tcssdEntity.tcspsc)
  tcssds: TcssdEntity[];

  @OneToMany(() => TgfbilEntity, (tgfbilEntity) => tgfbilEntity.tcspsc)
  tgfbils: TgfbilEntity[];
}
