import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSIAFE', ['codcid', 'codsiafe'], { unique: true })
@Entity('TGFSIAFE', { schema: 'SANKHYA' })
export class TgfsiafeEntity {
  @Column('int', { primary: true, name: 'CODCID' })
  codcid: number;

  @Column('varchar', { primary: true, name: 'CODSIAFE', length: 10 })
  codsiafe: string;
}
