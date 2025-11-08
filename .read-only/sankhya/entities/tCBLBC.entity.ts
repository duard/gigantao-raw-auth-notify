import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcbilbEntity } from './tCBILB.entity';

@Index('PK_TCBLBC', ['nuliberacao'], { unique: true })
@Entity('TCBLBC', { schema: 'SANKHYA' })
export class TcblbcEntity {
  @Column('int', { name: 'NUBLOQUEIO', nullable: true })
  nubloqueio: number | null;

  @Column('int', { name: 'SEQBLOQUEIO', nullable: true })
  seqbloqueio: number | null;

  @Column('int', { primary: true, name: 'NULIBERACAO' })
  nuliberacao: number;

  @Column('char', { name: 'TIPOMOV', nullable: true, length: 2 })
  tipomov: string | null;

  @Column('char', { name: 'TIPOACAO', nullable: true, length: 1 })
  tipoacao: string | null;

  @Column('int', { name: 'CODUSULIB', nullable: true })
  codusulib: number | null;

  @Column('int', { name: 'CODUSUSOLICIT', nullable: true })
  codususolicit: number | null;

  @Column('datetime', { name: 'DHSOLICIT', nullable: true })
  dhsolicit: Date | null;

  @Column('char', { name: 'ROTINACTB', nullable: true, length: 1 })
  rotinactb: string | null;

  @Column('datetime', { name: 'DTINILIB', nullable: true })
  dtinilib: Date | null;

  @Column('datetime', { name: 'DTFINLIB', nullable: true })
  dtfinlib: Date | null;

  @Column('char', { name: 'STATUSLIB', nullable: true, length: 1 })
  statuslib: string | null;

  @OneToMany(() => TcbilbEntity, (tcbilbEntity) => tcbilbEntity.nuliberacao2)
  tcbilbs: TcbilbEntity[];
}
