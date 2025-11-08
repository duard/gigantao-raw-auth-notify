import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcscgrEntity } from './tCSCGR.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcscseEntity } from './tCSCSE.entity';

@Index('PK_TCSCPA', ['numcontrato', 'sequencia'], { unique: true })
@Entity('TCSCPA', { schema: 'SANKHYA' })
export class TcscpaEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTPREVINST' })
  dtprevinst: Date;

  @Column('datetime', { name: 'DTINST', nullable: true })
  dtinst: Date | null;

  @Column('char', { name: 'OBS1', nullable: true, length: 60 })
  obs1: string | null;

  @Column('char', { name: 'OBS2', nullable: true, length: 60 })
  obs2: string | null;

  @Column('char', { name: 'OBS3', nullable: true, length: 60 })
  obs3: string | null;

  @Column('char', { name: 'OBS4', nullable: true, length: 60 })
  obs4: string | null;

  @Column('char', { name: 'CONTATO', nullable: true, length: 30 })
  contato: string | null;

  @Column('char', { name: 'TELEFONE', nullable: true, length: 15 })
  telefone: string | null;

  @ManyToOne(() => TcscgrEntity, (tcscgrEntity) => tcscgrEntity.tcscpas)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'GRUPO', referencedColumnName: 'grupo' },
  ])
  tcscgr: TcscgrEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcscpas)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcscpas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TcscseEntity, (tcscseEntity) => tcscseEntity.tcscpa)
  tcscses: TcscseEntity[];
}
