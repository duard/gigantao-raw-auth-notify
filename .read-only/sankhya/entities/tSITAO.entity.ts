import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSITAO', ['codtao'], { unique: true })
@Entity('TSITAO', { schema: 'SANKHYA' })
export class TsitaoEntity {
  @Column('int', { primary: true, name: 'CODTAO' })
  codtao: number;

  @Column('text', { name: 'ACCESSTOKEN', nullable: true })
  accesstoken: string | null;

  @Column('text', { name: 'REFRESHTOKEN', nullable: true })
  refreshtoken: string | null;
}
