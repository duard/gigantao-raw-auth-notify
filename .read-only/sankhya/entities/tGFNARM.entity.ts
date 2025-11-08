import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfiarmEntity } from './tGFIARM.entity';
import { TgfarmEntity } from './tGFARM.entity';

@Index('PK_TGFNARM', ['nuapuracao', 'nunota'], { unique: true })
@Entity('TGFNARM', { schema: 'SANKHYA' })
export class TgfnarmEntity {
  @Column('int', { primary: true, name: 'NUAPURACAO' })
  nuapuracao: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('char', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('float', { name: 'VLRTOTRECINT', nullable: true, precision: 53 })
  vlrtotrecint: number | null;

  @Column('float', { name: 'VLRTOTRECEXT', nullable: true, precision: 53 })
  vlrtotrecext: number | null;

  @Column('char', { name: 'TIPMOV', nullable: true, length: 1 })
  tipmov: string | null;

  @Column('smallint', { name: 'STATUS', default: () => '(0)' })
  status: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @OneToMany(() => TgfiarmEntity, (tgfiarmEntity) => tgfiarmEntity.tgfnarm)
  tgfiarms: TgfiarmEntity[];

  @ManyToOne(() => TgfarmEntity, (tgfarmEntity) => tgfarmEntity.tgfnarms)
  @JoinColumn([{ name: 'NUAPURACAO', referencedColumnName: 'nuapuracao' }])
  nuapuracao2: TgfarmEntity;
}
