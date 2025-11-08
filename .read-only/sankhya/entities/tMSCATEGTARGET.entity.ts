import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCATEGTARGET', ['codcateg'], { unique: true })
@Entity('TMSCATEGTARGET', { schema: 'SANKHYA' })
export class TmscategtargetEntity {
  @Column('varchar', { primary: true, name: 'CODCATEG', length: 100 })
  codcateg: string;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;
}
