import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcbcfgaplpEntity } from './tCBCFGAPLP.entity';
import { TcbcfgaplpnatEntity } from './tCBCFGAPLPNAT.entity';

@Index('PK_TCBITELP', ['codnatlp'], { unique: true })
@Entity('TCBITELP', { schema: 'SANKHYA' })
export class TcbitelpEntity {
  @Column('smallint', { primary: true, name: 'CODNATLP' })
  codnatlp: number;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 15 })
  tabela: string | null;

  @Column('varchar', { name: 'CODIGO', nullable: true, length: 10 })
  codigo: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 400 })
  descricao: string | null;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('char', { name: 'TIPIMP', nullable: true, length: 1 })
  tipimp: string | null;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('char', { name: 'GRUPO', nullable: true, length: 2 })
  grupo: string | null;

  @Column('datetime', { name: 'DTATT', nullable: true })
  dtatt: Date | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @OneToMany(
    () => TcbcfgaplpEntity,
    (tcbcfgaplpEntity) => tcbcfgaplpEntity.codnatlp2,
  )
  tcbcfgaplps: TcbcfgaplpEntity[];

  @OneToMany(
    () => TcbcfgaplpnatEntity,
    (tcbcfgaplpnatEntity) => tcbcfgaplpnatEntity.codnatlp2,
  )
  tcbcfgaplpnats: TcbcfgaplpnatEntity[];
}
