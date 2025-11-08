import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TgftitEntity } from './tGFTIT.entity';

@Index('PK_TGFREM', ['codigo'], { unique: true })
@Entity('TGFREM', { schema: 'SANKHYA' })
export class TgfremEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('varchar', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @Column('int', { name: 'CODIGOLAYOUT' })
  codigolayout: number;

  @Column('varchar', { name: 'DIRDESTINO', nullable: true, length: 260 })
  dirdestino: string | null;

  @Column('varchar', { name: 'NOMEARQ', nullable: true, length: 260 })
  nomearq: string | null;

  @Column('char', { name: 'USANOMELAY', nullable: true, length: 1 })
  usanomelay: string | null;

  @Column('char', { name: 'USABCOCONTA', nullable: true, length: 1 })
  usabcoconta: string | null;

  @Column('char', { name: 'GERANOSSONUM', nullable: true, length: 1 })
  geranossonum: string | null;

  @Column('char', { name: 'GERLINHADIG', nullable: true, length: 1 })
  gerlinhadig: string | null;

  @Column('char', { name: 'AGRUPARTIT', nullable: true, length: 1 })
  agrupartit: string | null;

  @Column('smallint', { name: 'INTERVALGERARQ' })
  intervalgerarq: number;

  @Column('text', { name: 'FILTROTIT', nullable: true })
  filtrotit: string | null;

  @Column('char', { name: 'TIPORECDESP', length: 1, default: () => "'R'" })
  tiporecdesp: string;

  @Column('char', { name: 'TIPOPERIODO', length: 1, default: () => "'N'" })
  tipoperiodo: string;

  @Column('smallint', { name: 'DIASPERINI', default: () => '(0)' })
  diasperini: number;

  @Column('smallint', { name: 'DIASPERFIM', default: () => '(0)' })
  diasperfim: number;

  @Column('char', { name: 'TITNROREMVAZIO', nullable: true, length: 1 })
  titnroremvazio: string | null;

  @Column('char', { name: 'TITNOSSONUMPRE', nullable: true, length: 1 })
  titnossonumpre: string | null;

  @Column('char', { name: 'PERMPROVISAO', nullable: true, length: 1 })
  permprovisao: string | null;

  @Column('datetime', { name: 'DHULTGERARQ', nullable: true })
  dhultgerarq: Date | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'HRINICIALREM', nullable: true })
  hrinicialrem: number | null;

  @Column('smallint', { name: 'HRFINALREM', nullable: true })
  hrfinalrem: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrems)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfrems)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgfrems)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;
}
