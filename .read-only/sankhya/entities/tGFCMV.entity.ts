import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfmgcEntity } from './tGFMGC.entity';
import { TgfucmEntity } from './tGFUCM.entity';

@Index('PK_TGFCMV', ['codconfig'], { unique: true })
@Entity('TGFCMV', { schema: 'SANKHYA' })
export class TgfcmvEntity {
  @Column('int', { primary: true, name: 'CODCONFIG' })
  codconfig: number;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('datetime', { name: 'DHULTEXEC', nullable: true })
  dhultexec: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', {
    name: 'AGRUPAPARC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupaparc: string | null;

  @Column('varchar', {
    name: 'AGRUPAVENDEDOR',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupavendedor: string | null;

  @Column('varchar', {
    name: 'AGRUPACENCUS',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupacencus: string | null;

  @Column('varchar', {
    name: 'AGRUPANATUREZA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupanatureza: string | null;

  @Column('varchar', {
    name: 'AGRUPAPROJETO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupaprojeto: string | null;

  @Column('varchar', {
    name: 'AGRUPATOP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupatop: string | null;

  @Column('varchar', {
    name: 'AGRUPASUBTIPVEN',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupasubtipven: string | null;

  @Column('varchar', {
    name: 'AGRUPALOCAL',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  agrupalocal: string | null;

  @Column('smallint', { name: 'TIPDTVEN', nullable: true })
  tipdtven: number | null;

  @Column('smallint', { name: 'TIPDTCOM', nullable: true })
  tipdtcom: number | null;

  @Column('smallint', { name: 'TIPDTDEVVEN', nullable: true })
  tipdtdevven: number | null;

  @Column('smallint', { name: 'TIPDTDEVCOM', nullable: true })
  tipdtdevcom: number | null;

  @Column('smallint', { name: 'TIPDTGASTOFIX', nullable: true })
  tipdtgastofix: number | null;

  @Column('smallint', { name: 'TIPOCUSTO', nullable: true })
  tipocusto: number | null;

  @Column('smallint', { name: 'TEMCOMISSAO', nullable: true })
  temcomissao: number | null;

  @Column('varchar', {
    name: 'IMPRETNOTA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  impretnota: string | null;

  @Column('smallint', { name: 'FORMGASTOFIX', nullable: true })
  formgastofix: number | null;

  @Column('float', { name: 'RATGASTOFIX', nullable: true, precision: 53 })
  ratgastofix: number | null;

  @Column('float', { name: 'PERCUSTOFIX', nullable: true, precision: 53 })
  percustofix: number | null;

  @Column('smallint', { name: 'COMISSAOPOR', nullable: true })
  comissaopor: number | null;

  @Column('float', { name: 'PERCCOMISSAO', nullable: true, precision: 53 })
  perccomissao: number | null;

  @Column('varchar', { name: 'HORAAGENDA1', nullable: true, length: 10 })
  horaagenda1: string | null;

  @Column('varchar', { name: 'HORAAGENDA2', nullable: true, length: 10 })
  horaagenda2: string | null;

  @Column('int', { name: 'TEMPOPROCESSAMENTO', nullable: true })
  tempoprocessamento: number | null;

  @Column('int', {
    name: 'INTERVALOATUALIZACAO',
    nullable: true,
    default: () => '(6)',
  })
  intervaloatualizacao: number | null;

  @Column('datetime', { name: 'DHPROXEXEC', nullable: true })
  dhproxexec: Date | null;

  @Column('smallint', {
    name: 'TIPCONFIG',
    nullable: true,
    default: () => '(0)',
  })
  tipconfig: number | null;

  @Column('datetime', { name: 'DTCONS', nullable: true })
  dtcons: Date | null;

  @Column('int', { name: 'QTDMESESCONSOLIDAR', nullable: true })
  qtdmesesconsolidar: number | null;

  @Column('varchar', { name: 'AUTOMATICO', length: 1, default: () => "'N'" })
  automatico: string;

  @Column('smallint', { name: 'TIPFATPER', nullable: true })
  tipfatper: number | null;

  @Column('varchar', {
    name: 'USACONFNATRECDESP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usaconfnatrecdesp: string | null;

  @OneToMany(() => TgfmgcEntity, (tgfmgcEntity) => tgfmgcEntity.codconfig2)
  tgfmgcs: TgfmgcEntity[];

  @OneToMany(() => TgfucmEntity, (tgfucmEntity) => tgfucmEntity.codconfig2)
  tgfucms: TgfucmEntity[];
}
