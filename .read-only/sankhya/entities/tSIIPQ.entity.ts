import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsipsqEntity } from './tSIPSQ.entity';

@Index('PK_TSIIPQ', ['codinst'], { unique: true })
@Entity('TSIIPQ', { schema: 'SANKHYA' })
export class TsiipqEntity {
  @Column('bigint', { primary: true, name: 'CODINST' })
  codinst: string;

  @Column('varchar', { name: 'INSTANCIA', nullable: true, length: 32 })
  instancia: string | null;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 32 })
  tabela: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('bigint', { name: 'QTDLINHASPROC', nullable: true })
  qtdlinhasproc: string | null;

  @Column('datetime', { name: 'DTINIULTSINC', nullable: true })
  dtiniultsinc: Date | null;

  @Column('text', { name: 'STACKTRACE', nullable: true })
  stacktrace: string | null;

  @ManyToOne(() => TsipsqEntity, (tsipsqEntity) => tsipsqEntity.tsiipqs)
  @JoinColumn([{ name: 'CODCFG', referencedColumnName: 'codcfg' }])
  codcfg: TsipsqEntity;
}
