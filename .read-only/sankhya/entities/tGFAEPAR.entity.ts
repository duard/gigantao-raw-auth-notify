import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFAEPAR', ['codaei', 'codparc'], { unique: true })
@Entity('TGFAEPAR', { schema: 'SANKHYA' })
export class TgfaeparEntity {
  @Column('int', { primary: true, name: 'CODAEI' })
  codaei: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;
}
