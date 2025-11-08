import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFSBC_INC', ['codctabcoint', 'referencia'], { unique: true })
@Entity('TGFSBC_INC', { schema: 'SANKHYA' })
export class TgfsbcIncEntity {
  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'SALDOREAL', nullable: true, precision: 53 })
  saldoreal: number | null;

  @Column('float', { name: 'SALDOBCO', nullable: true, precision: 53 })
  saldobco: number | null;
}
