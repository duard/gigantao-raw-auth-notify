import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcbhisEntity } from './tCBHIS.entity';
import { TfpctbforEntity } from './tFPCTBFOR.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TfpctfEntity } from './tFPCTF.entity';

@Index('PK_TFPCTB', ['codregfis', 'sequencia', 'tipcontabil', 'codgrupoctbz'], {
  unique: true,
})
@Entity('TFPCTB', { schema: 'SANKHYA' })
export class TfpctbEntity {
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

  @Column('char', { name: 'FORMULA', nullable: true, length: 255 })
  formula: string | null;

  @Column('int', { primary: true, name: 'CODGRUPOCTBZ', default: () => '(0)' })
  codgrupoctbz: number;

  @Column('char', { name: 'MANTERSALDOMP927', length: 1, default: () => "'N'" })
  mantersaldomp927: string;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpctbs)
  @JoinColumn([
    { name: 'HISTORICOCREDITO', referencedColumnName: 'codhistctb' },
  ])
  historicocredito: TcbhisEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tfpctbs2)
  @JoinColumn([{ name: 'HISTORICODEBITO', referencedColumnName: 'codhistctb' }])
  historicodebito: TcbhisEntity;

  @ManyToOne(
    () => TfpctbforEntity,
    (tfpctbforEntity) => tfpctbforEntity.tfpctbs,
  )
  @JoinColumn([{ name: 'FORMULAID', referencedColumnName: 'formid' }])
  formula2: TfpctbforEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpctbs)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TfpeveEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpctbs)
  @JoinColumn([{ name: 'CONTADEBITO', referencedColumnName: 'codctactb' }])
  contadebito: TcbplaEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tfpctbs2)
  @JoinColumn([{ name: 'CONTACREDITO', referencedColumnName: 'codctactb' }])
  contacredito: TcbplaEntity;

  @OneToMany(() => TfpctfEntity, (tfpctfEntity) => tfpctfEntity.tfpctb)
  tfpctfs: TfpctfEntity[];
}
