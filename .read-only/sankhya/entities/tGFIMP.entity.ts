import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFIMP', ['codctabcoint'], { unique: true })
@Entity('TGFIMP', { schema: 'SANKHYA' })
export class TgfimpEntity {
  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('datetime', { name: 'DTIMP', nullable: true })
  dtimp: Date | null;

  @Column('float', { name: 'SALDOBCO', nullable: true, precision: 53 })
  saldobco: number | null;
}
