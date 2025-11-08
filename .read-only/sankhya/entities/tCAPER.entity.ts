import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcamapEntity } from './tCAMAP.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcaanoEntity } from './tCAANO.entity';

@Index('PK_TCAPER', ['nuperiodo', 'codano'], { unique: true })
@Entity('TCAPER', { schema: 'SANKHYA' })
export class TcaperEntity {
  @Column('int', { primary: true, name: 'NUPERIODO' })
  nuperiodo: number;

  @Column('smallint', { primary: true, name: 'CODANO' })
  codano: number;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('smallint', { name: 'DIASLETIVOS', nullable: true })
  diasletivos: number | null;

  @Column('smallint', { name: 'VLRPERIODO', nullable: true })
  vlrperiodo: number | null;

  @Column('smallint', { name: 'NOTAMINIMA', nullable: true })
  notaminima: number | null;

  @Column('char', { name: 'MSGPERIODO', nullable: true, length: 400 })
  msgperiodo: string | null;

  @Column('char', { name: 'TIPSUB', nullable: true, length: 1 })
  tipsub: string | null;

  @Column('smallint', { name: 'PERSUBINI', nullable: true })
  persubini: number | null;

  @Column('smallint', { name: 'PERSUBFIM', nullable: true })
  persubfim: number | null;

  @Column('char', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @OneToMany(() => TcamapEntity, (tcamapEntity) => tcamapEntity.tcaper)
  tcamaps: TcamapEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcapers)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcapers)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano2: TcaanoEntity;
}
