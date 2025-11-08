import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TfpctbEntity } from './tFPCTB.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TcbhisEntity } from './tCBHIS.entity';

@Index(
  'PK_TFPCTF',
  [
    'codregfis',
    'sequencia',
    'tipcontabil',
    'tipfolha',
    'coddep',
    'codgrupoctbz',
  ],
  { unique: true },
)
@Entity('TFPCTF', { schema: 'SANKHYA' })
export class TfpctfEntity {
  @Column('smallint', { primary: true, name: 'CODREGFIS' })
  codregfis: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', {
    primary: true,
    name: 'TIPCONTABIL',
    length: 1,
    default: () => "'N'",
  })
  tipcontabil: string;

  @Column('char', {
    primary: true,
    name: 'TIPFOLHA',
    length: 1,
    default: () => "'R'",
  })
  tipfolha: string;

  @Column('int', { primary: true, name: 'CODDEP', default: () => '(0)' })
  coddep: number;

  @Column('int', { primary: true, name: 'CODGRUPOCTBZ', default: () => '(0)' })
  codgrupoctbz: number;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpctfs)
  @JoinColumn([{ name: 'CONTACREDITO', referencedColumnName: 'codctactb' }])
  contacredito: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpctfs2)
  @JoinColumn([{ name: 'CONTADEBITO', referencedColumnName: 'codctactb' }])
  contadebito: TcbplaEntity;

  @ManyToOne(() => TfpctbEntity, (tfpctbEntity) => tfpctbEntity.tfpctfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODREGFIS', referencedColumnName: 'codregfis' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'TIPCONTABIL', referencedColumnName: 'tipcontabil' },
    { name: 'CODGRUPOCTBZ', referencedColumnName: 'codgrupoctbz' },
  ])
  tfpctb: TfpctbEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpctfs)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep2: TfpdepEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpctfs)
  @JoinColumn([
    { name: 'HISTORICOCREDITO', referencedColumnName: 'codhistctb' },
  ])
  historicocredito: TcbhisEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpctfs2)
  @JoinColumn([{ name: 'HISTORICODEBITO', referencedColumnName: 'codhistctb' }])
  historicodebito: TcbhisEntity;
}
