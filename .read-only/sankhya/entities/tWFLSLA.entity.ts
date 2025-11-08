import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFLSLA', ['nuinstprn', 'codregrasla', 'dhevento'], { unique: true })
@Entity('TWFLSLA', { schema: 'SANKHYA' })
export class TwflslaEntity {
  @Column('int', { primary: true, name: 'NUINSTPRN' })
  nuinstprn: number;

  @Column('int', { primary: true, name: 'CODREGRASLA' })
  codregrasla: number;

  @Column('varchar', { name: 'EVENTO', length: 1 })
  evento: string;

  @Column('datetime', { primary: true, name: 'DHEVENTO' })
  dhevento: Date;
}
