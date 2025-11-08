import { Column, Entity, Index, OneToOne } from 'typeorm';
import { TaiapurrefatualEntity } from './tAIAPURREFATUAL.entity';
import { TaiapurrefcdEntity } from './tAIAPURREFCD.entity';
import { TaiapurrefcompEntity } from './tAIAPURREFCOMP.entity';

@Index('PK_TAIAPURREF', ['protocolo', 'codemp'], { unique: true })
@Entity('TAIAPURREF', { schema: 'SANKHYA' })
export class TaiapurrefEntity {
  @Column('varchar', { primary: true, name: 'PROTOCOLO', length: 44 })
  protocolo: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'CGC', nullable: true, length: 14 })
  cgc: string | null;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('varchar', { name: 'STATUSPROTOCOLO', nullable: true, length: 25 })
  statusprotocolo: string | null;

  @OneToOne(
    () => TaiapurrefatualEntity,
    (taiapurrefatualEntity) => taiapurrefatualEntity.taiapurref,
  )
  taiapurrefatual: TaiapurrefatualEntity;

  @OneToOne(
    () => TaiapurrefcdEntity,
    (taiapurrefcdEntity) => taiapurrefcdEntity.taiapurref,
  )
  taiapurrefcd: TaiapurrefcdEntity;

  @OneToOne(
    () => TaiapurrefcompEntity,
    (taiapurrefcompEntity) => taiapurrefcompEntity.taiapurref,
  )
  taiapurrefcomp: TaiapurrefcompEntity;
}
