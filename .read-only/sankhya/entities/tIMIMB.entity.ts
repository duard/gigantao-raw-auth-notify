import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimadmEntity } from './tIMADM.entity';
import { TimchvEntity } from './tIMCHV.entity';
import { TimclaEntity } from './tIMCLA.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TimiprEntity } from './tIMIPR.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimppvEntity } from './tIMPPV.entity';

@Index('PK_TIMIMB', ['imbcodigo'], { unique: true })
@Entity('TIMIMB', { schema: 'SANKHYA' })
export class TimimbEntity {
  @Column('int', { primary: true, name: 'IMBCODIGO' })
  imbcodigo: number;

  @Column('int', { name: 'IMBIMOBILIARIAMATRIZ', nullable: true })
  imbimobiliariamatriz: number | null;

  @Column('text', { name: 'IMBOBSERVACAO', nullable: true })
  imbobservacao: string | null;

  @Column('varchar', { name: 'IMBIMOBILIARIA', length: 40 })
  imbimobiliaria: string;

  @Column('varchar', { name: 'IMBESTAGIO', length: 1, default: () => "'S'" })
  imbestagio: string;

  @Column('int', { name: 'IMBREGIAO', nullable: true })
  imbregiao: number | null;

  @Column('int', { name: 'IMBCRECI', nullable: true })
  imbcreci: number | null;

  @Column('datetime', { name: 'IMBEXPIRACRECI', nullable: true })
  imbexpiracreci: Date | null;

  @Column('char', { name: 'IMBLEGADO', nullable: true, length: 1 })
  imblegado: string | null;

  @Column('varchar', { name: 'IMBSERIENOTATXINTER', nullable: true, length: 3 })
  imbserienotatxinter: string | null;

  @Column('varchar', { name: 'IMBSERIENOTATXADM', nullable: true, length: 3 })
  imbserienotatxadm: string | null;

  @Column('varchar', { name: 'IMBIDWIMOVEIS', nullable: true, length: 15 })
  imbidwimoveis: string | null;

  @Column('varchar', { name: 'IMBIDIMOVELWEB', nullable: true, length: 15 })
  imbidimovelweb: string | null;

  @Column('float', { name: 'IMBTXMINADM', nullable: true, precision: 53 })
  imbtxminadm: number | null;

  @Column('varchar', { name: 'IMBTXALUPROP', length: 2, default: () => "'NC'" })
  imbtxaluprop: string;

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admimob)
  timadms: TimadmEntity[];

  @OneToMany(() => TimadmEntity, (timadmEntity) => timadmEntity.admimobiliaria)
  timadms2: TimadmEntity[];

  @OneToMany(() => TimchvEntity, (timchvEntity) => timchvEntity.imbcodigo)
  timchvs: TimchvEntity[];

  @OneToMany(() => TimclaEntity, (timclaEntity) => timclaEntity.claimobiliaria)
  timclas: TimclaEntity[];

  @OneToMany(() => TimcorEntity, (timcorEntity) => timcorEntity.corimobiliaria)
  timcors: TimcorEntity[];

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timimbs)
  @JoinColumn([
    { name: 'IMBCODCENCUSLOCACAO', referencedColumnName: 'codcencus' },
  ])
  imbcodcencuslocacao: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timimbs2)
  @JoinColumn([
    { name: 'IMBCODCENCUSCORBANCARIO', referencedColumnName: 'codcencus' },
  ])
  imbcodcencuscorbancario: TsicusEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.timimbs)
  @JoinColumn([{ name: 'IMBCODSERVTXINTER', referencedColumnName: 'codprod' }])
  imbcodservtxinter: TgfproEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timimbs)
  @JoinColumn([{ name: 'IMBGERENTE', referencedColumnName: 'corcodigo' }])
  imbgerente: TimcorEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.timimbs2)
  @JoinColumn([{ name: 'IMBCODSERVTXADM', referencedColumnName: 'codprod' }])
  imbcodservtxadm: TgfproEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.timimbs)
  @JoinColumn([{ name: 'IMBCODEMP', referencedColumnName: 'codemp' }])
  imbcodemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timimbs)
  @JoinColumn([{ name: 'IMBPARCEIRO', referencedColumnName: 'codparc' }])
  imbparceiro: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timimbs3)
  @JoinColumn([
    { name: 'IMBCODCENCUSINCORPORA', referencedColumnName: 'codcencus' },
  ])
  imbcodcencusincorpora: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timimbs4)
  @JoinColumn([
    { name: 'IMBCODCENCUSLOTEAMENTO', referencedColumnName: 'codcencus' },
  ])
  imbcodcencusloteamento: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timimbs5)
  @JoinColumn([
    { name: 'IMBCODCENCUSREVENDA', referencedColumnName: 'codcencus' },
  ])
  imbcodcencusrevenda: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timimbs6)
  @JoinColumn([{ name: 'IMBCODCENCUSADM', referencedColumnName: 'codcencus' }])
  imbcodcencusadm: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.timimbs7)
  @JoinColumn([
    { name: 'IMBCODCENCUSVENDA', referencedColumnName: 'codcencus' },
  ])
  imbcodcencusvenda: TsicusEntity;

  @OneToMany(() => TimiprEntity, (timiprEntity) => timiprEntity.iprimobdev)
  timiprs: TimiprEntity[];

  @OneToMany(() => TimlocEntity, (timlocEntity) => timlocEntity.locimobiliaria)
  timlocs: TimlocEntity[];

  @OneToMany(() => TimlotEntity, (timlotEntity) => timlotEntity.lotimobiliaria)
  timlots: TimlotEntity[];

  @OneToMany(() => TimltvEntity, (timltvEntity) => timltvEntity.ltvimobiliaria)
  timltvs: TimltvEntity[];

  @OneToMany(() => TimppvEntity, (timppvEntity) => timppvEntity.ppvimobiliaria)
  timppvs: TimppvEntity[];
}
