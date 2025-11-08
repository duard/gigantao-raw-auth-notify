import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfobsEntity } from './tGFOBS.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiufsEntity } from './tSIUFS.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfajcEntity } from './tGFAJC.entity';
import { TgfajnEntity } from './tGFAJN.entity';

@Index('PK_TGFAJA', ['nuaja'], { unique: true })
@Index(
  'TGFAJA_I01',
  ['codemp', 'dtref', 'coduf', 'tipimposto', 'tipapuracao', 'sequencia'],
  {
    unique: true,
  },
)
@Entity('TGFAJA', { schema: 'SANKHYA' })
export class TgfajaEntity {
  @Column('int', { primary: true, name: 'NUAJA' })
  nuaja: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { name: 'CODUF' })
  coduf: number;

  @Column('char', { name: 'TIPIMPOSTO', length: 1, default: () => "'C'" })
  tipimposto: string;

  @Column('int', { name: 'TIPAPURACAO' })
  tipapuracao: number;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'NUMDA', nullable: true, length: 30 })
  numda: string | null;

  @Column('varchar', { name: 'NUMPROCESSO', nullable: true, length: 60 })
  numprocesso: string | null;

  @Column('int', { name: 'ORIGPROCESSO', nullable: true })
  origprocesso: number | null;

  @Column('char', { name: 'DESCRPROCESSO', nullable: true, length: 255 })
  descrprocesso: string | null;

  @Column('float', { name: 'VLRAJUSTE', precision: 53, default: () => '(0)' })
  vlrajuste: number;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'TIPAJUSTE', nullable: true })
  tipajuste: number | null;

  @Column('varchar', { name: 'CODAJUSTE', nullable: true, length: 3 })
  codajuste: string | null;

  @Column('char', { name: 'DEBESP', length: 1, default: () => "'N'" })
  debesp: string;

  @Column('char', { name: 'SUBAPURACAO', length: 1, default: () => "'N'" })
  subapuracao: string;

  @Column('varchar', { name: 'CODAJSEFPE', nullable: true, length: 3 })
  codajsefpe: string | null;

  @Column('smallint', { name: 'INDAPSEFPE', nullable: true })
  indapsefpe: number | null;

  @Column('varchar', { name: 'INDSUBAPURACAO', nullable: true, length: 1 })
  indsubapuracao: string | null;

  @Column('smallint', { name: 'CODCFG', nullable: true })
  codcfg: number | null;

  @Column('char', { name: 'APURACAOUF', nullable: true, length: 1 })
  apuracaouf: string | null;

  @Column('char', { name: 'REGAJDIME', nullable: true, length: 2 })
  regajdime: string | null;

  @ManyToOne(() => TgfobsEntity, (tgfobsEntity) => tgfobsEntity.tgfajas)
  @JoinColumn([{ name: 'CODOBSPADRAO', referencedColumnName: 'codobspadrao' }])
  codobspadrao: TgfobsEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfajas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfajas)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfajas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfajcEntity, (tgfajcEntity) => tgfajcEntity.nuaja2)
  tgfajcs: TgfajcEntity[];

  @OneToMany(() => TgfajnEntity, (tgfajnEntity) => tgfajnEntity.nuaja2)
  tgfajns: TgfajnEntity[];
}
