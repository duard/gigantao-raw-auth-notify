import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcaiEntity } from './tGFCAI.entity';
import { TgfecfEntity } from './tGFECF.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfnumEntity } from './tGFNUM.entity';
import { TgfrdfEntity } from './tGFRDF.entity';
import { TgfrzfEntity } from './tGFRZF.entity';
import { TgftieEntity } from './tGFTIE.entity';

@Index('PK_TGFMAQ', ['codmaq'], { unique: true })
@Index('TGFMAQ_I01', ['nroserie'], {})
@Entity('TGFMAQ', { schema: 'SANKHYA' })
export class TgfmaqEntity {
  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('char', { name: 'NROSERIE', nullable: true, length: 20 })
  nroserie: string | null;

  @Column('char', { name: 'MODDOC', nullable: true, length: 3 })
  moddoc: string | null;

  @Column('char', { name: 'TIPDOC', nullable: true, length: 3 })
  tipdoc: string | null;

  @Column('char', {
    name: 'INDLIVRO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  indlivro: string | null;

  @Column('char', { name: 'CUPOMABERTO', length: 1, default: () => "'N'" })
  cupomaberto: string;

  @Column('char', { name: 'HOSTNAME', nullable: true, length: 50 })
  hostname: string | null;

  @Column('smallint', { name: 'FUSOHORARIO', default: () => '(0)' })
  fusohorario: number;

  @Column('varchar', { name: 'MARCA', nullable: true, length: 20 })
  marca: string | null;

  @Column('varchar', { name: 'MODELO', nullable: true, length: 20 })
  modelo: string | null;

  @Column('int', { name: 'NROCAIXA', default: () => '(0)' })
  nrocaixa: number;

  @Column('smallint', { name: 'NUMUSUECF', nullable: true })
  numusuecf: number | null;

  @Column('varchar', { name: 'TIPOECF', nullable: true, length: 7 })
  tipoecf: string | null;

  @Column('datetime', { name: 'DTINSTSB', nullable: true })
  dtinstsb: Date | null;

  @Column('int', { name: 'HRINSTSB', nullable: true })
  hrinstsb: number | null;

  @Column('varchar', { name: 'VERSAOSB', nullable: true, length: 10 })
  versaosb: string | null;

  @Column('varchar', { name: 'CODNACIONALIDENT', nullable: true, length: 6 })
  codnacionalident: string | null;

  @Column('float', {
    name: 'VLRGRANDETOTAL',
    precision: 53,
    default: () => '(0)',
  })
  vlrgrandetotal: number;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'POS', nullable: true, length: 1 })
  pos: string | null;

  @Column('int', { name: 'CODEQUIP', nullable: true })
  codequip: number | null;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codmaq)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.codmaq)
  tgfcais: TgfcaiEntity[];

  @OneToMany(() => TgfecfEntity, (tgfecfEntity) => tgfecfEntity.codmaq2)
  tgfecfs: TgfecfEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfmaqs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @OneToMany(() => TgfnumEntity, (tgfnumEntity) => tgfnumEntity.codmaq)
  tgfnums: TgfnumEntity[];

  @OneToMany(() => TgfrdfEntity, (tgfrdfEntity) => tgfrdfEntity.codmaq)
  tgfrdfs: TgfrdfEntity[];

  @OneToMany(() => TgfrzfEntity, (tgfrzfEntity) => tgfrzfEntity.codmaq2)
  tgfrzfs: TgfrzfEntity[];

  @OneToMany(() => TgftieEntity, (tgftieEntity) => tgftieEntity.codmaq2)
  tgfties: TgftieEntity[];
}
