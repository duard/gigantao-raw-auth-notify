import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TaiapurrefEntity } from './tAIAPURREF.entity';

@Index('PK_TAIAPURREFCOMP', ['protocolo', 'codemp'], { unique: true })
@Entity('TAIAPURREFCOMP', { schema: 'SANKHYA' })
export class TaiapurrefcompEntity {
  @Column('varchar', { primary: true, name: 'PROTOCOLO', length: 44 })
  protocolo: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('text', { name: 'JSONRETORNO', nullable: true })
  jsonretorno: string | null;

  @OneToOne(
    () => TaiapurrefEntity,
    (taiapurrefEntity) => taiapurrefEntity.taiapurrefcomp,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'PROTOCOLO', referencedColumnName: 'protocolo' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  taiapurref: TaiapurrefEntity;
}
