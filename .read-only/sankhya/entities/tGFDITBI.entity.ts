import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfditbEntity } from './tGFDITB.entity';

@Index(
  'PK_TGFDITBI',
  [
    'codemp',
    'tipoimp',
    'dhimport',
    'caractrib',
    'finalidade',
    'ncm',
    'cfop',
    'uf',
    'codprod',
  ],
  { unique: true },
)
@Entity('TGFDITBI', { schema: 'SANKHYA' })
export class TgfditbiEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'TIPOIMP' })
  tipoimp: number;

  @Column('datetime', { primary: true, name: 'DHIMPORT' })
  dhimport: Date;

  @Column('char', { primary: true, name: 'CARACTRIB', length: 1 })
  caractrib: string;

  @Column('char', { primary: true, name: 'FINALIDADE', length: 1 })
  finalidade: string;

  @Column('char', { name: 'STATUSIMP', nullable: true, length: 1 })
  statusimp: string | null;

  @Column('varchar', { primary: true, name: 'UF', length: 2 })
  uf: string;

  @Column('varchar', { primary: true, name: 'NCM', length: 8 })
  ncm: string;

  @Column('varchar', { primary: true, name: 'CFOP', length: 4 })
  cfop: string;

  @Column('varchar', { name: 'CST', nullable: true, length: 2 })
  cst: string | null;

  @Column('varchar', { name: 'CSOSN', nullable: true, length: 3 })
  csosn: string | null;

  @Column('float', {
    name: 'ALIQICMSINTERNA',
    precision: 53,
    default: () => '(0)',
  })
  aliqicmsinterna: number;

  @Column('float', {
    name: 'ALIQICMSINTERESTADUAL',
    precision: 53,
    default: () => '(0)',
  })
  aliqicmsinterestadual: number;

  @Column('float', {
    name: 'REDUCAOBCICMS',
    precision: 53,
    default: () => '(0)',
  })
  reducaobcicms: number;

  @Column('float', {
    name: 'REDUCAOSTICMS',
    precision: 53,
    default: () => '(0)',
  })
  reducaosticms: number;

  @Column('float', { name: 'ALIQICMSST', precision: 53, default: () => '(0)' })
  aliqicmsst: number;

  @Column('float', { name: 'IVA', precision: 53, default: () => '(0)' })
  iva: number;

  @Column('float', { name: 'FCP', precision: 53, default: () => '(0)' })
  fcp: number;

  @Column('varchar', { name: 'CODBENEF', nullable: true, length: 8 })
  codbenef: string | null;

  @Column('float', { name: 'PDIFER', precision: 53, default: () => '(0)' })
  pdifer: number;

  @Column('char', { name: 'ANTECIPADO', nullable: true, length: 1 })
  antecipado: string | null;

  @Column('char', { name: 'DESONERADO', nullable: true, length: 1 })
  desonerado: string | null;

  @Column('char', { name: 'ISENTO', nullable: true, length: 1 })
  isento: string | null;

  @Column('int', { primary: true, name: 'CODPROD', default: () => '(0)' })
  codprod: number;

  @Column('int', { name: 'CODESPECST', nullable: true })
  codespecst: number | null;

  @Column('float', { name: 'MVAAJUSTADO', nullable: true, precision: 53 })
  mvaajustado: number | null;

  @Column('int', { name: 'IDALIQICMS', nullable: true })
  idaliqicms: number | null;

  @ManyToOne(() => TgfditbEntity, (tgfditbEntity) => tgfditbEntity.tgfditbis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'TIPOIMP', referencedColumnName: 'tipoimp' },
    { name: 'DHIMPORT', referencedColumnName: 'dhimport' },
  ])
  tgfditb: TgfditbEntity;
}
