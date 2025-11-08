import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNOMEREDE', ['nomerede'], { unique: true })
@Entity('TGFNOMEREDE', { schema: 'SANKHYA' })
export class TgfnomeredeEntity {
  @Column('varchar', { primary: true, name: 'NOMEREDE', length: 40 })
  nomerede: string;
}
