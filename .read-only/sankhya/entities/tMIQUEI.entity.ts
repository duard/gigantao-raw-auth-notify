import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMIQUEI', ['numetbase', 'codquebra'], { unique: true })
@Entity('TMIQUEI', { schema: 'SANKHYA' })
export class TmiqueiEntity {
  @Column('int', { primary: true, name: 'NUMETBASE' })
  numetbase: number;

  @Column('int', { primary: true, name: 'CODQUEBRA' })
  codquebra: number;

  @Column('int', { name: 'CODUNG', nullable: true })
  codung: number | null;
}
