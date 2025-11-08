import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwarcEntity } from './tGWARC.entity';
import { TsirfeEntity } from './tSIRFE.entity';
import { TgweasEntity } from './tGWEAS.entity';
import { TgwepaEntity } from './tGWEPA.entity';
import { TgwittEntity } from './tGWITT.entity';
import { TgwsepEntity } from './tGWSEP.entity';
import { TgwuasEntity } from './tGWUAS.entity';

@Index('PK_TGWARS', ['codareasep'], { unique: true })
@Entity('TGWARS', { schema: 'SANKHYA' })
export class TgwarsEntity {
  @Column('int', { primary: true, name: 'CODAREASEP' })
  codareasep: number;

  @Column('varchar', { name: 'NOMEAREASEP', length: 60 })
  nomeareasep: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'TIPOSEP', length: 1, default: () => "'L'" })
  tiposep: string;

  @Column('float', { name: 'M3MAX', precision: 53, default: () => '(0)' })
  m3Max: number;

  @Column('float', { name: 'PESOMAX', precision: 53, default: () => '(0)' })
  pesomax: number;

  @Column('varchar', { name: 'IMPRESSORAETQVOL', nullable: true, length: 100 })
  impressoraetqvol: string | null;

  @Column('char', {
    name: 'USASEPAGRUPROD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usasepagruprod: string | null;

  @Column('smallint', { name: 'QTCHECKSEP', nullable: true })
  qtchecksep: number | null;

  @Column('float', { name: 'VOLCHECKSEPROD', nullable: true, precision: 53 })
  volcheckseprod: number | null;

  @Column('float', { name: 'PESMAXSEPAGRU', nullable: true, precision: 53 })
  pesmaxsepagru: number | null;

  @Column('smallint', { name: 'QTPEDSEPAGR', nullable: true })
  qtpedsepagr: number | null;

  @Column('char', { name: 'POSESTEIRASEP', length: 1, default: () => "'N'" })
  posesteirasep: string;

  @Column('char', { name: 'AGRUPARPEDIDOSWMS', nullable: true, length: 1 })
  agruparpedidoswms: string | null;

  @Column('varchar', { name: 'IMPRESSORAETQSEP', nullable: true, length: 100 })
  impressoraetqsep: string | null;

  @Column('smallint', { name: 'QTDUMAPED', nullable: true })
  qtdumaped: number | null;

  @Column('varchar', {
    name: 'VOLCONTINUO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  volcontinuo: string | null;

  @Column('varchar', {
    name: 'IMPETIQFECHVOL',
    length: 1,
    default: () => "'S'",
  })
  impetiqfechvol: string;

  @Column('smallint', { name: 'QTDSKU', nullable: true })
  qtdsku: number | null;

  @Column('smallint', { name: 'TOLERANCIASKU', nullable: true })
  toleranciasku: number | null;

  @Column('char', { name: 'QUEBRAPORNORMA', length: 1, default: () => "'N'" })
  quebrapornorma: string;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codareasep)
  tgfpros: TgfproEntity[];

  @ManyToOne(() => TgwarcEntity, (tgwarcEntity) => tgwarcEntity.tgwars)
  @JoinColumn([{ name: 'CODAREACONF', referencedColumnName: 'codareaconf' }])
  codareaconf: TgwarcEntity;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgwars)
  @JoinColumn([{ name: 'MODETQVOL', referencedColumnName: 'nurfe' }])
  modetqvol: TsirfeEntity;

  @OneToMany(() => TgweasEntity, (tgweasEntity) => tgweasEntity.codareasep2)
  tgweas: TgweasEntity[];

  @OneToMany(() => TgwepaEntity, (tgwepaEntity) => tgwepaEntity.codareasep)
  tgwepas: TgwepaEntity[];

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codareasep)
  tgwitts: TgwittEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.codareasep)
  tgwseps: TgwsepEntity[];

  @OneToMany(() => TgwuasEntity, (tgwuasEntity) => tgwuasEntity.codareasep2)
  tgwuas: TgwuasEntity[];
}
