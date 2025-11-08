import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnarmEntity } from './tGFNARM.entity';

@Index('PK_TGFTGFIARM', ['nuapuracao', 'nunota', 'sequencia'], { unique: true })
@Entity('TGFIARM', { schema: 'SANKHYA' })
export class TgfiarmEntity {
  @Column('int', { primary: true, name: 'NUAPURACAO' })
  nuapuracao: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'USOPROD', nullable: true, length: 1 })
  usoprod: string | null;

  @Column('char', { name: 'TIPOSN', length: 1, default: () => '(0)' })
  tiposn: string;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'VLRTOTRECINT', nullable: true, precision: 53 })
  vlrtotrecint: number | null;

  @Column('float', { name: 'VLRTOTRECEXT', nullable: true, precision: 53 })
  vlrtotrecext: number | null;

  @ManyToOne(() => TgfnarmEntity, (tgfnarmEntity) => tgfnarmEntity.tgfiarms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUAPURACAO', referencedColumnName: 'nuapuracao' },
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
  ])
  tgfnarm: TgfnarmEntity;
}
