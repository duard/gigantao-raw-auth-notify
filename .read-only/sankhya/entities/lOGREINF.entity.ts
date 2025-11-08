import { Column, Entity, Index } from 'typeorm';

@Index('PK_LOGREING', ['dtocor', 'codusu'], { unique: true })
@Entity('LOGREINF', { schema: 'SANKHYA' })
export class LogreinfEntity {
  @Column('datetime', { primary: true, name: 'DTOCOR' })
  dtocor: Date;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'SQLERR', nullable: true })
  sqlerr: string | null;
}
