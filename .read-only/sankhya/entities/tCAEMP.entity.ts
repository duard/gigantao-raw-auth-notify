import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TcadurEntity } from './tCADUR.entity';

@Index('PK_TCAEMP', ['codemp'], { unique: true })
@Entity('TCAEMP', { schema: 'SANKHYA' })
export class TcaempEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'NOMEDIRET', nullable: true, length: 50 })
  nomediret: string | null;

  @Column('char', { name: 'REGDIRET', nullable: true, length: 20 })
  regdiret: string | null;

  @Column('char', { name: 'NOMESECRET', nullable: true, length: 50 })
  nomesecret: string | null;

  @Column('char', { name: 'REGSECRET', nullable: true, length: 20 })
  regsecret: string | null;

  @Column('char', { name: 'AUTFUNC', nullable: true, length: 100 })
  autfunc: string | null;

  @Column('char', { name: 'FUNDLEGAL', nullable: true, length: 40 })
  fundlegal: string | null;

  @Column('char', { name: 'DELEGENS', nullable: true, length: 50 })
  delegens: string | null;

  @Column('char', { name: 'REDENSINO', nullable: true, length: 1 })
  redensino: string | null;

  @OneToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcaemp)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TcadurEntity, (tcadurEntity) => tcadurEntity.tcaemps)
  @JoinColumn([{ name: 'CODDURA', referencedColumnName: 'coddura' }])
  coddura: TcadurEntity;
}
