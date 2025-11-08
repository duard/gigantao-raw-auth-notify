import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRICPPR', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRICPPR', { schema: 'SANKHYA' })
export class TricpprEntity {
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

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('float', { name: 'VLRRECBRUTATOTAL', nullable: true, precision: 53 })
  vlrrecbrutatotal: number | null;

  @Column('float', { name: 'VLRCPAPUR', nullable: true, precision: 53 })
  vlrcpapur: number | null;

  @Column('float', { name: 'VLRRATAPUR', nullable: true, precision: 53 })
  vlrratapur: number | null;

  @Column('float', { name: 'VLRSENARAPUR', nullable: true, precision: 53 })
  vlrsenarapur: number | null;

  @Column('float', { name: 'VLRCPSUSPTOTAL', nullable: true, precision: 53 })
  vlrcpsusptotal: number | null;

  @Column('float', { name: 'VLRRATSUSPTOTAL', nullable: true, precision: 53 })
  vlrratsusptotal: number | null;

  @Column('float', { name: 'VLRSENARSUSPTOTAL', nullable: true, precision: 53 })
  vlrsenarsusptotal: number | null;

  @Column('float', { name: 'VLRCPAPURRET', nullable: true, precision: 53 })
  vlrcpapurret: number | null;

  @Column('float', { name: 'VLRRATAPURRET', nullable: true, precision: 53 })
  vlrratapurret: number | null;

  @Column('float', { name: 'VLRSENARAPURRET', nullable: true, precision: 53 })
  vlrsenarapurret: number | null;

  @Column('float', { name: 'VLRCPSUSPTOTALRET', nullable: true, precision: 53 })
  vlrcpsusptotalret: number | null;

  @Column('float', {
    name: 'VLRRATSUSPTOTALRET',
    nullable: true,
    precision: 53,
  })
  vlrratsusptotalret: number | null;

  @Column('float', {
    name: 'VLRSENARSUSPTOTALRET',
    nullable: true,
    precision: 53,
  })
  vlrsenarsusptotalret: number | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('float', { name: 'VLRBASECPAPUR', nullable: true, precision: 53 })
  vlrbasecpapur: number | null;

  @Column('float', { name: 'VLRBASERATAPUR', nullable: true, precision: 53 })
  vlrbaseratapur: number | null;

  @Column('float', { name: 'VLRBASESENARAPUR', nullable: true, precision: 53 })
  vlrbasesenarapur: number | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.tricpprs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
