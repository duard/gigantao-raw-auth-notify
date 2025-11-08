import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRIRCSP', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRIRCSP', { schema: 'SANKHYA' })
export class TrircspEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('char', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('varchar', { name: 'IDEVENTO', nullable: true, length: 36 })
  idevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 52 })
  nroreciboant: string | null;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCESTABPREST', nullable: true })
  tpinscestabprest: number | null;

  @Column('varchar', { name: 'NRINSCESTABPREST', nullable: true, length: 14 })
  nrinscestabprest: string | null;

  @Column('smallint', { name: 'TPINSCTOMADOR', nullable: true })
  tpinsctomador: number | null;

  @Column('varchar', { name: 'NRINSCTOMADOR', nullable: true, length: 14 })
  nrinsctomador: string | null;

  @Column('smallint', { name: 'INDOBRA', nullable: true })
  indobra: number | null;

  @Column('float', { name: 'VLRTOTALBRUTO', nullable: true, precision: 53 })
  vlrtotalbruto: number | null;

  @Column('float', { name: 'VLRTOTALBASERET', nullable: true, precision: 53 })
  vlrtotalbaseret: number | null;

  @Column('float', { name: 'VLRTOTALRETPRINC', nullable: true, precision: 53 })
  vlrtotalretprinc: number | null;

  @Column('float', { name: 'VLRTOTALRETADIC', nullable: true, precision: 53 })
  vlrtotalretadic: number | null;

  @Column('float', { name: 'VLRTOTALNRETPRINC', nullable: true, precision: 53 })
  vlrtotalnretprinc: number | null;

  @Column('float', { name: 'VLRTOTALNRETADIC', nullable: true, precision: 53 })
  vlrtotalnretadic: number | null;

  @Column('smallint', { name: 'TPINSCTOMADORRET', nullable: true })
  tpinsctomadorret: number | null;

  @Column('varchar', { name: 'NRINSCTOMADORRET', nullable: true, length: 14 })
  nrinsctomadorret: string | null;

  @Column('float', {
    name: 'VLRTOTALBASERETRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalbaseretret: number | null;

  @Column('float', {
    name: 'VLRTOTALRETPRINCRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalretprincret: number | null;

  @Column('float', {
    name: 'VLRTOTALRETADICRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalretadicret: number | null;

  @Column('float', {
    name: 'VLRTOTALNRETPRINCRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalnretprincret: number | null;

  @Column('float', {
    name: 'VLRTOTALNRETADICRET',
    nullable: true,
    precision: 53,
  })
  vlrtotalnretadicret: number | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

  @Column('float', {
    name: 'VLRTOTALRETENCAOCALC',
    nullable: true,
    precision: 53,
  })
  vlrtotalretencaocalc: number | null;

  @Column('float', { name: 'VLRTOTALDIFRET', nullable: true, precision: 53 })
  vlrtotaldifret: number | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('int', { name: 'CODEMPESTABPREST', nullable: true })
  codempestabprest: number | null;

  @Column('int', { name: 'CODPARCTOMADOR', nullable: true })
  codparctomador: number | null;

  @Column('float', {
    name: 'VLRTOTALRETADICCALC',
    nullable: true,
    precision: 53,
  })
  vlrtotalretadiccalc: number | null;

  @Column('float', {
    name: 'VLRTOTALRETADICDIF',
    nullable: true,
    precision: 53,
  })
  vlrtotalretadicdif: number | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.trircsps)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
