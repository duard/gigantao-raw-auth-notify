import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfapsnEntity } from './tGFAPSN.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfnarmEntity } from './tGFNARM.entity';

@Index('PK_TGFARM', ['nuapuracao'], { unique: true })
@Index('UK_CODEMP_DTREF_TGFARM', ['codemp', 'dtref'], { unique: true })
@Entity('TGFARM', { schema: 'SANKHYA' })
export class TgfarmEntity {
  @Column('int', { primary: true, name: 'NUAPURACAO' })
  nuapuracao: number;

  @Column('smallint', { name: 'CODEMP', unique: true })
  codemp: number;

  @Column('datetime', { name: 'DTREF', unique: true })
  dtref: Date;

  @Column('char', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column('char', { name: 'TIPOINSERCAO', nullable: true, length: 1 })
  tipoinsercao: string | null;

  @Column('float', { name: 'FATORR', nullable: true, precision: 53 })
  fatorr: number | null;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @Column('float', { name: 'VLRTOTRECMENINT', nullable: true, precision: 53 })
  vlrtotrecmenint: number | null;

  @Column('float', { name: 'VLRTOTRECMENEXT', nullable: true, precision: 53 })
  vlrtotrecmenext: number | null;

  @Column('float', { name: 'VLRTOTRECPROJINT', nullable: true, precision: 53 })
  vlrtotrecprojint: number | null;

  @Column('float', { name: 'VLRTOTRECPROJEXT', nullable: true, precision: 53 })
  vlrtotrecprojext: number | null;

  @Column('float', { name: 'VLRTOTRECACUMINT', nullable: true, precision: 53 })
  vlrtotrecacumint: number | null;

  @Column('float', { name: 'VLRTOTRECACUMEXT', nullable: true, precision: 53 })
  vlrtotrecacumext: number | null;

  @OneToMany(() => TgfapsnEntity, (tgfapsnEntity) => tgfapsnEntity.nuapuracao2)
  tgfapsns: TgfapsnEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfarms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(() => TgfnarmEntity, (tgfnarmEntity) => tgfnarmEntity.nuapuracao2)
  tgfnarms: TgfnarmEntity[];
}
