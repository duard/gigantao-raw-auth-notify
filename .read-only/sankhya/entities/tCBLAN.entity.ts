import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbintEntity } from './tCBINT.entity';
import { TcblotEntity } from './tCBLOT.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TcbhisEntity } from './tCBHIS.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_CBA011',
  ['codemp', 'referencia', 'numlote', 'numlanc', 'tiplanc', 'sequencia'],
  {
    unique: true,
  },
)
@Index('TCBLAN_I01', ['referencia'], {})
@Index('TCBLAN_I02', ['codemp', 'dtmov'], {})
@Index('TCBLAN_I03', ['codctactb', 'referencia'], {})
@Index('TCBLAN_I04', ['dtmov'], {})
@Index('TCBLAN_I05', ['codemp', 'codconpar'], {})
@Index('TCBLAN_IRZ', ['codemp', 'codctactb', 'codcencus', 'dtmov'], {})
@Entity('TCBLAN', { schema: 'SANKHYA' })
export class TcblanEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'NUMLOTE' })
  numlote: number;

  @Column('int', { primary: true, name: 'NUMLANC' })
  numlanc: number;

  @Column('char', {
    primary: true,
    name: 'TIPLANC',
    length: 1,
    default: () => "'D'",
  })
  tiplanc: string;

  @Column('int', { name: 'CODCTACTB' })
  codctactb: number;

  @Column('int', { name: 'CODCONPAR', nullable: true })
  codconpar: number | null;

  @Column('int', { name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

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

  @Column('char', {
    name: 'PARTLALUR_A',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  partlalurA: string | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('char', { name: 'EXTEMPORANEO', nullable: true, length: 1 })
  extemporaneo: string | null;

  @Column('datetime', { name: 'DTEXTEMPORANEO', nullable: true })
  dtextemporaneo: Date | null;

  @Column('smallint', { name: 'CODEMPORIG', nullable: true })
  codemporig: number | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 100 })
  chave: string | null;

  @Column('char', { name: 'CONCILIADO', nullable: true, length: 1 })
  conciliado: string | null;

  @OneToMany(() => TcbintEntity, (tcbintEntity) => tcbintEntity.tcblan)
  tcbints: TcbintEntity[];

  @ManyToOne(() => TcblotEntity, (tcblotEntity) => tcblotEntity.tcblans)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
    { name: 'NUMLOTE', referencedColumnName: 'numlote' },
  ])
  tcblot: TcblotEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcblans)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcblans)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcblans)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tcblans)
  @JoinColumn([{ name: 'CODHISTCTB', referencedColumnName: 'codhistctb' }])
  codhistctb: TcbhisEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcblans)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcblans2)
  @JoinColumn([{ name: 'CODCONPAR', referencedColumnName: 'codctactb' }])
  codconpar2: TcbplaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcblans)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
