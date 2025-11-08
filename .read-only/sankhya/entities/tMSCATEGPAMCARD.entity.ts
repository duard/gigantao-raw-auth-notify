import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCATEGPAMCARD', ['codcateg'], { unique: true })
@Entity('TMSCATEGPAMCARD', { schema: 'SANKHYA' })
export class TmscategpamcardEntity {
  @Column('varchar', { primary: true, name: 'CODCATEG', length: 100 })
  codcateg: string;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;
}
