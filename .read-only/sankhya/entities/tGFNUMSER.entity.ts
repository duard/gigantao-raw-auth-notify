import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNUMSER', ['ano'], { unique: true })
@Entity('TGFNUMSER', { schema: 'SANKHYA' })
export class TgfnumserEntity {
  @Column('smallint', { primary: true, name: 'ANO' })
  ano: number;

  @Column('int', { name: 'ULTCOD', nullable: true })
  ultcod: number | null;
}
