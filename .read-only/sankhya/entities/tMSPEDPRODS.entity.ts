import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSPEDPRODS', ['nuped', 'codprod'], { unique: true })
@Entity('TMSPEDPRODS', { schema: 'SANKHYA' })
export class TmspedprodsEntity {
  @Column('int', { primary: true, name: 'NUPED' })
  nuped: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;
}
