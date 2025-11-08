import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMDEMSGS', ['codemp', 'sequencia', 'dhresp'], { unique: true })
@Entity('TGFMDEMSGS', { schema: 'SANKHYA' })
export class TgfmdemsgsEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CHAVEACESSO', nullable: true, length: 44 })
  chaveacesso: string | null;

  @Column('smallint', { name: 'STATUSRESP', nullable: true })
  statusresp: number | null;

  @Column('varchar', { name: 'MOTIVORESP', nullable: true, length: 3103 })
  motivoresp: string | null;

  @Column('datetime', {
    primary: true,
    name: 'DHRESP',
    default: () => 'getdate()',
  })
  dhresp: Date;
}
