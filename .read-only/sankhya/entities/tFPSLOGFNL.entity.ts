import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPSLOGFNL', ['codemp', 'dtref', 'sequencia'], { unique: true })
@Entity('TFPSLOGFNL', { schema: 'SANKHYA' })
export class TfpslogfnlEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'SEQUENCIA', length: 1 })
  sequencia: string;

  @Column('text', { name: 'EVENTOS' })
  eventos: string;

  @Column('varchar', { name: 'RECIBO', nullable: true, length: 100 })
  recibo: string | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpslogfnls)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
