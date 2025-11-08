import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmdmsgEntity } from './tMDMSG.entity';
import { TmdconEntity } from './tMDCON.entity';

@Index('PK_TMDDMG', ['codcon', 'codmsg'], { unique: true })
@Entity('TMDDMG', { schema: 'SANKHYA' })
export class TmddmgEntity {
  @Column('int', { primary: true, name: 'CODCON' })
  codcon: number;

  @Column('int', { primary: true, name: 'CODMSG' })
  codmsg: number;

  @Column('datetime', { name: 'ULTENVIO' })
  ultenvio: Date;

  @Column('int', { name: 'INTMIN', nullable: true })
  intmin: number | null;

  @ManyToOne(() => TmdmsgEntity, (tmdmsgEntity) => tmdmsgEntity.tmddmgs)
  @JoinColumn([{ name: 'CODMSG', referencedColumnName: 'codmsg' }])
  codmsg2: TmdmsgEntity;

  @ManyToOne(() => TmdconEntity, (tmdconEntity) => tmdconEntity.tmddmgs)
  @JoinColumn([{ name: 'CODCON', referencedColumnName: 'codcon' }])
  codcon2: TmdconEntity;
}
