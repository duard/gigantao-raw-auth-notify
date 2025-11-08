import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TricabEntity } from './tRICAB.entity';

@Index('PK_TRIRRAD', ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave'], {
  unique: true,
})
@Entity('TRIRRAD', { schema: 'SANKHYA' })
export class TrirradEntity {
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

  @Column('varchar', { name: 'STATUSREG', length: 1 })
  statusreg: string;

  @Column('varchar', { name: 'IDEVENTO', nullable: true, length: 36 })
  idevento: string | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 52 })
  nrorecibo: string | null;

  @Column('varchar', { name: 'NRORECIBOANT', nullable: true, length: 52 })
  nroreciboant: string | null;

  @Column('varchar', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('smallint', { name: 'TPINSCESTAB', nullable: true })
  tpinscestab: number | null;

  @Column('varchar', { name: 'NRINSCESTAB', nullable: true, length: 14 })
  nrinscestab: string | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('text', { name: 'XMLRETORNO', nullable: true })
  xmlretorno: string | null;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

  @Column('float', { name: 'VLRTOTALREP', nullable: true, precision: 53 })
  vlrtotalrep: number | null;

  @Column('float', { name: 'VLRTOTALRET', nullable: true, precision: 53 })
  vlrtotalret: number | null;

  @Column('float', { name: 'VLRTOTALNRET', nullable: true, precision: 53 })
  vlrtotalnret: number | null;

  @Column('float', { name: 'VLRTOTALREPRET', nullable: true, precision: 53 })
  vlrtotalrepret: number | null;

  @Column('float', { name: 'VLRTOTALRETRET', nullable: true, precision: 53 })
  vlrtotalretret: number | null;

  @Column('float', { name: 'VLRTOTALNRETRET', nullable: true, precision: 53 })
  vlrtotalnretret: number | null;

  @Column('text', { name: 'DATACHANGE', nullable: true })
  datachange: string | null;

  @Column('float', { name: 'VLRTOTALBASERET', nullable: true, precision: 53 })
  vlrtotalbaseret: number | null;

  @Column('int', { name: 'CODEMPESTAB', nullable: true })
  codempestab: number | null;

  @ManyToOne(() => TricabEntity, (tricabEntity) => tricabEntity.trirrads)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
  ])
  tricab: TricabEntity;
}
