import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRITEL', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRITEL', { schema: 'SANKHYA' })
export class TritelEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 255 })
  chave: string;

  @Column('varchar', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('varchar', { name: 'IDEVENTO', nullable: true, length: 36 })
  idevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('smallint', { name: 'TPENTLIG', nullable: true })
  tpentlig: number | null;

  @Column('varchar', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'CNPJLIG', nullable: true, length: 14 })
  cnpjlig: string | null;

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @Column('varchar', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('varchar', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('varchar', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('smallint', { name: 'PROCEMI', nullable: true })
  procemi: number | null;

  @Column('varchar', { name: 'VERPROC', nullable: true, length: 20 })
  verproc: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 52 })
  nroreciboant: string | null;

  @Column('datetime', { name: 'INIVALIDNOVO', nullable: true })
  inivalidnovo: Date | null;

  @Column('datetime', { name: 'FIMVALIDNOVO', nullable: true })
  fimvalidnovo: Date | null;

  @Column('varchar', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.tritels, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
