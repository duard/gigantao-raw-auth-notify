import { Column, Entity, Index } from 'typeorm';

@Index('TSIPAH_PK', ['id'], { unique: true })
@Entity('TSIPAH', { schema: 'SANKHYA' })
export class TsipahEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'CHAVE', length: 50 })
  chave: string;

  @Column('varchar', { name: 'OLDVALUE', length: 1 })
  oldvalue: string;

  @Column('varchar', { name: 'NEWVALUE', length: 1 })
  newvalue: string;

  @Column('datetime', { name: 'DATA', nullable: true })
  data: Date | null;
}
