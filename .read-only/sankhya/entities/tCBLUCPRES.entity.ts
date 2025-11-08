import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcblucpresajEntity } from './tCBLUCPRESAJ.entity';

@Index('PK_TCBLUCPRES', ['codemp', 'dtref', 'trimestre'], { unique: true })
@Entity('TCBLUCPRES', { schema: 'SANKHYA' })
export class TcblucpresEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'DTREF' })
  dtref: number;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('char', { name: 'STATUSAPUR', nullable: true, length: 1 })
  statusapur: string | null;

  @Column('char', { primary: true, name: 'TRIMESTRE', length: 1 })
  trimestre: string;

  @Column('text', { name: 'JSONCSLL', nullable: true })
  jsoncsll: string | null;

  @Column('text', { name: 'JSONIRPJ', nullable: true })
  jsonirpj: string | null;

  @Column('char', { name: 'TIPDATA', nullable: true, length: 1 })
  tipdata: string | null;

  @OneToMany(
    () => TcblucpresajEntity,
    (tcblucpresajEntity) => tcblucpresajEntity.tcblucpres,
  )
  tcblucpresajs: TcblucpresajEntity[];
}
