import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFLACR', ['nunota', 'numlacre'], { unique: true })
@Entity('TGFLACR', { schema: 'SANKHYA' })
export class TgflacrEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { primary: true, name: 'NUMLACRE', length: 20 })
  numlacre: string;
}
