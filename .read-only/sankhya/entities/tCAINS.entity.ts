import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCAINS', ['codins'], { unique: true })
@Entity('TCAINS', { schema: 'SANKHYA' })
export class TcainsEntity {
  @Column('smallint', { primary: true, name: 'CODINS' })
  codins: number;

  @Column('char', { name: 'NOMEINS', nullable: true, length: 100 })
  nomeins: string | null;

  @Column('char', { name: 'REDENSINO', nullable: true, length: 1 })
  redensino: string | null;

  @Column('char', { name: 'ZONA', nullable: true, length: 1 })
  zona: string | null;
}
