import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TPRTXAT', ['idiproc', 'idefx'], { unique: true })
@Entity('TPRTXAT', { schema: 'SANKHYA' })
export class TprtxatEntity {
  @Column('int', { primary: true, name: 'IDIPROC' })
  idiproc: number;

  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tprtxats)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc2: TpriprocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tprtxats)
  @JoinColumn([{ name: 'CODPARCTERC', referencedColumnName: 'codparc' }])
  codparcterc: TgfparEntity;
}
