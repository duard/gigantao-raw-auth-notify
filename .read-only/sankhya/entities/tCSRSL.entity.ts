import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcscslEntity } from './tCSCSL.entity';
import { TcsrsiEntity } from './tCSRSI.entity';
import { TfpcghEntity } from './tFPCGH.entity';
import { TcsslaEntity } from './tCSSLA.entity';
import { TcsslnEntity } from './tCSSLN.entity';

@Index('PK_TCSRSL', ['nusla', 'numreg'], { unique: true })
@Entity('TCSRSL', { schema: 'SANKHYA' })
export class TcsrslEntity {
  @Column('int', { primary: true, name: 'NUSLA' })
  nusla: number;

  @Column('smallint', { primary: true, name: 'NUMREG' })
  numreg: number;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('char', { name: 'BASECALCTEMPO', length: 1 })
  basecalctempo: string;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODSERV', nullable: true })
  codserv: number | null;

  @Column('int', { name: 'CODGRUPOPROD', nullable: true })
  codgrupoprod: number | null;

  @Column('int', { name: 'CODOCOROS', nullable: true })
  codocoros: number | null;

  @Column('char', { name: 'PADRAO', length: 1 })
  padrao: string;

  @Column('char', { name: 'TIPOTEMPO', length: 1 })
  tipotempo: string;

  @Column('smallint', { name: 'VALORTEMPO', nullable: true })
  valortempo: number | null;

  @Column('char', { name: 'USAREGRAPADRAO', nullable: true, length: 2 })
  usaregrapadrao: string | null;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('smallint', { name: 'TEMPOTOTAL', nullable: true })
  tempototal: number | null;

  @OneToMany(() => TcscslEntity, (tcscslEntity) => tcscslEntity.tcsrsl)
  tcscsls: TcscslEntity[];

  @OneToMany(() => TcsrsiEntity, (tcsrsiEntity) => tcsrsiEntity.tcsrsl)
  tcsrsis: TcsrsiEntity[];

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tcsrsls)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;

  @ManyToOne(() => TcsslaEntity, (tcsslaEntity) => tcsslaEntity.tcsrsls)
  @JoinColumn([{ name: 'NUSLA', referencedColumnName: 'nusla' }])
  nusla2: TcsslaEntity;

  @OneToMany(() => TcsslnEntity, (tcsslnEntity) => tcsslnEntity.tcsrsl)
  tcsslns: TcsslnEntity[];
}
