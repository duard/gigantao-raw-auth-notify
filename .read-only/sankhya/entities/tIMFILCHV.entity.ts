import { Column, Entity, Index } from 'typeorm';

@Index('PK_FILIMOVEL_FILFAC', ['filimovel', 'filfac'], { unique: true })
@Entity('TIMFILCHV', { schema: 'SANKHYA' })
export class TimfilchvEntity {
  @Column('int', { name: 'FILSEQ', nullable: true })
  filseq: number | null;

  @Column('int', { primary: true, name: 'FILIMOVEL' })
  filimovel: number;

  @Column('int', { primary: true, name: 'FILFAC' })
  filfac: number;

  @Column('datetime', { name: 'FILDHENT', nullable: true })
  fildhent: Date | null;

  @Column('datetime', { name: 'FILDHEXPIRACAO', nullable: true })
  fildhexpiracao: Date | null;
}
