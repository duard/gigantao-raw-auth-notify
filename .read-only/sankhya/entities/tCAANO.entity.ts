import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcaparEntity } from './tCAPAR.entity';
import { TcaconEntity } from './tCACON.entity';
import { TcadseEntity } from './tCADSE.entity';
import { TcamatEntity } from './tCAMAT.entity';
import { TcaperEntity } from './tCAPER.entity';
import { TcapreEntity } from './tCAPRE.entity';
import { TcarefEntity } from './tCAREF.entity';
import { TcaremEntity } from './tCAREM.entity';
import { TcaturEntity } from './tCATUR.entity';

@Index('PK_TCAANO', ['codano'], { unique: true })
@Entity('TCAANO', { schema: 'SANKHYA' })
export class TcaanoEntity {
  @Column('smallint', { primary: true, name: 'CODANO' })
  codano: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('datetime', { name: 'DTINICIOAULAS' })
  dtinicioaulas: Date;

  @Column('datetime', { name: 'DTFIMAULAS' })
  dtfimaulas: Date;

  @Column('smallint', { name: 'QTDPERIODO' })
  qtdperiodo: number;

  @Column('char', { name: 'CLASSIFDIARIO', nullable: true, length: 2 })
  classifdiario: string | null;

  @Column('datetime', { name: 'RENOVAMATRICULA' })
  renovamatricula: Date;

  @Column('smallint', { name: 'NROMAXDEPEND' })
  nromaxdepend: number;

  @Column('smallint', { name: 'NROMAXRECUPERACAO' })
  nromaxrecuperacao: number;

  @Column('char', { name: 'MSGINCENTIVO', nullable: true, length: 400 })
  msgincentivo: string | null;

  @Column('smallint', { name: 'QTDDIALETIVO' })
  qtddialetivo: number;

  @Column('smallint', { name: 'MEDIA' })
  media: number;

  @Column('char', { name: 'FREQDIARIA', nullable: true, length: 1 })
  freqdiaria: string | null;

  @ManyToOne(() => TcaparEntity, (tcaparEntity) => tcaparEntity.tcaanos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODANO', referencedColumnName: 'codano' },
    { name: 'CODCUR', referencedColumnName: 'codcur' },
    { name: 'CODSER', referencedColumnName: 'codser' },
    { name: 'PARCELA', referencedColumnName: 'parcela' },
  ])
  tcapar: TcaparEntity;

  @OneToMany(() => TcaconEntity, (tcaconEntity) => tcaconEntity.codano2)
  tcacons: TcaconEntity[];

  @OneToMany(() => TcadseEntity, (tcadseEntity) => tcadseEntity.codano)
  tcadses: TcadseEntity[];

  @OneToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.codano)
  tcamats: TcamatEntity[];

  @OneToMany(() => TcaparEntity, (tcaparEntity) => tcaparEntity.codano2)
  tcapars: TcaparEntity[];

  @OneToMany(() => TcaperEntity, (tcaperEntity) => tcaperEntity.codano2)
  tcapers: TcaperEntity[];

  @OneToMany(() => TcapreEntity, (tcapreEntity) => tcapreEntity.codano2)
  tcapres: TcapreEntity[];

  @OneToMany(() => TcarefEntity, (tcarefEntity) => tcarefEntity.codano2)
  tcarefs: TcarefEntity[];

  @OneToMany(() => TcaremEntity, (tcaremEntity) => tcaremEntity.codano)
  tcarems: TcaremEntity[];

  @OneToMany(() => TcaturEntity, (tcaturEntity) => tcaturEntity.codano)
  tcaturs: TcaturEntity[];
}
