import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFGPR', ['codprn', 'sequencia'], { unique: true })
@Entity('TWFGPR', { schema: 'SANKHYA' })
export class TwfgprEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODGESTOR' })
  codgestor: number;
}
