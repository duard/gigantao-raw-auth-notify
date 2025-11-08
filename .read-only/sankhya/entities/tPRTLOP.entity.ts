import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprilopEntity } from './tPRILOP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TPRTLOP', ['nulop', 'seqop', 'idefx'], { unique: true })
@Entity('TPRTLOP', { schema: 'SANKHYA' })
export class TprtlopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('smallint', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('int', { primary: true, name: 'IDEFX', default: () => '(0)' })
  idefx: number;

  @ManyToOne(() => TprilopEntity, (tprilopEntity) => tprilopEntity.tprtlops)
  @JoinColumn([
    { name: 'NULOP', referencedColumnName: 'nulop' },
    { name: 'SEQOP', referencedColumnName: 'seqop' },
  ])
  tprilop: TprilopEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tprtlops)
  @JoinColumn([{ name: 'CODPARCTERC', referencedColumnName: 'codparc' }])
  codparcterc: TgfparEntity;
}
