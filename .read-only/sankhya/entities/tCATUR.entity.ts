import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcamapEntity } from './tCAMAP.entity';
import { TcaremEntity } from './tCAREM.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcatnoEntity } from './tCATNO.entity';
import { TcaserEntity } from './tCASER.entity';
import { TcaanoEntity } from './tCAANO.entity';

@Index('PK_TCATUR', ['codturma'], { unique: true })
@Entity('TCATUR', { schema: 'SANKHYA' })
export class TcaturEntity {
  @Column('smallint', { primary: true, name: 'CODTURMA' })
  codturma: number;

  @Column('char', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('char', { name: 'TURMA', nullable: true, length: 2 })
  turma: string | null;

  @Column('smallint', { name: 'CAPMAX' })
  capmax: number;

  @Column('smallint', { name: 'CAPMIN' })
  capmin: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @OneToMany(() => TcamapEntity, (tcamapEntity) => tcamapEntity.codturma)
  tcamaps: TcamapEntity[];

  @OneToMany(() => TcaremEntity, (tcaremEntity) => tcaremEntity.codturma)
  tcarems: TcaremEntity[];

  @OneToMany(() => TcaremEntity, (tcaremEntity) => tcaremEntity.codturant)
  tcarems2: TcaremEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcaturs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TcatnoEntity, (tcatnoEntity) => tcatnoEntity.tcaturs)
  @JoinColumn([{ name: 'CODTURNO', referencedColumnName: 'codturno' }])
  codturno: TcatnoEntity;

  @ManyToOne(() => TcaserEntity, (tcaserEntity) => tcaserEntity.tcaturs)
  @JoinColumn([
    { name: 'CODSER', referencedColumnName: 'codser' },
    { name: 'CODCUR', referencedColumnName: 'codcur' },
  ])
  tcaser: TcaserEntity;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcaturs)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano: TcaanoEntity;
}
