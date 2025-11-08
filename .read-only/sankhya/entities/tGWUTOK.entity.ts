import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWUTOK', ['codusu'], { unique: true })
@Entity('TGWUTOK', { schema: 'SANKHYA' })
export class TgwutokEntity {
  @Column('varchar', { name: 'TOKEN', length: 100 })
  token: string;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;
}
