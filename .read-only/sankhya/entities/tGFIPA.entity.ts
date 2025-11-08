import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfipcEntity } from './tGFIPC.entity';

@Index('PK_TGFIPA', ['nupca', 'codprod', 'seqperiodo'], { unique: true })
@Entity('TGFIPA', { schema: 'SANKHYA' })
export class TgfipaEntity {
  @Column('int', { primary: true, name: 'NUPCA' })
  nupca: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'SEQPERIODO' })
  seqperiodo: number;

  @Column('float', { name: 'QTDVENDIDO', precision: 53, default: () => '(0)' })
  qtdvendido: number;

  @Column('smallint', { name: 'DIASPERIODO' })
  diasperiodo: number;

  @Column('datetime', { name: 'DTINCIAL', nullable: true })
  dtincial: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @ManyToOne(() => TgfipcEntity, (tgfipcEntity) => tgfipcEntity.tgfipas)
  @JoinColumn([
    { name: 'NUPCA', referencedColumnName: 'nupca' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tgfipc: TgfipcEntity;
}
