import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprawcEntity } from './tPRAWC.entity';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprilopEntity } from './tPRILOP.entity';

@Index('PK_TPRWLOP', ['nulop', 'seqop', 'idawc', 'idproc'], { unique: true })
@Entity('TPRWLOP', { schema: 'SANKHYA' })
export class TprwlopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('smallint', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('smallint', { primary: true, name: 'IDAWC' })
  idawc: number;

  @ManyToOne(() => TprawcEntity, (tprawcEntity) => tprawcEntity.tprwlops)
  @JoinColumn([
    { name: 'IDPROC', referencedColumnName: 'idproc' },
    { name: 'IDAWC', referencedColumnName: 'idawc' },
  ])
  tprawc: TprawcEntity;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprwlops)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp: TprwcpEntity;

  @ManyToOne(() => TprilopEntity, (tprilopEntity) => tprilopEntity.tprwlops)
  @JoinColumn([
    { name: 'NULOP', referencedColumnName: 'nulop' },
    { name: 'SEQOP', referencedColumnName: 'seqop' },
  ])
  tprilop: TprilopEntity;
}
