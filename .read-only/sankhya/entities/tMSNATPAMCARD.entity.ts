import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSNATPAMCARD', ['codnatpamcard'], { unique: true })
@Entity('TMSNATPAMCARD', { schema: 'SANKHYA' })
export class TmsnatpamcardEntity {
  @Column('int', { primary: true, name: 'CODNATPAMCARD' })
  codnatpamcard: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;
}
