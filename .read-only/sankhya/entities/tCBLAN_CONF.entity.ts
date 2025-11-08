import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbintConfEntity } from './tCBINT_CONF.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcbhisEntity } from './tCBHIS.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcblotEntity } from './tCBLOT.entity';

@Index(
  'PK_TCBLAN_CONF',
  ['codemp', 'referencia', 'numlote', 'numlanc', 'tiplanc', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TCBLAN_CONF', { schema: 'SANKHYA' })
export class TcblanConfEntity {
  @Column('char', { name: 'NUAGENDAMENTO', nullable: true, length: 13 })
  nuagendamento: string | null;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('int', { primary: true, name: 'NUMLANC' })
  numlanc: number;

  @Column('char', { primary: true, name: 'TIPLANC', length: 1 })
  tiplanc: string;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('money', { name: 'VLRLANC' })
  vlrlanc: number;

  @Column('text', { name: 'COMPLHIST', nullable: true })
  complhist: string | null;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('datetime', { name: 'VENCIMENTO', nullable: true })
  vencimento: Date | null;

  @Column('char', { name: 'LIBERADO', length: 1 })
  liberado: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'PARTLALUR_A', nullable: true, length: 1 })
  partlalurA: string | null;

  @Column('varchar', { name: 'EXTEMPORANEO', nullable: true, length: 1 })
  extemporaneo: string | null;

  @Column('datetime', { name: 'DTEXTEMPORANEO', nullable: true })
  dtextemporaneo: Date | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @OneToMany(
    () => TcbintConfEntity,
    (tcbintConfEntity) => tcbintConfEntity.tcblanConf,
  )
  tcbintConfs: TcbintConfEntity[];

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcblanConfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcblanConfs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tcblanConfs)
  @JoinColumn([{ name: 'CODHISTCTB', referencedColumnName: 'codhistctb' }])
  codhistctb: TcbhisEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcblanConfs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcblanConfs)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcblanConfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcblotEntity, (tcblotEntity) => tcblotEntity.tcblanConfs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'NUMLOTE', referencedColumnName: 'numlote' },
  ])
  tcblot: TcblotEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcblanConfs2)
  @JoinColumn([{ name: 'CODCONPAR', referencedColumnName: 'codctactb' }])
  codconpar: TcbplaEntity;
}
