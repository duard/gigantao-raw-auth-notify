import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgamtpEntity } from './tGAMTP.entity';

@Index('PK_TGAPAR', ['nuparada'], { unique: true })
@Entity('TGAPAR', { schema: 'SANKHYA' })
export class TgaparEntity {
  @Column('int', { primary: true, name: 'NUPARADA' })
  nuparada: number;

  @Column('int', { name: 'NUMDOC' })
  numdoc: number;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('int', { name: 'HRINICIO' })
  hrinicio: number;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('int', { name: 'HRFIM', nullable: true })
  hrfim: number | null;

  @Column('int', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @ManyToOne(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgapars)
  @JoinColumn([{ name: 'NUEQUIP', referencedColumnName: 'numeq' }])
  nuequip: TgfmeqEntity;

  @ManyToOne(() => TgamtpEntity, (tgamtpEntity) => tgamtpEntity.tgapars)
  @JoinColumn([{ name: 'CODMOT', referencedColumnName: 'codmot' }])
  codmot: TgamtpEntity;
}
