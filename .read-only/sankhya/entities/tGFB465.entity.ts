import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfb460Entity } from './tGFB460.entity';

@Index('PK_TGFB465', ['codemp', 'dtinicio', 'sequencia', 'seq465'], {
  unique: true,
})
@Entity('TGFB465', { schema: 'SANKHYA' })
export class Tgfb465Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'SEQ465' })
  seq465: number;

  @Column('int', { name: 'IND_COMP' })
  indComp: number;

  @Column('float', { name: 'VLRCRED', precision: 53 })
  vlrcred: number;

  @Column('float', { name: 'VLRCOMP', precision: 53 })
  vlrcomp: number;

  @Column('float', { name: 'VLRRESULT', precision: 53 })
  vlrresult: number;

  @Column('datetime', { name: 'DTPERIODOFISCAL' })
  dtperiodofiscal: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @ManyToOne(() => Tgfb460Entity, (tgfb460Entity) => tgfb460Entity.tgfbs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIO', referencedColumnName: 'dtinicio' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfb: Tgfb460Entity;
}
