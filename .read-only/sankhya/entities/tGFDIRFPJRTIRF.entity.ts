import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFDIRFPJRTIRF',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'reg',
    'regpai',
    'regpai2',
    'regpai3',
    'codrec',
    'cnpj',
  ],
  { unique: true },
)
@Entity('TGFDIRFPJRTIRF', { schema: 'SANKHYA' })
export class TgfdirfpjrtirfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 7,
    default: () => "'PJRTIRF'",
  })
  reg: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 6,
    default: () => "'BPJDEC'",
  })
  regpai: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI2',
    length: 5,
    default: () => "'IDREC'",
  })
  regpai2: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI3',
    length: 5,
    default: () => "'DECPJ'",
  })
  regpai3: string;

  @Column('varchar', { primary: true, name: 'CODREC', length: 4 })
  codrec: string;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('float', { name: 'VLRJAN', nullable: true, precision: 53 })
  vlrjan: number | null;

  @Column('float', { name: 'VLRFEV', nullable: true, precision: 53 })
  vlrfev: number | null;

  @Column('float', { name: 'VLRMAR', nullable: true, precision: 53 })
  vlrmar: number | null;

  @Column('float', { name: 'VLRABR', nullable: true, precision: 53 })
  vlrabr: number | null;

  @Column('float', { name: 'VLRMAI', nullable: true, precision: 53 })
  vlrmai: number | null;

  @Column('float', { name: 'VLRJUN', nullable: true, precision: 53 })
  vlrjun: number | null;

  @Column('float', { name: 'VLRJUL', nullable: true, precision: 53 })
  vlrjul: number | null;

  @Column('float', { name: 'VLRAGO', nullable: true, precision: 53 })
  vlrago: number | null;

  @Column('float', { name: 'VLRSET', nullable: true, precision: 53 })
  vlrset: number | null;

  @Column('float', { name: 'VLROUT', nullable: true, precision: 53 })
  vlrout: number | null;

  @Column('float', { name: 'VLRNOV', nullable: true, precision: 53 })
  vlrnov: number | null;

  @Column('float', { name: 'VLRDEZ', nullable: true, precision: 53 })
  vlrdez: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdirfpjrtirfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
