import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TmiefeEntity } from './tMIEFE.entity';
import { TmifmeEntity } from './tMIFME.entity';
import { TsidsbEntity } from './tSIDSB.entity';
import { TmiindEntity } from './tMIIND.entity';
import { TmiungEntity } from './tMIUNG.entity';
import { TmiexeEntity } from './tMIEXE.entity';
import { TmiplaEntity } from './tMIPLA.entity';
import { TmipmeEntity } from './tMIPME.entity';
import { TmirmeEntity } from './tMIRME.entity';

@Index('PK_TMIMET', ['numet'], { unique: true })
@Entity('TMIMET', { schema: 'SANKHYA' })
export class TmimetEntity {
  @Column('int', { primary: true, name: 'NUMET' })
  numet: number;

  @Column('varchar', { name: 'DESCRICAO', length: 200 })
  descricao: string;

  @Column('datetime', { name: 'DHPROXATUAL' })
  dhproxatual: Date;

  @Column('int', { name: 'PERIODICIDADE' })
  periodicidade: number;

  @Column('smallint', { name: 'PERIODICIDADEATU' })
  periodicidadeatu: number;

  @Column('smallint', { name: 'HORARIOATU' })
  horarioatu: number;

  @Column('text', { name: 'EXPSQLREALPER' })
  expsqlrealper: string;

  @Column('text', { name: 'EXPVALREALPER' })
  expvalrealper: string;

  @Column('char', { name: 'TIPOREALACUM', length: 1, default: () => "'S'" })
  tiporealacum: string;

  @Column('text', { name: 'EXPSQLREALACUM' })
  expsqlrealacum: string;

  @Column('text', { name: 'EXPVALREALACUM' })
  expvalrealacum: string;

  @Column('char', { name: 'TIPPREV', length: 1, default: () => "'M'" })
  tipprev: string;

  @Column('text', { name: 'EXPSQLPREVPER' })
  expsqlprevper: string;

  @Column('text', { name: 'EXPVALPREVPER' })
  expvalprevper: string;

  @Column('char', { name: 'TIPOACUMPREV', length: 1, default: () => "'S'" })
  tipoacumprev: string;

  @Column('text', { name: 'EXPSQLPREVACUM' })
  expsqlprevacum: string;

  @Column('text', { name: 'EXPVALPREVACUM' })
  expvalprevacum: string;

  @Column('char', { name: 'APRESDECGRAF', length: 1, default: () => "'S'" })
  apresdecgraf: string;

  @Column('char', { name: 'TIPOREAL', length: 1, default: () => "'C'" })
  tiporeal: string;

  @Column('varchar', { name: 'DSREALPER', nullable: true, length: 200 })
  dsrealper: string | null;

  @Column('varchar', { name: 'DSREALACUM', nullable: true, length: 200 })
  dsrealacum: string | null;

  @Column('varchar', { name: 'DSPREVPER', nullable: true, length: 200 })
  dsprevper: string | null;

  @Column('varchar', { name: 'DSPREVACUM', nullable: true, length: 200 })
  dsprevacum: string | null;

  @Column('smallint', { name: 'QTDPERLINEAR', nullable: true })
  qtdperlinear: number | null;

  @Column('int', { name: 'CODINSTQUEBRA', nullable: true })
  codinstquebra: number | null;

  @OneToMany(() => TmiefeEntity, (tmiefeEntity) => tmiefeEntity.numet)
  tmiefes: TmiefeEntity[];

  @OneToMany(() => TmifmeEntity, (tmifmeEntity) => tmifmeEntity.numet2)
  tmifmes: TmifmeEntity[];

  @ManyToOne(() => TsidsbEntity, (tsidsbEntity) => tsidsbEntity.tmimets)
  @JoinColumn([{ name: 'NUDSB', referencedColumnName: 'nudsb' }])
  nudsb: TsidsbEntity;

  @ManyToOne(() => TmiindEntity, (tmiindEntity) => tmiindEntity.tmimets)
  @JoinColumn([{ name: 'CODIND', referencedColumnName: 'codind' }])
  codind: TmiindEntity;

  @ManyToOne(() => TmimetEntity, (tmimetEntity) => tmimetEntity.tmimets)
  @JoinColumn([{ name: 'NUMETPAI', referencedColumnName: 'numet' }])
  numetpai: TmimetEntity;

  @OneToMany(() => TmimetEntity, (tmimetEntity) => tmimetEntity.numetpai)
  tmimets: TmimetEntity[];

  @ManyToOne(() => TmiungEntity, (tmiungEntity) => tmiungEntity.tmimets)
  @JoinColumn([{ name: 'CODUNG', referencedColumnName: 'codung' }])
  codung: TmiungEntity;

  @ManyToMany(() => TmiexeEntity, (tmiexeEntity) => tmiexeEntity.tmimets)
  tmiexes: TmiexeEntity[];

  @OneToMany(() => TmiplaEntity, (tmiplaEntity) => tmiplaEntity.numet)
  tmiplas: TmiplaEntity[];

  @OneToMany(() => TmipmeEntity, (tmipmeEntity) => tmipmeEntity.numet2)
  tmipmes: TmipmeEntity[];

  @OneToMany(() => TmirmeEntity, (tmirmeEntity) => tmirmeEntity.numet2)
  tmirmes: TmirmeEntity[];
}
