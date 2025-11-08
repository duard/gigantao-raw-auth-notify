import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERMSGCONS', ['nuconsulta'], { unique: true })
@Entity('TSERMSGCONS', { schema: 'SANKHYA' })
export class TsermsgconsEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('varchar', { name: 'CODOPCAO', nullable: true, length: 4 })
  codopcao: string | null;

  @Column('varchar', { name: 'MSG', nullable: true, length: 100 })
  msg: string | null;

  @Column('smallint', { name: 'CODMSG', nullable: true })
  codmsg: number | null;
}
