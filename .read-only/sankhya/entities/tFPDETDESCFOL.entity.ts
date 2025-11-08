import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpinfodescfolEntity } from './tFPINFODESCFOL.entity';

@Index('PK_TFPDETDESCFOL', ['nrounico', 'dtref'], { unique: true })
@Entity('TFPDETDESCFOL', { schema: 'SANKHYA' })
export class TfpdetdescfolEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { name: 'DTINICONTRATO', nullable: true })
  dtinicontrato: Date | null;

  @Column('datetime', { name: 'DTFIMCONTRATO', nullable: true })
  dtfimcontrato: Date | null;

  @Column('varchar', { name: 'COMPINIDESC', nullable: true, length: 10 })
  compinidesc: string | null;

  @Column('varchar', { name: 'COMPFIMDESC', nullable: true, length: 10 })
  compfimdesc: string | null;

  @Column('smallint', { name: 'TOTALPARCELAS', nullable: true })
  totalparcelas: number | null;

  @Column('float', { name: 'VALORPARCELA', nullable: true, precision: 53 })
  valorparcela: number | null;

  @Column('float', { name: 'VALOREMPRESTIMO', nullable: true, precision: 53 })
  valoremprestimo: number | null;

  @Column('float', { name: 'VALORLIBERADO', nullable: true, precision: 53 })
  valorliberado: number | null;

  @Column('smallint', { name: 'QTDPAGAMENTOS', nullable: true })
  qtdpagamentos: number | null;

  @Column('smallint', { name: 'QTDESCRITURACOES', nullable: true })
  qtdescrituracoes: number | null;

  @ManyToOne(
    () => TfpinfodescfolEntity,
    (tfpinfodescfolEntity) => tfpinfodescfolEntity.tfpdetdescfols,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'NROUNICO', referencedColumnName: 'nrounico' }])
  nrounico2: TfpinfodescfolEntity;
}
