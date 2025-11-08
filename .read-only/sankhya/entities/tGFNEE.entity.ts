import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNEE', ['codnee'], { unique: true })
@Entity('TGFNEE', { schema: 'SANKHYA' })
export class TgfneeEntity {
  @Column('int', { primary: true, name: 'CODNEE' })
  codnee: number;

  @Column('char', { name: 'DESCRNEE', nullable: true, length: 250 })
  descrnee: string | null;

  @Column('char', { name: 'TIPONEE', nullable: true, length: 1 })
  tiponee: string | null;
}
