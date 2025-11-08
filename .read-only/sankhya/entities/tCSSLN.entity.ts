import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcssdnEntity } from './tCSSDN.entity';
import { TcsrslEntity } from './tCSRSL.entity';
import { TcssniEntity } from './tCSSNI.entity';

@Index('PK_TCSSLN', ['nusla', 'numreg', 'seqnotifica'], { unique: true })
@Entity('TCSSLN', { schema: 'SANKHYA' })
export class TcsslnEntity {
  @Column('int', { primary: true, name: 'NUSLA' })
  nusla: number;

  @Column('smallint', { primary: true, name: 'NUMREG' })
  numreg: number;

  @Column('smallint', { primary: true, name: 'SEQNOTIFICA' })
  seqnotifica: number;

  @Column('char', { name: 'TIPOALERTA', length: 1 })
  tipoalerta: string;

  @Column('char', { name: 'DECORESTA', length: 1 })
  decoresta: string;

  @Column('char', { name: 'TIPOTEMPO', length: 1 })
  tipotempo: string;

  @Column('smallint', { name: 'VALORTEMPO' })
  valortempo: number;

  @Column('smallint', { name: 'RECORRENCIA', nullable: true })
  recorrencia: number | null;

  @Column('char', { name: 'ARQSOM', nullable: true, length: 250 })
  arqsom: string | null;

  @OneToMany(() => TcssdnEntity, (tcssdnEntity) => tcssdnEntity.tcssln)
  tcssdns: TcssdnEntity[];

  @ManyToOne(() => TcsrslEntity, (tcsrslEntity) => tcsrslEntity.tcsslns)
  @JoinColumn([
    { name: 'NUSLA', referencedColumnName: 'nusla' },
    { name: 'NUMREG', referencedColumnName: 'numreg' },
  ])
  tcsrsl: TcsrslEntity;

  @OneToMany(() => TcssniEntity, (tcssniEntity) => tcssniEntity.tcssln)
  tcssnis: TcssniEntity[];
}
