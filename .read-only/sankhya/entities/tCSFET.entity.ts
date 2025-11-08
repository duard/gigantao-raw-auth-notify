import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsaleEntity } from './tCSALE.entity';
import { TcseagEntity } from './tCSEAG.entity';
import { TcsepdEntity } from './tCSEPD.entity';
import { TcsesaEntity } from './tCSESA.entity';
import { TcsexrEntity } from './tCSEXR.entity';
import { TcsfeeEntity } from './tCSFEE.entity';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcsfpeEntity } from './tCSFPE.entity';
import { TcshseEntity } from './tCSHSE.entity';
import { TcshteEntity } from './tCSHTE.entity';

@Index('PK_TCSFET', ['nufap', 'numetapa'], { unique: true })
@Entity('TCSFET', { schema: 'SANKHYA' })
export class TcsfetEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('smallint', { name: 'NUMSEQ', nullable: true })
  numseq: number | null;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    name: 'TIPVALOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipvalor: string | null;

  @Column('char', {
    name: 'SUPLEMENTA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  suplementa: string | null;

  @Column('char', {
    name: 'SUPLEMENTADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  suplementado: string | null;

  @Column('money', { name: 'VALOR', nullable: true })
  valor: number | null;

  @Column('money', { name: 'VLRSUPLEMENTA', nullable: true })
  vlrsuplementa: number | null;

  @Column('money', { name: 'VLRSUPLEMENTADO', nullable: true })
  vlrsuplementado: number | null;

  @Column('datetime', { name: 'DTCEDOINIPREV', nullable: true })
  dtcedoiniprev: Date | null;

  @Column('datetime', { name: 'DTCEDOFIMPREV', nullable: true })
  dtcedofimprev: Date | null;

  @Column('datetime', { name: 'DTTARDEINIPREV', nullable: true })
  dttardeiniprev: Date | null;

  @Column('datetime', { name: 'DTTARDEFIMPREV', nullable: true })
  dttardefimprev: Date | null;

  @Column('money', { name: 'VLRSUPLEMENTAREA', nullable: true })
  vlrsuplementarea: number | null;

  @Column('money', { name: 'VLRSUPLEMENTADOREA', nullable: true })
  vlrsuplementadorea: number | null;

  @Column('char', {
    name: 'CONCLUIDA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  concluida: string | null;

  @Column('int', { name: 'NUMETAPAPAI', default: () => '(99999)' })
  numetapapai: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('char', {
    name: 'CONCLUSAOAUTOMATICA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  conclusaoautomatica: string | null;

  @Column('smallint', { name: 'CHAVEIMP', nullable: true })
  chaveimp: number | null;

  @Column('varchar', { name: 'EXIGEREQ', nullable: true, length: 1 })
  exigereq: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'NUMMODELO', nullable: true })
  nummodelo: number | null;

  @OneToMany(() => TcsaleEntity, (tcsaleEntity) => tcsaleEntity.tcsfet)
  tcsales: TcsaleEntity[];

  @OneToMany(() => TcseagEntity, (tcseagEntity) => tcseagEntity.tcsfet)
  tcseags: TcseagEntity[];

  @OneToMany(() => TcsepdEntity, (tcsepdEntity) => tcsepdEntity.tcsfet)
  tcsepds: TcsepdEntity[];

  @OneToMany(() => TcsepdEntity, (tcsepdEntity) => tcsepdEntity.tcsfet2)
  tcsepds2: TcsepdEntity[];

  @OneToMany(() => TcsesaEntity, (tcsesaEntity) => tcsesaEntity.tcsfet)
  tcsesas: TcsesaEntity[];

  @OneToMany(() => TcsexrEntity, (tcsexrEntity) => tcsexrEntity.tcsfet)
  tcsexrs: TcsexrEntity[];

  @OneToMany(() => TcsfeeEntity, (tcsfeeEntity) => tcsfeeEntity.tcsfet)
  tcsfees: TcsfeeEntity[];

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcsfets)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;

  @OneToMany(() => TcsfpeEntity, (tcsfpeEntity) => tcsfpeEntity.tcsfet)
  tcsfpes: TcsfpeEntity[];

  @OneToMany(() => TcshseEntity, (tcshseEntity) => tcshseEntity.tcsfet)
  tcshses: TcshseEntity[];

  @OneToMany(() => TcshseEntity, (tcshseEntity) => tcshseEntity.tcsfet2)
  tcshses2: TcshseEntity[];

  @OneToMany(() => TcshteEntity, (tcshteEntity) => tcshteEntity.tcsfet)
  tcshtes: TcshteEntity[];
}
