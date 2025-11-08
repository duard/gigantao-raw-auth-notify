import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRIICR', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRIICR', { schema: 'SANKHYA' })
export class TriicrEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 10 })
  chave: string;

  @Column('char', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

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

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @Column('smallint', { name: 'CLASSTRIB', nullable: true })
  classtrib: number | null;

  @Column('smallint', { name: 'INDESCRITURACAO', nullable: true })
  indescrituracao: number | null;

  @Column('smallint', { name: 'INDDESONERACAO', nullable: true })
  inddesoneracao: number | null;

  @Column('smallint', { name: 'INDACORDOISENMULTA', nullable: true })
  indacordoisenmulta: number | null;

  @Column('smallint', { name: 'INDSITPJ', nullable: true })
  indsitpj: number | null;

  @Column('varchar', { name: 'NMCTT', nullable: true, length: 70 })
  nmctt: string | null;

  @Column('varchar', { name: 'CPFCTT', nullable: true, length: 11 })
  cpfctt: string | null;

  @Column('varchar', { name: 'FONEFIXOCTT', nullable: true, length: 13 })
  fonefixoctt: string | null;

  @Column('varchar', { name: 'FONECEL', nullable: true, length: 13 })
  fonecel: string | null;

  @Column('varchar', { name: 'EMAILCTT', nullable: true, length: 60 })
  emailctt: string | null;

  @Column('varchar', { name: 'IDEEFR', nullable: true, length: 1 })
  ideefr: string | null;

  @Column('varchar', { name: 'CNPJEFR', nullable: true, length: 14 })
  cnpjefr: string | null;

  @Column('datetime', { name: 'INIVALIDNOVO', nullable: true })
  inivalidnovo: Date | null;

  @Column('datetime', { name: 'FIMVALIDNOVO', nullable: true })
  fimvalidnovo: Date | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('datetime', { name: 'DTTRANSFFINSLUCR', nullable: true })
  dttransffinslucr: Date | null;

  @Column('char', { name: 'INDUNIAO', nullable: true, length: 1 })
  induniao: string | null;

  @Column('datetime', { name: 'DTOBITO', nullable: true })
  dtobito: Date | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.triicrs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
