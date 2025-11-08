import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TmdmsgEntity } from './tMDMSG.entity';

@Index('PK_TMDMSR', ['codmsg'], { unique: true })
@Entity('TMDMSR', { schema: 'SANKHYA' })
export class TmdmsrEntity {
  @Column('int', { primary: true, name: 'CODMSG' })
  codmsg: number;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @Column('smallint', { name: 'NOVA', default: () => '(1)' })
  nova: number;

  @OneToOne(() => TmdmsgEntity, (tmdmsgEntity) => tmdmsgEntity.tmdmsr)
  @JoinColumn([{ name: 'CODMSG', referencedColumnName: 'codmsg' }])
  codmsg2: TmdmsgEntity;
}
