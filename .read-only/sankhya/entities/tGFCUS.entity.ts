import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index(
  'PK_TGFCUS',
  [
    'codprod',
    'codemp',
    'dtatual',
    'codlocal',
    'controle',
    'nunota',
    'sequencia',
  ],
  { unique: true },
)
@Index(
  'TGFCUS_I01',
  ['codprod', 'codemp', 'dtatual', 'codlocal', 'controle'],
  {},
)
@Index('TGFCUS_I02', ['nunota', 'sequencia'], {})
@Index('TGFCUS_I03', ['codprod', 'dtatual'], {})
@Index('TGFCUS_IDT', ['dtatual', 'automatico'], {})
@Entity('TGFCUS', { schema: 'SANKHYA' })
export class TgfcusEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTATUAL' })
  dtatual: Date;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', { name: 'CUSMEDICM', precision: 53, default: () => '(0)' })
  cusmedicm: number;

  @Column('float', { name: 'CUSSEMICM', precision: 53, default: () => '(0)' })
  cussemicm: number;

  @Column('float', { name: 'CUSREP', precision: 53, default: () => '(0)' })
  cusrep: number;

  @Column('float', { name: 'CUSVARIAVEL', precision: 53, default: () => '(0)' })
  cusvariavel: number;

  @Column('float', { name: 'CUSGER', precision: 53, default: () => '(0)' })
  cusger: number;

  @Column('float', { name: 'CUSMED', precision: 53, default: () => '(0)' })
  cusmed: number;

  @Column('float', { name: 'VLRVENDAFIXO', nullable: true, precision: 53 })
  vlrvendafixo: number | null;

  @Column('float', { name: 'ENTRADACOMICMS', nullable: true, precision: 53 })
  entradacomicms: number | null;

  @Column('float', { name: 'ENTRADASEMICMS', nullable: true, precision: 53 })
  entradasemicms: number | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('char', { name: 'AUTOMATICO', length: 1, default: () => "'S'" })
  automatico: string;

  @Column('char', { name: 'ALTPRECO', nullable: true, length: 1 })
  altpreco: string | null;

  @Column('int', { primary: true, name: 'NUNOTA', default: () => '(0)' })
  nunota: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('float', { name: 'TOTALCOMICMS', nullable: true, precision: 53 })
  totalcomicms: number | null;

  @Column('float', { name: 'TOTALSEMICMS', nullable: true, precision: 53 })
  totalsemicms: number | null;

  @Column('float', { name: 'TOTALCOMICMSANT', nullable: true, precision: 53 })
  totalcomicmsant: number | null;

  @Column('float', { name: 'TOTALSEMICMSANT', nullable: true, precision: 53 })
  totalsemicmsant: number | null;

  @Column('char', { name: 'CUSMEDCALC', length: 1, default: () => "'N'" })
  cusmedcalc: string;

  @Column('char', { name: 'RECARGA', length: 1, default: () => "'N'" })
  recarga: string;

  @Column('float', { name: 'QTDNEGGER', nullable: true, precision: 53 })
  qtdnegger: number | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 255 })
  processo: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfcuses)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcuses)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcuses)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
