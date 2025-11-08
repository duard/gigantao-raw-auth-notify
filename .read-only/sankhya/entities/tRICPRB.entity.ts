import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRICPRB', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRICPRB', { schema: 'SANKHYA' })
export class TricprbEntity {
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

  @Column('float', { name: 'VLRCPAPURTOTAL', nullable: true, precision: 53 })
  vlrcpapurtotal: number | null;

  @Column('float', { name: 'VLRCPRBSUSPTOTAL', nullable: true, precision: 53 })
  vlrcprbsusptotal: number | null;

  @Column('varchar', { name: 'CODRECEITA', nullable: true, length: 6 })
  codreceita: string | null;

  @Column('float', { name: 'VLRCPAPURTOTALRET', nullable: true, precision: 53 })
  vlrcpapurtotalret: number | null;

  @Column('float', {
    name: 'VLRCPRBSUSPTOTALRET',
    nullable: true,
    precision: 53,
  })
  vlrcprbsusptotalret: number | null;

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

  @Column('float', { name: 'VLRBCCPRBTOTAL', nullable: true, precision: 53 })
  vlrbccprbtotal: number | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.tricprbs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
