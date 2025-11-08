import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TcbhisEntity } from './tCBHIS.entity';

@Index('PK_TGFCTB', ['codtipoper', 'sequencia'], { unique: true })
@Entity('TGFCTB', { schema: 'SANKHYA' })
export class TgfctbEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'LANCAMENTO', default: () => '(0)' })
  lancamento: number;

  @Column('char', { name: 'DC', length: 1 })
  dc: string;

  @Column('char', { name: 'CENCUSCONST', length: 1, default: () => "'S'" })
  cencusconst: string;

  @Column('char', { name: 'CODCENCUS', nullable: true, length: 10 })
  codcencus: string | null;

  @Column('char', { name: 'CTACTBCONST', length: 1, default: () => "'S'" })
  ctactbconst: string;

  @Column('char', { name: 'CODCTACTB', nullable: true, length: 11 })
  codctactb: string | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('char', { name: 'TIPDT', length: 1, default: () => "'N'" })
  tipdt: string;

  @Column('char', { name: 'SINTETIZA', length: 1, default: () => "'N'" })
  sintetiza: string;

  @Column('char', { name: 'HISTORICO', nullable: true, length: 255 })
  historico: string | null;

  @Column('varchar', { name: 'CODPROJ', nullable: true, length: 10 })
  codproj: string | null;

  @Column('char', { name: 'PROJCONST', length: 1, default: () => "'S'" })
  projconst: string;

  @Column('char', { name: 'TIPCTBZCOMPANY', nullable: true, length: 1 })
  tipctbzcompany: string | null;

  @Column('char', { name: 'TIPEMPCOMPANY', nullable: true, length: 1 })
  tipempcompany: string | null;

  @Column('char', { name: 'CTACTBCONSTTRANS', nullable: true, length: 1 })
  ctactbconsttrans: string | null;

  @Column('varchar', { name: 'CODCTACTBTRANS', nullable: true, length: 11 })
  codctactbtrans: string | null;

  @Column('char', { name: 'TIPOEMPORIG', nullable: true, length: 1 })
  tipoemporig: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfctbs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tgfctbs)
  @JoinColumn([{ name: 'CODHISTCTB', referencedColumnName: 'codhistctb' }])
  codhistctb: TcbhisEntity;
}
