import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfstmvEntity } from './tGFSTMV.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfstmvprodetEntity } from './tGFSTMVPRODET.entity';

@Index('PK_TGFSTMVPRO', ['codemp', 'referencia', 'codprod'], { unique: true })
@Entity('TGFSTMVPRO', { schema: 'SANKHYA' })
export class TgfstmvproEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTDMES', precision: 53, default: () => '(0)' })
  qtdmes: number;

  @Column('float', { name: 'VLRMES', precision: 53, default: () => '(0)' })
  vlrmes: number;

  @Column('float', { name: 'VLRMEDIOMES', precision: 53, default: () => '(0)' })
  vlrmediomes: number;

  @Column('smallint', { name: 'TIPOBUSCA', nullable: true })
  tipobusca: number | null;

  @ManyToOne(() => TgfstmvEntity, (tgfstmvEntity) => tgfstmvEntity.tgfstmvpros)
  @JoinColumn([{ name: 'NROUNICO', referencedColumnName: 'nrounico' }])
  nrounico: TgfstmvEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfstmvpros)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfstmvpros)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfstmvpros)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => TgfstmvprodetEntity,
    (tgfstmvprodetEntity) => tgfstmvprodetEntity.tgfstmvpro,
  )
  tgfstmvprodets: TgfstmvprodetEntity[];
}
