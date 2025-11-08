import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIOEM', ['appid', 'sequencia'], { unique: true })
@Entity('TSIOEM', { schema: 'SANKHYA' })
export class TsioemEntity {
  @Column('varchar', { primary: true, name: 'APPID', length: 100 })
  appid: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'URLDOWNLOAD', nullable: true, length: 255 })
  urldownload: string | null;

  @Column('datetime', { name: 'DHEXEC', nullable: true })
  dhexec: Date | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;
}
