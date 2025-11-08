import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TpratvEntity } from './tPRATV.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprcwcEntity } from './tPRCWC.entity';

@Index('PK_TPRPIPROC', ['idiproc', 'idefx'], { unique: true })
@Entity('TPRPIPROC', { schema: 'SANKHYA' })
export class TprpiprocEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { name: 'IDAWC', nullable: true })
  idawc: number | null;

  @Column('datetime', { name: 'DHINIPREV', nullable: true })
  dhiniprev: Date | null;

  @Column('datetime', { name: 'DHFINPREV', nullable: true })
  dhfinprev: Date | null;

  @Column('text', { name: 'JSONPROG', nullable: true })
  jsonprog: string | null;

  @ManyToOne(
    () => TpriprocEntity,
    (tpriprocEntity) => tpriprocEntity.tprpiprocs,
  )
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;

  @ManyToOne(() => TpratvEntity, (tpratvEntity) => tpratvEntity.tprpiprocs)
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TpratvEntity;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprpiprocs)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp: TprwcpEntity;

  @ManyToOne(() => TprcwcEntity, (tprcwcEntity) => tprcwcEntity.tprpiprocs)
  @JoinColumn([{ name: 'CODCWC', referencedColumnName: 'codcwc' }])
  codcwc: TprcwcEntity;
}
