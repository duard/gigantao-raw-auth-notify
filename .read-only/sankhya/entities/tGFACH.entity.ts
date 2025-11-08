import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFACH', ['codhist'], { unique: true })
@Entity('TGFACH', { schema: 'SANKHYA' })
export class TgfachEntity {
  @Column('int', { primary: true, name: 'CODHIST' })
  codhist: number;

  @Column('char', { name: 'DESCRHIST', length: 80 })
  descrhist: string;
}
