import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprwcpEntity } from './tPRWCP.entity';
import { TpriprocEntity } from './tPRIPROC.entity';

@Index('PK_TPRWXIP', ['idiproc', 'idawc', 'codwcp', 'idefx'], { unique: true })
@Entity('TPRWXIP', { schema: 'SANKHYA' })
export class TprwxipEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'IDAWC' })
  idawc: number;

  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('int', { primary: true, name: 'IDEFX', default: () => '(0)' })
  idefx: number;

  @Column('int', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprwxips)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp2: TprwcpEntity;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tprwxips)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;
}
