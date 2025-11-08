import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfmaqEntity } from './tGFMAQ.entity';
import { TgfiecEntity } from './tGFIEC.entity';

@Index('PK_TGFECF', ['nuecf'], { unique: true })
@Index('TGFECF_I01', ['codemp', 'codmaq', 'dtemissao'], {})
@Index('TGFECF_I02', ['dtmov'], {})
@Entity('TGFECF', { schema: 'SANKHYA' })
export class TgfecfEntity {
  @Column('int', { primary: true, name: 'NUECF' })
  nuecf: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODMAQ', nullable: true })
  codmaq: number | null;

  @Column('datetime', { name: 'DTEMISSAO', nullable: true })
  dtemissao: Date | null;

  @Column('int', { name: 'CONTINI', nullable: true })
  contini: number | null;

  @Column('int', { name: 'CONTFIM', nullable: true })
  contfim: number | null;

  @Column('money', { name: 'TOTINI', nullable: true })
  totini: number | null;

  @Column('money', { name: 'TOTFIM', nullable: true })
  totfim: number | null;

  @Column('int', { name: 'CONTZ', nullable: true })
  contz: number | null;

  @Column('char', { name: 'NROMAPA', nullable: true, length: 10 })
  nromapa: string | null;

  @Column('int', { name: 'CONTREINICIO', default: () => '(0)' })
  contreinicio: number;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('int', { name: 'HREMISSAO', nullable: true })
  hremissao: number | null;

  @Column('int', { name: 'COOREDZ', nullable: true })
  cooredz: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @ManyToOne(() => TgfmaqEntity, (tgfmaqEntity) => tgfmaqEntity.tgfecfs)
  @JoinColumn([{ name: 'CODMAQ', referencedColumnName: 'codmaq' }])
  codmaq2: TgfmaqEntity;

  @OneToMany(() => TgfiecEntity, (tgfiecEntity) => tgfiecEntity.nuecf2)
  tgfiecs: TgfiecEntity[];
}
